import React from 'react'

import { Button } from './ui/button'

const Pagination = () => {
  return (
    <div className='flex items-center justify-between pr-6 py-6'>
      <Button variant={"outline"}>Previous</Button>
      <Button>Next</Button>
    </div>
  )
}

export default Pagination