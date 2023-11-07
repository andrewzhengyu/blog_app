
import React from 'react'
import Container from './Container'
import { NAV_LINKS, SOCIALS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import MobileSidebar from './MobileSidebar'

const Navbar = () => {
  return (
    <Container>
        <nav className='py-5 sticky flex items-center justify-between'>
            <MobileSidebar/>
            <div className='space-x-4  md:flex hidden'>
                {SOCIALS.map((item) => (
                    <Link href={item.link} key={item.title}>
                        <Image
                            src={item.icon}
                            alt={item.title}
                            width={24}
                            height={24}
                        />
                    </Link>
                ))}
            </div>
            <div className='relative'>
                <Image
                    src={"/logo2.png"}
                    alt='logo'
                    width={120}
                    height={120}
                    style={{objectFit: "contain"}}
                    className='cursor-pointer'
                />
            </div>
            <div className='space-x-4 hidden sm:flex'>
                {NAV_LINKS.map((item) => (
                    <Link href={item.href} key={item.key}>
                        <div className=' hover:text-lg transition-all '>
                            {item.label}    
                        </div>
                    </Link>
                ))}
            </div>
        </nav>
    </Container>
  )
}

export default Navbar