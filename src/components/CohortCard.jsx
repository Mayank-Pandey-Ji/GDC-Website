// /components/CohortCard.jsx
const CohortCard = ({ icons: Icon, title, desc }) => {
  return (
    <div className="w-full p-4 flex flex-col bg-[#09101a] border-2 border-[#3b82f6] rounded-xl gap-y-4 shadow-md">
      <div className="flex flex-row w-full items-center gap-4">
        {/* Icon container */}
        <div className="w-12 h-12 bg-[#00d4ff] border-2 border-[#3b82f6] rounded-full flex items-center justify-center">
          <Icon className="text-white text-xl" />
        </div>
        <span className="font-serif font-bold text-2xl text-white">
          {title}
        </span>
      </div>
      <div className="flex flex-col w-full">
        {desc.map((line, i) => (
          <p
            key={i}
            className="whitespace-normal text-[1.05rem] text-[#9ca3af] leading-relaxed"
          >
            {line}
          </p>
        ))}
      </div>
    </div>
  );
};

export default CohortCard;
