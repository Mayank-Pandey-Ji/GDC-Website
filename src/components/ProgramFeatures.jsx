const ProgramFeatures = () => {
  return (
    <section className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-[#09101a]">
      <div className="max-w-7xl mx-auto">
        {/* Header section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">
            From the basics to mastering real-world therapy.
          </h1>
          <p className="text-xl text-gray-400">
            Join our comprehensive program designed for aspiring researcher
          </p>
        </div>

        {/* Features grid with gradient cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-gradient-to-br from-[#0f1722] to-[#02050a] p-8 rounded-xl shadow-2xl hover:shadow-orange-900/20 transition-all hover:scale-105 border border-gray-500">
            <div className="w-12 h-12 border-2 border-gray-500 rounded-full flex items-center justify-center mb-6">
              <div className="text-amber-300 text-xl">👥</div>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Weekly LIVE Sessions</h3>
            <p className="text-gray-400">
              Interactive, engaging, and tailored to all, whether you're an average or professional researcher
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-gradient-to-br from-[#0f1722] to-[#02050a] p-8 rounded-xl shadow-2xl hover:shadow-orange-900/20 transition-all hover:scale-105 border border-gray-500">
            <div className="w-12 h-12 border-2 border-gray-500 rounded-full flex items-center justify-center mb-6">
              <div className="text-amber-300 text-xl">🏠</div>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Find Your Tribe</h3>
            <p className="text-gray-400">
              Network with researchers from diverse backgrounds. Many lifelong connections begin here
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-gradient-to-br from-[#0f1722] to-[#02050a] p-8 rounded-xl shadow-2xl hover:shadow-orange-900/20 transition-all hover:scale-105 border border-gray-500">
            <div className="w-12 h-12 border-2 border-gray-500 rounded-full flex items-center justify-center mb-6">
              <div className="text-amber-300 text-xl">🎯</div>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Practice-Based Learning</h3>
            <p className="text-gray-400">
              Hands-on research-work and assignments mirror real-world challenges faced by professional researchers
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-gradient-to-br from-[#0f1722] to-[#02050a] p-8 rounded-xl shadow-2xl hover:shadow-orange-900/20 transition-all hover:scale-105 border border-gray-500">
            <div className="w-12 h-12 border-2 border-gray-500 rounded-full flex items-center justify-center mb-6">
              <div className="text-amber-300 text-xl">🚀</div>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Achieve Tangible Growth</h3>
            <p className="text-gray-400">
              With tailored guidance and high completion rates, we help you reach your goals confidently
            </p>
          </div>

          {/* Feature 5 */}
          <div className="bg-gradient-to-br from-[#0f1722] to-[#02050a] p-8 rounded-xl shadow-2xl hover:shadow-orange-900/20 transition-all hover:scale-105 border border-gray-500">
            <div className="w-12 h-12 border-2 border-gray-500 rounded-full flex items-center justify-center mb-6">
              <div className="text-amber-300 text-xl">👤</div>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Personal Mentor Insights</h3>
            <p className="text-gray-400">
              Learn from unfiltered mentor stories, gaining unique insights beyond textbooks
            </p>
          </div>

          {/* Feature 6 */}
          <div className="bg-gradient-to-br from-[#0f1722] to-[#02050a] p-8 rounded-xl shadow-2xl hover:shadow-orange-900/20 transition-all hover:scale-105 border border-gray-500">
            <div className="w-12 h-12 border-2 border-gray-500 rounded-full flex items-center justify-center mb-6">
              <div className="text-amber-300 text-xl">🌐</div>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Lifetime Community</h3>
            <p className="text-gray-400">
              Cohort members enjoy lifetime access to our VSSER family, fostering lasting career and personal growth
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramFeatures;