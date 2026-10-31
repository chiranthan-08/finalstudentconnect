import { connectToDatabase } from '@/lib/mongodb';
import { SportsOpportunityModel, SportsReferralModel, AnalyticsEventModel } from '@/models';
import { SPORTS_OPPORTUNITIES } from '@/data/sportsData';

export class SportsService {
  /**
   * Get all sports opportunities, auto-seeding if empty
   */
  static async getOpportunities() {
    const conn = await connectToDatabase();
    if (!conn.isConnected) {
      return SPORTS_OPPORTUNITIES.map((s) => ({
        id: s.id,
        title: s.title,
        sport: s.sport,
        level: s.level,
        category: s.category,
        participation: s.participationType,
        organizer: s.organizer,
        city: s.city,
        venue: s.venue,
        registrationDeadline: s.registrationDeadline,
        eventStartDate: s.eventStartDate,
        eventEndDate: s.eventEndDate,
        isFree: s.isFree,
        registrationFeeINR: 0,
        officialRegistrationUrl: s.links?.registerUrl || 'https://studentconnect.karnataka.gov.in',
        brochureUrl: s.links?.brochureUrl,
        contactPhone: s.contact?.phone || '+91 80 2200 0000',
        contactEmail: s.contact?.email || 'sports@studentconnect.edu',
        viewsCount: 15,
        referralClicksCount: 0,
      }));
    }

    let events = await SportsOpportunityModel.find().lean();
    if (!events || events.length === 0) {
      const docs = SPORTS_OPPORTUNITIES.map((s) => ({
        sportsId: s.id,
        title: s.title,
        sport: s.sport,
        level: s.level,
        category: (s.category === 'Men' || s.category === 'Women' ? s.category : 'Mixed') as 'Men' | 'Women' | 'Mixed',
        participation: (s.participationType === 'Individual' ? 'Individual' : 'Team') as 'Team' | 'Individual',
        organizer: s.organizer,
        city: s.city,
        venue: s.venue,
        registrationDeadline: new Date(s.registrationDeadline),
        eventStartDate: new Date(s.eventStartDate),
        eventEndDate: new Date(s.eventEndDate),
        isFree: s.isFree,
        registrationFeeINR: 0,
        officialRegistrationUrl: s.links?.registerUrl || 'https://studentconnect.karnataka.gov.in',
        brochureUrl: s.links?.brochureUrl,
        contactPhone: s.contact?.phone || '+91 80 2200 0000',
        contactEmail: s.contact?.email || 'sports@studentconnect.edu',
        viewsCount: 15,
        referralClicksCount: 0,
      }));
      await SportsOpportunityModel.insertMany(docs).catch((e) => console.warn('Sports seed error:', e.message));
      events = await SportsOpportunityModel.find().lean();
    }

    return events.map((e: any) => ({
      id: e.sportsId,
      title: e.title,
      sport: e.sport,
      level: e.level,
      category: e.category,
      participation: e.participation,
      organizer: e.organizer,
      city: e.city,
      venue: e.venue,
      registrationDeadline: e.registrationDeadline.toISOString(),
      eventStartDate: e.eventStartDate.toISOString().split('T')[0],
      eventEndDate: e.eventEndDate.toISOString().split('T')[0],
      isFree: e.isFree,
      registrationFeeINR: e.registrationFeeINR,
      officialRegistrationUrl: e.officialRegistrationUrl,
      brochureUrl: e.brochureUrl,
      contactPhone: e.contactPhone,
      contactEmail: e.contactEmail,
      viewsCount: e.viewsCount,
      referralClicksCount: e.referralClicksCount,
    }));
  }

  /**
   * Track outbound registration click as a referral (not a confirmed registration)
   */
  static async trackReferralClick(data: {
    sportsId: string;
    sportTitle: string;
    outboundUrl: string;
    userId?: string;
    sessionId: string;
  }) {
    await connectToDatabase();

    // 1. Create referral record
    const referral = await SportsReferralModel.create({
      sportsId: data.sportsId,
      sportTitle: data.sportTitle,
      userId: data.userId,
      sessionId: data.sessionId,
      outboundUrl: data.outboundUrl,
      clickedAt: new Date(),
    });

    // 2. Increment referralClicksCount on the opportunity
    await SportsOpportunityModel.findOneAndUpdate(
      { sportsId: data.sportsId },
      { $inc: { referralClicksCount: 1 } }
    ).catch(() => {});

    // 3. Log analytics event
    await AnalyticsEventModel.create({
      sessionId: data.sessionId,
      userId: data.userId,
      eventType: 'outbound_click',
      pageUrl: `/sports/${data.sportsId}`,
      pageName: 'Sports Registration Referral Click',
      category: 'Sports',
      metadata: {
        sportsId: data.sportsId,
        sportTitle: data.sportTitle,
        outboundUrl: data.outboundUrl,
        type: 'referral_not_confirmed_registration',
      },
    }).catch(() => {});

    return { success: true, referralId: referral._id.toString() };
  }
}
