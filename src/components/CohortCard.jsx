// /components/CohortCard.jsx
const CohortCard = ({ icons: Icon, title, desc }) => {
  return (
    <div className="w-full p-4 flex flex-col bg-[#0f1e25] border-2 border-[#0f1e25] rounded-xl gap-y-4 shadow-md hover:bg-white group transition delay-100 ease-in">
      <div className="flex flex-row w-full items-center gap-4 group-hover:">
        {/* Icon container */}
        <div className="w-12 h-12 bg-[#EDE4F7] border-2 border-[#A799B7] rounded-full flex items-center justify-center group-hover:">
          <Icon className="text-[#0f1e25] text-xl"/>
        </div>
        <span className="font-serif font-bold text-2xl text-[#56c0f1] group-hover:text-black transition delay-100 ease-in">
          {title}
        </span>
      </div>
      <div className="flex flex-col w-full group-hover:">
        {desc.map((line, i) => (
          <p
            key={i}
            className="whitespace-normal text-[1.05rem] text-[#9ca3af] group-hover:text-gray-800 transition delay-100 ease-in leading-relaxed"
          >
            {line}
          </p>
        ))}
      </div>
    </div>
  );
};

export default CohortCard;
