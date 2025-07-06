const ProgramDetails = () => {
  const benefits = [
    "Admission into the upcoming cohort, with access to research tools, resources and live recordings",
    "1:1 mentorship and supervision from experienced researchers to build a successful career as a researcher",
    "Exclusive access to a network of researchers, workshops and meet ups",
    "Career guidance to help you design your next chapter — whether it's scaling your practice, discovering your areas of interest, or building a hybrid career beyond 1:1 research"
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#09101a]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">Program details</h1>
          <p className="text-xl text-gray-300 leading-relaxed">If this sounds like something you've been looking for, we'd love to get to know you further and explore if you'd be a good fit!</p>
        </div>

        <div className="bg-gradient-to-br from-[#0f1722] to-[#02050a] p-8 rounded-2xl shadow-2xl border border-gray-400 mb-12">
          <h2 className="text-2xl font-bold text-white mb-8">What you'll get</h2>
          <ul className="space-y-6">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center mr-4 mt-0.5">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <span className="text-gray-300 leading-relaxed">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-gradient-to-br from-[#0f1722] to-[#02050a] p-8 rounded-2xl shadow-2xl border border-gray-400 mb-12">
          <h3 className="text-xl font-semibold text-white mb-6">Interested?</h3>
          <p className="text-gray-300 mb-4 leading-relaxed">This is an exclusive cohort and every application is assessed and individually handpicked based on our internal criteria.</p>
          <p className="text-gray-300 leading-relaxed">Every application is carefully assessed and handpicked based on our internal criteria.</p>
        </div>

        <div className="text-center">
          <button className="bg-gradient-to-r  from-green-600 to-[#55e6a5] hover:from-[#55e6a5] hover:to-green-600 text-[#09101a] font-bold py-4 px-10 rounded-xl text-lg transition-all hover:scale-105 shadow-lg hover:shadow-gray-600 border border-gray-400 mb-6">
            Apply now
          </button>
          <p className="text-gray-300 leading-relaxed">Please take moment to answer the questions; we use these to assess whether you're a good fit!</p>
        </div>
      </div>
    </section>
  );
};

export default ProgramDetails;