import React from 'react'
import MenuHeader from './menu-header'
import MenuItem from './menu-item'

const Menu = () => {
  return (
   <>
    <MenuHeader
      title='Most Popular'
      subtitle='What&apos;s hot'
    />
    <div className='flex sm:flex-col gap-4 flex-wrap'>
      <MenuItem
        title='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        author='Andrew'
        date='2023.11.6'
      />
      <MenuItem
        title='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        author='Andrew'
        date='2023.11.6'
      />
      <MenuItem
        title='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        author='Andrew'
        date='2023.11.6'
      />
    </div>
   </>
        
    
  )
}

export default Menu