
import React from 'react'
import { CATEGORYLIST } from '@/constants'
import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'

const CategoryList = () => {
  return (
    <>
        <h1 className='text-xl lg:text-2xl font-bold py-8 max-sm:flex justify-center'>Popular Category</h1>
        <div className='flex items-center justify-between flex-wrap gap-2'>
            {CATEGORYLIST.map((item) => (
                    
                    <Link href={`/${item.title}`} key={item.title} className={cn(`capitalize p-6 font-semibold 
                    flex flex-1 items-center gap-4 rounded-lg group`, `bg-[${item.background_color}]`)}>
                        <div className='relative h-[80px] w-[80px]'>
                            <Image
                                src={item.icon}
                                alt={item.title}
                                fill
                                priority
                                style={{objectFit: "cover"}}
                                className='rounded-full group-hover:border-4 group-hover:border-slate-50'
                            />
                        </div>
                        {item.title}
                    </Link>
                
            ))}
        </div>
    </>
  )
}

export default CategoryList