import React from 'react'
import Container from './Container'
import Image from 'next/image'
import { NAV_LINKS, SOCIALS } from '@/constants'
import Link from 'next/link'

const Footer = () => {
  return (
    <Container>
        <div className='border-t py-8 mb-12'>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
            <div className='flex flex-col items-start justify-between'>
              <div className='flex flex-col items-start '>
                <div className='flex items-center'>
                  <Image
                    src={"/logo1.png"}
                    alt='logo1'
                    width={40}
                    height={40}
                  />
                  <Image
                    src={"/logo2.png"}
                    alt='logo2'
                    width={100}
                    height={100}
                  />
                </div>
                <div>
                  <p>All rights reserved &copy;</p>
                </div>
              </div>
              <div className='space-x-4  md:flex hidden'>
                {SOCIALS.map((item) => (
                    <Link href={item.link} key={item.title}>
                        <Image
                            src={item.icon}
                            alt={item.title}
                            width={20}
                            height={20}
                        />
                    </Link>
                ))}
            </div>
            </div>
            <div className='flex items-start justify-end gap-12'>
              <div className='px-6'>
                <h2 className='text-lg font-semibold mb-2'>Links</h2>
                <ul className='flex flex-col items-start gap-2'>
                  {NAV_LINKS.map((item) => (
                    <li key={item.key}>
                      <Link href={item.href}>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className='px-6'>
                <h2 className='text-lg font-semibold mb-2'>Social</h2>
                <ul className='flex flex-col items-start gap-2'>
                  {SOCIALS.map((item) => (
                    <li key={item.title} className='capitalize'>
                      <Link href={item.link}>
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
    </Container>
  )
}

export default Footer