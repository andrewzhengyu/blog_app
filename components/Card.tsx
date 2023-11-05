import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'

interface CardProps{
    title: string,
    description: string,
    categroy: string,
    date: string,
    height: string,
    readMore?: () => void
}

const Card = ({
    title,
    description,
    categroy,
    date,
    height,
    readMore
}: CardProps) => {
  return (
    <div className=' relative flex max-sm:flex-col'>
        <div className={`h-[${height}] sm:flex-1 relative `}>
            <Image
                src={"/p1.jpeg"}
                alt='image'
                fill
                priority
                style={{objectFit: "cover"}}
                className='rounded-lg'
            />
        </div>
        <div className='flex-1 p-6'>
            <h3 className='py-4 capitalize'>{date} {' '} {categroy}</h3>
            <h2 className='font-semibold py-4 text-xl'>{title}</h2>
            <p className='mb-10'>{description}</p>
            <Button variant={"secondary"}>
                read more
            </Button>
        </div>

    </div>
  )
}

export default Card