'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function AcademyPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    annualRevenue: '',
    industry: '',
    biggestChallenge: '',
    whyJoin: '',
    investmentReady: '',
    bestCallTime: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear errors when user starts typing
    if (submitError) setSubmitError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    setSubmitSuccess(false);

    try {
      const response = await fetch('/api/submit-application', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit application');
      }

      // Success - show success message and reset form
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        annualRevenue: '',
        industry: '',
        biggestChallenge: '',
        whyJoin: '',
        investmentReady: '',
        bestCallTime: ''
      });

      // Show success alert
      alert('Application submitted! We will contact you shortly.');

      // Scroll to top of form
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitError(error instanceof Error ? error.message : 'An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const modules = [
    'The Peak Performance Mindset',
    'The Science of Achievement',
    'Overcoming Limiting Beliefs',
    'The Power of Identity',
    'Emotional Mastery',
    'The Tony Robbins Method',
    'Building Unshakeable Confidence',
    'The Power of Goal-Centered Living',
    'Setting Compelling Goals',
    'The 90-Day Sprint Method',
    'What is Intentional Living?',
    'Your Life Vision',
    'Decision-Making Framework',
    'Time Blocking for Freedom',
    'The Psychology of Influence',
    'High-Performance Sales Mindset',
    'Communicating with Impact',
    'Executive Presence',
    'The Long Game',
    'Avoiding Burnout'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-black via-gray-900 to-black py-20 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left">
              <div className="inline-block mb-4">
                <span className="text-amber-500 font-semibold text-lg uppercase tracking-wider">Limited to 15 Spots Per Cohort</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                The Peak Performers Academy
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
                An 8-Week Intensive for Entrepreneurs & Executives Ready to <span className="text-amber-500 font-bold">2-5X Their Performance</span>
              </p>
              
              {/* Credibility Badges */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6 mb-8">
                <div className="flex items-center gap-2 text-white">
                  <svg className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-semibold">Former Tony Robbins Top Trainer</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <svg className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-semibold">1,000+ Talks Delivered</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <svg className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-semibold">50,000+ Lives Impacted</span>
                </div>
              </div>

              {/* CTA */}
              <div className="flex justify-center lg:justify-start">
                <a 
                  href="#application" 
                  className="inline-flex items-center justify-center px-10 py-5 bg-amber-500 hover:bg-amber-600 text-black font-bold text-xl rounded-lg transition-all duration-200 transform hover:scale-105 shadow-2xl"
                >
                  Apply for Next Cohort
                </a>
              </div>
            </div>

            {/* Photo */}
            <div className="flex justify-center lg:justify-end">
              <Image
                src="/D3A033DA-8AD5-48D9-9E6C-E85EBC568441.JPG"
                width={450}
                height={450}
                alt="Naeem Mahmood - Peak Performance Coach"
                className="rounded-2xl border-4 border-amber-500 shadow-2xl object-cover w-[300px] h-[300px] md:w-[450px] md:h-[450px]"
                priority
                sizes="(max-width: 768px) 300px, 450px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-20 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Are You Stuck at a Performance Plateau?
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              You're working harder than ever, but the results aren't coming. Revenue has plateaued. Burnout is creeping in. You feel stuck, knowing you're capable of more but unsure how to break through.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              'Working longer hours without proportional results',
              'Revenue stuck at the same level despite your best efforts',
              'Feeling burnt out from the constant grind',
              'Knowing you have more potential but not sure how to unlock it',
              'Missing the systems and frameworks to scale sustainably',
              'Lacking the accountability and support to break through plateaus'
            ].map((painPoint, index) => (
              <div key={index} className="bg-gray-50 border-2 border-gray-200 rounded-lg p-6 hover:border-amber-500 transition-all duration-200">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-6 h-6 bg-black rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm font-bold">!</span>
                  </div>
                  <p className="text-black font-medium text-lg">{painPoint}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Solution Section */}
      <section className="py-20 bg-black text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              The Peak Performers Academy: Your 8-Week Transformation System
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              An intimate, high-touch intensive designed for entrepreneurs and executives who are ready to break through performance plateaus and achieve exponential growth. Limited to <span className="text-amber-500 font-bold">15 participants per cohort</span> for maximum impact and personalized attention.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
            {[
              {
                title: 'Only 4 Live Calls',
                description: 'Bi-weekly 90-minute group coaching sessions (weeks 1, 3, 5, 7). No weekly meetings to juggle. Perfect for busy executives who travel.',
                icon: '📞'
              },
              {
                title: 'Small Cohort (15 Max)',
                description: 'Intimate, high-touch environment. Get personal attention, build deep connections, and learn from peers at your level.',
                icon: '👥'
              },
              {
                title: 'Tony Robbins Frameworks',
                description: 'Learn the exact systems and methodologies used by the world\'s top performers, delivered by a former Tony Robbins trainer.',
                icon: '🏆'
              }
            ].map((differentiator, index) => (
              <div key={index} className="bg-gray-900 border-2 border-gray-700 rounded-lg p-6 hover:border-amber-500 transition-all duration-200">
                <div className="text-4xl mb-4">{differentiator.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-3">{differentiator.title}</h3>
                <p className="text-gray-300 leading-relaxed">{differentiator.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-gray-900 border-2 border-amber-500 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-amber-500 mb-4 text-center">Quarterly Cohorts</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              {['February', 'May', 'August', 'November'].map((month, index) => (
                <div key={index} className="bg-black rounded-lg p-4">
                  <p className="text-white font-bold text-lg">{month}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-20 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              What's Included
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need for a complete transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Live Calls */}
            <div className="bg-gray-50 border-2 border-black rounded-lg p-8">
              <h3 className="text-2xl font-bold text-black mb-4">4 Live Bi-Weekly Group Coaching Calls</h3>
              <p className="text-gray-700 mb-4">90 minutes each | Weeks 1, 3, 5, 7</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-black">Deep-dive coaching sessions</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-black">Q&A and personalized guidance</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-black">Recorded for replay access</span>
                </li>
              </ul>
            </div>

            {/* Pre-recorded Modules */}
            <div className="bg-gray-50 border-2 border-black rounded-lg p-8">
              <h3 className="text-2xl font-bold text-black mb-4">20 Pre-Recorded Video Modules</h3>
              <p className="text-gray-700 mb-4">Learn at your own pace with lifetime access</p>
              <ul className="space-y-2 max-h-96 overflow-y-auto">
                {modules.map((module, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-black">Module {index + 1}: {module}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Private Community */}
            <div className="bg-gray-50 border-2 border-black rounded-lg p-8">
              <h3 className="text-2xl font-bold text-black mb-4">Private Community Access</h3>
              <p className="text-gray-700 mb-4">Connect with high-achieving peers in an exclusive community</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-black">Ongoing peer support and networking</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-black">Share wins and get feedback</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-black">Access after graduation</span>
                </li>
              </ul>
            </div>

            {/* Implementation Workbooks */}
            <div className="bg-gray-50 border-2 border-black rounded-lg p-8">
              <h3 className="text-2xl font-bold text-black mb-4">Implementation Workbooks & Templates</h3>
              <p className="text-gray-700 mb-4">20+ downloadable resources to accelerate your implementation</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-black">Goal-setting frameworks</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-black">Time-blocking templates</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-black">Decision-making frameworks</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-black">Performance tracking tools</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Alumni Masterminds */}
          <div className="bg-amber-50 border-2 border-amber-500 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-black mb-4">Monthly Alumni Masterminds</h3>
            <p className="text-gray-700 mb-2">
              After graduation, join exclusive monthly mastermind sessions to continue your growth journey.
            </p>
            <p className="text-black font-semibold">
              <span className="text-amber-600">$197/month</span> (optional after graduation)
            </p>
          </div>
        </div>
      </section>

      {/* Who This Is For Section */}
      <section className="py-20 bg-black text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Who This Is For
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              This intensive is designed for high-performers ready to break through to the next level
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
            {[
              '✅ Entrepreneurs earning $200K-$2M+ annually',
              '✅ Executives & Leaders ready to elevate',
              '✅ Business Owners scaling without burnout',
              '✅ High-Performers seeking sustainable systems'
            ].map((audience, index) => (
              <div key={index} className="bg-gray-900 border-2 border-gray-700 rounded-lg p-6 hover:border-amber-500 transition-all duration-200">
                <p className="text-white text-lg font-medium">{audience}</p>
              </div>
            ))}
          </div>

          <div className="bg-gray-900 border-2 border-red-500 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-red-400 mb-4 text-center">Not For:</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              {['❌ Quick fixes', '❌ Beginners', '❌ Those not willing to implement'].map((item, index) => (
                <div key={index} className="bg-black rounded-lg p-4">
                  <p className="text-white font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Credibility Section */}
      <section className="py-20 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Why Learn from Naeem Mahmood?
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-lg p-8 md:p-12 border-2 border-black mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-3xl font-bold text-black mb-4">Naeem Mahmood</h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Former top speaker and sales trainer for <span className="font-bold">Tony Robbins</span>, Naeem has delivered over <span className="font-bold">1,000 talks</span> and trainings on the psychology of peak performance, impacting more than <span className="font-bold">50,000 lives</span> across the United States.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    He has advised some of the world's leading organizations including <span className="font-bold">SoFi, U.S. Army, Expert Dojo, Salesforce, Soho House, University of Alabama, Northwestern Medicine, and JP Morgan</span>.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-bold text-black">1,000+ Talks Delivered</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-bold text-black">50,000+ Lives Impacted</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-bold text-black">Former Tony Robbins Top Trainer</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <Image
                    src="/D3A033DA-8AD5-48D9-9E6C-E85EBC568441.JPG"
                    width={350}
                    height={350}
                    alt="Naeem Mahmood"
                    className="rounded-2xl border-4 border-black shadow-2xl object-cover w-full max-w-[350px] h-[350px]"
                  />
                </div>
              </div>

              <div className="border-t-2 border-black pt-8">
                <p className="text-lg text-gray-700 font-semibold mb-6">Trusted by Leading Organizations:</p>
                <div className="flex flex-wrap justify-center gap-4">
                  {['SoFi', 'U.S. Army', 'JP Morgan', 'Salesforce', 'Northwestern Medicine', 'University of Alabama', 'Expert Dojo', 'Soho House'].map((org, index) => (
                    <div key={index} className="bg-white px-6 py-3 rounded border-2 border-black font-semibold text-black hover:bg-amber-500 transition-colors duration-200">
                      {org}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Signature Quote */}
            <div className="bg-black border-4 border-amber-500 rounded-lg p-8 text-center">
              <blockquote className="text-xl md:text-2xl text-white italic leading-relaxed">
                "Anyone can alter the course of their life by developing goal-centered day-to-day patterns to achieve success in their personal and professional life."
              </blockquote>
              <p className="text-amber-500 font-bold mt-4 text-lg">— Naeem Mahmood</p>
            </div>
          </div>
        </div>
      </section>

      {/* Transformation Section */}
      <section className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              What You'll Achieve in 8 Weeks
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The transformation outcomes you can expect
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: 'Clarity on Your Vision',
                description: 'Define a compelling vision for your personal and professional life that drives daily action'
              },
              {
                title: 'Goal-Centered Daily Systems',
                description: 'Build sustainable patterns and routines that automatically move you toward your goals'
              },
              {
                title: 'Sustainable Peak Performance',
                description: 'Eliminate burnout while achieving more through proven frameworks and systems'
              },
              {
                title: 'Leadership Mastery',
                description: 'Develop executive presence, communication skills, and influence to lead at the next level'
              },
              {
                title: 'Sales Excellence',
                description: 'Master high-performance sales mindset and techniques to accelerate revenue growth'
              },
              {
                title: 'Unshakeable Confidence',
                description: 'Build confidence through proven methodologies and overcome limiting beliefs'
              }
            ].map((outcome, index) => (
              <div key={index} className="bg-white border-2 border-black rounded-lg p-6 hover:border-amber-500 transition-all duration-200">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center">
                    <span className="text-black font-bold text-lg">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black mb-2">{outcome.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{outcome.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Section */}
      <section className="py-20 bg-black text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Your Investment in Peak Performance
            </h2>
          </div>

          <div className="bg-gray-900 border-4 border-amber-500 rounded-lg p-8 md:p-12 mb-8">
            <div className="text-center">
              <div className="mb-6">
                <span className="text-5xl md:text-6xl font-bold text-amber-500">$3,500</span>
              </div>
              <p className="text-xl text-gray-300 mb-8">One-Time Payment</p>
              <div className="bg-black rounded-lg p-6 mb-8">
                <p className="text-lg text-gray-300 mb-2">Or choose the payment plan:</p>
                <p className="text-3xl font-bold text-white">3 x $1,200</p>
                <p className="text-gray-400 text-sm mt-2">(Total: $3,600)</p>
              </div>

              {/* ROI Framing */}
              <div className="bg-amber-900 border-2 border-amber-500 rounded-lg p-6 mb-8">
                <p className="text-lg text-white mb-2">
                  <span className="font-bold">ROI Framing:</span>
                </p>
                <p className="text-xl text-amber-300">
                  If you're earning $500K/year and increase by <span className="font-bold">20%</span>, that's <span className="font-bold text-amber-500">$100K additional revenue</span>
                </p>
              </div>

              <a 
                href="#application"
                className="inline-block w-full bg-amber-500 hover:bg-amber-600 text-black font-bold text-xl px-8 py-5 rounded-lg transition-all duration-200 transform hover:scale-105 mb-6"
              >
                Apply Now
              </a>
              <p className="text-amber-500 font-semibold">✓ 100% Satisfaction Guarantee after first call</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                question: 'What is the time commitment?',
                answer: 'The academy includes 4 live bi-weekly calls (90 minutes each) during weeks 1, 3, 5, and 7. Plus, you\'ll have access to 20 pre-recorded modules that you can watch at your own pace. This structure is designed to be flexible for busy executives who travel frequently.'
              },
              {
                question: 'What if I miss a live call?',
                answer: 'All live calls are recorded and available for replay. You\'ll have lifetime access to all recordings, so you can catch up on any sessions you miss.'
              },
              {
                question: 'How is this different from other programs?',
                answer: 'The Peak Performers Academy is limited to 15 participants per cohort for maximum personalization and impact. We only meet 4 times over 8 weeks (not weekly), making it perfect for busy executives. Plus, you learn directly from a former Tony Robbins trainer who has delivered 1,000+ talks and impacted 50,000+ lives.'
              },
              {
                question: 'What happens after the 8 weeks?',
                answer: 'After graduation, you\'ll maintain access to all course materials for life. You\'ll also have the option to join monthly Alumni Masterminds ($197/month) to continue your growth journey with the community.'
              },
              {
                question: 'What is your refund policy?',
                answer: 'We offer a 100% satisfaction guarantee after the first call. If you attend the first live session and feel it\'s not the right fit, we\'ll provide a full refund.'
              },
              {
                question: 'When are the next cohorts?',
                answer: 'We run quarterly cohorts in February, May, August, and November. Spots are limited to 15 participants per cohort to ensure high-touch, personalized attention.'
              },
              {
                question: 'What if I\'m not sure I\'m ready?',
                answer: 'If you\'re earning $200K-$2M+ annually and feel stuck at a performance plateau, this program is designed for you. We\'re looking for entrepreneurs and executives who are committed to implementation and ready to invest in their growth. Apply now and we\'ll have a conversation to determine if it\'s the right fit.'
              }
            ].map((faq, index) => (
              <div key={index} className="border-2 border-black rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-6 bg-gray-50 hover:bg-amber-50 transition-colors duration-200 flex justify-between items-center"
                >
                  <span className="font-bold text-lg text-black pr-4">{faq.question}</span>
                  <svg
                    className={`w-6 h-6 text-black flex-shrink-0 transform transition-transform duration-200 ${
                      activeFaq === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {activeFaq === index && (
                  <div className="p-6 bg-white border-t-2 border-black">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section id="application" className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Apply for Next Cohort
            </h2>
            <p className="text-xl text-gray-600">
              Limited to 15 spots. Submit your application below.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white border-2 border-black rounded-lg p-8 md:p-12">
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-black font-semibold mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-amber-500 focus:outline-none text-black"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-black font-semibold mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-amber-500 focus:outline-none text-black"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-black font-semibold mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-amber-500 focus:outline-none text-black"
                  placeholder="(555) 123-4567"
                />
              </div>

              <div>
                <label htmlFor="annualRevenue" className="block text-black font-semibold mb-2">
                  Annual Revenue *
                </label>
                <select
                  id="annualRevenue"
                  name="annualRevenue"
                  required
                  value={formData.annualRevenue}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-amber-500 focus:outline-none text-black"
                >
                  <option value="">Select your annual revenue range</option>
                  <option value="200k-500k">$200K - $500K</option>
                  <option value="500k-1m">$500K - $1M</option>
                  <option value="1m-2m">$1M - $2M</option>
                  <option value="2m+">$2M+</option>
                </select>
              </div>

              <div>
                <label htmlFor="industry" className="block text-black font-semibold mb-2">
                  Industry *
                </label>
                <input
                  type="text"
                  id="industry"
                  name="industry"
                  required
                  value={formData.industry}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-amber-500 focus:outline-none text-black"
                  placeholder="Technology, Finance, Consulting, etc."
                />
              </div>

              <div>
                <label htmlFor="biggestChallenge" className="block text-black font-semibold mb-2">
                  What is your biggest challenge right now? *
                </label>
                <textarea
                  id="biggestChallenge"
                  name="biggestChallenge"
                  required
                  rows={4}
                  value={formData.biggestChallenge}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-amber-500 focus:outline-none text-black"
                  placeholder="Describe your current performance plateau or challenge..."
                />
              </div>

              <div>
                <label htmlFor="whyJoin" className="block text-black font-semibold mb-2">
                  Why do you want to join The Peak Performers Academy? *
                </label>
                <textarea
                  id="whyJoin"
                  name="whyJoin"
                  required
                  rows={4}
                  value={formData.whyJoin}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-amber-500 focus:outline-none text-black"
                  placeholder="What outcomes are you seeking from this program?"
                />
              </div>

              <div>
                <label htmlFor="investmentReady" className="block text-black font-semibold mb-2">
                  Are you ready to invest in your transformation? *
                </label>
                <select
                  id="investmentReady"
                  name="investmentReady"
                  required
                  value={formData.investmentReady}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-amber-500 focus:outline-none text-black"
                >
                  <option value="">Select an option</option>
                  <option value="yes-full">Yes, ready to invest $3,500</option>
                  <option value="yes-payment-plan">Yes, prefer 3 payments of $1,200</option>
                  <option value="considering">Considering, would like to learn more</option>
                </select>
              </div>

              <div>
                <label htmlFor="bestCallTime" className="block text-black font-semibold mb-2">
                  Best time for a call (if selected)
                </label>
                <select
                  id="bestCallTime"
                  name="bestCallTime"
                  value={formData.bestCallTime}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-amber-500 focus:outline-none text-black"
                >
                  <option value="">Select preferred time</option>
                  <option value="morning">Morning (8 AM - 12 PM EST)</option>
                  <option value="afternoon">Afternoon (12 PM - 5 PM EST)</option>
                  <option value="evening">Evening (5 PM - 8 PM EST)</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>

              {submitError && (
                <div className="bg-red-50 border-2 border-red-500 rounded-lg p-4">
                  <p className="text-red-700 font-semibold">Error: {submitError}</p>
                  <p className="text-red-600 text-sm mt-1">Please try again or contact us directly if the problem persists.</p>
                </div>
              )}

              {submitSuccess && (
                <div className="bg-green-50 border-2 border-green-500 rounded-lg p-4">
                  <p className="text-green-700 font-semibold">✓ Application submitted successfully!</p>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-black hover:bg-gray-800 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-bold text-xl px-8 py-5 rounded-lg transition-all duration-200 transform hover:scale-105 disabled:transform-none"
              >
                {isSubmitting ? 'Submitting Application...' : 'Submit Application'}
              </button>

              <p className="text-sm text-gray-600 text-center">
                By submitting this application, you agree to be contacted regarding The Peak Performers Academy.
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* Urgency Section */}
      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Limited to 15 Spots - Apply Today
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            The next cohort starts soon. Don't miss your chance to join this exclusive intensive.
          </p>
          
          <div className="bg-amber-900 border-4 border-amber-500 rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-amber-500 mb-4">Founding Members Bonus</h3>
            <p className="text-lg text-white mb-2">
              Early enrollees receive exclusive bonuses:
            </p>
            <ul className="text-white text-left max-w-md mx-auto space-y-2">
              <li className="flex items-start gap-2">
                <svg className="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Priority application review</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Early access to pre-recorded modules</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Exclusive welcome session with Naeem</span>
              </li>
            </ul>
          </div>

          <a 
            href="#application"
            className="inline-flex items-center justify-center px-12 py-6 bg-amber-500 hover:bg-amber-600 text-black font-bold text-2xl rounded-lg transition-all duration-200 transform hover:scale-105 shadow-2xl"
          >
            Apply Now - Secure Your Spot
          </a>

          <p className="text-amber-500 font-semibold mt-6 text-lg">
            Applications are reviewed on a first-come, first-served basis
          </p>
        </div>
      </section>
    </div>
  );
}
