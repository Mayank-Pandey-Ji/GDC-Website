// /components/cohort_card.jsx

// /components/CohortCard.jsx
const CohortCard = ({ icons: Icon, title, desc }) => {
  return (
    <div className="w-full p-2.5 flex flex-col text-gray-300 bg-[#0d131b] border-2 border-gray-500 rounded-xl gap-y-4">
      <div className="flex flex-row w-full items-center gap-4">
        {/* Icon container */}
        <div className="w-12 h-12 bg-[#0f1722] border-2 border-[#00ff9f] rounded-full flex items-center justify-center">
          <Icon className="text-[#00ff9f] text-xl" />
        </div>
        <span className="font-serif font-bold text-2xl">{title}</span>
      </div>
      <div className="flex flex-col w-full">
        {desc.map((line, i) => (
          <p key={i} className="whitespace-normal">{line}</p>
        ))}
      </div>
    </div>
  )
}

export default CohortCard



/// Older One --------->

// const CohortCard = ({ id, title, desc }) => {
//   return (
//     <>
//       <div className="w-full p-2.5 flex flex-col text-gray-300 bg-[#0d131b] border-2 border-gray-500 rounded-xl gap-y-4">
//         <div className="flex flex-row w-full items-center gap-2">
//           <div className="rounded-full py-2 px-4 border-t-1 border-b-[0.1px] border-t-[#ffffff] border-b-[rgb(248,248,248)] bg-[#17ac4e]">
//             {id}
//           </div>
//           <span className="font-serif font-bold text-2xl">{title}</span>
//         </div>
//         <div className="flex flex-col w-full">
//           <p className="whitespace-normal">{desc[0]}</p>
//           <p className="whitespace-normal">{desc[1]}</p>
//         </div>
//       </div>
//     </>
//   )
// }

// export default CohortCard
