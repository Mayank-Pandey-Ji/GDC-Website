import React from 'react';

const ContactUs = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#0f1722] via-[#01331c] to-[#02050a]">
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-5xl font-bold text-[#ccb2fb] mb-4">Ready to Take the Leap?</h1>
        <p className="text-lg text-gray-200 mb-8">
          Your journey to becoming a confident, skilled researcher starts here.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-12">
          {/* Example button with updated colors */}
          {/* <button className="bg-[#0a0217] hover:bg-[#1a0b29] text-[#ccb2fb] font-semibold py-2 px-6 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg">
            Apply now
          </button> */}
        </div>
        <div className="flex flex-col sm:flex-row gap-6 w-full max-w-2xl justify-center mb-20">
          <div className="flex-1 bg-[#0a0217] bg-opacity-80 border-2 border-[#ccb2fb] rounded-xl px-8 py-6 flex flex-col items-center">
            <p className="text-[#55e6a5] text-sm font-medium mb-2">Next Cohort</p>
            <p className="text-2xl font-bold text-[#ccb2fb]">2026</p>
          </div>
          <div className="flex-1 bg-[#0a0217] bg-opacity-80 border-2 border-[#ccb2fb] rounded-xl px-8 py-6 flex flex-col items-center">
            <p className="text-[#55e6a5] text-sm font-medium mb-2">Enrollment</p>
            <p className="text-2xl font-bold text-[#ccb2fb]">Live now</p>
          </div>
        </div>
      </main>
      <footer className="relative bg-[#0a0217] text-[#ccb2fb] py-8 text-center">
        <div className="text-2xl font-semibold mb-2"><span className="font-normal">GDC</span></div>
        <div className="text-sm opacity-70">© 2025. All right reserved.</div>
        <div className="absolute right-6 bottom-6">
          <span className="bg-[#55e6a5] text-[#0a0217] px-4 py-2 rounded-lg text-sm font-medium shadow-lg">
            Powered by <span className="font-semibold">GDC</span>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default ContactUs;
