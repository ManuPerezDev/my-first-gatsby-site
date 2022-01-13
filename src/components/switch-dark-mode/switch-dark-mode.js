import React from 'react'
import './switch-dark-mode.css'
import useLocalStorage from 'use-local-storage'
import '../global.css'
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs'

const Switch = () => {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light')

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
  }
  document.documentElement.setAttribute('data-theme', theme)

  return (
    <button onClick={switchTheme}>
      {theme === 'light' ? <BsFillSunFill /> : <BsFillMoonFill />}
    </button>
  )
}

export default Switch
