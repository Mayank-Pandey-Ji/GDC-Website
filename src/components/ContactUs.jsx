import React from 'react';

const ContactUs = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#0f1722]  via-[#01331c] to-[#02050a]">
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-5xl font-bold text-white mb-4">Ready to Take the Leap?</h1>
        <p className="text-lg text-white mb-8">
          Your journey to becoming a confident, skilled researcher starts here.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-12">
          <button className="bg-[#27d587] hover:bg-[#f0f2f1] hover:text-[#5fc094] rounded-lg py-2 px-4 transition-all duration-300 hover:cursor-pointer">
            Apply now
          </button>
          {/* <span className="flex items-center px-4 py-2 bg-transparent">
            <span className="w-3 h-3 rounded-full bg-green-400 inline-block mr-2"></span>
            <span className="text-white text-base font-medium">
              C5 is ongoing. Enrollment for C6 is <span className="font-semibold">live.</span>
            </span>
          </span> */}
        </div>
        <div className="flex flex-col sm:flex-row gap-6 w-full max-w-2xl justify-center mb-20">
          <div className="flex-1 bg-[#030a14] bg-opacity-80 border-2 border-gray-400 rounded-xl px-8 py-6 flex flex-col items-center">
            <p className="text-green-400 text-sm font-medium mb-2">Next Cohort</p>
            <p className="text-2xl font-bold text-white">2026</p>
          </div>
          <div className="flex-1 bg-[#030a14] bg-opacity-80 border-2 border-gray-400 rounded-xl px-8 py-6 flex flex-col items-center">
            <p className="text-green-400 text-sm font-medium mb-2">Enrollment</p>
            <p className="text-2xl font-bold text-white">Live now</p>
          </div>
        </div>
      </main>
      <footer className="relative bg-[#09101a] text-white py-8 text-center">
        <div className="text-2xl font-semibold mb-2"><span className="font-normal">VSSER</span></div>
        <div className="text-sm opacity-70">© 2025. All right reserved.</div>
        <div className="absolute right-6 bottom-6">
          <span className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-lg">
            Powered by <span className="font-semibold">VSSER</span>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default ContactUs;
