import { IoLogoReact } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { IoLink } from "react-icons/io5";

export const CardProjects = () => {
  return (
    <article className="flex justify-between">
        <a href="">
          <div>
            <img src="https://ik.imagekit.io/ably/ghost/prod/2023/09/best-react-websocket-library.png?tr=w-1728,q-50" alt=""  className="w-[23rem] h-[15rem] rounded-2xl" />
          </div>
        </a>
          <div className="w-[24rem] flex flex-col gap-4">
            <div>
              <h2 className="font-bold text-3xl text-slate-800 dark:text-white">Project Name</h2>
            </div>
            <div>
              <p className="text-slate-600 dark:text-slate-300 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati incidunt ullam natus minima tempore hic alias?</p>
            </div>
            <div className="flex gap-4">
              <div className="relative group/tooltip">
                <IoLogoReact size={30} color="#22d3ee" />
                <span className="absolute pointer-events-none transition-all opacity-0 z-20 bottom-full -translate-y-0 py-1 px-1.5 text-xs left-1/2 -translate-x-1/2 rounded-md whitespace-nowrap text-gray-200 bg-gray-800 dark:bg-white dark:text-gray-700 before:content-[''] before:absolute before:bg-gray-800 before:rounded-sm before:w-2.5 before:rotate-45 before:h-2.5 before:-bottom-1 before:-z-10 before:left-1/2 before:-translate-x-1/2 before:dark:bg-white before:dark:gray-800 group-hover/tooltip:opacity-100 group-hover/tooltip:-translate-y-3">
                  React
                </span>
              </div>
              <div className="relative group/tooltip">
                <SiTailwindcss size={30} color="#06b6d4" />
                <span className="absolute pointer-events-none transition-all opacity-0 z-20 bottom-full -translate-y-0 py-1 px-1.5 text-xs left-1/2 -translate-x-1/2 rounded-md whitespace-nowrap text-gray-200 bg-gray-800 dark:bg-white dark:text-gray-700 before:content-[''] before:absolute before:bg-gray-800 before:rounded-sm before:w-2.5 before:rotate-45 before:h-2.5 before:-bottom-1 before:-z-10 before:left-1/2 before:-translate-x-1/2 before:dark:bg-white before:dark:gray-800 group-hover/tooltip:opacity-100 group-hover/tooltip:-translate-y-3">
                  Tailwindcss
                </span>
              </div>
              <div className="relative group/tooltip">
                <SiTypescript size={30} color="#0369a1" />
                <span className="absolute pointer-events-none transition-all opacity-0 z-20 bottom-full -translate-y-0 py-1 px-1.5 text-xs left-1/2 -translate-x-1/2 rounded-md whitespace-nowrap text-gray-200 bg-gray-800 dark:bg-white dark:text-gray-700 before:content-[''] before:absolute before:bg-gray-800 before:rounded-sm before:w-2.5 before:rotate-45 before:h-2.5 before:-bottom-1 before:-z-10 before:left-1/2 before:-translate-x-1/2 before:dark:bg-white before:dark:gray-800 group-hover/tooltip:opacity-100 group-hover/tooltip:-translate-y-3">
                  TyoeScript
                </span>
              </div>
              <div className="relative group/tooltip">
                <IoLogoFirebase size={30} color="#f59e0b" />
                <span className="absolute pointer-events-none transition-all opacity-0 z-20 bottom-full -translate-y-0 py-1 px-1.5 text-xs left-1/2 -translate-x-1/2 rounded-md whitespace-nowrap text-gray-200 bg-gray-800 dark:bg-white dark:text-gray-700 before:content-[''] before:absolute before:bg-gray-800 before:rounded-sm before:w-2.5 before:rotate-45 before:h-2.5 before:-bottom-1 before:-z-10 before:left-1/2 before:-translate-x-1/2 before:dark:bg-white before:dark:gray-800 group-hover/tooltip:opacity-100 group-hover/tooltip:-translate-y-3">
                  FireBase
                </span>
              </div>
            </div>
            <div className="w-[20rem]">
              <a href="" target="_blank" rel="noreferrer" className=" w-[7rem] h-9 flex gap-2  hover:gap-6 transition-[gap] items-center justify-center text-lg  bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold rounded-lg">
                Live <IoLink size={20} />
              </a>
            </div>
          </div>
      </article>
  )
}
