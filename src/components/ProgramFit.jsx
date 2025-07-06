const ProgramFit = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#09101a]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">
            This program is <span className="italic">not</span> for everyone
          </h1>
          <p className="text-xl text-gray-400">Find out if you're the right fit for our program</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Right Fit Card */}
          <div className="bg-gradient-to-br from-[#0f1722] to-[#02050a]  p-8 rounded-2xl border border-gray-500 shadow-2xl hover:shadow-gray-800 transition-all">
            <h2 className="text-2xl font-bold text-white mb-8">You're the right fit if</h2>
            <ul className="space-y-6">
              {[
                "You are a qualified researcher with a Master's degree or higher",
                "You are eager to unlearn and relearn for growth and improvement", 
                "You want hands-on practical exposure before stepping into real-world practice",
                "You are passionate about delivering impactful research and making a difference in people' lives"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center mr-4 mt-0.5">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <span className="text-gray-400 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not Right Fit Card */}
          <div className="bg-gradient-to-br from-[#0f1722] to-[#02050a] p-8 rounded-2xl border border-gray-500 shadow-2xl hover:shadow-gray-800 transition-all">
            <h2 className="text-2xl font-bold text-white mb-8">It's not for you if</h2>
            <ul className="space-y-6">
              {[
                "You're still 6+ months from completing your Master's and lack foundational qualifications",
                "You're looking for shortcuts or quick fixes without committing to skill-building",
                "You prefer theoretical learning over practical, immersive training",
                "You're not ready to dedicate the time and effort required to become a skilled professional"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500 flex items-center justify-center mr-4 mt-0.5">
                    <span className="text-white text-sm font-bold">✗</span>
                  </div>
                  <span className="text-gray-400 leading-relaxed">{item}</span>
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