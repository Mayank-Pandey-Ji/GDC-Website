import { useState } from 'react';

const VideoTestimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const videos = [
    { title: 'Member testimonial', duration: '3:45' },
    { title: 'Program highlights', duration: '2:30' },
    { title: 'Success stories', duration: '4:12' },
    { title: 'Career transformation', duration: '3:18' }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % videos.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + videos.length) % videos.length);
  };

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#09101a]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">See Our Program in Action</h2>
        
        <div className="relative">
          {/* Video Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {videos.slice(currentSlide, currentSlide + 3).concat(
              videos.slice(0, Math.max(0, (currentSlide + 3) - videos.length))
            ).map((video, index) => (
              <div key={`${currentSlide}-${index}`} className="group cursor-pointer">
                <div className="bg-gradient-to-br from-[#0f1722] to-[#02050a] rounded-2xl overflow-hidden aspect-video relative border border-gray-400 shadow-2xl hover:shadow-gray-600 transition-all hover:scale-105">
                  {/* Video Thumbnail Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0f1722] to-[#02050a]"></div>
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all">
                      <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                  
                  {/* Duration Badge */}
                  <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-white text-sm">
                    {video.duration}
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                
                <div className="mt-4">
                  <p className="text-amber-100 font-medium text-center">{video.title}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center space-x-4">
            <button 
              onClick={prevSlide}
              className="w-12 h-12 bg-gradient-to-r  from-green-600 to-[#55e6a5] hover:from-[#55e6a5] hover:to-green-600 text-[#09101a] rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-lg"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
              </svg>
            </button>
            
            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {videos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentSlide 
                      ? 'bg-green-500 scale-125' 
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextSlide}
              className="w-12 h-12 bg-gradient-to-r  from-green-600 to-[#55e6a5] hover:from-[#55e6a5] hover:to-green-600 text-[#09101a] rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-lg"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <p className="text-gray-300 mb-6">Ready to transform your research career?</p>
            <button className="bg-gradient-to-r  from-green-600 to-[#55e6a5] hover:from-[#55e6a5] hover:to-green-600 text-[#09101a]  font-bold py-4 px-10 rounded-xl text-lg transition-all hover:scale-105 shadow-lg hover:shadow-gray-600 border border-gray-300">
              Watch Full Program Overview
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonials;