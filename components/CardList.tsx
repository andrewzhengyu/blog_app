import React from 'react'
import Container from './Container'
import Pagination from './Pagination'
import Card from './Card'

const CardList = () => {
  return (
    <>
        <h1 className='text-xl lg:text-2xl font-bold py-8 max-sm:flex justify-center'>Recent Posts</h1>
        <div className='gap-10 flex flex-col'>
        <Card
            title='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
            description='Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
            date='2023.11.6'
            categroy='culture'
            height='350px'
        />
        <Card
            title='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
            description='Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
            date='2023.11.6'
            categroy='culture'
            height='350px'
        />
        <Card
            title='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
            description='Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
            date='2023.11.6'
            categroy='culture'
            height='350px'
        />
        </div>
        
    </>
  )
}

export default CardList