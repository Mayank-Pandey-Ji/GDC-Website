const HowToGetIn = () => {
  const steps = [
    {
      number: "1",
      title: "Online Application (10 minutes)",
      desc: "Fill in an application with your details. It also includes taking a video."
    },
    {
      number: "2",
      title: "Group Call (60 minutes)",
      desc: "If required, some applicants will need to book a 1:1 session to see if we're a mutual fit."
    },
    {
      number: "3",
      title: "Decision",
      desc: "Receive your decision by email (keep checking your spam). We accept only 20 members in each cohort."
    }
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#09101a]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">How do you get in?</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="bg-gradient-to-br from-[#0f1722] to-[#02050a] p-8 rounded-2xl shadow-2xl hover:shadow-orange-900/20 transition-all hover:scale-105 border border-gray-500 text-center">
              <div className="w-16 h-16 border-2 border-gray-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-green-300">{step.number}</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{step.title}</h3>
              <p className="text-gray-400 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-gradient-to-r from-green-600 to-[#55e6a5] hover:from-[#55e6a5] hover:to-green-600 text-[#09101a] font-bold py-4 px-10 rounded-xl text-lg transition-all hover:scale-105 shadow-lg hover:shadow-gray-600 border border-gray-300">
            Apply now
          </button>
          <p className="mt-6 text-gray-400 font-medium text-lg">COHORT WILL STARTS SOON</p>
        </div>
      </div>
    </section>
  );
};

export default HowToGetIn;