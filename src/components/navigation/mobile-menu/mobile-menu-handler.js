export const mobileMenu = () => {
  const menu = document.getElementById('mobileNav')
  const isToggled = menu.style.display === 'block'
  const body = document.body

  if (isToggled) {
    menu.style.display = 'none'
    body.style.overflow = 'visible'
  } else {
    body.style.overflow = 'hidden'
    menu.style.display = 'block'
  }
}
