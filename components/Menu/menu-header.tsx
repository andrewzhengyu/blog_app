import React from 'react'

interface MenuHeaderProps{
    title: string,
    subtitle: string,
}

const MenuHeader = ({title, subtitle}: MenuHeaderProps) => {
  return (
    <div className='py-8 max-sm:flex justify-center flex-col items-start'>
        <h3 className='text-sm'>{subtitle}</h3>
        <h1 className='text-xl lg:text-2xl font-bold '>{title}</h1>
    </div>
  )
}

export default MenuHeader