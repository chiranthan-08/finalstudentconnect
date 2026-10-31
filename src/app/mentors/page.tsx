'use client';

import React, { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { 
  UserCheck, 
  ShieldCheck, 
  Star, 
  CheckCircle2, 
  Clock, 
  Calendar, 
  CreditCard, 
  Lock, 
  AlertCircle, 
  ArrowRight,
  DollarSign,
  Sparkles,
  Search,
  X,
  Smartphone
} from 'lucide-react';
import { MENTORS_DATA } from '@/data/mockData';
import { Mentor, MentorBooking } from '@/types';
import { useRazorpayCheckout } from '@/lib/useRazorpayCheckout';
import { RazorpaySimulatorModal } from '@/components/payment/RazorpaySimulatorModal';

export default function MentorsPage() {
  const { user } = useAuth();
  const [mentors, setMentors] = useState<Mentor[]>(MENTORS_DATA);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('ALL');

  // Escrow Booking State
  const [bookingModalMentor, setBookingModalMentor] = useState<Mentor | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<string>('');
  const [selectedTopic, setSelectedTopic] = useState<string>('');
  const [paymentStep, setPaymentStep] = useState<'details' | 'payment' | 'confirmed'>('details');

  // Active bookings list
  const [userBookings, setUserBookings] = useState<MentorBooking[]>([
    {
      id: 'bk-101',
      studentId: 'user-student',
      studentName: 'Prajwal Kulkarni',
      mentorId: 'mentor-1',
      mentorName: 'Ananya Sharma (BMSCE)',
      subject: 'Data Structures in C & VTU Lab Exam Prep',
      date: 'Tomorrow',
      timeSlot: '6:00 PM - 7:00 PM',
      amountINR: 249,
      escrowStatus: 'HELD_IN_ESCROW',
      sessionStatus: 'SCHEDULED',
      meetingRoomId: 'room-daa-prep',
    },
  ]);

  const filteredMentors = mentors.filter(m => {
    if (searchQuery.trim()) {
      const tokens = searchQuery.toLowerCase().trim().split(/\s+/).filter(Boolean);
      const fullSearchable = `${m.name} ${m.college} ${m.branch} ${m.skills.join(' ')} ${m.subjects.join(' ')} ${m.bio}`.toLowerCase();
      const allMatch = tokens.every(tok => fullSearchable.includes(tok));
      if (!allMatch) return false;
    }
    if (selectedSubject !== 'ALL') {
      if (!m.subjects.some(s => s.toLowerCase().includes(selectedSubject.toLowerCase()))) {
        return false;
      }
    }
    return true;
  });

  const handleStartBooking = (mentor: Mentor) => {
    setBookingModalMentor(mentor);
    setSelectedSlot(mentor.availableSlots[0] || 'Today 7:00 PM');
    setSelectedTopic(mentor.subjects[0] || 'General Guidance');
    setPaymentStep('details');
  };

  const handleProceedToPayment = () => {
    setPaymentStep('payment');
  };

  const {
    initiatePayment,
    loading: razorpayLoading,
    simulatedModal,
    handleSimulatedSuccess,
    closeSimulatedModal,
  } = useRazorpayCheckout();

  const handleConfirmEscrowPayment = () => {
    if (!bookingModalMentor) return;

    initiatePayment({
      plan: 'mentor_escrow',
      planName: `Escrow Mentorship: ${selectedTopic} with ${bookingModalMentor.name}`,
      amountINR: bookingModalMentor.hourlyRateINR,
      itemType: 'mentor_session',
      itemId: bookingModalMentor.id,
      user: user
        ? { id: user.id, name: user.name, email: user.email }
        : { id: 'guest_student', name: 'Student', email: 'student@rvce.edu.in' },
      onSuccess: () => {
        const newBooking: MentorBooking = {
          id: 'bk-' + Date.now().toString().slice(-4),
          studentId: user?.id || 'usr_demo',
          studentName: user?.name || 'Student',
          mentorId: bookingModalMentor.id,
          mentorName: `${bookingModalMentor.name} (${bookingModalMentor.college.split(' ')[0]})`,
          subject: selectedTopic,
          date: selectedSlot.split(' ')[0],
          timeSlot: selectedSlot,
          amountINR: bookingModalMentor.hourlyRateINR,
          escrowStatus: 'HELD_IN_ESCROW',
          sessionStatus: 'SCHEDULED',
          meetingRoomId: 'room-' + Date.now().toString().slice(-4),
        };

        setUserBookings([newBooking, ...userBookings]);
        setPaymentStep('confirmed');
      },
    });
  };

  const handleReleaseEscrow = (bookingId: string) => {
    setUserBookings(prev => prev.map(b => {
      if (b.id === bookingId) {
        return {
          ...b,
          escrowStatus: 'RELEASED_TO_TUTOR',
          sessionStatus: 'COMPLETED',
        };
      }
      return b;
    }));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
        <div>
          <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-xs uppercase tracking-wider mb-1">
            <UserCheck className="w-4 h-4" />
            <span>Karnataka Peer-to-Peer Learning Marketplace</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            Learn from Seniors. Earn by Teaching.
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            Book 1-on-1 tutoring sessions protected by Student Connect Escrow.
          </p>
        </div>

        {/* Escrow Guarantee Pill */}
        <div className="p-3 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-500/30 text-xs flex items-center gap-2.5">
          <ShieldCheck className="w-6 h-6 text-emerald-600 shrink-0" />
          <div>
            <span className="font-extrabold text-emerald-900 dark:text-emerald-200 block">
              100% Escrow Protection
            </span>
            <span className="text-[11px] text-slate-500 dark:text-slate-400">
              Payment released only after your session is completed.
            </span>
          </div>
        </div>
      </div>

      {/* Escrow Workflow Diagram Banner */}
      <div className="glass-card rounded-2xl p-4 sm:p-6 border border-slate-200 dark:border-slate-800 space-y-3">
        <h3 className="font-bold text-xs uppercase tracking-wider text-slate-400">How Escrow Protection Works:</h3>
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 text-center text-xs">
          <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-100 dark:border-slate-800">
            <span className="text-[10px] text-blue-500 font-bold">STEP 1</span>
            <div className="font-bold text-slate-800 dark:text-slate-200 mt-1">Student Books</div>
            <div className="text-[11px] text-slate-400">Selects topic & slot</div>
          </div>
          <div className="flex items-center justify-center text-slate-400 hidden sm:flex">→</div>
          <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900">
            <span className="text-[10px] text-blue-600 font-bold">STEP 2</span>
            <div className="font-bold text-blue-900 dark:text-blue-200 mt-1">Held in Escrow</div>
            <div className="text-[11px] text-slate-500">Funds locked securely</div>
          </div>
          <div className="flex items-center justify-center text-slate-400 hidden sm:flex">→</div>
          <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900">
            <span className="text-[10px] text-emerald-600 font-bold">STEP 3</span>
            <div className="font-bold text-emerald-900 dark:text-emerald-200 mt-1">Funds Released</div>
            <div className="text-[11px] text-slate-500">Student confirms completion</div>
          </div>
        </div>
      </div>

      {/* Active Escrow Sessions for User */}
      {userBookings.length > 0 && (
        <div className="space-y-3">
          <h2 className="font-extrabold text-sm text-slate-900 dark:text-white flex items-center gap-2">
            <Clock className="w-4 h-4 text-blue-500" />
            <span>Your Active Learning Sessions & Escrow Status ({userBookings.length})</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {userBookings.map((b) => (
              <div key={b.id} className="glass-card rounded-2xl p-4 border border-blue-500/30 space-y-3">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-[10px] px-2 py-0.5 rounded-full font-bold bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300">
                      {b.escrowStatus.replace(/_/g, ' ')}
                    </span>
                    <h4 className="font-bold text-sm text-slate-900 dark:text-white mt-1.5">{b.subject}</h4>
                    <div className="text-xs text-slate-500">Mentor: {b.mentorName}</div>
                  </div>
                  <span className="text-xs font-extrabold text-slate-900 dark:text-white">₹{b.amountINR}</span>
                </div>

                <div className="flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{b.timeSlot}</span>
                  </div>

                  {b.escrowStatus === 'HELD_IN_ESCROW' ? (
                    <button
                      onClick={() => handleReleaseEscrow(b.id)}
                      className="px-3 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm transition-colors"
                    >
                      Confirm & Release Payout
                    </button>
                  ) : (
                    <span className="text-emerald-600 font-bold flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Payout Settled</span>
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Search & Subject Filters */}
      <div className="glass-card rounded-2xl p-4 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search mentors by name, subject (DSA, Python, VTU Math, OS), or college..."
            className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        <select
          value={selectedSubject}
          onChange={(e) => setSelectedSubject(e.target.value)}
          className="px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-semibold"
        >
          <option value="ALL">All Subjects</option>
          <option value="Data Structures">Data Structures & DAA</option>
          <option value="DBMS">DBMS & SQL</option>
          <option value="Machine Learning">Machine Learning</option>
          <option value="Operating Systems">Operating Systems</option>
          <option value="Interview">Mock Coding Interviews</option>
        </select>
      </div>

      {/* Mentors Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMentors.map((mentor) => (
          <div
            key={mentor.id}
            className="glass-card rounded-3xl p-6 border border-slate-200 dark:border-slate-800 space-y-4 hover:border-emerald-500/50 transition-all hover:shadow-xl flex flex-col justify-between"
          >
            <div className="space-y-3">
              {/* Profile Header */}
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={mentor.avatar}
                    alt={mentor.name}
                    className="w-12 h-12 rounded-2xl object-cover shadow-md"
                  />
                  <div>
                    <div className="flex items-center gap-1 font-bold text-sm text-slate-900 dark:text-white">
                      <span>{mentor.name}</span>
                      {mentor.isVerified && <CheckCircle2 className="w-4 h-4 text-blue-500" />}
                    </div>
                    <div className="text-[11px] text-slate-500">{mentor.college}</div>
                    <div className="text-[10px] text-blue-600 font-semibold">{mentor.year}</div>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-sm font-extrabold text-emerald-600 dark:text-emerald-400">
                    ₹{mentor.hourlyRateINR}
                  </div>
                  <div className="text-[10px] text-slate-400">per 1 hr session</div>
                </div>
              </div>

              {/* Bio */}
              <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed">
                {mentor.bio}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-2 py-2 px-2.5 rounded-xl bg-slate-50 dark:bg-slate-850/60 border border-slate-100 dark:border-slate-800 text-center text-xs">
                <div>
                  <div className="text-[10px] text-slate-400 font-semibold">Rating</div>
                  <div className="font-extrabold text-amber-500 flex items-center justify-center gap-0.5">
                    <Star className="w-3 h-3 fill-amber-500" />
                    <span>{mentor.rating}</span>
                  </div>
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 font-semibold">Sessions</div>
                  <div className="font-extrabold text-slate-900 dark:text-white">{mentor.completedSessions}+</div>
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 font-semibold">Completion</div>
                  <div className="font-extrabold text-emerald-600">{mentor.completionRatePercent}%</div>
                </div>
              </div>

              {/* Subjects taught */}
              <div className="space-y-1">
                <span className="text-[10px] uppercase font-bold text-slate-400">Subjects Taught:</span>
                <div className="flex flex-wrap gap-1">
                  {mentor.subjects.map((sub, i) => (
                    <span key={i} className="text-[10px] px-2 py-0.5 rounded-md bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 font-semibold">
                      {sub}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Action */}
            <div className="pt-2">
              <button
                onClick={() => handleStartBooking(mentor)}
                className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-colors flex items-center justify-center gap-1.5 shadow-sm"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Escrow Session (₹{mentor.hourlyRateINR})</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Booking Modal with Escrow Flow */}
      {bookingModalMentor && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
          <div className="glass-card rounded-3xl max-w-md w-full p-6 space-y-5 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
              <div>
                <span className="text-[10px] font-bold uppercase text-emerald-600">Escrow Protected Booking</span>
                <h3 className="font-extrabold text-base text-slate-900 dark:text-white">
                  Learn with {bookingModalMentor.name}
                </h3>
              </div>
              <button onClick={() => setBookingModalMentor(null)} className="text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>

            {paymentStep === 'details' && (
              <div className="space-y-4 text-xs">
                <div>
                  <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">Select Topic / Subject</label>
                  <select
                    value={selectedTopic}
                    onChange={(e) => setSelectedTopic(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 font-semibold"
                  >
                    {bookingModalMentor.subjects.map(s => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">Available Time Slot</label>
                  <div className="space-y-1.5">
                    {bookingModalMentor.availableSlots.map(slot => (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setSelectedSlot(slot)}
                        className={`w-full text-left p-2 rounded-xl border text-xs font-semibold transition-colors ${
                          selectedSlot === slot
                            ? 'bg-blue-600 text-white border-blue-600'
                            : 'border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300'
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 flex justify-between font-bold">
                  <span>Session Fee (1 hr):</span>
                  <span className="text-emerald-600">₹{bookingModalMentor.hourlyRateINR}</span>
                </div>

                <button
                  type="button"
                  onClick={handleProceedToPayment}
                  className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold transition-all shadow-md flex items-center justify-center gap-1.5"
                >
                  <span>Proceed to Escrow Deposit</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}

            {paymentStep === 'payment' && (
              <div className="space-y-4 text-xs">
                <div className="p-3 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-500/40 text-emerald-900 dark:text-emerald-200 space-y-1">
                  <div className="font-bold flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Escrow Vault Guarantee</span>
                  </div>
                  <p className="text-[11px] text-slate-600 dark:text-slate-400">
                    Your ₹{bookingModalMentor.hourlyRateINR} will be safely held in escrow and will NOT be transferred to the tutor until you attend the session and confirm satisfaction.
                  </p>
                </div>

                <div className="space-y-2">
                  <span className="font-bold text-slate-700 dark:text-slate-300">Payment Powered by Razorpay:</span>
                  <div className="p-3 rounded-xl border border-emerald-500/30 bg-emerald-50/50 dark:bg-emerald-950/30 text-[11px] text-slate-600 dark:text-slate-400 flex items-center justify-between">
                    <span className="font-semibold text-emerald-700 dark:text-emerald-300">Supports UPI, GPay, PhonePe, Cards, NetBanking</span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-600 text-white">Instant</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleConfirmEscrowPayment}
                  disabled={razorpayLoading}
                  className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold transition-all shadow-md flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-50"
                >
                  <Smartphone className="w-3.5 h-3.5" />
                  <span>
                    {razorpayLoading ? 'Launching Razorpay...' : `Pay & Lock ₹${bookingModalMentor.hourlyRateINR} with Razorpay`}
                  </span>
                </button>
              </div>
            )}

            {paymentStep === 'confirmed' && (
              <div className="text-center space-y-3 py-4 text-xs">
                <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="font-extrabold text-base text-slate-900 dark:text-white">
                  Booking Confirmed & Escrow Active!
                </h4>
                <p className="text-slate-500 dark:text-slate-400 text-xs">
                  A private virtual study room has been created for your session on <strong>{selectedSlot}</strong>.
                </p>
                <button
                  type="button"
                  onClick={() => setBookingModalMentor(null)}
                  className="px-6 py-2 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-xs"
                >
                  Done
                </button>
              </div>
            )}

          </div>
        </div>
      )}

      {/* Razorpay Simulator for Test Mode */}
      <RazorpaySimulatorModal
        isOpen={Boolean(simulatedModal?.isOpen)}
        orderData={simulatedModal?.orderData}
        options={simulatedModal?.options}
        onClose={closeSimulatedModal}
        onSuccess={handleSimulatedSuccess}
        loading={razorpayLoading}
      />
    </div>
  );
}
