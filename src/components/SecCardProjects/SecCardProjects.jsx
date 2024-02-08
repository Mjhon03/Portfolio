import { IoLogoReact } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { FaLocationArrow } from "react-icons/fa6";

// eslint-disable-next-line react/prop-types
export const SecCardProjects = ({theme}) => {
  return (
    <a href="" target="_blank" rel="noreferrer" className="block group border-2 border-gray-100 hover:border-gray-200 dark:border-gray-700 dark:hover:border-gray-300/30 rounded-xl shadow_translate-transition hover:sm:shadow sm:hover:-translate-y-1"> 
      <article className="relative flex flex-col justify-between w-full py-6 px-7">
        <h2 className="text-gray-700 dark:text-gray-200 text-lg font-bold">Project Name</h2>
        <p className="text-slate-400 dark:text-slate-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor expedita cupiditate dolore temporibus?</p>
        <div className="flex gap-1 mt-1.5 items-center">
          <div className="relative group/tooltip">
            <IoLogoReact size={20} color="#22d3ee" />
            <span className="absolute pointer-events-none transition-all opacity-0 z-20 bottom-full -translate-y-0 py-1 px-1.5 text-xs left-1/2 -translate-x-1/2 rounded-md whitespace-nowrap text-gray-200 bg-gray-800 dark:bg-white dark:text-gray-700 before:content-[''] before:absolute before:bg-gray-800 before:rounded-sm before:w-2.5 before:rotate-45 before:h-2.5 before:-bottom-1 before:-z-10 before:left-1/2 before:-translate-x-1/2 before:dark:bg-white before:dark:gray-800 group-hover/tooltip:opacity-100 group-hover/tooltip:-translate-y-3">
              React
            </span>
          </div>
          <div className="relative group/tooltip">
            <SiTailwindcss size={20} color="#06b6d4" />
            <span className="absolute pointer-events-none transition-all opacity-0 z-20 bottom-full -translate-y-0 py-1 px-1.5 text-xs left-1/2 -translate-x-1/2 rounded-md whitespace-nowrap text-gray-200 bg-gray-800 dark:bg-white dark:text-gray-700 before:content-[''] before:absolute before:bg-gray-800 before:rounded-sm before:w-2.5 before:rotate-45 before:h-2.5 before:-bottom-1 before:-z-10 before:left-1/2 before:-translate-x-1/2 before:dark:bg-white before:dark:gray-800 group-hover/tooltip:opacity-100 group-hover/tooltip:-translate-y-3">
              TailwindCss
            </span>
          </div>
          <div className="relative group/tooltip">
            <SiTypescript size={20} color="#0369a1" />
            <span className="absolute pointer-events-none transition-all opacity-0 z-20 bottom-full -translate-y-0 py-1 px-1.5 text-xs left-1/2 -translate-x-1/2 rounded-md whitespace-nowrap text-gray-200 bg-gray-800 dark:bg-white dark:text-gray-700 before:content-[''] before:absolute before:bg-gray-800 before:rounded-sm before:w-2.5 before:rotate-45 before:h-2.5 before:-bottom-1 before:-z-10 before:left-1/2 before:-translate-x-1/2 before:dark:bg-white before:dark:gray-800 group-hover/tooltip:opacity-100 group-hover/tooltip:-translate-y-3">
              TypeScript
            </span>
          </div>
          <div className="relative group/tooltip">
            <IoLogoFirebase size={20} color="#f59e0b" />
            <span className="absolute pointer-events-none transition-all opacity-0 z-20 bottom-full -translate-y-0 py-1 px-1.5 text-xs left-1/2 -translate-x-1/2 rounded-md whitespace-nowrap text-gray-200 bg-gray-800 dark:bg-white dark:text-gray-700 before:content-[''] before:absolute before:bg-gray-800 before:rounded-sm before:w-2.5 before:rotate-45 before:h-2.5 before:-bottom-1 before:-z-10 before:left-1/2 before:-translate-x-1/2 before:dark:bg-white before:dark:gray-800 group-hover/tooltip:opacity-100 group-hover/tooltip:-translate-y-3">
              FireBase
            </span>
          </div>
        </div>
        <div className="absolute grid place-items-center right-3 top-3 bg-white dark:bg-gray-800 w-12 h-12 rounded-full scale-0 group-hover:scale-90 transition-transform dark:opacity-80 border-0 border-slate-100 border-indigo-100/50 dark:border-slate-200/20 shadow-sm">
          {
            theme === "dark" ? <FaLocationArrow size={20} color="#cbd5e1" /> : <FaLocationArrow size={20} color="#475569" />
          }
        </div>
      </article>
    </a>
  )
}
