import Image from "next/image"

export default function Card({ title, img, desc }) {
  return (
    <>
      <div className="bg-white/10 flex flex-col items-center p-6 rounded-2xl gap-3 backdrop-blur-xl shadow-lg">
        <Image src={img} alt={desc} width={50} height={50} className="pb-2" />
        <div className="text-lg lg:text-xl font-semibold">{title}</div>
        <div className="flex items-center gap-2">
          <div className="text-xs font-semibold text-indigo-500">{desc}</div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 text-indigo-500">
            <path fillRule="evenodd" d="M2 8c0 .414.336.75.75.75h8.69l-1.22 1.22a.75.75 0 1 0 1.06 1.06l2.5-2.5a.75.75 0 0 0 0-1.06l-2.5-2.5a.75.75 0 1 0-1.06 1.06l1.22 1.22H2.75A.75.75 0 0 0 2 8Z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
    </>
  )
}
