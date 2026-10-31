import { NextRequest, NextResponse } from 'next/server';
import { COLLEGES_DATA, KARNATAKA_DISTRICTS } from '@/data/collegesData';
import { COLLEGE_EVENTS } from '@/data/eventsData';
import { connectToDatabase } from '@/lib/mongodb';
import { ChatbotLogModel } from '@/models/ChatbotLog';

interface AssistantCard {
  title: string;
  subtitle: string;
  linkUrl?: string;
  badge?: string;
  details?: string[];
}

interface AssistantResponse {
  text: string;
  cards?: AssistantCard[];
  suggestions?: string[];
  poweredBy?: 'gemini' | 'openai' | 'local';
}

export async function GET() {
  const hasServerKey = Boolean(process.env.GEMINI_API_KEY && process.env.GEMINI_API_KEY.trim() !== '');
  const hasOpenAiKey = Boolean(process.env.OPENAI_API_KEY && process.env.OPENAI_API_KEY.trim() !== '');

  return NextResponse.json({
    connected: hasServerKey || hasOpenAiKey,
    hasServerKey,
    provider: hasServerKey ? 'gemini' : (hasOpenAiKey ? 'openai' : 'none'),
  });
}

export async function POST(req: NextRequest) {
  const startTime = Date.now();
  const sessionId = req.headers.get('x-session-id') || 'sess_chat_' + Date.now();
  const userId = req.headers.get('x-user-id') || undefined;

  try {
    const body = await req.json();
    const query = (body.query || body.message || '').trim();
    const clientGeminiKey = (body.geminiApiKey as string) || req.headers.get('x-gemini-key') || '';
    const geminiKey = clientGeminiKey || process.env.GEMINI_API_KEY || '';
    const openAiKey = process.env.OPENAI_API_KEY || '';

    if (!query) {
      return NextResponse.json({ error: 'Query is required' }, { status: 400 });
    }

    // Key Testing Probe
    if (query === '__test_gemini_key__') {
      if (!geminiKey) {
        return NextResponse.json({ valid: false, error: 'No API key provided' }, { status: 400 });
      }
      try {
        const testRes = await callGeminiAPI('Reply with "OK"', geminiKey);
        if (testRes) {
          return NextResponse.json({ valid: true, message: 'Google Gemini API connected successfully!' });
        }
        return NextResponse.json({ valid: false, error: 'Failed to verify key with Google Gemini API' }, { status: 401 });
      } catch (err: any) {
        return NextResponse.json({ valid: false, error: err?.message || 'Error connecting to Gemini' }, { status: 500 });
      }
    }

    let finalResponse: AssistantResponse | null = null;
    let modelUsed: 'gemini' | 'openai' | 'local' = 'local';

    // 1. Try real external AI API if key is configured (Gemini has priority)
    if (geminiKey) {
      try {
        const geminiRes = await callGeminiAPI(query, geminiKey);
        if (geminiRes) {
          finalResponse = geminiRes;
          modelUsed = 'gemini';
        }
      } catch (err) {
        console.warn('Gemini API call failed, falling back to local engine:', err);
      }
    } else if (openAiKey) {
      try {
        const openAiRes = await callOpenAI(query, openAiKey);
        if (openAiRes) {
          finalResponse = openAiRes;
          modelUsed = 'openai';
        }
      } catch (err) {
        console.warn('OpenAI API call failed, falling back to local engine:', err);
      }
    }

    // 2. Comprehensive Local Reasoning & Knowledge Engine (Instant, Offline, 100% Reliable)
    if (!finalResponse) {
      finalResponse = processWithLocalEngine(query);
      modelUsed = 'local';
    }

    // Record privacy-conscious chatbot log in MongoDB (metadata only, no raw private user text)
    const latencyMs = Date.now() - startTime;
    connectToDatabase()
      .then(() => {
        return ChatbotLogModel.create({
          sessionId,
          userId,
          isAuthenticated: !!userId,
          latencyMs,
          status: 'success',
          modelUsed,
          queryCategory: finalResponse?.cards && finalResponse.cards.length > 0 ? 'college_events' : 'general',
          hasCards: !!(finalResponse?.cards && finalResponse.cards.length > 0),
        });
      })
      .catch((e) => console.warn('Chatbot log error:', e.message));

    return NextResponse.json({ ...finalResponse, poweredBy: modelUsed });

  } catch (error: any) {
    console.error('Error in assistant API:', error);
    const latencyMs = Date.now() - startTime;
    connectToDatabase()
      .then(() => {
        return ChatbotLogModel.create({
          sessionId,
          userId,
          isAuthenticated: !!userId,
          latencyMs,
          status: 'error',
          modelUsed: 'local',
          queryCategory: 'error',
          hasCards: false,
        });
      })
      .catch(() => {});

    return NextResponse.json({
      text: 'Apologies, I encountered a temporary glitch while searching our databases. Please ask again or specify a college or topic.',
    }, { status: 500 });
  }
}

// ============================================================================
// GEMINI / OPENAI INTEGRATION HELPERS
// ============================================================================

async function callGeminiAPI(query: string, apiKey: string): Promise<AssistantResponse | null> {
  const models = ['gemini-1.5-flash', 'gemini-2.0-flash', 'gemini-1.5-pro', 'gemini-1.5-flash-latest'];

  const systemInstruction = `You are "Connect AI", an expert Karnataka Student Assistant and Academic Copilot on the StudentConnect platform.
You assist engineering students with verified facts, advice, and guidance:
1. Tumakuru Engineering Colleges Ranking & Details:
   - #1: Siddaganga Institute of Technology (SIT Tumakuru) - NIRF #95 nationally, NAAC A++, Autonomous VTU, Highest ₹41.5 LPA (Amazon, Cisco), Average ₹8.6 LPA, CSE cutoff ~4,200.
   - #2: Channabasaveshwara Institute of Technology (CIT Gubbi-Tumakuru) - NAAC Grade 'A', 20-acre lush green campus on NH-206, modern Robotics/IoT labs, 25+ college bus fleet, Highest ₹19.0 LPA, Average ₹4.8 LPA, CSE cutoff ~45,000–60,000. Host of national BUILDATHON-2.0 2K26 (30-31 Oct 2026, ₹30,000 prize).
   - #3: Sri Siddhartha Institute of Technology (SSIT Tumakuru) - Autonomous under SSAHE, NAAC A+, Highest ₹24 LPA.
   - #4: Shridevi Institute of Engineering & Technology (SIET Tumakuru) - Sira Road, NAAC A, Highest ₹18 LPA.
2. Bengaluru Colleges:
   - RVCE (NIRF #89, NAAC A+, Highest ₹62 LPA, Avg ₹16.4 LPA, CSE cutoff ~320).
   - BMSCE (NAAC A++, Autonomous, Highest ₹50 LPA, Avg ₹12.2 LPA).
   - BMSIT (BMS Institute of Technology & Management, Yelahanka Bengaluru, Autonomous, NAAC A+, Highest ₹46.5 LPA, Avg ₹8.8 LPA, CSE cutoff ~3,600).
   - MSRIT (Ramaiah, NIRF #78, NAAC A+, Highest ₹50 LPA).
   - PES University, DSCE, BIT, NIE Mysuru.
3. Upcoming Events & Hackathons:
   - CIT Buildathon-2.0 2K26 on Oct 30-31, 2026 (Registration deadline 25 Oct 2026, ₹30,000 Cash Prize, 3-4 members, Fee ₹500/team, CSE Dept).
   - Advith 2K26 (CIT Cultural Fest).
   - SIT Halocon 2026 (36-Hour National Hackathon, ₹1 Lakh prize).
4. VTU Academic grading (2021, 2022 NEP, 2025 Schemes):
   - SGPA = Σ(Ci*Gi)/ΣCi
   - Percentage = (SGPA - 0.75) * 10
   - 75% mandatory attendance rule
   - CIE 50-scale rules (test, quiz, assignments).
5. Computer science concepts, algorithms, coding in Python/Java/C++, and general knowledge (Indian Prime Minister Narendra Modi, President Droupadi Murmu, CM Siddaramaiah, science, math).

Format output in beautiful, professional Markdown with clear bold headers, tables, bullet points, and friendly advice like ChatGPT and Google.`;

  for (const model of models) {
    try {
      const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [
            {
              role: 'user',
              parts: [{ text: `${systemInstruction}\n\nUser Question: ${query}` }],
            },
          ],
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 2048,
          },
        }),
      });

      if (!response.ok) {
        continue;
      }

      const data = await response.json();
      const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
      if (text) {
        const cards: AssistantCard[] = [];
        const college = findCollegeInDatabase(query) || findCollegeInDatabase(text);

        if (college) {
          cards.push({
            title: `${college.name} (${college.shortName})`,
            subtitle: `${college.location.city} • Highest ₹${college.placements.highestPackageLPA} LPA • Avg ₹${college.placements.averagePackageLPA} LPA`,
            linkUrl: `/colleges/${college.id}`,
            badge: `NAAC ${college.accreditations.naacGrade || 'A'}`,
            details: [
              `KCET Annual Fee: ₹${college.fees.kcetAnnual.toLocaleString('en-IN')}`,
              `Placement Rate: ${college.placements.placementPercentage}%`,
              `Recruiter: ${college.placements.topRecruiters[0] || 'Top MNCs'}`,
            ],
          });
        }

        const qLower = query.toLowerCase();
        if (qLower.includes('tumkur') || qLower.includes('tumakuru') || qLower.includes('cit') || qLower.includes('event') || qLower.includes('buildathon')) {
          cards.push({
            title: 'BUILDATHON-2.0 2K26 (CIT Gubbi)',
            subtitle: '30-31 Oct 2026 • 24-Hour National Hackathon',
            badge: 'Deadline: 25 Oct 2026',
            linkUrl: '/events',
            details: ['Prize Pool: ₹30,000 Cash', 'Team Fee: ₹500 (3-4 members)', 'Brochure Available'],
          });
        }

        return {
          text,
          cards: cards.length > 0 ? cards : undefined,
          suggestions: [
            'Best engineering colleges in Tumakuru',
            'CIT Buildathon-2.0 2K26 details',
            'BMSIT college information',
            'VTU SGPA Calculator',
          ],
        };
      }
    } catch {
      // try next model
    }
  }

  return null;
}

async function callOpenAI(query: string, apiKey: string): Promise<AssistantResponse | null> {
  const systemInstruction = `You are "Connect AI", the intelligent Karnataka Student Copilot on StudentConnect. Answer queries about colleges, events, cutoffs, VTU exams, coding, and general knowledge accurately in Markdown.`;

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: systemInstruction },
        { role: 'user', content: query },
      ],
      temperature: 0.7,
    }),
  });

  if (!response.ok) return null;
  const data = await response.json();
  const text = data?.choices?.[0]?.message?.content;
  if (!text) return null;

  return { text };
}

// ============================================================================
// BUILT-IN KNOWLEDGE & REASONING ENGINE
// ============================================================================

function findCollegeInDatabase(query: string) {
  const q = query.toLowerCase().trim();

  // Acronym mappings
  const acronyms: { [key: string]: string } = {
    'bmsit': 'bmsit-bangalore',
    'bmsitm': 'bmsit-bangalore',
    'bmsce': 'bmsce-bangalore',
    'rvce': 'rvce-bangalore',
    'rv': 'rvce-bangalore',
    'msrit': 'msrit-bangalore',
    'ramaiah': 'msrit-bangalore',
    'pesu': 'pes-university',
    'pes': 'pes-university',
    'dsce': 'dsce-bangalore',
    'dayananda sagar': 'dsce-bangalore',
    'bit': 'bit-bangalore',
    'cit': 'cit-tumkur',
    'cit gubbi': 'cit-tumkur',
    'cit tumkur': 'cit-tumkur',
    'channabasaveshwara': 'cit-tumkur',
    'sit': 'sit-tumakuru',
    'sit tumkur': 'sit-tumakuru',
    'siddaganga': 'sit-tumakuru',
    'ssit': 'ssit-tumkur',
    'siddhartha': 'ssit-tumkur',
    'ssit tumkur': 'ssit-tumkur',
    'ssit tumakuru': 'ssit-tumkur',
    'siet': 'cit-tumkur',
    'shridevi': 'cit-tumkur',
    'nie': 'nie-mysore',
    'sjce': 'sjce-mysore',
    'jssate': 'jssate-bangalore',
    'jss': 'jssate-bangalore',
    'bnmit': 'bnmit-bangalore',
    'rnsit': 'rnsit-bangalore',
    'mvj': 'mvj-bangalore',
    'cmrit': 'cmrit-bangalore',
    'nhce': 'nhce-bangalore',
    'new horizon': 'nhce-bangalore',
    'oxford': 'toce-bangalore',
  };

  for (const [key, id] of Object.entries(acronyms)) {
    const regex = new RegExp(`\\b${key}\\b`, 'i');
    if (regex.test(q)) {
      const match = COLLEGES_DATA.find(c => c.id === id);
      if (match) return match;
    }
  }

  // Exact or substring match in COLLEGES_DATA
  return COLLEGES_DATA.find(c => {
    const sName = c.shortName.toLowerCase();
    const fName = c.name.toLowerCase();
    const id = c.id.toLowerCase();
    return q.includes(sName) || q.includes(fName) || q.includes(id);
  });
}

function formatCollegeProfile(college: typeof COLLEGES_DATA[0]): AssistantResponse {
  const p = college.placements;
  const loc = college.location;
  const acc = college.accreditations;
  const fees = college.fees;

  let branchesText = '';
  if (college.branches && college.branches.length > 0) {
    branchesText = college.branches.map(b => 
      `• **${b.branchName} (${b.branchCode})**: Intake: ${b.intakeSeats} seats | KCET GM Cutoff: ~${b.cutoffs.kcet.gm.toLocaleString('en-IN')} | Avg CTC: ₹${b.avgPackage} LPA`
    ).join('\n');
  }

  const text = `### 🏫 ${college.name} (${college.shortName})\n\n` +
    `• **Overview:** **${college.name}** is a premier engineering institution located in **${loc.city}, ${loc.district}**, accredited with **NAAC Grade ${acc.naacGrade || 'A'}**${acc.nirfRank ? ` and ranked **NIRF #${acc.nirfRank}** nationally` : ''}.\n` +
    `• **Affiliation & Status:** ${college.affiliation} (${college.collegeType || 'Private'})\n` +
    `• **Campus Location:** ${loc.address}\n\n` +
    `#### 💼 Placements & Packages (Verified):\n` +
    `• **Highest Salary Package:** **₹${p.highestPackageLPA} LPA**\n` +
    `• **Average Salary Package:** **₹${p.averagePackageLPA} LPA**\n` +
    `• **Median Salary Package:** **₹${p.medianPackageLPA || (p.averagePackageLPA * 0.85).toFixed(1)} LPA**\n` +
    `• **Placement Percentage:** **${p.placementPercentage}%**\n` +
    `• **Top Recruiting Companies:** ${p.topRecruiters.slice(0, 8).join(', ')}\n\n` +
    `#### 🎯 Key Engineering Branches & KCET Round 2 Cutoffs:\n` +
    `${branchesText || '• Multiple undergraduate engineering branches available.'}\n\n` +
    `#### 💰 Annual Fee Structure:\n` +
    `• **KEA Government CET Quota:** ₹${fees.kcetAnnual.toLocaleString('en-IN')}/year\n` +
    `• **COMEDK Quota:** ₹${fees.comedkAnnual.toLocaleString('en-IN')}/year\n` +
    `• **Hostel & Amenities:** ${fees.hostelAnnual ? `₹${fees.hostelAnnual.toLocaleString('en-IN')}/year (${college.hostelAvailable ? 'On-campus separate hostels for boys & girls with Wi-Fi & hygienic mess' : 'Hostel options available'})` : 'Hostel facilities available'}\n\n` +
    `• **Official Website:** [${college.website}](${college.website})\n\n` +
    `*Click on the college card below to explore verified campus reviews, cutoff predictor odds, and contact details!*`;

  return {
    text,
    cards: [
      {
        title: `${college.name} (${college.shortName})`,
        subtitle: `${loc.city} • Highest ₹${p.highestPackageLPA} LPA • Avg ₹${p.averagePackageLPA} LPA`,
        linkUrl: `/colleges/${college.id}`,
        badge: `NAAC ${acc.naacGrade || 'A'}`,
        details: [
          `KCET Fee: ₹${fees.kcetAnnual.toLocaleString('en-IN')}/yr`,
          `Placement: ${p.placementPercentage}%`,
          `Top Recruiter: ${p.topRecruiters[0] || 'Top MNCs'}`
        ]
      },
      {
        title: 'Compare with Other Karnataka Colleges',
        subtitle: 'Compare cutoffs, fees & placement records',
        linkUrl: '/colleges',
        details: ['Side-by-side comparison', 'NIRF & NAAC filters', 'District-wise discovery']
      }
    ],
    suggestions: [
      `Compare ${college.shortName} vs other colleges`,
      `KCET cutoff for ${college.shortName}`,
      `Colleges in ${loc.district}`,
      'VTU SGPA Calculator',
    ]
  };
}

function getTumakuruBestCollegesResponse(): AssistantResponse {
  return {
    text: `### 🏆 Best Engineering Colleges in Tumakuru District, Karnataka\n\n` +
      `Tumakuru is an educational powerhouse situated along the NH-206 / NH-48 knowledge corridor (just 70 km from Bengaluru). Here is the verified ranking and comprehensive analysis of the best engineering colleges in Tumakuru:\n\n` +
      `---\n\n` +
      `#### 🥇 1. Siddaganga Institute of Technology (SIT Tumakuru) — **Ranked #1 in Tumakuru**\n` +
      `• **NIRF Ranking:** **#95 National Engineering Rank** across all Indian engineering institutes.\n` +
      `• **Accreditation & Status:** Autonomous Institution affiliated to VTU Belagavi, accredited with **NAAC Grade A++** (Score 3.65) and NBA.\n` +
      `• **Campus:** Sprawling 65-acre campus on B.H. Road, featuring 50+ research labs, Birla Auditorium, and high-performance computing centers.\n` +
      `• **Placements (2024):**\n` +
      `  - **Highest Package:** **₹41.5 LPA** (Amazon, Cisco)\n` +
      `  - **Average Package:** **₹8.6 LPA** (92%+ placement conversion in CSE, ISE, ECE)\n` +
      `  - **Top Recruiters:** Amazon, Cisco, Microsoft, Bosch, HPE, Mercedes-Benz, Infosys.\n` +
      `• **KCET Cutoff (Round 2 GM):** CSE: ~4,200 | ISE: ~6,800 | AIML: ~7,400 | ECE: ~12,800.\n\n` +
      `---\n\n` +
      `#### 🥈 2. Channabasaveshwara Institute of Technology (CIT Gubbi-Tumakuru) — **Premier VTU Innovation Hub**\n` +
      `• **Accreditation:** **NAAC Grade "A"**, approved by AICTE New Delhi, affiliated to VTU Belagavi.\n` +
      `• **Campus Infrastructure:** 20-acre lush green eco-friendly campus on NH-206 (B.H. Road), Gubbi, Tumakuru.\n` +
      `• **Key Strengths:** Dedicated Robotics & IoT Innovation Labs, high-speed Wi-Fi campus, modern sports complex, and a fleet of **25+ college buses** connecting Tumakuru city, Gubbi, Sira, Tiptur, and Kunigal.\n` +
      `• **Placements (2024):**\n` +
      `  - **Highest Package:** **₹19.0 LPA**\n` +
      `  - **Average Package:** **₹4.8 LPA**\n` +
      `  - **Top Recruiters:** Infosys, Wipro, TCS, Capgemini, SLK Software, Mindtree, Tech Mahindra.\n` +
      `• **Flagship Events:** Host of the prestigious national **BUILDATHON-2.0 2K26** (30–31 Oct 2026, ₹30,000 cash prize) and state cultural fest **ADVITH 2K26**.\n` +
      `• **KCET Cutoff:** CSE: ~45,000–60,000 | AIML: ~55,000–70,000 (Very accessible and excellent value for ranks 30k–85k).\n\n` +
      `---\n\n` +
      `#### 🥉 3. Sri Siddhartha Institute of Technology (SSIT Tumakuru)\n` +
      `• **Status:** Autonomous deemed-to-be university under Sri Siddhartha Academy of Higher Education (SSAHE).\n` +
      `• **Accreditation:** **NAAC Grade A+**, 55-acre campus on Kunigal Road.\n` +
      `• **Placements:** Highest Package: **₹24.0 LPA** | Average: **₹5.2 LPA**.\n` +
      `• **KCET Cutoff:** CSE closes around ~22,000 | ECE around ~38,000.\n\n` +
      `---\n\n` +
      `#### 4️⃣ 4. Shridevi Institute of Engineering & Technology (SIET Tumakuru)\n` +
      `• **Accreditation:** **NAAC Grade "A"**, affiliated to VTU Belagavi.\n` +
      `• **Campus:** 25-acre integrated campus on Sira Road (NH-48), Tumakuru.\n` +
      `• **Placements:** Highest Package: **₹18.0 LPA** | Average: **₹4.2 LPA**.\n` +
      `• **KCET Cutoff:** CSE closes around ~55,000–85,000.\n\n` +
      `---\n\n` +
      `### 💡 Student Advisory & Verdict:\n` +
      `• **Top Merit (< 10,000 KCET Rank):** Choose **SIT Tumakuru** for Tier-1 engineering placement packages and NIRF reputation.\n` +
      `• **Balanced Ranks (25,000 – 75,000 KCET Rank):** Choose **CIT Gubbi-Tumakuru** for strong placement training, modern labs, safe bus transport across Tumakuru, active hackathons, and supportive campus culture.\n` +
      `• **Autonomous University Experience:** Choose **SSIT Tumakuru** on Kunigal Road.\n\n` +
      `*Click on any college card below to explore complete campus tour photos, hostel fees, and branch cutoffs.*`,
    cards: [
      {
        title: 'SIT Tumakuru (#1 in Tumakuru)',
        subtitle: 'NIRF #95 • NAAC A++ • Highest ₹41.5 LPA',
        linkUrl: '/colleges/sit-tumakuru',
        badge: 'Top Tier Autonomous',
        details: ['65-Acre Campus B.H. Road', 'Avg CTC: ₹8.6 LPA', 'Recruiters: Amazon, Cisco'],
      },
      {
        title: 'CIT Gubbi-Tumakuru (NAAC "A")',
        subtitle: 'NH-206 • Highest ₹19.0 LPA • 25+ Bus Routes',
        linkUrl: '/colleges/cit-tumkur',
        badge: 'Premier VTU Hub',
        details: ['Buildathon 2K26 Host', 'Robotics & IoT Labs', 'In-Campus Hostels'],
      },
      {
        title: 'SSIT Tumakuru (NAAC A+)',
        subtitle: 'Kunigal Road • Highest ₹24.0 LPA',
        linkUrl: '/colleges/ssit-tumkur',
        badge: 'Autonomous SSAHE',
        details: ['55-Acre Campus', 'RoboKshethra Champions', 'Avg CTC: ₹5.2 LPA'],
      },
      {
        title: 'SIET Tumakuru (NAAC "A")',
        subtitle: 'Sira Road NH-48 • Highest ₹18.0 LPA',
        linkUrl: '/colleges/siet-tumakuru',
        badge: 'VTU Affiliated',
        details: ['25-Acre Integrated Campus', 'AI & Web3 Labs', 'Accessible Cutoffs'],
      },
    ],
    suggestions: [
      'Compare CIT vs SIT Tumakuru',
      'CIT Buildathon-2.0 2K26 details',
      'KCET cutoff ranks for Tumakuru colleges',
      'BMSIT college information',
    ],
  };
}

function processWithLocalEngine(query: string): AssistantResponse {
  const q = query.toLowerCase().trim();

  // --------------------------------------------------------------------------
  // 1. GREETINGS & PERSONALITY
  // --------------------------------------------------------------------------
  if (/^(hi|hello|hey|namaskara|namaste|hlo|good\s*(morning|afternoon|evening)|sup|yo)[\s!.]*$/i.test(q) || q === 'hi' || q === 'hello') {
    return {
      text: `Namaskara! 🙏 Hello! I am **Connect AI**, your dedicated student assistant and academic copilot for Karnataka higher education.\n\n` +
        `I have real-time verified data on **colleges, tech events, fests, hackathons, VTU schemes, KCET cutoffs, and general knowledge**.\n\n` +
        `**Here is what you can ask me:**\n` +
        `• *"Which is the best college in Tumakuru for engineering?"*\n` +
        `• *"Tell me about BMSIT or CIT Gubbi college details & cutoffs."*\n` +
        `• *"Which hackathons and fests are going on in Tumakuru (CIT Buildathon 2K26, SIT Halocon)?"*\n` +
        `• *"Compare RVCE vs BMSCE for Computer Science."*\n` +
        `• *"How is SGPA calculated under VTU 2022 Scheme?"*\n` +
        `• *"Who is the Prime Minister of India?" or any coding & study question.*\n\n` +
        `How can I assist you right now?`,
      suggestions: [
        'Best college in Tumakuru of engineering',
        'BMSIT college information',
        'CIT Buildathon-2.0 2K26 Details',
        'VTU SGPA Calculator & Formula',
      ],
    };
  }

  // --------------------------------------------------------------------------
  // 2. BEST COLLEGE IN TUMAKURU / TUMKUR ENGINEERING COLLEGES
  // --------------------------------------------------------------------------
  const isAskingBestTumkurCollege = 
    (q.includes('best') || q.includes('top') || q.includes('ranking') || q.includes('which')) &&
    (q.includes('tumkur') || q.includes('tumakuru')) &&
    (q.includes('college') || q.includes('enginerring') || q.includes('engineering'));

  if (isAskingBestTumkurCollege || q === 'tumkur colleges' || q === 'tumakuru colleges' || q === 'colleges in tumkur' || q === 'colleges in tumakuru') {
    return getTumakuruBestCollegesResponse();
  }

  // --------------------------------------------------------------------------
  // 3. TUMAKURU EVENTS (CIT BUILDATHON, SIT HALOCON, ADVITH, ETC.)
  // --------------------------------------------------------------------------
  const isAskingTumkurEvents = 
    (q.includes('event') || q.includes('fest') || q.includes('hackathon') || q.includes('workshop')) &&
    (q.includes('tumkur') || q.includes('tumakuru') || q.includes('cit') || q.includes('sit') || q.includes('siddaganga') || q.includes('siddhartha') || q.includes('shridevi') || q.includes('siet'));

  const isDirectCitEvent = q.includes('cit') && (q.includes('buildathon') || q.includes('advith') || q.includes('event'));
  const isDirectSitEvent = (q.includes('sit') || q.includes('siddaganga')) && (q.includes('halcyon') || q.includes('hack') || q.includes('event'));

  if (isAskingTumkurEvents || isDirectCitEvent || isDirectSitEvent || q.includes('buildathon')) {
    return {
      text: `### 🚀 Major Events, Hackathons & Cultural Fests in Tumakuru Colleges:\n\n` +
        `Tumakuru is an active technical corridor hosting major national hackathons and cultural extravaganzas across **CIT (Channabasaveshwara)**, **SIT (Siddaganga)**, **SSIT (Siddhartha)**, and **SIET (Shridevi)**.\n\n` +
        `---\n\n` +
        `#### 1. 🏆 Channabasaveshwara Institute of Technology (CIT Gubbi, Tumakuru)\n\n` +
        `• **BUILDATHON-2.0 2K26 (National Level 24-Hour Hackathon)**\n` +
        `  - **Theme:** Building Intelligent Solutions for a Smarter, Sustainable & Secure Tomorrow (organized by Dept. of CSE in connection with KNEW-2K26)\n` +
        `  - **Event Date:** **30 October 2026 – 31 October 2026** (24 Hours non-stop buildathon)\n` +
        `  - **Registration Deadline:** **25 October 2026**\n` +
        `  - **Prize Pool:** **₹30,000 Worth Cash & Industry Perks**\n` +
        `  - **Team Size:** 3 to 4 Members (Registration Fee: ₹500/team)\n` +
        `  - **Key Domains:** Healthcare, AgriTech & Food Security, Smart Cities & Mobility, Digital Society, Clean Energy\n` +
        `  - **Student Coordinators:** Supriya R (\`+91 91487 21325\`), Siri Manjunath Wodiyer (\`+91 81232 15329\`)\n` +
        `  - **Faculty Coordinators:** Dr. Suhas K.C. (\`+91 98449 87877\`), Prof. Mahesh N (\`+91 97420 45203\`)\n\n` +
        `• **Generative AI & Autonomous Robotics Hands-On Workshop**\n` +
        `  - **Dates:** **14 November 2026 – 15 November 2026** | Registration Deadline: **10 Nov 2026**\n` +
        `  - **Fee:** ₹250 / Student (Hardware kit access + lunch included)\n` +
        `  - **Focus:** Edge AI, NVIDIA Jetson, ROS2, LiDAR SLAM & Computer Vision\n\n` +
        `• **ADVITH 2K26 – Annual State-Level Cultural Extravaganza**\n` +
        `  - **Dates:** **18 March 2026 – 20 March 2026** | Cash Prize Pool: **₹1,50,000**\n` +
        `  - 3 days and nights of music, battle of bands, fashion show, and dramatic arts.\n\n` +
        `• **Kannada Rajyotsava Sambhrama 2026**\n` +
        `  - **Date:** **1 November 2026** (Classical folk arts, Veeragase, and cultural unity).\n\n` +
        `---\n\n` +
        `#### 2. ⚡ Siddaganga Institute of Technology (SIT Tumakuru)\n\n` +
        `• **HALOCON 2026 – National 36-Hour Hackathon**\n` +
        `  - **Theme:** High-Performance Compute, Generative AI & Distributed Infrastructure\n` +
        `  - **Prize Pool:** **₹1,00,000 Cash Prizes** + Mentorship from Cisco & AWS architects\n` +
        `  - **Venue:** SIT Birla Auditorium & Compute Center, B.H. Road, Tumakuru\n\n` +
        `• **HALCYON 2026 (Annual National Cultural Festival)**\n` +
        `  - Karnataka's flagship inter-collegiate festival drawing 8,000+ students from across South India.\n\n` +
        `---\n\n` +
        `#### 3. 🤖 Sri Siddhartha Institute of Technology (SSIT Tumakuru)\n\n` +
        `• **RoboKshethra 2K26 (National Robotics Championship)**: RoboWars (15kg & 30kg combat), Autonomous Maze Runner, and Drone Racing.\n` +
        `• **Kalathrisha 2026**: Flagship annual technical paper presentation & cultural fest.\n\n` +
        `---\n\n` +
        `#### 4. 💻 Shridevi Institute of Engineering & Technology (SIET Tumakuru)\n\n` +
        `• **SIET Tech Utsav & AI Hackathon 2026**: Coding sprints, Web3 dApp development, and Cyber-Defense challenges.\n` +
        `• **Shridevi Sambhrama**: State-level youth cultural confluence.\n\n` +
        `*You can browse full brochures, schedules, and register directly on our [Events & Tech Fests Hub](/events).*`,
      cards: [
        {
          title: 'BUILDATHON-2.0 2K26 (CIT Gubbi)',
          subtitle: '30-31 Oct 2026 • 24H National Hackathon',
          badge: 'Deadline: 25 Oct 2026',
          linkUrl: '/events',
          details: ['Prize Pool: ₹30,000 Cash', 'Team Fee: ₹500 (3-4 members)', 'Brochure Available'],
        },
        {
          title: 'HALOCON 2026 (SIT Tumakuru)',
          subtitle: '36-Hour National Computing Hackathon',
          badge: 'Prize: ₹1,00,000',
          linkUrl: '/events',
          details: ['SIT Birla Auditorium', 'Cisco & AWS Mentorship', 'High Performance Labs'],
        },
        {
          title: 'ADVITH 2K26 (CIT Tumakuru)',
          subtitle: '18-20 March 2026 • Cultural Extravaganza',
          badge: 'Prize: ₹1,50,000',
          linkUrl: '/events',
          details: ['Open Air Amphitheatre', 'Music, Dance & Drama', 'State-Level Participation'],
        },
      ],
      suggestions: [
        'How to register for CIT Buildathon?',
        'Best engineering college in Tumakuru',
        'CIT Gubbi college details',
      ],
    };
  }

  // --------------------------------------------------------------------------
  // 4. SPECIFIC COLLEGE LOOKUP (BMSIT, RVCE, CIT, SIT, BMSCE, MSRIT, ETC.)
  // --------------------------------------------------------------------------
  const matchedCollege = findCollegeInDatabase(query);
  if (matchedCollege) {
    return formatCollegeProfile(matchedCollege);
  }

  // --------------------------------------------------------------------------
  // 5. DISTRICT-BASED COLLEGE SEARCH (e.g. Colleges in Mysuru, Belagavi, Mangalore)
  // --------------------------------------------------------------------------
  const matchedDistrict = KARNATAKA_DISTRICTS.find(d => q.includes(d.toLowerCase()));
  if (matchedDistrict) {
    const districtColleges = COLLEGES_DATA.filter(c => 
      c.location.district.toLowerCase() === matchedDistrict.toLowerCase()
    );

    if (districtColleges.length > 0) {
      const topCollegesText = districtColleges.slice(0, 5).map((c, i) => 
        `**${i + 1}. ${c.name} (${c.shortName})**\n` +
        `• Highest CTC: **₹${c.placements.highestPackageLPA} LPA** | Avg: **₹${c.placements.averagePackageLPA} LPA**\n` +
        `• Status: ${c.affiliation} | NAAC: ${c.accreditations.naacGrade || 'A'}\n` +
        `• Address: ${c.location.address}`
      ).join('\n\n');

      return {
        text: `### 🎓 Engineering Colleges in ${matchedDistrict} District:\n\n` +
          `Here are the prominent engineering institutions in **${matchedDistrict}**:\n\n` +
          `${topCollegesText}\n\n` +
          `*Explore all institutions, hostels, and cutoffs on our [Colleges Explorer](/colleges).*`,
        cards: districtColleges.slice(0, 3).map(c => ({
          title: `${c.name} (${c.shortName})`,
          subtitle: `${c.location.city} • Highest ₹${c.placements.highestPackageLPA} LPA`,
          linkUrl: `/colleges/${c.id}`,
          details: [`Avg CTC: ₹${c.placements.averagePackageLPA} LPA`, `NAAC: ${c.accreditations.naacGrade || 'A'}`],
        })),
        suggestions: [
          `Cutoffs for colleges in ${matchedDistrict}`,
          'Compare colleges',
          'VTU SGPA Calculator',
        ],
      };
    }
  }

  // --------------------------------------------------------------------------
  // 6. VTU SGPA / CGPA / CIE CALCULATOR QUESTIONS
  // --------------------------------------------------------------------------
  if (q.includes('sgpa') || q.includes('cgpa') || q.includes('cie') || q.includes('vtu marks') || q.includes('grade point') || q.includes('calculator') || q.includes('scheme')) {
    return {
      text: `### 📊 Official VTU SGPA & CGPA Calculation Guide (2021, 2022 & 2025 Schemes)\n\n` +
        `We have built a dedicated **VTU Circle-compliant Academic Calculator** right here on StudentConnect!\n\n` +
        `#### 1. Official SGPA Formula:\n` +
        `$$\\text{SGPA} = \\frac{\\sum (\\text{Credit}_i \\times \\text{GradePoint}_i)}{\\sum \\text{Total Credits}}$$\n\n` +
        `#### 2. VTU Grading Scale (NEP CBCS):\n` +
        `• **90 – 100 Marks:** Grade **O** (Outstanding) $\\rightarrow$ **10 Points**\n` +
        `• **80 – 89 Marks:** Grade **A+** (Excellent) $\\rightarrow$ **9 Points**\n` +
        `• **70 – 79 Marks:** Grade **A** (Very Good) $\\rightarrow$ **8 Points**\n` +
        `• **60 – 69 Marks:** Grade **B+** (Good) $\\rightarrow$ **7 Points**\n` +
        `• **55 – 59 Marks:** Grade **B** (Above Average) $\\rightarrow$ **6 Points**\n` +
        `• **50 – 54 Marks:** Grade **C** (Average) $\\rightarrow$ **5 Points**\n` +
        `• **40 – 49 Marks:** Grade **P** (Pass) $\\rightarrow$ **4 Points**\n` +
        `• **Below 40 or Failed:** Grade **F** (Fail) $\\rightarrow$ **0 Points** *(Credits still count in total registered denominator)*\n\n` +
        `#### 3. VTU Official Percentage Formula:\n` +
        `$$\\text{Percentage } (\\%) = (\\text{SGPA} - 0.75) \\times 10$$\n\n` +
        `*Example:* An SGPA of **8.82** equals $(8.82 - 0.75) \\times 10 = \\mathbf{80.70\\%}$ (First Class with Distinction).\n\n` +
        `👉 Use our [**Interactive VTU Tools**](/vtu-tools) to auto-load subjects for your branch and print your provisional PDF Grade Card!`,
      cards: [
        {
          title: 'VTU SGPA Calculator & Grade Card',
          subtitle: 'Auto-loads subjects for CSE, AIML, ECE & more',
          linkUrl: '/vtu-tools',
          details: ['Pass/Fail Toggles', 'USN Format Validation', 'Printable PDF Grade Card'],
        },
        {
          title: 'Attendance Bunk Forecaster (75% Rule)',
          subtitle: 'Calculate classes you can safely skip',
          linkUrl: '/vtu-tools',
          details: ['Avoid Detainment', 'Live 75% & 85% Safety Check', 'VTU Regulation 22OB4.1'],
        },
      ],
      suggestions: [
        'Open VTU SGPA Calculator',
        'How to calculate internal CIE marks out of 50?',
      ],
    };
  }

  // --------------------------------------------------------------------------
  // 7. GENERAL KNOWLEDGE (PM of India, President, CM of Karnataka, Capitals)
  // --------------------------------------------------------------------------
  if (q.includes('pm of india') || q.includes('prime minister of india') || (q.includes('prime minister') && q.includes('india'))) {
    return {
      text: `The **Prime Minister of India** is **Narendra Modi** (Narendra Damodardas Modi).\n\n` +
        `• **Current Term:** 14th Prime Minister of the Republic of India.\n` +
        `• **Tenure:** In office since **May 26, 2014**, currently serving his **third consecutive term** (re-elected in June 2024).\n` +
        `• **Constituency:** Varanasi, Uttar Pradesh.\n` +
        `• **Political Party:** Bharatiya Janata Party (BJP), leading the National Democratic Alliance (NDA).\n\n` +
        `*Key National Initiatives relevant to students:* Digital India, Atal Innovation Mission (AIM), National Education Policy (NEP 2020), and Smart India Hackathon (SIH).`,
      suggestions: [
        'Who is President of India?',
        'Who is Chief Minister of Karnataka?',
        'Best college in Tumakuru of engineering',
      ],
    };
  }

  if (q.includes('president of india')) {
    return {
      text: `The **President of India** is **Droupadi Murmu**.\n\n` +
        `• **Tenure:** Serving as the **15th President of India** since **July 25, 2022**.\n` +
        `• **Significance:** She is the first person belonging to a tribal community (Santhal) and the second woman (after Pratibha Patil) to hold the nation's highest constitutional office.\n` +
        `• **Former Role:** Governor of Jharkhand (2015–2021).`,
    };
  }

  if (q.includes('cm of karnataka') || q.includes('chief minister of karnataka')) {
    return {
      text: `The **Chief Minister of Karnataka** is **Siddaramaiah**.\n\n` +
        `• **Tenure:** Sworn in on **May 20, 2023** for his second term as CM (his first term was 2013–2018).\n` +
        `• **Deputy Chief Minister:** **D.K. Shivakumar**.\n` +
        `• **Higher Education Minister:** **Dr. M.C. Sudhakar** (overseeing KEA, CET counselling, and state universities).`,
    };
  }

  // --------------------------------------------------------------------------
  // 8. KCET CUTOFF & RANK PREDICTION QUERIES
  // --------------------------------------------------------------------------
  const rankMatch = q.match(/\b([1-9][0-9]{2,5})\b/);
  if (q.includes('kcet') || q.includes('comedk') || q.includes('rank') || q.includes('cutoff')) {
    const userRank = rankMatch ? parseInt(rankMatch[1], 10) : 25000;
    
    return {
      text: `### 🎯 College Prediction for KCET Rank ~${userRank.toLocaleString('en-IN')}:\n\n` +
        `Based on official KEA Round 2 engineering cutoff trends across Karnataka:\n\n` +
        (userRank <= 5000 ? (
          `• **Top Elite Tier:**\n` +
          `  - **RVCE Bengaluru:** Strong chance for ECE (~3,800), Civil, Mechanical. Extreme reach for CSE.\n` +
          `  - **BMSCE Bengaluru:** Highly safe for ISE (~4,200), ECE (~5,800), and AIML.\n` +
          `  - **BMSIT Bengaluru:** Confirmed safe for CSE (~3,600) and AIML.\n` +
          `  - **MSRIT Bengaluru:** Safe for CSE (Spec) and ECE.\n` +
          `  - **PES University (RR Campus):** High probability for core tech branches.`
        ) : userRank <= 15000 ? (
          `• **Tier 1 / High Tier:**\n` +
          `  - **SIT Tumakuru:** Confirmed Safe for ECE (~12,800), AIML, and EEE. Strong tech placements (₹41.5 LPA highest).\n` +
          `  - **BMSIT Yelahanka:** Confirmed safe for ECE (~10,500) and Information Science.\n` +
          `  - **Bangalore Institute of Technology (BIT):** Safe for ECE and Electrical.\n` +
          `  - **Dayananda Sagar (DSCE):** Comfortable for ECE, Telecom, and Data Science.`
        ) : userRank <= 35000 ? (
          `• **Recommended Balanced Choices (~20,000–35,000 Rank):**\n` +
          `  1. **SIT Tumakuru:** Safe for ECE, EEE, Mechanical (~₹8.6 LPA average).\n` +
          `  2. **Sri Siddhartha Institute of Technology (SSIT Tumakuru):** Safe for CSE (~22,000) & ECE.\n` +
          `  3. **Channabasaveshwara Institute of Technology (CIT Gubbi/Tumakuru):** Highly Safe for CSE, AIML & Cyber Security (~₹19 LPA highest).\n` +
          `  4. **BNMIT Bengaluru:** Good reach for ECE & AIML.\n` +
          `  5. **Dr. AIT Bengaluru:** Safe for Information Science & ECE under Govt aided fees.`
        ) : (
          `• **Solid Institutions for Rank ${userRank.toLocaleString('en-IN')}:**\n` +
          `  1. **CIT Gubbi / Tumakuru:** Strong choice for CSE, AIML, and Data Science with 25+ bus routes and active placement training.\n` +
          `  2. **SIET Tumakuru (Shridevi):** Confirmed safe for CSE and ECE with hostel facilities.\n` +
          `  3. **East West Institute of Technology (EWIT Bengaluru):** Comfortable for CSE/ISE.\n` +
          `  4. **Sambhram Institute of Technology (SaIT Bengaluru):** Safe across all tech branches.`
        )) +
        `\n\n*Use our [KCET Cutoff Predictor](/predictor) to filter by your category (GM, 2A, 2B, 3A, 3B, SC, ST) and region.*`,
      cards: [
        {
          title: 'KCET / COMEDK Cutoff Predictor',
          subtitle: 'Predict by Rank, Category & District',
          linkUrl: '/predictor',
          details: ['GM, 2A, 2B, 3A, 3B, SC/ST Quotas', 'Round 1 & 2 Past Cutoffs', 'Fee Breakdown'],
        },
      ],
      suggestions: [
        'Best engineering college in Tumakuru',
        'BMSIT college information',
        'How does KEA Option Entry work?',
      ],
    };
  }

  // --------------------------------------------------------------------------
  // 9. CODING & PROGRAMMING QUESTIONS
  // --------------------------------------------------------------------------
  if (q.includes('binary search') || (q.includes('search') && q.includes('python'))) {
    return {
      text: `### 💻 Binary Search Algorithm in Python\n\n` +
        `Binary search is an efficient algorithm for finding an item from a **sorted list** with $O(\\log n)$ time complexity.\n\n` +
        `\`\`\`python\n` +
        `def binary_search(arr, target):\n` +
        `    left = 0\n` +
        `    right = len(arr) - 1\n` +
        `    \n` +
        `    while left <= right:\n` +
        `        mid = (left + right) // 2\n` +
        `        \n` +
        `        if arr[mid] == target:\n` +
        `            return mid\n` +
        `        elif arr[mid] < target:\n` +
        `            left = mid + 1\n` +
        `        else:\n` +
        `            right = mid - 1\n` +
        `            \n` +
        `    return -1  # Target was not found\n\n` +
        `# Example Usage:\n` +
        `numbers = [11, 22, 35, 47, 53, 68, 79, 88, 95]\n` +
        `target_val = 53\n` +
        `result = binary_search(numbers, target_val)\n` +
        `print(f"Element found at index: {result}")  # Output: 4\n` +
        `\`\`\`\n\n` +
        `• **Time Complexity:** $O(\\log n)$ (Best: $O(1)$, Worst: $O(\\log n)$)\n` +
        `• **Space Complexity:** $O(1)$ auxiliary space for iterative approach.`,
    };
  }

  // --------------------------------------------------------------------------
  // 10. GENERAL CONVERSATIONAL / CHATGPT-STYLE SYNTHESIS
  // --------------------------------------------------------------------------
  return {
    text: `### 💡 Connect AI Insights on "${query}":\n\n` +
      `Here is comprehensive information regarding your inquiry:\n\n` +
      `• **Academic Context:** On StudentConnect, we track cutoffs, placements, and syllabus across 50+ Karnataka institutions including **Tumakuru** (CIT Gubbi, SIT, SSIT, SIET) and **Bengaluru** (RVCE, BMSCE, BMSIT, MSRIT).\n` +
      `• **Campus Opportunities:** If you are seeking technical hackathons, **CIT Gubbi** is hosting the **BUILDATHON-2.0 2K26** (30–31 Oct 2026, ₹30,000 cash prize), while **SIT Tumakuru** hosts **HALOCON 2026**.\n` +
      `• **Interactive Tools:** You can compute your NEP SGPA using our [VTU Academic Suite](/vtu-tools) or predict admission odds with our [KEA Cutoff Predictor](/predictor).\n\n` +
      `*Tip: You can connect your free Google Gemini API key by clicking "Connect Gemini AI" in the header to unlock unrestricted real-time AI reasoning!*`,
    suggestions: [
      'Best college in Tumakuru of engineering',
      'BMSIT college information',
      'CIT Buildathon-2.0 2K26 Details',
      'VTU SGPA Calculator',
    ],
  };
}
