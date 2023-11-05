import Image from 'next/image'
import React from 'react'
import Container from './Container'
import { Button } from './ui/button'


const Featured = () => {
  return (
    <>
        <h1 className='text-3xl text-center lg:leading-loose leading-relaxed py-4'>
            <b className='lg:text-6xl xl:text-7xl'>Hey, Andrew here</b>
            <p className='hidden sm:flex justify-center lg:text-5xl xl:text-6xl'>Discover my stories and creative ideas.</p>
        </h1>
        <div className='flex items-center max-sm:flex-col sm:mt-10'>
            <div className='relative h-[30px] sm:h-[500px] w-full sm:flex-1'>
                <Image
                    src={"/p1.jpeg"}
                    alt='image'
                    fill
                    priority
                    style={{objectFit: "cover"}}
                    className='rounded-lg'
                />
            </div>
            <div className='sm:flex-1'>
                <Container>
                    <h2 className='text-2xl lg:text-4xl font-bold py-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </h2>
                    <p className='text-base lg:text-xl mb-6'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                    <Button className='p-4'>
                        Read more
                    </Button>
                </Container>
            </div>
        </div>
    </>
  )
}

export default Featured