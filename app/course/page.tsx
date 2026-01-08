'use client';

import { useState } from 'react';

export default function CoursePage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-black via-gray-900 to-black py-20 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="text-amber-500 font-semibold text-lg uppercase tracking-wider">The Peak Performance Blueprint</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Master the Psychology of Peak Performance and 10X Your Results in 90 Days
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Learn the Exact System Used by 50,000+ High Achievers to Break Through Plateaus and Achieve Exponential Growth
            </p>
            
            {/* Price & CTA */}
            <div className="mb-8">
              <div className="flex items-center justify-center gap-4 mb-6">
                <span className="text-3xl md:text-4xl text-gray-400 line-through">$2,997</span>
                <span className="text-5xl md:text-6xl font-bold text-amber-500">$997</span>
              </div>
              <p className="text-amber-500 font-semibold text-lg mb-8">Save $2,000 Today</p>
              <button className="bg-amber-500 hover:bg-amber-600 text-black font-bold text-xl px-12 py-5 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-2xl">
                Enroll Now
              </button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-white">
              <div className="flex items-center gap-2">
                <svg className="w-6 h-6 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">Lifetime Access</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-6 h-6 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">30-Day Money-Back Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              What You'll Learn
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Transform your mindset, habits, and results with proven frameworks from top performers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              "The exact mental frameworks top performers use to maintain peak state",
              "How to create goal-centered daily patterns that drive consistent results",
              "Psychology of intentional living and designing your ideal life",
              "Eliminate self-sabotage and limiting beliefs holding you back",
              "Optimize energy and focus for maximum productivity",
              "Sales mastery techniques that close more deals",
              "Leadership principles that inspire and motivate teams",
              "Habit stacking for exponential growth and transformation",
              "Time management systems for peak performance",
              "Building unshakeable confidence and self-belief"
            ].map((outcome, index) => (
              <div key={index} className="bg-gray-50 border-2 border-gray-200 rounded-lg p-6 hover:border-amber-500 transition-all duration-200">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-black font-medium text-lg">{outcome}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-black hover:bg-gray-800 text-white font-bold text-lg px-10 py-4 rounded-lg transition-all duration-200">
              Enroll Now - Start Your Transformation
            </button>
          </div>
        </div>
      </section>

      {/* Course Curriculum Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Course Curriculum
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              5 comprehensive modules with 40+ lessons designed to transform your performance
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                title: "Module 1: Psychology of Peak Performance",
                lessons: 8,
                icon: "🧠",
                description: "Master the mental frameworks and psychological principles that drive peak performance"
              },
              {
                title: "Module 2: Goal-Centered Daily Patterns",
                lessons: 7,
                icon: "🎯",
                description: "Create daily routines and patterns that align with your goals and accelerate results"
              },
              {
                title: "Module 3: Intentional Living System",
                lessons: 8,
                icon: "✨",
                description: "Design a life of purpose, freedom, and fulfillment through intentional choices"
              },
              {
                title: "Module 4: Sales & Leadership Excellence",
                lessons: 9,
                icon: "🚀",
                description: "Master sales techniques and leadership principles that drive business growth"
              },
              {
                title: "Module 5: Sustaining Peak Performance",
                lessons: 8,
                icon: "💪",
                description: "Build systems and habits to maintain peak performance long-term"
              }
            ].map((module, index) => (
              <div key={index} className="bg-white border-2 border-gray-200 rounded-lg p-6 md:p-8 hover:border-amber-500 transition-all duration-200">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="text-4xl">{module.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-bold text-black mb-2">
                        {module.title}
                      </h3>
                      <p className="text-gray-600 text-lg mb-3">{module.description}</p>
                      <p className="text-amber-600 font-semibold">{module.lessons} Lessons</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-black hover:bg-gray-800 text-white font-bold text-lg px-10 py-4 rounded-lg transition-all duration-200">
              Get Instant Access - $997
            </button>
          </div>
        </div>
      </section>

      {/* Bonus Materials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Bonus Materials (Worth $497)
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Exclusive resources to accelerate your transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Performance Planner PDF", icon: "📋" },
              { title: "Success Journal Templates", icon: "📔" },
              { title: "Goal-Setting Worksheets", icon: "📊" },
              { title: "Tracking Dashboard", icon: "📈" },
              { title: "Resource Library Access", icon: "📚" },
              { title: "Quarterly Live Q&A Sessions", icon: "🎤" }
            ].map((bonus, index) => (
              <div key={index} className="bg-gradient-to-br from-amber-50 to-amber-100 border-2 border-amber-300 rounded-lg p-6 text-center hover:shadow-lg transition-all duration-200">
                <div className="text-5xl mb-4">{bonus.icon}</div>
                <h3 className="text-xl font-bold text-black">{bonus.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who This Is For Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Who This Is For
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              This course is designed for high achievers ready to break through to the next level
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "Entrepreneurs earning $100K-$1M+ who feel stuck and want to scale to the next level",
              "Executives wanting to maximize their impact and lead with greater effectiveness",
              "High performers ready to eliminate inconsistency and achieve breakthrough results",
              "Business owners wanting proven systems to accelerate growth and performance"
            ].map((audience, index) => (
              <div key={index} className="bg-gray-900 border-2 border-gray-700 rounded-lg p-6 hover:border-amber-500 transition-all duration-200">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-white text-lg font-medium">{audience}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-amber-500 hover:bg-amber-600 text-black font-bold text-lg px-10 py-4 rounded-lg transition-all duration-200">
              Join 50,000+ High Achievers
            </button>
          </div>
        </div>
      </section>

      {/* About Naeem Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              About Your Instructor
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-lg p-8 md:p-12 border-2 border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-3xl font-bold text-black mb-4">Naeem Mahmood</h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Former top speaker and sales trainer for Tony Robbins, Naeem has delivered over 1,000 talks and trainings on the psychology of peak performance, impacting more than 50,000 lives across the United States.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center">
                      <span className="text-2xl">🎤</span>
                    </div>
                    <div>
                      <p className="font-bold text-black">1,000+ Talks Delivered</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center">
                      <span className="text-2xl">👥</span>
                    </div>
                    <div>
                      <p className="font-bold text-black">50,000+ Lives Impacted</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center">
                      <span className="text-2xl">🏆</span>
                    </div>
                    <div>
                      <p className="font-bold text-black">Former Tony Robbins Top Trainer</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t-2 border-gray-200 pt-8">
                <p className="text-lg text-gray-700 font-semibold mb-4">Trusted by Leading Organizations:</p>
                <div className="flex flex-wrap gap-4 text-gray-600">
                  <span className="bg-white px-4 py-2 rounded border border-gray-300">SoFi</span>
                  <span className="bg-white px-4 py-2 rounded border border-gray-300">US Army</span>
                  <span className="bg-white px-4 py-2 rounded border border-gray-300">JP Morgan</span>
                  <span className="bg-white px-4 py-2 rounded border border-gray-300">Salesforce</span>
                  <span className="bg-white px-4 py-2 rounded border border-gray-300">Northwestern Medicine</span>
                  <span className="bg-white px-4 py-2 rounded border border-gray-300">University of Alabama</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              What Students Are Saying
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Chen",
                role: "CEO, Tech Startup",
                text: "This course completely transformed how I approach my business and life. The frameworks are practical and immediately applicable. I've seen a 3x increase in my revenue since implementing these strategies.",
                rating: 5
              },
              {
                name: "Michael Rodriguez",
                role: "Sales Director",
                text: "Naeem's insights on peak performance psychology are game-changing. The sales mastery module alone was worth 10x the investment. My team's performance has never been better.",
                rating: 5
              },
              {
                name: "Jennifer Park",
                role: "Executive Coach",
                text: "As someone who coaches others, I was blown away by the depth and quality of this course. The intentional living system has become a cornerstone of my practice. Highly recommend!",
                rating: 5
              },
              {
                name: "David Thompson",
                role: "Entrepreneur",
                text: "I was stuck at $500K revenue for 2 years. After implementing the goal-centered patterns from this course, I hit $1.2M in 8 months. This is the real deal.",
                rating: 5
              },
              {
                name: "Lisa Anderson",
                role: "VP of Operations",
                text: "The leadership principles in this course have transformed how I lead my team. We've achieved record-breaking results, and my team is more engaged than ever.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-amber-500 transition-all duration-200">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic leading-relaxed">"{testimonial.text}"</p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-bold text-black">{testimonial.name}</p>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Choose Your Investment
            </h2>
            <p className="text-xl text-gray-300">
              Limited time pricing - Save $2,000 today
            </p>
          </div>

          <div className="bg-gray-900 border-4 border-amber-500 rounded-lg p-8 md:p-12 mb-8">
            <div className="text-center">
              <div className="inline-block bg-amber-500 text-black px-4 py-2 rounded-full text-sm font-bold mb-4">
                BEST VALUE
              </div>
              <div className="mb-6">
                <div className="flex items-center justify-center gap-4 mb-2">
                  <span className="text-2xl text-gray-400 line-through">$2,997</span>
                  <span className="text-5xl md:text-6xl font-bold text-amber-500">$997</span>
                </div>
                <p className="text-gray-300 text-lg">One-Time Payment</p>
                <p className="text-amber-500 font-semibold mt-2">Save $2,000</p>
              </div>
              <button className="w-full bg-amber-500 hover:bg-amber-600 text-black font-bold text-xl px-8 py-5 rounded-lg transition-all duration-200 transform hover:scale-105 mb-6">
                Enroll Now - $997
              </button>
              <p className="text-gray-400 text-sm">✓ Lifetime Access ✓ 30-Day Money-Back Guarantee</p>
            </div>
          </div>

          <div className="bg-gray-900 border-2 border-gray-700 rounded-lg p-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Payment Plan Option</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">3 x $397</span>
                <p className="text-gray-300 mt-2">Total: $1,191 (3 monthly payments)</p>
              </div>
              <button className="w-full bg-white hover:bg-gray-100 text-black font-bold text-lg px-8 py-4 rounded-lg transition-all duration-200">
                Choose Payment Plan
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                question: "How long do I have access to the course?",
                answer: "You get lifetime access to all course materials, including future updates. Once you enroll, the course is yours forever."
              },
              {
                question: "What is your refund policy?",
                answer: "We offer a 30-day money-back guarantee. If you're not completely satisfied with the course, simply contact us within 30 days for a full refund, no questions asked."
              },
              {
                question: "Is there ongoing support?",
                answer: "Yes! You'll have access to quarterly live Q&A sessions with Naeem, plus access to our exclusive resource library and community."
              },
              {
                question: "How long does it take to complete the course?",
                answer: "The course is self-paced, but most students complete it over 8-12 weeks. You can go at your own speed and revisit any lessons as needed."
              },
              {
                question: "What format is the course in?",
                answer: "The course includes video lessons, downloadable worksheets, PDF guides, and bonus materials. All content is accessible through our online platform."
              },
              {
                question: "Can I access the course on mobile?",
                answer: "Yes! The course platform is fully mobile-responsive, so you can learn on any device - desktop, tablet, or smartphone."
              },
              {
                question: "Are there any prerequisites?",
                answer: "No prerequisites required! The course is designed for anyone ready to take their performance to the next level, regardless of current experience or background."
              },
              {
                question: "What if I'm not satisfied with the course?",
                answer: "We stand behind our course with a 30-day money-back guarantee. If you're not seeing value, we'll refund your investment in full."
              }
            ].map((faq, index) => (
              <div key={index} className="border-2 border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-6 bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex justify-between items-center"
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
                  <div className="p-6 bg-white border-t border-gray-200">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to 10X Your Results?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join 50,000+ high achievers who have transformed their performance with this proven system
          </p>
          <div className="mb-8">
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="text-2xl text-gray-400 line-through">$2,997</span>
              <span className="text-5xl font-bold text-amber-500">$997</span>
            </div>
            <p className="text-amber-500 font-semibold mb-6">Save $2,000 Today</p>
            <button className="bg-amber-500 hover:bg-amber-600 text-black font-bold text-xl px-12 py-5 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-2xl">
              Enroll Now - Start Your Transformation
            </button>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-white text-sm">
            <span>✓ Lifetime Access</span>
            <span>✓ 30-Day Money-Back Guarantee</span>
            <span>✓ Instant Access</span>
            <span>✓ Bonus Materials Included</span>
          </div>
        </div>
      </section>
    </div>
  );
}
