"use client";

import React, { useState, useEffect } from "react";

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-6 space-y-3 text-slate-200">
      {items.map((item, index) => (
        <li key={index} className="flex gap-3">
          <span className="mt-1 text-blue-400">✓</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function SectionTitle({
  kicker,
  title,
  subtitle,
}: {
  kicker?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {kicker ? (
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
          {kicker}
        </p>
      ) : null}
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-lg leading-relaxed text-slate-300">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="group rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900/60 to-slate-900/30 p-8 shadow-lg transition-all duration-300 hover:border-blue-500/50 hover:shadow-blue-500/10">
      <div className="mb-4 text-4xl">{icon}</div>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="mt-3 text-base leading-relaxed text-slate-300">
        {description}
      </p>
    </div>
  );
}

function TestimonialCard({
  quote,
  author,
  role,
}: {
  quote: string;
  author: string;
  role: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-lg">
      <p className="text-base italic leading-relaxed text-slate-200">
        &quot;{quote}&quot;
      </p>
      <div className="mt-4">
        <p className="font-semibold text-white">{author}</p>
        <p className="text-sm text-slate-400">{role}</p>
      </div>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-6 transition-all duration-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-start justify-between gap-4 text-left"
      >
        <span className="text-lg font-semibold text-white">{question}</span>
        <span className="text-2xl text-blue-400 transition-transform duration-200" style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}>
          +
        </span>
      </button>
      {isOpen && (
        <p className="mt-4 text-base leading-relaxed text-slate-300">
          {answer}
        </p>
      )}
    </div>
  );
}

export default function PeakLifeOS() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      {/* Navigation */}
      <header
        className={`sticky top-0 z-50 border-b transition-all duration-300 ${
          scrolled
            ? "border-slate-800 bg-slate-950/90 backdrop-blur-lg"
            : "border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Peak Life OS
          </div>

          <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a className="hover:text-white transition-colors" href="#features">
              Features
            </a>
            <a className="hover:text-white transition-colors" href="#benefits">
              Benefits
            </a>
            <a className="hover:text-white transition-colors" href="#testimonials">
              Testimonials
            </a>
            <a className="hover:text-white transition-colors" href="#pricing">
              Pricing
            </a>
            <a className="hover:text-white transition-colors" href="#faq">
              FAQ
            </a>
          </nav>

          <a
            href="#get-started"
            className="rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-2 text-sm font-semibold text-white transition-all hover:from-blue-600 hover:to-purple-600 hover:shadow-lg hover:shadow-blue-500/20"
          >
            Get Started
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 pt-20 pb-24 md:pt-32 md:pb-32">
        {/* Animated Background */}
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl animate-pulse" />
          <div className="absolute right-1/4 top-1/4 h-96 w-96 rounded-full bg-purple-500/20 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative mx-auto max-w-6xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400 animate-fade-in">
            Transform Your Life, Elevate Your Performance
          </p>

          <h1 className="mt-6 text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl animate-fade-in-up">
            Master Your Life with{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Peak Life OS
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-relaxed text-slate-300 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            The ultimate productivity and life optimization system designed for
            high-achievers who refuse to settle for average. Build the life you
            deserve with proven frameworks, cutting-edge strategies, and
            personalized guidance.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <a
              href="#get-started"
              className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-blue-500/30 transition-all hover:from-blue-600 hover:to-purple-600 hover:shadow-xl hover:shadow-blue-500/40"
            >
              Start Your Transformation
            </a>
            <a
              href="#learn-more"
              className="inline-flex items-center justify-center rounded-xl border border-slate-700 px-8 py-4 text-lg font-semibold text-slate-200 transition-all hover:border-slate-600 hover:bg-slate-900/50"
            >
              Learn More
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span>10,000+ Members</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span>94% Success Rate</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span>30-Day Guarantee</span>
            </div>
          </div>
        </div>
      </section>

      {/* What is Peak Life OS */}
      <section id="learn-more" className="border-t border-slate-900 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionTitle
            kicker="What is Peak Life OS?"
            title="Your Complete Life Optimization System"
            subtitle="Peak Life OS is more than just a productivity tool—it's a comprehensive operating system for your life. We combine proven methodologies, cutting-edge science, and personalized coaching to help you achieve peak performance in every area of your life."
          />

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-white">
                Crystal Clear Goals
              </h3>
              <p className="mt-2 text-base text-slate-300">
                Define and achieve your most ambitious goals with our proven
                goal-setting frameworks
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-white">
                Peak Performance
              </h3>
              <p className="mt-2 text-base text-slate-300">
                Optimize your energy, focus, and productivity with science-backed
                protocols
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                <span className="text-3xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold text-white">
                Accelerated Growth
              </h3>
              <p className="mt-2 text-base text-slate-300">
                Transform faster with personalized coaching and accountability
                systems
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionTitle
            title="Is Peak Life OS Right for You?"
            subtitle="This program is designed for ambitious individuals who are ready to take their life to the next level."
          />

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-green-900/50 bg-gradient-to-br from-green-900/20 to-transparent p-8">
              <h3 className="text-2xl font-bold text-white">
                ✓ Perfect For You If:
              </h3>
              <BulletList
                items={[
                  "You're an entrepreneur, executive, or high-achiever",
                  "You want to optimize all areas of your life simultaneously",
                  "You're ready to invest in yourself and your future",
                  "You value systems and frameworks over quick fixes",
                  "You're coachable and willing to do the work",
                  "You want to join a community of like-minded achievers",
                ]}
              />
            </div>

            <div className="rounded-2xl border border-red-900/50 bg-gradient-to-br from-red-900/20 to-transparent p-8">
              <h3 className="text-2xl font-bold text-white">
                ✗ Not Right For You If:
              </h3>
              <BulletList
                items={[
                  "You're looking for a magic pill or overnight success",
                  "You're not willing to invest time and effort",
                  "You prefer excuses over taking responsibility",
                  "You're satisfied with mediocrity",
                  "You're not open to feedback and coaching",
                  "You're looking for free content instead of real transformation",
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section id="features" className="border-t border-slate-900 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionTitle
            kicker="Key Features"
            title="Everything You Need to Reach Peak Performance"
            subtitle="Peak Life OS provides you with all the tools, frameworks, and support you need to transform your life."
          />

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon="🧠"
              title="Mindset Mastery"
              description="Develop an unshakeable mindset with proven mental frameworks, daily practices, and mindfulness techniques."
            />

            <FeatureCard
              icon="📊"
              title="Productivity Systems"
              description="Master time management, prioritization, and execution with our battle-tested productivity frameworks."
            />

            <FeatureCard
              icon="💪"
              title="Health & Fitness"
              description="Optimize your physical performance with personalized workout plans, nutrition guidance, and recovery protocols."
            />

            <FeatureCard
              icon="💰"
              title="Wealth Building"
              description="Accelerate your financial growth with proven strategies for income optimization and wealth creation."
            />

            <FeatureCard
              icon="🤝"
              title="Relationship Excellence"
              description="Build deeper connections and improve all your relationships with communication frameworks and emotional intelligence training."
            />

            <FeatureCard
              icon="🎓"
              title="Continuous Learning"
              description="Access our library of courses, workshops, and masterclasses on personal development and professional growth."
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionTitle
            title="Transform Every Area of Your Life"
            subtitle="When you join Peak Life OS, you're not just getting a program—you're investing in a complete life transformation."
          />

          <div className="mt-16 space-y-6">
            <div className="rounded-2xl border border-slate-800 bg-gradient-to-r from-slate-900/60 to-slate-900/30 p-8">
              <h3 className="text-2xl font-bold text-white">
                🎯 Clarity & Direction
              </h3>
              <p className="mt-3 text-lg text-slate-300">
                Finally know exactly what you want and create a clear roadmap to
                get there. No more confusion, overwhelm, or wasted effort.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-gradient-to-r from-slate-900/60 to-slate-900/30 p-8">
              <h3 className="text-2xl font-bold text-white">
                ⚡ Peak Performance
              </h3>
              <p className="mt-3 text-lg text-slate-300">
                Unlock your full potential with optimized energy, laser focus, and
                consistent high performance in everything you do.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-gradient-to-r from-slate-900/60 to-slate-900/30 p-8">
              <h3 className="text-2xl font-bold text-white">
                🚀 Accelerated Results
              </h3>
              <p className="mt-3 text-lg text-slate-300">
                Achieve in months what would normally take years. Our proven
                systems compress timelines and eliminate trial and error.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-gradient-to-r from-slate-900/60 to-slate-900/30 p-8">
              <h3 className="text-2xl font-bold text-white">
                🤝 Elite Community
              </h3>
              <p className="mt-3 text-lg text-slate-300">
                Connect with a network of ambitious, like-minded individuals who
                will challenge, support, and inspire you to reach new heights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Testimonials */}
      <section id="testimonials" className="border-t border-slate-900 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionTitle
            kicker="Success Stories"
            title="Real Results from Real People"
            subtitle="Don't just take our word for it—see what our members have achieved with Peak Life OS."
          />

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <TestimonialCard
              quote="Peak Life OS completely transformed how I operate. I've 3x'd my business revenue while working fewer hours and finally have the work-life balance I always wanted."
              author="Marcus Chen"
              role="Tech Founder"
            />

            <TestimonialCard
              quote="This isn't just another course—it's a complete operating system for life. The frameworks are practical, the community is incredible, and the results speak for themselves."
              author="Sarah Martinez"
              role="Executive Coach"
            />

            <TestimonialCard
              quote="I've tried every productivity system out there. Peak Life OS is the only one that actually stuck. It's simple, powerful, and gets results."
              author="David Thompson"
              role="Investment Banker"
            />

            <TestimonialCard
              quote="The mindset work alone was worth 10x the investment. I've overcome limiting beliefs that held me back for years and finally feel unstoppable."
              author="Jennifer Lee"
              role="Real Estate Investor"
            />

            <TestimonialCard
              quote="Within 90 days, I lost 30 pounds, doubled my income, and improved my relationships. This program delivers on every promise."
              author="Michael Rodriguez"
              role="Sales Director"
            />

            <TestimonialCard
              quote="The level of support and accountability is unmatched. Having a community of high-achievers pushing you forward is a game-changer."
              author="Amanda Williams"
              role="Entrepreneur"
            />
          </div>

          {/* Stats Section */}
          <div className="mt-20 grid gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400">10,000+</div>
              <div className="mt-2 text-sm text-slate-400">Active Members</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400">94%</div>
              <div className="mt-2 text-sm text-slate-400">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400">4.9/5</div>
              <div className="mt-2 text-sm text-slate-400">
                Average Rating
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400">$2.3M</div>
              <div className="mt-2 text-sm text-slate-400">
                Avg. Revenue Increase
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionTitle
            kicker="Investment"
            title="Choose Your Path to Peak Performance"
            subtitle="Select the plan that best fits your goals and commitment level. All plans include our 30-day money-back guarantee."
          />

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {/* Starter Plan */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-8">
              <h3 className="text-2xl font-bold text-white">Foundation</h3>
              <div className="mt-4">
                <span className="text-4xl font-bold text-white">$97</span>
                <span className="text-slate-400">/month</span>
              </div>
              <p className="mt-3 text-slate-300">
                Perfect for getting started with the fundamentals
              </p>
              <ul className="mt-6 space-y-3 text-sm text-slate-300">
                <li className="flex gap-2">
                  <span className="text-blue-400">✓</span>
                  <span>Core OS Framework Access</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-400">✓</span>
                  <span>Weekly Group Coaching</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-400">✓</span>
                  <span>Community Access</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-400">✓</span>
                  <span>Basic Accountability Tools</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-400">✓</span>
                  <span>Course Library</span>
                </li>
              </ul>
              <a
                href="#get-started"
                className="mt-8 block w-full rounded-lg border border-slate-700 py-3 text-center font-semibold text-slate-200 transition-all hover:border-slate-600 hover:bg-slate-800"
              >
                Get Started
              </a>
            </div>

            {/* Pro Plan */}
            <div className="relative rounded-2xl border-2 border-blue-500 bg-gradient-to-br from-blue-900/40 to-purple-900/40 p-8 shadow-xl shadow-blue-500/20">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-1 text-xs font-semibold text-white">
                MOST POPULAR
              </div>
              <h3 className="text-2xl font-bold text-white">Elite</h3>
              <div className="mt-4">
                <span className="text-4xl font-bold text-white">$297</span>
                <span className="text-slate-400">/month</span>
              </div>
              <p className="mt-3 text-slate-300">
                For serious achievers ready for transformation
              </p>
              <ul className="mt-6 space-y-3 text-sm text-slate-300">
                <li className="flex gap-2">
                  <span className="text-blue-400">✓</span>
                  <span>Everything in Foundation</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-400">✓</span>
                  <span>Personal Success Manager</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-400">✓</span>
                  <span>Monthly 1-on-1 Coaching</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-400">✓</span>
                  <span>Advanced Analytics & Tracking</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-400">✓</span>
                  <span>Priority Support</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-400">✓</span>
                  <span>Exclusive Workshops</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-400">✓</span>
                  <span>Custom Life OS Blueprint</span>
                </li>
              </ul>
              <a
                href="#get-started"
                className="mt-8 block w-full rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 py-3 text-center font-semibold text-white shadow-lg transition-all hover:from-blue-600 hover:to-purple-600 hover:shadow-xl"
              >
                Start Elite
              </a>
            </div>

            {/* Premium Plan */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-8">
              <h3 className="text-2xl font-bold text-white">Mastery</h3>
              <div className="mt-4">
                <span className="text-4xl font-bold text-white">$997</span>
                <span className="text-slate-400">/month</span>
              </div>
              <p className="mt-3 text-slate-300">
                Ultimate support for maximum results
              </p>
              <ul className="mt-6 space-y-3 text-sm text-slate-300">
                <li className="flex gap-2">
                  <span className="text-blue-400">✓</span>
                  <span>Everything in Elite</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-400">✓</span>
                  <span>Weekly 1-on-1 Coaching</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-400">✓</span>
                  <span>24/7 Priority Access</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-400">✓</span>
                  <span>Fully Custom OS Design</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-400">✓</span>
                  <span>VIP Mastermind Access</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-400">✓</span>
                  <span>Done-For-You Systems</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-400">✓</span>
                  <span>Lifetime Community Access</span>
                </li>
              </ul>
              <a
                href="#get-started"
                className="mt-8 block w-full rounded-lg border border-slate-700 py-3 text-center font-semibold text-slate-200 transition-all hover:border-slate-600 hover:bg-slate-800"
              >
                Go Mastery
              </a>
            </div>
          </div>

          {/* Guarantee */}
          <div className="mt-16 mx-auto max-w-3xl rounded-2xl border border-blue-900/50 bg-gradient-to-br from-blue-900/20 to-purple-900/20 p-8 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20">
              <span className="text-3xl">🛡️</span>
            </div>
            <h3 className="text-2xl font-bold text-white">
              30-Day Money-Back Guarantee
            </h3>
            <p className="mt-3 text-lg text-slate-300">
              Try Peak Life OS risk-free for 30 days. If you're not completely
              satisfied with your progress, we'll refund every penny—no questions
              asked.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="border-t border-slate-900 px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <SectionTitle
            kicker="FAQ"
            title="Frequently Asked Questions"
            subtitle="Got questions? We've got answers. If you don't find what you're looking for, reach out to our team."
          />

          <div className="mt-16 space-y-4">
            <FAQItem
              question="What exactly is Peak Life OS?"
              answer="Peak Life OS is a comprehensive life optimization system that combines proven productivity frameworks, mindset training, health protocols, and personalized coaching to help you achieve peak performance in all areas of your life."
            />

            <FAQItem
              question="How is this different from other programs?"
              answer="Unlike generic courses or coaching programs, Peak Life OS is a complete operating system for your life. We provide frameworks, tools, accountability, and community support in one integrated system. Plus, we focus on implementation and results, not just information."
            />

            <FAQItem
              question="How much time do I need to commit?"
              answer="We recommend dedicating 30-60 minutes per day to implementing the Peak Life OS frameworks. However, the system is designed to make you more efficient, so you'll actually gain time as you optimize your life."
            />

            <FAQItem
              question="Is this program suitable for beginners?"
              answer="Absolutely! Peak Life OS is designed to meet you where you are. Whether you're just starting your optimization journey or you're already a high-performer looking to reach the next level, our system scales to your needs."
            />

            <FAQItem
              question="What if I don't see results?"
              answer="We stand behind our program with a 30-day money-back guarantee. If you follow the system and don't see measurable progress, we'll refund your investment in full. Additionally, our coaching team will work with you to ensure you're on the right track."
            />

            <FAQItem
              question="Can I cancel my membership anytime?"
              answer="Yes, you can cancel your membership at any time. There are no long-term contracts or hidden fees. We believe in earning your business every single month through exceptional value and results."
            />

            <FAQItem
              question="Do you offer payment plans?"
              answer="Yes! We offer flexible payment options for all our plans. Contact our team to discuss which payment structure works best for your situation."
            />

            <FAQItem
              question="How quickly will I see results?"
              answer="Most members report noticeable improvements in their focus, energy, and productivity within the first 2 weeks. Significant life transformations typically occur within 90 days when following the system consistently."
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section
        id="get-started"
        className="border-t border-slate-900 px-6 py-20"
      >
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white sm:text-5xl">
            Ready to Transform Your Life?
          </h2>
          <p className="mt-6 text-xl text-slate-300">
            Join 10,000+ high-achievers who have already unlocked their full
            potential with Peak Life OS. Your transformation starts today.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-blue-500/30 transition-all hover:from-blue-600 hover:to-purple-600 hover:shadow-xl hover:shadow-blue-500/40"
            >
              Choose Your Plan
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl border border-slate-700 px-8 py-4 text-lg font-semibold text-slate-200 transition-all hover:border-slate-600 hover:bg-slate-900/50"
            >
              Schedule a Call
            </a>
          </div>

          {/* Final Trust Signals */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <span className="text-xl">🛡️</span>
              <span>30-Day Guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl">⚡</span>
              <span>Instant Access</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl">🔒</span>
              <span>Secure Checkout</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="border-t border-slate-900 px-6 py-12">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-4">
            <div>
              <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Peak Life OS
              </div>
              <p className="mt-3 text-sm text-slate-400">
                Transform your life with the ultimate productivity and life
                optimization system.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-white">Product</h4>
              <ul className="mt-3 space-y-2 text-sm text-slate-400">
                <li>
                  <a href="#features" className="hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="hover:text-white transition-colors">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-white transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white">Company</h4>
              <ul className="mt-3 space-y-2 text-sm text-slate-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white">Connect</h4>
              <ul className="mt-3 space-y-2 text-sm text-slate-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    YouTube
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 border-t border-slate-800 pt-8 text-center text-sm text-slate-400">
            <p>
              © {new Date().getFullYear()} Peak Life OS. All rights reserved.
            </p>
            <div className="mt-2 flex justify-center gap-6">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
