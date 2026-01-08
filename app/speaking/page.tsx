export default function Speaking() {
  return (
    <div className="min-h-screen bg-white py-20">
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-8 text-center">
              Keynote Speaking
            </h1>
            
            <div className="space-y-8 text-black leading-relaxed">
              <p className="text-lg md:text-xl">
                With over 1,000 talks and trainings delivered across the United States, Naeem has impacted more than 50,000 lives through his powerful presentations on peak performance, leadership, and intentional living.
              </p>

              <div className="border-2 border-black rounded-lg p-8 my-8">
                <h2 className="text-2xl font-bold text-black mb-4">Speaking Topics</h2>
                <ul className="space-y-3 list-disc list-inside">
                  <li className="text-lg">The Psychology of Peak Performance</li>
                  <li className="text-lg">Leadership Excellence and Organizational Behavior</li>
                  <li className="text-lg">Intentional Living and Goal Achievement</li>
                  <li className="text-lg">Sales Mastery and Performance</li>
                  <li className="text-lg">Unlocking Your Full Potential</li>
                </ul>
              </div>

              <p className="text-lg">
                Naeem has delivered keynotes and training programs for some of the world's leading organizations including SoFi, the U.S. Army, Expert Dojo, Salesforce, Soho House, University of Alabama, Northwestern Medicine, and JP Morgan.
              </p>

              <p className="text-lg">
                Each presentation is customized to meet your organization's specific needs, combining powerful insights from psychology and performance science with practical, actionable strategies that drive real results.
              </p>

              <div className="text-center mt-12">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-200"
                >
                  Book a Speaking Engagement
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

