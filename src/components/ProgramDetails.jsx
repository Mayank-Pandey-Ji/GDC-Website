const ProgramDetails = () => {
  const benefits = [
    "Admission into the upcoming cohort, with access to research tools, resources and live recordings",
    "1:1 mentorship and supervision from experienced researchers to build a successful career as a researcher",
    "Exclusive access to a network of researchers, workshops and meet ups",
    "Career guidance to help you design your next chapter — whether it's scaling your practice, discovering your areas of interest, or building a hybrid career beyond 1:1 research"
  ];

  return (
    <section className="py-16 px-6 sm:px-8 lg:px-12 bg-[#0f1e25]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-cyan-400 mb-4">Program details</h1>
          <p className="text-lg sm:text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
            If this sounds like something you've been looking for, we'd love to get to know you further and explore if you'd be a good fit!
          </p>
        </div>

        {/* Benefits Card */}
        <div className="bg-[#181f28] p-8 rounded-2xl shadow-lg border border-cyan-400 mb-12">
          <h2 className="text-2xl font-bold text-cyan-400 mb-8">What you'll get</h2>
          <ul className="space-y-6">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start">
                <div className="flex-shrink-0 w-7 h-7 rounded-full bg-cyan-400 flex items-center justify-center mr-4 mt-0.5 shadow-md">
                  <span className="text-[#0f1e25] text-sm font-bold">✓</span>
                </div>
                <span className="text-gray-300 leading-relaxed">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Interested Card */}
        <div className="bg-[#181f28] p-8 rounded-2xl shadow-lg border border-cyan-400 mb-12">
          <h3 className="text-xl font-semibold text-cyan-400 mb-6">Interested?</h3>
          <p className="text-gray-300 mb-4 leading-relaxed">
            This is an exclusive cohort and every application is assessed and individually handpicked based on our internal criteria.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Every application is carefully assessed and handpicked based on our internal criteria.
          </p>
        </div>

        {/* Footer / CTA */}
        <div className="text-center">
          {/* Button activate karna ho toh niche wala uncomment kar dena */}
          {/* <button className="bg-gradient-to-r from-green-500 to-indigo-500 hover:from-indigo-500 hover:to-green-500 text-white font-bold py-4 px-10 rounded-xl text-lg transition-all hover:scale-105 shadow-lg mb-6">
            Apply now
          </button> */}
          <p className="text-gray-400 leading-relaxed">
            Please take a moment to answer the questions; we use these to assess whether you're a good fit!
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProgramDetails;
