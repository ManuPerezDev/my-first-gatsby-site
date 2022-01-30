export const mobileMenu = () => {
  const menu = document.getElementById('mobileNav')
  const isToggled = menu.style.visibility === 'visible'
  const body = document.body

  if (isToggled) {
    body.style.overflow = 'visible'
    menu.style.visibility = 'hidden'
    menu.style.opacity = '0'
  } else {
    body.style.overflow = 'hidden'
    menu.style.visibility = 'visible'
    menu.style.opacity = '1'
  }
}

export const setScrollVisible = () => {
  document.body.style.overflow = 'visible'
}
