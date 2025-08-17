import { FaWpforms, FaComments, FaCheckCircle } from "react-icons/fa";

const HowToGetIn = () => {
  const steps = [
    {
      icon: FaWpforms,
      number: "1",
      title: "Online Application (10 minutes)",
      desc: "Fill in an application with your details. It also includes taking a video.",
    },
    { 
      icon: FaComments,
      number: "2",
      title: "Group Call (60 minutes)",
      desc: "If required, some applicants will need to book a 1:1 session to see if we're a mutual fit.",
    },
    { 
      icon: FaCheckCircle,
      number: "3",
      title: "Decision",
      desc: "Receive your decision by email (keep checking your spam). We accept only 20 members in each cohort.",
    }
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#09101a]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-[#ccb2fb] mb-4">How do you get in?</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#0f1722] to-[#02050a] p-8 rounded-2xl shadow-2xl hover:shadow-[#55e6a580]/20 transition-all hover:scale-105 border border-[#55e6a5] text-center"
            >
              <div className="w-16 h-16 border-2 border-[#55e6a5] rounded-full flex items-center justify-center mx-auto mb-6">
                <step.icon className="text-3xl text-[#55e6a5]" />
              </div>
              <h3 className="text-xl font-semibold text-[#ccb2fb] mb-4">{step.title}</h3>
              <p className="text-gray-300 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          {/* <button className="bg-gradient-to-r from-[#55e6a5] to-green-600 hover:from-green-600 hover:to-[#55e6a5] text-[#0a0217] font-bold py-4 px-10 rounded-xl text-lg transition-all hover:scale-105 shadow-lg border border-[#ccb2fb]">
            Apply now
          </button> */}
          <p className="mt-6 text-gray-400 font-medium text-lg">COHORT WILL STARTS SOON</p>
        </div>
      </div>
    </section>
  );
};

export default HowToGetIn;
