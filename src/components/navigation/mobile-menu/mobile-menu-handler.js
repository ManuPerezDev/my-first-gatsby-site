export const mobileMenu = () => {
  const menu = document.getElementById('mobileNav')
  const isToggled = menu.style.visibility === 'visible'
  const body = document.body

  if (isToggled) {
    menu.style.visibility = 'hidden'
    body.style.overflow = 'visible'
    menu.style.opacity = '0'
  } else {
    body.style.overflow = 'hidden'
    menu.style.visibility = 'visible'
    menu.style.opacity = '1'
  }
}
