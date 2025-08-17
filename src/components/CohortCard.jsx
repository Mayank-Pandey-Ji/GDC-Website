// /components/CohortCard.jsx
const CohortCard = ({ icons: Icon, title, desc }) => {
  return (
    <div className="w-full p-2.5 flex flex-col text-gray-300 bg-[#0a0217] border-2 border-gray-600 rounded-xl gap-y-4">
      <div className="flex flex-row w-full items-center gap-4">
        {/* Icon container */}
        <div className="w-12 h-12 bg-[#1a0b29] border-2 border-[#ccb2fb] rounded-full flex items-center justify-center">
          <Icon className="text-[#ccb2fb] text-xl" />
        </div>
        <span className="font-serif font-bold text-3xl text-[#ccb2fb]">{title}</span>
      </div>
      <div className="flex flex-col w-full">
        {desc.map((line, i) => (
          <p key={i} className="whitespace-normal text-[1.2rem] text-gray-200">{line}</p>
        ))}
      </div>
    </div>
  )
}

export default CohortCard
