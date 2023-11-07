import React from 'react'
import MenuHeader from './menu-header'
import MenuItem from './menu-item'
import CategoryList from '../CategoryList'
import { CATEGORYLIST } from '@/constants'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import Image from 'next/image'

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
    <MenuHeader
      title='Categories'
      subtitle='Discover by topic'
    />
    <div className='flex sm:flex-col gap-4 flex-wrap'>
      {CATEGORYLIST.map((item) => (
        <Link href={`/${item.title}`} key={item.title} className={cn(`capitalize  font-semibold 
        flex flex-1 items-center gap-2 rounded-lg group`, `${item.background_color}`)}>
            <div className='relative h-[40px] w-[40px]'>
                <Image
                    src={item.icon}
                    alt={item.title}
                    fill
                    priority
                    style={{objectFit: "cover"}}
                    className='rounded-full group-hover:border-4 group-hover:border-slate-50'
                />
            </div>
            <div className='mx-auto'>

              {item.title}
            </div>
        </Link>
      ))}
    </div>
    <MenuHeader
      title='Editor&apos;s pick'
      subtitle='Chosen by the editor'
    />
    <div className='flex sm:flex-col gap-4 flex-wrap'>
      <div className='flex gap-4 items-center'>
        <div className='relative h-[100px] w-[150px]'>
          <Image
            src={"/p1.jpeg"}
            alt='image'
            fill
            style={{objectFit:"cover"}}
            className='rounded-full'
          />
        </div>
        <MenuItem
          title='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
          author='Andrew'
          date='2023.11.6'
        />
      </div>
      <div className='flex gap-4 items-center'>
        <div className='relative h-[100px] w-[150px]'>
          <Image
            src={"/p1.jpeg"}
            alt='image'
            fill
            style={{objectFit:"cover"}}
            className='rounded-full'
          />
        </div>
        <MenuItem
          title='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
          author='Andrew'
          date='2023.11.6'
        />
      </div>
      <div className='flex gap-4 items-center justify-start'>
        <div className='relative h-[100px] w-[150px]'>
          <Image
            src={"/p1.jpeg"}
            alt='image'
            fill
            style={{objectFit:"cover"}}
            className='rounded-full'
          />
        </div>
        <MenuItem
          title='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
          author='Andrew'
          date='2023.11.6'
        />
      </div>
    </div>
   </>
        
    
  )
}

export default Menu