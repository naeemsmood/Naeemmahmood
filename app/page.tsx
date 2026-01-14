import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-white py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Photo - Left on desktop, top on mobile */}
            <div className="flex justify-center md:justify-start">
              <Image
                src="/D3A033DA-8AD5-48D9-9E6C-E85EBC568441.JPG"
                width={450}
                height={450}
                alt="Naeem Mahmood - Peak Performance Coach"
                className="rounded-2xl border-4 border-black shadow-2xl object-cover w-[300px] h-[300px] md:w-[450px] md:h-[450px]"
                priority
                sizes="(max-width: 768px) 300px, 450px"
              />
            </div>

            {/* Text Content - Right on desktop, bottom on mobile */}
            <div className="text-center md:text-left flex flex-col justify-center">
              <h1 className="text-5xl font-bold text-black mb-4">
                Naeem Mahmood
              </h1>
              <p className="text-lg md:text-xl text-black mb-4">
                Peak Performance Coach | Keynote Speaker | Founder of Peak Humans
              </p>
              <p className="text-base md:text-lg text-black mb-8">
                Welcome to my website
              </p>
              <div className="flex justify-center md:justify-start">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-200"
                >
                  Work With Me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-black mb-8 md:mb-12 text-center">
              About Naeem
            </h2>
            <div className="space-y-6 md:space-y-8">
              <p className="text-base md:text-lg text-black leading-relaxed">
                Naeem Mahmood is a world-renowned peak performance coach, keynote speaker, and founder of Peak Humans. He specializes in leadership, organizational behavior, psychology of achievement, and sales mastery. A former top speaker and sales trainer for Tony Robbins, Naeem has delivered over 1,000 talks and trainings on the psychology of peak performance, impacting more than 50,000 lives across the United States.
              </p>
              <p className="text-base md:text-lg text-black leading-relaxed">
                He has advised some of the world's leading organizations including SoFi, the U.S. Army, Expert Dojo, Salesforce, Soho House, University of Alabama, Northwestern Medicine, and JP Morgan.
              </p>
              <p className="text-base md:text-lg text-black leading-relaxed">
                Naeem's passion is helping people unlock their full potential, elevate their performance, and design lives of purpose, freedom, and fulfillment.
              </p>
              <blockquote className="border-l-4 border-black pl-6 md:pl-8 py-4 md:py-6 my-8 md:my-10 bg-gray-50 rounded-r-lg">
                <p className="text-base md:text-lg text-black italic leading-relaxed">
                  "Anyone can alter the course of their life by developing goal-centered day-to-day patterns to achieve success in their personal and professional life. By learning the art of intentional living my clients experience the highest level of fulfillment and evolve into the best version of themselves."
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Services
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-lg border-2 border-black hover:shadow-lg transition-shadow duration-200">
              <h3 className="text-2xl font-bold text-black mb-4">1-on-1 Coaching</h3>
              <p className="text-black leading-relaxed">
                Personalized coaching sessions designed to help you unlock your full potential, achieve your goals, and design a life of purpose, freedom, and fulfillment.
              </p>
            </div>
            <div className="p-8 bg-white rounded-lg border-2 border-black hover:shadow-lg transition-shadow duration-200">
              <h3 className="text-2xl font-bold text-black mb-4">Keynote Speaking</h3>
              <p className="text-black leading-relaxed">
                Engaging keynote presentations on peak performance, leadership, and intentional living. Delivered to audiences of all sizes, from corporate events to conferences.
              </p>
            </div>
            <div className="p-8 bg-white rounded-lg border-2 border-black hover:shadow-lg transition-shadow duration-200">
              <h3 className="text-2xl font-bold text-black mb-4">Corporate Training</h3>
              <p className="text-black leading-relaxed">
                Transformative training programs for organizations looking to elevate team performance, leadership capabilities, and organizational culture through proven methodologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-24 bg-gradient-to-br from-yellow-400 via-yellow-500 to-amber-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6">
            Ready to Transform Your Performance?
          </h2>
          <p className="text-xl md:text-2xl text-black mb-10 font-medium">
            Join 50,000+ high performers who've mastered the Peak Performance Blueprint
          </p>
          <Link
            href="/course"
            className="inline-flex items-center justify-center px-10 py-5 bg-black text-white font-bold text-lg rounded-lg hover:bg-gray-900 transition-all duration-200 shadow-2xl hover:shadow-3xl transform hover:scale-105"
          >
            Explore The Course
          </Link>
        </div>
      </section>
    </div>
  );
}
