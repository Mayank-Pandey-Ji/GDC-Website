import React from 'react';

const ContactUs = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#fdfcff] via-[#f3ebff] to-[#fdfcff]">
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-5xl font-bold text-purple-700 mb-4">
          Ready to Take the Leap?
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Your journey to becoming a confident, skilled researcher starts here.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-12">
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 hover:scale-105 shadow-md">
            Apply now
          </button>
        </div>

        {/* Cards */}
        <div className="flex flex-col sm:flex-row gap-6 w-full max-w-2xl justify-center mb-20">
          <div className="flex-1 bg-white border-2 border-purple-300 rounded-xl px-8 py-6 flex flex-col items-center shadow-sm">
            <p className="text-green-600 text-sm font-medium mb-2">Next Cohort</p>
            <p className="text-2xl font-bold text-purple-700">2026</p>
          </div>
          <div className="flex-1 bg-white border-2 border-purple-300 rounded-xl px-8 py-6 flex flex-col items-center shadow-sm">
            <p className="text-green-600 text-sm font-medium mb-2">Enrollment</p>
            <p className="text-2xl font-bold text-purple-700">Live now</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative bg-purple-50 text-purple-700 py-8 text-center border-t border-purple-200">
        <div className="text-2xl font-semibold mb-2">
          <span className="font-normal">IRGDC</span>
        </div>
        <div className="text-sm opacity-70">© 2025. All rights reserved.</div>
        <div className="absolute right-6 bottom-6">
          <span className="bg-green-100 text-green-700 px-4 py-2 rounded-lg text-sm font-medium shadow-sm">
            Powered by <span className="font-semibold">IRGDC</span>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default ContactUs;
