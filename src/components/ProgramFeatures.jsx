import {
  FaVideo,
  FaUsers,
  FaFlask,
  FaChartLine,
  FaUserTie,
  FaInfinity
} from "react-icons/fa";

const features = [
  {
    icon: FaVideo,
    title: "Weekly LIVE Sessions",
    desc: "Interactive, engaging, and tailored to all, whether you're an average or professional researcher"
  },
  {
    icon: FaUsers,
    title: "Find Your Tribe",
    desc: "Network with researchers from diverse backgrounds. Many lifelong connections begin here"
  },
  {
    icon: FaFlask,
    title: "Practice-Based Learning",
    desc: "Hands-on research-work and assignments mirror real-world challenges faced by professional researchers"
  },
  {
    icon: FaChartLine,
    title: "Achieve Tangible Growth",
    desc: "With tailored guidance and high completion rates, we help you reach your goals confidently"
  },
  {
    icon: FaUserTie,
    title: "Personal Mentor Insights",
    desc: "Learn from unfiltered mentor stories, gaining unique insights beyond textbooks"
  },
  {
    icon: FaInfinity,
    title: "Lifetime Community",
    desc: "Cohort members enjoy lifetime access to our VSSER family, fostering lasting career and personal growth"
  }
];

const ProgramFeatures = () => {
  return (
    <section className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-[#0f1e25]">
      <div className="max-w-7xl mx-auto">
        {/* Header section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">
            From the basics to mastering real-world Research.
          </h1>
          <p className="text-xl text-[#00d4ff]">
            Join our comprehensive program designed for aspiring researcher
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#09101a] p-8 rounded-xl shadow-lg hover:shadow-[#00d4ff]/20 transition-all hover:scale-105 border border-[#3b82f6] hover:border-[#00d4ff]"
            >
              <div className="w-12 h-12 bg-[#00d4ff] border-2 border-[#3b82f6] rounded-full flex items-center justify-center mb-6">
                <feature.icon className="text-white text-xl" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-[#9ca3af]">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramFeatures;
