import React from "react";

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-6 space-y-3 text-neutral-200">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span className="mt-1 text-amber-400">✓</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function CTAButtons() {
  return (
    <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
      <a
        href="#apply"
        className="inline-flex items-center justify-center rounded-xl bg-amber-500 px-6 py-3 text-sm font-semibold text-black shadow-sm hover:bg-amber-400"
      >
        APPLY TO JOIN THE BROTHERHOOD
      </a>

      <a
        href="#qualify"
        className="text-sm text-neutral-300 underline underline-offset-4 hover:text-white"
      >
        See if you qualify in 2 minutes. No fluff. No obligation.
      </a>
    </div>
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
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-400">
          {kicker}
        </p>
      ) : null}
      <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 text-base leading-relaxed text-neutral-300">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <div className="mt-3 text-sm leading-relaxed text-neutral-300">
        {children}
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* TOP NAV */}
      <header className="sticky top-0 z-50 border-b border-neutral-900 bg-neutral-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="text-sm font-semibold tracking-tight">
            The Immovable Man
          </div>

          <nav className="hidden items-center gap-6 text-sm text-neutral-300 md:flex">
            <a className="hover:text-white" href="#about">
              About
            </a>
            <a className="hover:text-white" href="#services">
              Services
            </a>
            <a className="hover:text-white" href="#speaking">
              Speaking
            </a>
            <a
              className="rounded-lg bg-amber-500 px-3 py-1.5 font-semibold text-black hover:bg-amber-400"
              href="#course"
            >
              Course
            </a>
            <a className="hover:text-white" href="#coaching">
              Coaching
            </a>
            <a className="hover:text-white" href="#contact">
              Contact
            </a>
          </nav>

          <a
            href="#apply"
            className="rounded-lg border border-neutral-800 px-3 py-1.5 text-sm text-neutral-200 hover:border-neutral-700 hover:text-white"
          >
            Apply
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden px-6 pt-16 pb-14 md:pt-24">
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-amber-500/20 blur-3xl" />
          <div className="absolute -right-24 -top-32 h-72 w-72 rounded-full bg-amber-500/10 blur-3xl" />
        </div>

        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-400">
            The Unbreakable Operator System
          </p>

          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Become The Man No Force Can Shake
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-neutral-300">
            A 12-month execution and identity system for 7-figure men who refuse
            to live below their potential.
          </p>

          <BulletList
            items={[
              "Install unbreakable discipline and distraction-proof focus",
              "Build a body, mind, and life that reflect your standards",
              "Lead with calm, grounded power in business and relationships",
              "Operate with a system that makes overwhelm impossible",
            ]}
          />

          <CTAButtons />

          <div
            id="qualify"
            className="mt-10 rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6"
          >
            <p className="text-sm text-neutral-300">
              <span className="font-semibold text-white">Quick qualifier:</span>{" "}
              This is built for high-performing founders/operators who want a
              higher standard and are willing to be challenged.
            </p>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF STRIP */}
      <section className="border-y border-neutral-900 bg-neutral-950 px-6 py-10">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-sm text-neutral-300">
            Trusted by high-performing founders, ex-founders, and executives
            across multiple industries.
          </p>
        </div>
      </section>

      {/* AVATAR */}
      <section id="about" className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <SectionTitle
            title='This Is For Men Who Already “Made It” — But Know They’re Playing Small'
            subtitle="You’re not looking for motivation. You’re not looking for “coaching.” You already did what most men won’t: you built something. You earn well. People respect you. And yet, you know you’re capable of far more."
          />

          <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6">
            <p className="text-sm text-neutral-200">You feel it when:</p>
            <BulletList
              items={[
                "Your discipline isn’t as sharp as it used to be",
                "You tolerate distractions you swore you’d never allow",
                "You feel alone at the top, with no one to truly sharpen you",
                "You’re successful on paper, but your body, presence, or relationships don’t match your potential",
                "You know your execution is at 6 or 7 out of 10 — and that gap costs you millions over a decade",
              ]}
            />
            <div className="mt-8">
              <a
                href="#apply"
                className="inline-flex items-center justify-center rounded-xl bg-amber-500 px-6 py-3 text-sm font-semibold text-black hover:bg-amber-400"
              >
                STEP INTO A HIGHER STANDARD → APPLY NOW
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section id="course" className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <SectionTitle
            kicker="⚔️ Introducing"
            title="The Immovable Man: The Unbreakable Operator System"
            subtitle="Not a coaching program. A forge for elite men. You don’t just learn what to do — you become the man who does it, without negotiation."
          />

          <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6 text-sm leading-relaxed text-neutral-300">
            <p>
              The Immovable Man is a 12-month execution and identity system for
              7-figure men.
            </p>
            <p className="mt-4">
              At the core is <span className="font-semibold text-white">
                The Unbreakable Operator System
              </span>
              : a framework that hardwires discipline, presence, and leverage
              into how you live and lead.
            </p>
          </div>
        </div>
      </section>

      {/* 3 PILLARS */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <SectionTitle title="The System That Makes You Unbreakable" />

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <Card title="Pillar 1 — Unbreakable Discipline Protocol (Warrior)">
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Daily and weekly operating system</li>
                <li>Clear, simple routines you actually follow</li>
                <li>Distraction-proof focus environment</li>
                <li>Training, sleep, and performance protocols</li>
                <li>Your word becomes iron — to yourself first</li>
              </ul>
            </Card>

            <Card title="Pillar 2 — Immovable Presence Framework (King)">
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Masculine leadership and decision-making power</li>
                <li>Emotional control under pressure</li>
                <li>Handling conflict with strength and clarity</li>
                <li>Leading teams & relationships from grounded authority</li>
                <li>Identity alignment: becoming who you already are</li>
              </ul>
            </Card>

            <Card title="Pillar 3 — Elite Operator Leverage System (Operator)">
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Business priority mapping</li>
                <li>Identify and delete bottlenecks</li>
                <li>Install leverage into calendar and team</li>
                <li>Systems that compound effort</li>
                <li>A life that scales with your standards</li>
              </ul>
            </Card>
          </div>

          <div className="mt-10 text-center">
            <a
              href="#apply"
              className="inline-flex items-center justify-center rounded-xl bg-amber-500 px-6 py-3 text-sm font-semibold text-black hover:bg-amber-400"
            >
              INSTALL THE UNBREAKABLE OPERATOR SYSTEM → APPLY NOW
            </a>
          </div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section id="services" className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <SectionTitle title="What You Get Inside The Immovable Man" />

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <Card title="Weekly Performance Labs">
              Hot-seat calls where you sharpen discipline, execution, and
              strategy with other elite men.
            </Card>
            <Card title="Weekly Power & Presence Sessions">
              Deep work on identity, leadership, emotional control, and
              relationships — without the “therapy” vibe.
            </Card>
            <Card title="Monthly Deep-Dive Intensives">
              Elite discipline & habits, masculine leadership & polarity,
              operator leverage & business performance, purpose/values/mission.
            </Card>
            <Card title="Operator Brotherhood Access">
              A curated circle of high-level men. No victims. No excuses.
            </Card>
            <Card title="Quarterly Challenges">
              Structured sprints that force growth across body, business, and
              being.
            </Card>
            <Card title="Selective 1:1 Touchpoints">
              Strategic calls to clear blocks, refine vision, and recalibrate
              execution — used when it matters most.
            </Card>
          </div>
        </div>
      </section>

      {/* WHY DIFFERENT */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <SectionTitle title="Why This Isn’t “Just Another Coaching Program”" />

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <Card title="1) Identity over information">
              You don’t need more tips. You need to become the man who executes,
              no matter what. We build that.
            </Card>
            <Card title="2) System over hype">
              This is not motivation. This is a repeatable operating system for
              how you live, lead, and perform.
            </Card>
            <Card title="3) Brotherhood over isolation">
              Most high-performing men are surrounded, yet alone. Here, you join
              a circle sharp enough to challenge you.
            </Card>
          </div>

          <p className="mx-auto mt-10 max-w-3xl text-center text-sm text-neutral-300">
            “This is where men who are already doing well go when they decide
            good enough is no longer acceptable.”
          </p>
        </div>
      </section>

      {/* FOR / NOT FOR */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <SectionTitle title="This Is Not For Every Man — By Design" />

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6">
              <h3 className="text-lg font-semibold text-white">FOR MEN WHO…</h3>
              <BulletList
                items={[
                  "Earn 7 figures or have $1M+ net worth",
                  "Take responsibility instead of making excuses",
                  "Want to sharpen body, mind, and leadership together",
                  "Are willing to be challenged and held to a higher standard",
                  "Know they’re capable of more — and are done negotiating with that truth",
                ]}
              />
            </div>

            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6">
              <h3 className="text-lg font-semibold text-white">
                NOT FOR MEN WHO…
              </h3>
              <BulletList
                items={[
                  "Want motivation instead of mastery",
                  "Need hand-holding and permission",
                  "Avoid hard conversations and confronting their own bullshit",
                  "Won’t follow a system",
                  "Are more committed to comfort than growth",
                ]}
              />
            </div>
          </div>

          <div className="mt-10 text-center">
            <a
              href="#apply"
              className="inline-flex items-center justify-center rounded-xl bg-amber-500 px-6 py-3 text-sm font-semibold text-black hover:bg-amber-400"
            >
              IF YOU’RE IN THE FIRST COLUMN, APPLY.
            </a>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="speaking" className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <SectionTitle title="How To Enter The Forge" />

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <Card title="Step 1 — Apply">
              Fill out a short application so we understand where you are, what
              you want, and what’s in your way.
            </Card>
            <Card title="Step 2 — Interview">
              If you’re a potential fit, we’ll get on a call. No pressure. No
              hard sell. Just a direct conversation.
            </Card>
            <Card title="Step 3 — Enter The Brotherhood">
              Install The Unbreakable Operator System step by step alongside men
              who demand more from themselves.
            </Card>
          </div>
        </div>
      </section>

      {/* INVESTMENT */}
      <section id="coaching" className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <SectionTitle title="Investment & Commitment" />

          <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6 text-sm leading-relaxed text-neutral-300">
            <p>
              The Immovable Man is a high-commitment, high-standard experience.
              We work with a small number of men very closely.
            </p>
            <p className="mt-4">
              If you’re looking for something cheap, easy, or casual — this
              isn’t it.
            </p>
            <p className="mt-4">
              If accepted, expect a significant 5-figure annual investment.
              Exact terms are discussed on the call once we know what tier is
              right for you.
            </p>

            <div className="mt-6 rounded-xl border border-neutral-800 bg-neutral-950/40 p-4">
              <p className="font-semibold text-white">Guarantee</p>
              <p className="mt-2">
                If you show up, follow the system, and don’t become a measurably
                higher-performing, more grounded, more powerful man — I work
                with you until you do. No man who executes gets left behind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <SectionTitle title="FAQ" />

          <div className="mx-auto mt-10 max-w-3xl space-y-4">
            <Card title="How much time does this take per week?">
              Plan for 2–4 focused hours per week. If you “don’t have time” to
              install a system that makes everything in your life more effective
              — this is exactly why you need it.
            </Card>

            <Card title="Is this business coaching? Fitness coaching? Mindset work?">
              It’s all three, integrated: a system that improves how you run
              your business and life, protocols that sharpen your body/energy,
              and identity/leadership work that changes who you are under
              pressure.
            </Card>

            <Card title="Can I do this if I travel or run multiple companies?">
              Yes. The system is built for men with real demands on their time
              and energy. We optimize around your reality, not fantasy.
            </Card>

            <Card title="Do I need to be in a certain country or time zone?">
              No. Everything is run virtually with recordings available, plus a
              community that spans locations.
            </Card>

            <Card title='How do I know if I’m “good enough” to apply?'>
              If you’re earning at a serious level, know you’re capable of more,
              and are willing to be challenged — apply. Worst case: we have a
              valuable conversation and decide it’s not the right fit right now.
            </Card>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section
        id="apply"
        className="border-t border-neutral-900 bg-neutral-950 px-6 py-16"
      >
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Most Men Will Stay Breakable. You Don’t Have To.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-neutral-300">
            You already know you’re not average. You already know “good enough”
            isn’t good enough for you. The only question is: are you going to
            keep carrying that truth alone — or step into a place built for men
            like you?
          </p>

          <div className="mt-8">
            <a
              href="#apply"
              className="inline-flex items-center justify-center rounded-xl bg-amber-500 px-6 py-3 text-sm font-semibold text-black hover:bg-amber-400"
            >
              APPLY TO BECOME AN IMMOVABLE MAN
            </a>
            <p className="mt-3 text-sm text-neutral-400">
              You’re one application away from a different standard for your
              life.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT ANCHOR */}
      <footer id="contact" className="px-6 py-10">
        <div className="mx-auto max-w-6xl text-center text-sm text-neutral-500">
          © {new Date().getFullYear()} The Immovable Man
        </div>
      </footer>
    </main>
  );
}