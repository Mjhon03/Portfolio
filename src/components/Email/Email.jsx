import { MdEmail } from "react-icons/md";
import { MdOutlineDoubleArrow } from "react-icons/md";
import { FaCopy } from "react-icons/fa6";
import CopyToClipboard from "react-copy-to-clipboard";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
export const Email = ({theme}) => {

  const [copie,setCopie] = useState(false)

  return (
    <section className="w-[48rem] flex items-center flex-col  gap-4 border-slate-700 dark:border-slate-100">
      <div className="w-[48rem] h-[3rem] flex gap-4 items-end">
        <h2 className="font-bold text-2xl text-indigo-400 dark:text-gray-100">Email </h2>
        {
          theme === "dark" ? <MdEmail size={35} color="#f3f4f6"   /> :  <MdEmail size={35} color="#818cf8"/>
        }
      </div>
      <div className="w-full flex justify-between">
        <input type="text" disabled className="bg-black/5 dark:bg-white/5 w-[87%] py-1.5 px-3 rounded-lg grid place-items-center text-slate-600 dark:text-slate-300" value="Mjhon1841@gmail.com" />
        <div className="relative group/tooltip">
          <a href="mailto:mjhon1841@gmail.com" target="_blank" rel="noreferrer" className="w-10 h-10 flex justify-center items-center bg-indigo-100 hover:bg-opacity-80 dark:bg-indigo-500 hover:dark:bg-opacity-90 text-indigo-500 dark:text-indigo-100 rounded-lg" >
            <MdOutlineDoubleArrow size={30} />
          </a>
          <span className="absolute pointer-events-none transition-all opacity-0 z-20 bottom-full -translate-y-0 py-1 px-1.5 text-xs left-1/2 -translate-x-1/2 rounded-md whitespace-nowrap text-gray-200 bg-gray-800 dark:bg-white dark:text-gray-700 before:content-[''] before:absolute before:bg-gray-800 before:rounded-sm before:w-2.5 before:rotate-45 before:h-2.5 before:-bottom-1 before:-z-10 before:left-1/2 before:-translate-x-1/2 before:dark:bg-white before:dark:gray-800 group-hover/tooltip:opacity-100 group-hover/tooltip:-translate-y-3">
            Send email
          </span>
        </div>
        <CopyToClipboard text="Mjhon1841@gmail.com">
          <div className="relative group/tooltip">
            <button onClick={() => setCopie(true)} className=" w-10 h-10 flex justify-center items-center bg-indigo-100 hover:bg-opacity-80 dark:bg-indigo-500 hover:dark:bg-opacity-90 text-indigo-500 dark:text-indigo-100 rounded-lg">
            <FaCopy size={25} />
            </button>
            <span className="absolute pointer-events-none transition-all opacity-0 z-20 bottom-full -translate-y-0 py-1 px-1.5 text-xs left-1/2 -translate-x-1/2 rounded-md whitespace-nowrap text-gray-200 bg-gray-800 dark:bg-white dark:text-gray-700 before:content-[''] before:absolute before:bg-gray-800 before:rounded-sm before:w-2.5 before:rotate-45 before:h-2.5 before:-bottom-1 before:-z-10 before:left-1/2 before:-translate-x-1/2 before:dark:bg-white before:dark:gray-800 group-hover/tooltip:opacity-100 group-hover/tooltip:-translate-y-3">
              {
                copie ? "Copied" : "Copy email"
              }
            </span>
          </div>
        </CopyToClipboard>
      </div>
    </section>
  )
}