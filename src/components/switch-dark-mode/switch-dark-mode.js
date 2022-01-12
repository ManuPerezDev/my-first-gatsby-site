import React from 'react'
import './switch-dark-mode.css'
import useLocalStorage from 'use-local-storage'
import '../global.css'

const Switch = () => {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light')

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
  }
  document.documentElement.setAttribute('data-theme', theme)

  return (
    <div className='theme-switch-wrapper' onClick={switchTheme}>
      <button onClick={switchTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
      </button>
      <label className='theme-switch' htmlFor='checkbox'>
        <input type='checkbox' id='checkbox'/>
        <div className='slider round'/>
      </label>
      <em>Enable Dark Mode!</em>
    </div>
  )
}

export default Switch
