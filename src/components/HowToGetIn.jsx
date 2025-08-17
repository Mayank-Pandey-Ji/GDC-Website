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
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#f9f7ff]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-[#5b21b6] mb-4">How do you get in?</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all border border-purple-200 text-center"
            >
              <div className="w-16 h-16 border-2 border-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 bg-purple-50">
                <step.icon className="text-3xl text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-[#5b21b6] mb-4">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="mt-6 text-gray-500 font-medium text-lg">
            COHORT WILL STARTS SOON
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowToGetIn;
