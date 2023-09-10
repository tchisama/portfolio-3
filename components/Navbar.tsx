import {FiArrowUpRight} from "react-icons/fi";
export default function Navbar({isAbsolute}:{isAbsolute:boolean}) {
  return (
    <div className={`md:p-8 p-2 pt-8  flex justify-between  ${isAbsolute?"fixed":""} w-full z-50 left-0 top-0`}>
        <div className="flex justify-between container mx-auto">
            <div className="flex-1">
                <h1 className="text-2xl md:text-4xl font-bold opacity-80 ">(◕ᗜ◕)</h1>
            </div>
            <div className="flex-1 flex justify-end ">
                <h1 className="text-2xl font-bold  opacity-80 flex">Github<FiArrowUpRight size={35}/></h1>
            </div>
        </div>
    </div>
  )
}
