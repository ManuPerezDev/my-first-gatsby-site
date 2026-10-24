// Gradient buttons as flowbite-react 0.8 rendered them; 0.11 dropped gradientDuoTone.
const base =
  'group relative flex items-stretch justify-center rounded-lg p-0.5 text-center font-medium transition-[color,background-color,border-color,text-decoration-color,fill,stroke,box-shadow] focus:z-10 focus:outline-none'

const gradients = {
  purpleToBlue:
    'bg-gradient-to-br from-purple-600 to-cyan-500 text-white focus:ring-4 focus:ring-cyan-300 hover:bg-gradient-to-bl',
  greenToBlue:
    'bg-gradient-to-br from-green-400 to-cyan-600 text-white focus:ring-4 focus:ring-green-200 hover:bg-gradient-to-bl',
  tealToLime:
    'bg-gradient-to-r from-teal-200 to-lime-200 text-gray-900 focus:ring-4 focus:ring-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 hover:text-gray-900'
}

const inner = 'flex items-stretch px-4 py-2 text-sm transition-all duration-200'

const innerOutline =
  'w-full justify-center rounded-md border border-transparent bg-white text-gray-900 duration-75 ease-in group-hover:bg-white/0 group-hover:text-inherit'

export const GradientButton = ({ gradient, outline = false, className = '', children, ...props }) => (
  <a className={`${base} ${gradients[gradient]} ${className}`} {...props}>
    <span className={outline ? `${inner} ${innerOutline}` : inner}>{children}</span>
  </a>
)
