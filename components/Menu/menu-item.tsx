import React from 'react'
import { Badge } from '../ui/badge'

interface MenuItemProps{
    title: string,
    author: string,
    date: string,
}

const MenuItem = ({title, author, date}: MenuItemProps) => {
  return (
    <div className='gap-1 flex flex-col'>
      <div className='flex'>
        <Badge className='grow-0'>badge</Badge>
      </div>
        <div>
            <h2 className='py-2 font-semibold text-sm'>{title}</h2>
            <h3 className='mb-6 text-sm'>{author} {' '} {date}</h3>
        </div>
    </div>
  )
}

export default MenuItem