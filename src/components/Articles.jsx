

const articles = [
  {
    title: "Hollywood and China: A Silent Struggle for Cultural Dominance",
    image: "/articles1.jpg",
  },
  {
    title: "Berlinale 2025: Embracing the Virtual Auteur in AI-Driven Filmmaking",
    image: "/articles2.jpg",
  },
  {
    title: "Paris AI Summit 2025: Charting the Future of Cinema Through AI Innovations",
    image: "/articles3.jpg",
  },
  {
    title: "Zero Day: A Mini Series Unveiling the Fragility of Modern Order",
    image: "/articles4.jpg",
  },
  {
    title: "Israeli and Palestinian Cinema: A Mirror of Conflict, Tensions, and Aspirations for Peace",
    image: "/articles5.jpg",
  },
  {
    title: "British Cinema and Soft Power: Shaping Global Narratives in 2025",
    image: "/articles6.jpg",
  },
  {
    title: "Cinema and Climate Crisis: Between Awareness and Dramatization",
    image: "/articles7.jpg",
  },
  {
    title: "'Emilia Pérez' and the Oscars: France's cultural Diplomacy Put to the Test",
    image: "/articles8.jpg",
  },
];

const Articles = () => {
  return (
    <div className="bg-[#09101a] min-h-screen text-white">
      <div className="py-10 flex justify-end pr-6 sm:px-8 md:px-12 lg:px-20">
        <h1 className="text-green-400 text-[48px] sm:text-[72px] md:text-[96px] lg:text-[120px] font-bold leading-none tracking-tight text-center md:text-right" 
        style={{ 
          fontFamily: "Arial, Helvetica, sans-serif" 
          }}>
          Articles
        </h1>
      </div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-y-12 px-4 sm:px-8 md:px-12 lg:px-20 pb-20">
        {articles.map((article, idx) => (
          <div
            key={idx}
            className="relative h-60 sm:h-64 md:h-72 w-full max-w-md mx-auto overflow-hidden shadow-lg"
          >
            <img
              src={article.image}
              alt={article.title}
              className="object-cover w-full h-full opacity-30"
            />

            <div className="absolute inset-0 flex items-end p-4 sm:p-5">
              <h2
                className="text-white text-xl sm:text-2xl font-semibold leading-tight"
                style={{
                  fontFamily:
                    "HelveticaNeueW01-45Ligh, HelveticaNeueW02-45Ligh, HelveticaNeueW10-45Ligh, sans-serif",
                }}
              >
                {article.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Articles;
