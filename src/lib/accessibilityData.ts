export interface SignIntent {
  id: string;
  emoji: string;
  label: string;
  spokenMessage: string;
  category: 'classroom' | 'doubt' | 'response' | 'urgent';
  handCue: string;
  islHint: string;
  aslHint: string;
  urgency: 'normal' | 'medium' | 'high';
}

export const CLASSROOM_SIGN_INTENTS: SignIntent[] = [
  {
    id: 'question',
    emoji: '✋',
    label: 'I have a question',
    spokenMessage: 'Excuse me Teacher, I have a question about this topic.',
    category: 'doubt',
    handCue: 'Open palm raised upright',
    islHint: 'Raise open right hand at shoulder height with palm facing forward.',
    aslHint: 'Raise index finger and curve into a question-mark shape.',
    urgency: 'medium',
  },
  {
    id: 'know_answer',
    emoji: '👍',
    label: 'I know the answer',
    spokenMessage: 'I know the answer to this question.',
    category: 'response',
    handCue: 'Thumbs up held steady',
    islHint: 'Closed fist with thumb extended upward near chest level.',
    aslHint: 'Tap fingertips on forehead (know) then point forward.',
    urgency: 'normal',
  },
  {
    id: 'okay',
    emoji: '👌',
    label: 'Okay / Understood',
    spokenMessage: 'Okay, I understood this concept clearly.',
    category: 'response',
    handCue: 'Thumb & index circle',
    islHint: 'Thumb and index fingertips touch in a circle; remaining fingers extended.',
    aslHint: 'Thumb and index form O-shape, followed by slight nod.',
    urgency: 'normal',
  },
  {
    id: 'go_down',
    emoji: '👇',
    label: 'Go down / Slow down',
    spokenMessage: 'Please scroll down or slow down the pace a little.',
    category: 'classroom',
    handCue: 'Index finger pointing downward',
    islHint: 'Point index finger downward with gentle descending motion.',
    aslHint: 'Open palms move slowly downward together.',
    urgency: 'normal',
  },
  {
    id: 'want_answer',
    emoji: '🙋',
    label: 'I want to answer',
    spokenMessage: 'I would like to volunteer and answer the next question.',
    category: 'response',
    handCue: 'Hand raised high above shoulder',
    islHint: 'Raise open hand high above shoulder height.',
    aslHint: 'Raise hand clearly in camera frame.',
    urgency: 'normal',
  },
  {
    id: 'please_stop',
    emoji: '🤚',
    label: 'Please stop / Pause',
    spokenMessage: 'Please pause for a moment so I can catch up with the notes.',
    category: 'classroom',
    handCue: 'Flat palm facing camera firmly',
    islHint: 'Hold flat vertical palm forward with steady posture.',
    aslHint: 'Chop flat edge of right hand onto open left palm.',
    urgency: 'medium',
  },
  {
    id: 'dont_understand',
    emoji: '❓',
    label: "I don't understand",
    spokenMessage: "I don't understand this step. Could you please explain it again?",
    category: 'doubt',
    handCue: 'Open palm tilt / puzzled brow',
    islHint: 'Shake open hand slightly near temple with questioning facial expression.',
    aslHint: 'Flick index finger up near forehead while shaking head gently.',
    urgency: 'high',
  },
  {
    id: 'need_help',
    emoji: '🆘',
    label: 'I need help',
    spokenMessage: 'I need immediate help with this exercise.',
    category: 'urgent',
    handCue: 'Both hands crossed or raised wave',
    islHint: 'Place closed fist on open palm and lift both upward together.',
    aslHint: 'Place thumbs-up fist on flat palm and lift gently.',
    urgency: 'high',
  },
];

export interface SignDictionaryEntry {
  id: string;
  word: string;
  subject: 'Mathematics' | 'Computer Science' | 'Science' | 'Classroom' | 'Daily';
  emoji: string;
  islSteps: string[];
  aslNote: string;
  exampleSentence: string;
  difficulty: 'Beginner' | 'Intermediate';
}

export const SIGN_LANGUAGE_LIBRARY: SignDictionaryEntry[] = [
  {
    id: 'alg-1',
    word: 'Algorithm',
    subject: 'Computer Science',
    emoji: '⚙️',
    islSteps: [
      'Hold both hands open in front of chest, palms facing each other.',
      'Move hands sequentially downward in 3 distinct step levels (representing step-by-step logic).',
      'Finish with index finger pointing forward.',
    ],
    aslNote: 'Fingerspell A-L-G or use "Step-by-step" + "Rule".',
    exampleSentence: 'An algorithm is a step-by-step procedure to solve a problem.',
    difficulty: 'Intermediate',
  },
  {
    id: 'math-1',
    word: 'Equation / Equal',
    subject: 'Mathematics',
    emoji: '🟰',
    islSteps: [
      'Extend both index and middle fingers horizontally.',
      'Bring fingertips of both hands together evenly at chest height.',
      'Tap twice gently to represent balanced equality.',
    ],
    aslNote: 'Bent flat hands touch fingertips together cleanly.',
    exampleSentence: 'Solve the linear equation for x.',
    difficulty: 'Beginner',
  },
  {
    id: 'math-2',
    word: 'Derivative / Rate of Change',
    subject: 'Mathematics',
    emoji: '📈',
    islSteps: [
      'Trace a smooth curved slope in the air with your right index finger.',
      'Touch a single point on the curve with your left index finger to show tangent slope.',
    ],
    aslNote: 'Sign "Change" followed by "Slope" or "D-X".',
    exampleSentence: 'The derivative measures instantaneous rate of change.',
    difficulty: 'Intermediate',
  },
  {
    id: 'cs-2',
    word: 'Binary / Tree Structure',
    subject: 'Computer Science',
    emoji: '🌳',
    islSteps: [
      'Place right elbow on back of left flat hand.',
      'Spread right fingers like branches splitting into left and right nodes.',
    ],
    aslNote: 'Sign "Tree" then show two branching fingers (left & right child).',
    exampleSentence: 'A binary search tree splits data into left and right subtrees.',
    difficulty: 'Intermediate',
  },
  {
    id: 'sci-1',
    word: 'Electricity / Circuit',
    subject: 'Science',
    emoji: '⚡',
    islSteps: [
      'Curve both index fingers like small hooks.',
      'Tap knuckles together twice rapidly in front of chest.',
    ],
    aslNote: 'X-handshapes tap knuckles together twice.',
    exampleSentence: 'Current flows through a closed electric circuit.',
    difficulty: 'Beginner',
  },
  {
    id: 'cls-1',
    word: 'Repeat / Explain Again',
    subject: 'Classroom',
    emoji: '🔁',
    islSteps: [
      'Hold left palm flat upward.',
      'Arc bent right hand from open space onto the left palm smoothly.',
    ],
    aslNote: 'Sign "Again" with an inquiring eyebrow raise.',
    exampleSentence: 'Teacher, could you explain that formula again?',
    difficulty: 'Beginner',
  },
  {
    id: 'cls-2',
    word: 'Exam / Test',
    subject: 'Classroom',
    emoji: '📝',
    islSteps: [
      'Draw two question marks in the air simultaneously with both index fingers.',
      'Drop both hands downward into open five-handshapes.',
    ],
    aslNote: 'Question-mark shape transitioning to open hands downward.',
    exampleSentence: 'Our VTU internal assessment test is next Monday.',
    difficulty: 'Beginner',
  },
  {
    id: 'daily-1',
    word: 'Thank You',
    subject: 'Daily',
    emoji: '🙏',
    islSteps: [
      'Place fingertips of flat right hand near chin.',
      'Move hand smoothly forward and slightly downward toward the listener.',
    ],
    aslNote: 'Flat hand moves forward from chin with a warm smile.',
    exampleSentence: 'Thank you for explaining the topic clearly!',
    difficulty: 'Beginner',
  },
];

export interface AACCard {
  id: string;
  emoji: string;
  label: string;
  phrase: string;
  category: 'Classroom' | 'Doubts' | 'Technical' | 'Group Study' | 'Emergency';
}

export const DEFAULT_AAC_CARDS: AACCard[] = [
  { id: 'aac-1', emoji: '🙋', label: 'Ask Question', phrase: 'Excuse me, I have a question about this slide.', category: 'Classroom' },
  { id: 'aac-2', emoji: '🔁', label: 'Repeat Please', phrase: 'Could you please repeat the last explanation slowly?', category: 'Doubts' },
  { id: 'aac-3', emoji: '💡', label: 'Give Example', phrase: 'Can you share a simple real-world example of this concept?', category: 'Doubts' },
  { id: 'aac-4', emoji: '✅', label: 'Understood', phrase: 'Yes, I understand clearly now. Thank you!', category: 'Classroom' },
  { id: 'aac-5', emoji: '⏸️', label: 'Wait a Moment', phrase: 'Please give me a moment while I type my full answer.', category: 'Classroom' },
  { id: 'aac-6', emoji: '💻', label: 'Code Doubt', phrase: 'Can we trace this algorithm step by step with sample input?', category: 'Technical' },
  { id: 'aac-7', emoji: '📐', label: 'Formula Step', phrase: 'How did we simplify from step two to step three in this equation?', category: 'Technical' },
  { id: 'aac-8', emoji: '📊', label: 'Zoom Screen', phrase: 'Could you please zoom in on the board or slide text?', category: 'Classroom' },
  { id: 'aac-9', emoji: '🤝', label: 'Team Contribution', phrase: 'I have completed my part of the project and uploaded the files.', category: 'Group Study' },
  { id: 'aac-10', emoji: '📅', label: 'Schedule Help', phrase: 'Can we meet after class for 10 minutes to review this chapter?', category: 'Group Study' },
  { id: 'aac-11', emoji: '📝', label: 'Share Notes', phrase: 'Please share the accessible PDF or notes for today’s lecture.', category: 'Classroom' },
  { id: 'aac-12', emoji: '🆘', label: 'Need Assistance', phrase: 'I need urgent assistance from the instructor or lab coordinator.', category: 'Emergency' },
];

export interface AudioChapter {
  title: string;
  durationLabel: string;
  sentences: string[];
}

export interface AccessibleBook {
  id: string;
  title: string;
  subject: string;
  author: string;
  vtuCode?: string;
  chapters: AudioChapter[];
}

export const ACCESSIBLE_AUDIO_BOOKS: AccessibleBook[] = [
  {
    id: 'ai-basics',
    title: 'Artificial Intelligence & Machine Learning Essentials',
    subject: 'Computer Science (VTU 2022 Scheme)',
    author: 'StudentConnect Accessible Library',
    vtuCode: 'BCS515B',
    chapters: [
      {
        title: 'Chapter 1: What is Artificial Intelligence?',
        durationLabel: '3 min read',
        sentences: [
          'Artificial Intelligence is the branch of computer science focused on building systems capable of performing tasks that typically require human intelligence.',
          'These tasks include visual perception, speech recognition, decision making, and translating between languages.',
          'Modern AI combines search algorithms, knowledge representation, and machine learning models trained on real-world datasets.',
          'In inclusive education, AI powers live lecture captions, sign language recognition, and natural text-to-speech readers for independent learning.',
        ],
      },
      {
        title: 'Chapter 2: Supervised vs Unsupervised Learning',
        durationLabel: '3 min read',
        sentences: [
          'Supervised learning trains a model using labeled examples, where every input comes paired with the correct answer.',
          'Common supervised learning tasks include predicting KCET admission chances and classifying hand gestures into classroom messages.',
          'Unsupervised learning works without labeled answers, discovering hidden patterns or grouping similar data points together automatically.',
          'Choosing the right learning paradigm depends on whether verified ground-truth labels are available for your dataset.',
        ],
      },
      {
        title: 'Chapter 3: Neural Networks Explained Simply',
        durationLabel: '4 min read',
        sentences: [
          'An artificial neural network is inspired by interconnected neurons inside the human brain.',
          'Data enters through an input layer, passes through one or more hidden layers where mathematical weights extract patterns, and reaches an output layer.',
          'During training, the network compares its prediction against the actual result, computes the error, and adjusts its weights using backpropagation.',
          'Deep learning uses many hidden layers to recognize complex patterns such as spoken voice commands, handwritten text, and sign-language hand landmarks.',
        ],
      },
    ],
  },
  {
    id: 'dsa-vtu',
    title: 'Data Structures & Applications (Audio Edition)',
    subject: 'Core Engineering (VTU 3rd Sem)',
    author: 'StudentConnect Accessible Library',
    vtuCode: 'BCS304',
    chapters: [
      {
        title: 'Chapter 1: Stacks & Queues Made Simple',
        durationLabel: '3 min read',
        sentences: [
          'A stack is a linear data structure that follows the Last In, First Out principle, abbreviated as LIFO.',
          'Think of a stack of books on a study desk: you place a new book on top using push, and remove the top book using pop.',
          'A queue follows the First In, First Out principle, abbreviated as FIFO, just like students waiting in line at the college library counter.',
          'Stacks power function call recursion and undo buttons, while queues power print job scheduling and live message buffers.',
        ],
      },
      {
        title: 'Chapter 2: Recursion & Binary Trees',
        durationLabel: '3 min read',
        sentences: [
          'Recursion occurs when a function solves a large problem by calling itself on smaller versions of the exact same problem.',
          'Every valid recursive function must contain a clear base case that stops the calls from repeating forever.',
          'A binary tree organizes elements hierarchically, where every node has at most two children called the left child and the right child.',
          'In-order traversal visits the left subtree, then the root node, and finally the right subtree, producing sorted output for a Binary Search Tree.',
        ],
      },
    ],
  },
  {
    id: 'eng-math',
    title: 'Engineering Mathematics — Laplace & Calculus Audio Guide',
    subject: 'Mathematics (VTU 1st/2nd Year)',
    author: 'StudentConnect Accessible Library',
    vtuCode: 'BMATS201',
    chapters: [
      {
        title: 'Chapter 1: Understanding Derivatives Intuitively',
        durationLabel: '2 min read',
        sentences: [
          'A derivative tells you how fast a quantity is changing at one exact moment in time.',
          'If you know the distance a college bus has traveled at every second, the derivative gives you its exact speedometer reading at any instant.',
          'Geometrically, the derivative of a curve at a point equals the slope of the straight tangent line touching the curve at that point.',
        ],
      },
    ],
  },
];

export interface RecordedLecture {
  id: string;
  title: string;
  instructor: string;
  subject: string;
  duration: string;
  transcript: string;
}

export const RECORDED_LECTURES: RecordedLecture[] = [
  {
    id: 'lec-1',
    title: 'Introduction to Backpropagation & Gradient Descent',
    instructor: 'Prof. Ananya Deshpande (CSE)',
    subject: 'Artificial Intelligence',
    duration: '12:40',
    transcript:
      'Welcome students! Today we will understand Gradient Descent using a simple hill analogy. Imagine standing blindfolded on a foggy hill trying to reach the lowest valley. You feel the slope under your feet and take a small step downhill. That step size is called the learning rate. If the learning rate is too big, you overshoot the valley; if it is too small, reaching the minimum takes too long. Repeating this downhill step lets neural networks minimize prediction error automatically.',
  },
  {
    id: 'lec-2',
    title: 'VTU 2022 Scheme SGPA & CIE Scoring Strategy',
    instructor: 'Dr. Raghavendra Rao (Academic Advisor)',
    subject: 'VTU Academic Success',
    duration: '08:15',
    transcript:
      'Hello everyone! Under the VTU 2022 NEP Scheme, Continuous Internal Evaluation carries 50 marks and Semester End Examination carries 50 marks. To calculate SGPA, multiply each subject credit by its grade point, add them all up, and divide by total credits. Maintain at least 75 percent attendance and prioritize high-credit 4-credit core papers to maximize your cumulative CGPA.',
  },
  {
    id: 'lec-3',
    title: 'Binary Search Trees & Time Complexity Analysis',
    instructor: 'Prof. Karthik Hegde (ISE)',
    subject: 'Data Structures',
    duration: '15:20',
    transcript:
      'In a balanced Binary Search Tree, every lookup eliminates half of the remaining elements at each step. This gives an average search time complexity of O of log n, which is dramatically faster than scanning an unsorted array in O of n time. Remember to verify balanced height so the tree never degrades into a skewed linked list.',
  },
];

export interface AudioQuizQuestion {
  id: string;
  topic: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export const AUDIO_QUIZ_QUESTIONS: AudioQuizQuestion[] = [
  {
    id: 'q1',
    topic: 'Data Structures',
    question: 'Which principle does a Stack data structure follow?',
    options: [
      'First In, First Out (FIFO)',
      'Last In, First Out (LIFO)',
      'Random Priority Order',
      'Alphabetical Sorting',
    ],
    correctIndex: 1,
    explanation: 'Correct! A stack follows Last In, First Out (LIFO), where the most recently pushed item is popped first.',
  },
  {
    id: 'q2',
    topic: 'Artificial Intelligence',
    question: 'In Machine Learning, what kind of learning uses labeled input-output training pairs?',
    options: [
      'Supervised Learning',
      'Unsupervised Clustering',
      'Random Noise Generation',
      'Hardware Compilation',
    ],
    correctIndex: 0,
    explanation: 'Spot on! Supervised learning trains on labeled pairs so the model learns to map inputs to known outputs.',
  },
  {
    id: 'q3',
    topic: 'VTU Academics',
    question: 'What is the minimum mandatory attendance percentage required under VTU regulations?',
    options: ['50 percent', '60 percent', '75 percent', '95 percent'],
    correctIndex: 2,
    explanation: 'Correct! VTU requires a minimum of 75 percent attendance to be eligible for Semester End Examinations.',
  },
  {
    id: 'q4',
    topic: 'Algorithms',
    question: 'What is the average time complexity of searching in a balanced Binary Search Tree?',
    options: ['O of 1', 'O of log n', 'O of n squared', 'O of 2 to the power n'],
    correctIndex: 1,
    explanation: 'Well done! Because each comparison cuts the search space in half, searching takes O of log n time.',
  },
];

export const LIVE_LESSON_DEMO_CAPTIONS = [
  'Welcome everyone to today’s Mathematics & Data Structures inclusive session.',
  'Step 1: Look at how a recursive function breaks a problem into smaller identical subproblems.',
  'For example, factorial of 4 equals 4 multiplied by factorial of 3.',
  'Step 2: Always define a base case — here, factorial of 1 returns 1 immediately.',
  'Without a base case, the call stack keeps growing until a stack overflow error happens.',
  'Does everyone follow how the stack unwinds when returning from the base case? Feel free to sign or tap a card if you want me to repeat!',
];

export interface VisualConceptGuide {
  id: string;
  topic: string;
  subject: string;
  analogy: string;
  steps: { title: string; visual: string; detail: string }[];
}

export const VISUAL_CONCEPT_GUIDES: VisualConceptGuide[] = [
  {
    id: 'vc-recursion',
    topic: 'Recursion & Call Stack',
    subject: 'Computer Science',
    analogy: 'Like Russian nesting dolls: open each doll until you reach the tiniest solid doll (base case), then close them back up in reverse order.',
    steps: [
      { title: '1. Call Down', visual: 'fact(3) → fact(2) → fact(1)', detail: 'Each call pauses and pushes a new frame onto the stack.' },
      { title: '2. Base Case Hit', visual: 'fact(1) = 1 🛑', detail: 'Stops further calls so the program does not run forever.' },
      { title: '3. Unwind & Return', visual: '1 → 2×1=2 → 3×2=6 ✅', detail: 'Results bubble back up to produce the final answer.' },
    ],
  },
  {
    id: 'vc-laplace',
    topic: 'Laplace Transforms',
    subject: 'Engineering Math',
    analogy: 'Like translating a hard puzzle in time-domain (calculus) into an easier language (algebra), solving it cleanly, and translating the answer back.',
    steps: [
      { title: '1. Time Domain f(t)', visual: 'Differential Equation (Hard)', detail: 'Contains derivatives and integrals over time t.' },
      { title: '2. Apply L{f(t)}', visual: 'F(s) Algebra (Easy)', detail: 'Derivatives turn into simple multiplication by s.' },
      { title: '3. Inverse L⁻¹', visual: 'Solution y(t) ✅', detail: 'Convert algebraic answer back into time domain.' },
    ],
  },
];
