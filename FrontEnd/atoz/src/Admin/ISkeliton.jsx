import React from 'react'
import "./AdminPage.css"
import { Skeleton, SkeletonCircle, SkeletonText, Stack } from '@chakra-ui/react'
function ISkeliton() {
  return (
    <div>
        <div className='ItemCardDiv'>
        <Skeleton height='200px' width='300px' />
        <Skeleton height='200px' width='300px' />
        <Skeleton height='200px' width='300px' />
        <Skeleton height='200px' width='300px' />
        <Skeleton height='200px' width='300px' />
        <Skeleton height='200px' width='300px' />
        <Skeleton height='200px' width='300px' />
        <Skeleton height='200px' width='300px' />
        <Skeleton height='200px' width='300px' />
        <Skeleton height='200px' width='300px' />
        <Skeleton height='200px' width='300px' />
        <Skeleton height='200px' width='300px' />
        <Skeleton height='200px' width='300px' />
        <Skeleton height='200px' width='300px' />
        <Skeleton height='200px' width='300px' />
        </div>
    </div>
  )
}

export default ISkeliton