const ProgramFit = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#0f1e25]">
      <div className="max-w-6xl mx-auto">
        {/* Heading Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">
            This program is <span className="italic text-blue-400">not</span> for everyone
          </h1>
          <p className="text-lg text-gray-300">
            Find out if you're the right fit for our program
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Right Fit Card */}
          <div className="bg-[#1a2a32] p-8 rounded-2xl border border-blue-400 shadow-lg hover:shadow-blue-400/20 transition-all">
            <h2 className="text-2xl font-bold text-blue-400 mb-8">
              ✅ You're the right fit if
            </h2>
            <ul className="space-y-6">
              {[
                "You are a qualified researcher with a Master's degree or higher",
                "You are eager to unlearn and relearn for growth and improvement",
                "You want hands-on practical exposure before stepping into real-world practice",
                "You are passionate about delivering impactful research and making a difference in people's lives",
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-500 text-white flex items-center justify-center mr-4 mt-0.5">
                    ✓
                  </div>
                  <span className="text-gray-200 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not Right Fit Card */}
          <div className="bg-[#1a2a32] p-8 rounded-2xl border border-red-400 shadow-lg hover:shadow-red-400/20 transition-all">
            <h2 className="text-2xl font-bold text-red-400 mb-8">
              ❌ It's not for you if
            </h2>
            <ul className="space-y-6">
              {[
                "You're still 6+ months from completing your Master's and lack foundational qualifications",
                "You're looking for shortcuts or quick fixes without committing to skill-building",
                "You prefer theoretical learning over practical, immersive training",
                "You're not ready to dedicate the time and effort required to become a skilled professional",
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-red-500 text-white flex items-center justify-center mr-4 mt-0.5">
                    ✗
                  </div>
                  <span className="text-gray-200 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramFit;
