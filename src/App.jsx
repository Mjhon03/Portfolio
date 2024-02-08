/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import './App.css'
import { Experience } from './components/Experience/Experience.jsx'
import { Header } from './components/Header/Header.jsx'
import { StaticHeader } from './components/StaticHeader/StaticHeader.jsx'
import { Projects } from './components/Projects/Projects.jsx'
import { Email } from './components/email/email.jsx'

function App() {
  
  const [theme, setTheme] = useState("light")


  useEffect(() => {
    if (theme==="dark") {
      document.querySelector('html').classList.add('dark')
    }
    else{
      document.querySelector('html').classList.remove('dark')
    }
  },[theme])

  const handleCangeTheme = () => {
    setTheme(prevTheme => prevTheme === "light" ? "dark" : "light")
  }
  return (
    <>
      <main className='flex flex-col items-center gap-10 pb-10 dark:bg-primary bg-[#f7f7f7]'>
        <StaticHeader handleCangeTheme={handleCangeTheme} theme={theme} />
        <Header theme={theme}/>
        <Experience theme={theme}/> 
        <Projects theme={theme}/>
        <Email theme={theme}/>
      </main>
    </>
  )
}

export default App
