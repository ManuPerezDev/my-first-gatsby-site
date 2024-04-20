import React from 'react'
import * as styles from './switch-dark-mode.module.css'
import useLocalStorage from 'use-local-storage'
import '../../global.css'
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs'

const Switch = () => {
  const isBrowser = () => typeof window !== 'undefined'
  const [theme, setTheme] = useLocalStorage('theme', 'light')

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
  }
  if (isBrowser()) {
    document.documentElement.setAttribute('data-theme', theme)
  }

  return (
    <div className={styles.switchButton} onClick={switchTheme}>
      {theme === 'light' ? <BsFillMoonFill size={30}/> : <BsFillSunFill size={30}/>}
    </div>
  )
}

export default Switch
