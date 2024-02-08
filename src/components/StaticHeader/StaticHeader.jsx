import { useState } from "react";
import { FaMoon } from "react-icons/fa";
import { IoSunnySharp } from "react-icons/io5";
import { UserHeaderImg } from "../UserHeaderImg/UserHeaderImg";
import { CSSTransition, SwitchTransition } from "react-transition-group"

// eslint-disable-next-line react/prop-types
export const StaticHeader = ({handleCangeTheme,theme}) => {

  const [navbar,setNavbar] = useState(false)

  const createComponentUser = () => {
    if(window.scrollY >= 300){
      setNavbar(true)
    }
    else {
      setNavbar(false)
    }
  }

  window.addEventListener('scroll', createComponentUser)

  return (
    <div className="h-16 flex justify-center items-center sticky top-0 z-50 bg-[#f7f7f7] dark:bg-gray-800 bg-opacity-80 dark:bg-opacity-80 backdrop-blur-lg">
      <div className="w-[48.1rem] h-full  flex justify-between ">
        <div>
          {
            navbar ? 
            <SwitchTransition>
            <CSSTransition classNames={{ appear: "opacity-0", appearActive: "transition-opacity duration-300 opacity-100", enter: "opacity-0", enterActive: "transition-opacity duration-300 opacity-100", exit: "opacity-100",}} 
            key={"userImg"} addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}>
              <UserHeaderImg />
            </CSSTransition>
          </SwitchTransition>
            : <div></div>
          }
        </div>
        <button onClick={handleCangeTheme} >
          {
            theme === "light" ? <IoSunnySharp color="#14213d" size={25} /> : <FaMoon color="white" size={25} />
          }
        </button>
      </div>
  </div>
  )
}
