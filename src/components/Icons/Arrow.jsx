import React from 'react'

export const Arrow = (props) => {
  return (
    <svg
      {...props}
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth='1.5'
      stroke='currentColor'
      className='w-5 h-5'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75'
      />
    </svg>
  )
}
