import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { GrDocumentUser } from "react-icons/gr";

// eslint-disable-next-line react/prop-types
export const Header = ({theme}) => {
  return (
    <header className="w-[48rem] h-[16rem] flex items-center flex-col pt-2 border-b-2 border-dashed border-slate-700 dark:border-slate-100">
      <div className="w-[48rem] flex items-center justify-between">
        <div>
          <div className=" w-[12rem] h-[12rem] rounded-full bg-slate-700 flex justify-center items-center">
            <img src="https://avatars.githubusercontent.com/u/88726743?v=4" alt="Me"  className="w-[11rem] h-[11rem] rounded-full"/>
          </div>
        </div>
        <div className="w-[34rem] h-[10rem] flex flex-col justify-center gap-4">
          <h1 className="text-[2rem] font-bold text-slate-700 dark:text-slate-100 font-roboto">Jhon Montoya</h1>
          <p className="dark:text-slate-300 text-slate-600 text-xl rounded-2xl">A passionate Full Stack Developer</p>
          <div className="flex gap-4"> 
            <div className="relative group/tooltip">
              <a href="https://www.linkedin.com/in/jhon-montoya-dev/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 font-bold px-4 h-10 rounded-xl border-2 border-slate-700 text-sky-600">
                <FaLinkedin color="#0284c7" size={20} /> 
                Linkedin
              </a>
              <span className="absolute pointer-events-none transition-all opacity-0 z-20 bottom-full -translate-y-0 py-1 px-1.5 text-xs left-1/2 -translate-x-1/2 rounded-md whitespace-nowrap text-gray-200 bg-gray-800 dark:bg-white dark:text-gray-700 before:content-[''] before:absolute before:bg-gray-800 before:rounded-sm before:w-2.5 before:rotate-45 before:h-2.5 before:-bottom-1 before:-z-10 before:left-1/2 before:-translate-x-1/2 before:dark:bg-white before:dark:gray-800 group-hover/tooltip:opacity-100 group-hover/tooltip:-translate-y-3">
              Linkedin
              </span>
            </div>
            <div className="relative group/tooltip">
              <a href="https://github.com/Mjhon03" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 font-bold px-4 h-10 rounded-xl border-2 border-slate-700 text-slate-700 dark:text-slate-300">
                {
                theme === "light" ? <FaGithub color="#111827" size={20} />  : <FaGithub color="#cbd5e1" size={20} /> 
                }
                GitHub
              </a>
              <span className="absolute pointer-events-none transition-all opacity-0 z-20 bottom-full -translate-y-0 py-1 px-1.5 text-xs left-1/2 -translate-x-1/2 rounded-md whitespace-nowrap text-gray-200 bg-gray-800 dark:bg-white dark:text-gray-700 before:content-[''] before:absolute before:bg-gray-800 before:rounded-sm before:w-2.5 before:rotate-45 before:h-2.5 before:-bottom-1 before:-z-10 before:left-1/2 before:-translate-x-1/2 before:dark:bg-white before:dark:gray-800 group-hover/tooltip:opacity-100 group-hover/tooltip:-translate-y-3">
              GitHub
              </span>
            </div>
            <div className="relative group/tooltip">
              <a href="../../assets/Jhon-Montoya-CV.pdf" download="Jhon-Montoya-CV.pdf" className="flex items-center gap-3 font-bold px-4 h-10 rounded-xl border-2 border-slate-700 bg-[#6366F1] text-slate-700 dark:text-slate-100">
                <GrDocumentUser color="#f1f5f9" size={20}/>
                Donwload CV
              </a>
              <span className="absolute pointer-events-none transition-all opacity-0 z-20 bottom-full -translate-y-0 py-1 px-1.5 text-xs left-1/2 -translate-x-1/2 rounded-md whitespace-nowrap text-gray-200 bg-gray-800 dark:bg-white dark:text-gray-700 before:content-[''] before:absolute before:bg-gray-800 before:rounded-sm before:w-2.5 before:rotate-45 before:h-2.5 before:-bottom-1 before:-z-10 before:left-1/2 before:-translate-x-1/2 before:dark:bg-white before:dark:gray-800 group-hover/tooltip:opacity-100 group-hover/tooltip:-translate-y-3">
              Donwload CV
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}