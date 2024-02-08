import { BiSolidShoppingBags } from "react-icons/bi";

// eslint-disable-next-line react/prop-types
export const Experience = ({theme}) => {

  return (
    <section id="clase" className="w-[48rem] flex items-center flex-col gap-4 border-slate-700 dark:border-slate-100">
      <div className="w-[48rem] h-[3rem] flex gap-4 items-end">
        <h2 className="font-bold text-2xl text-indigo-400 dark:text-gray-100">Experience </h2>
        {
          theme === "dark" ? <BiSolidShoppingBags size={40} color="#f3f4f6"   /> :  <BiSolidShoppingBags size={40} color="#818cf8"/>
        }
      </div>
      <div className="w-[48rem] h-[4rem] flex flex-col">
        <h1 className="text-xl font-bold text-slate-600 dark:text-gray-100" >.Net Developer</h1>
        <p className="text-lg text-slate-600 dark:text-gray-100">Ago 2023 - Present</p>
      </div>
      <div className="w-[48rem] ">
        <ul className="list-disc flex flex-col gap-2 ml-5 text-slate-700 dark:text-gray-300 text-lg">
          <li>Planificación de proyectos</li>
          <li>Recopilación y análisis de datos</li>
          <li>Líder de equipo desarrollador</li>
          <li>Optimización de modulos para mejora de perfomance y LCP/FCP</li>
        </ul>
      </div>
      <div className="w-[48rem] h-[4rem] flex flex-col">
        <h1 className="text-xl font-bold text-slate-600 dark:text-gray-100" >Full Stack Developer</h1>
        <p className="text-lg text-slate-600 dark:text-gray-100">Ago 2022 - May 2023</p>
      </div>
      <div className="w-[48rem] ">
        <ul className="list-disc flex flex-col gap-2 ml-5 text-slate-700 dark:text-gray-300 text-lg">
          <li>Planificación de proyectos</li>
          <li>Recopilación y análisis de datos</li>
          <li>Líder de equipo desarrollador</li>
          <li>Optimización de modulos para mejora de perfomance y LCP/FCP</li>
        </ul>
      </div>
    </section>
  )
  }