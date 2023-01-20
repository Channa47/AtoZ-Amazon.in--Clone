import React from 'react'
import { Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'

function UserSkeliton() {
  return (
    <div style={{marginTop:"50px",display:"grid",gap:"20px"}} >
        <Skeleton w={"50%"} m="auto">
        <div>contents wrapped</div>
        <div>won't be visible</div>
        </Skeleton>
        <Skeleton w={"50%"} m="auto">
        <div>contents wrapped</div>
        <div>won't be visible</div>
        </Skeleton>
        <Skeleton w={"50%"} m="auto">
        <div>contents wrapped</div>
        <div>won't be visible</div>
        </Skeleton>
        <Skeleton w={"50%"} m="auto">
        <div>contents wrapped</div>
        <div>won't be visible</div>
        </Skeleton>
        <Skeleton w={"50%"} m="auto">
        <div>contents wrapped</div>
        <div>won't be visible</div>
        </Skeleton>
        <Skeleton w={"50%"} m="auto">
        <div>contents wrapped</div>
        <div>won't be visible</div>
        </Skeleton>
        <Skeleton w={"50%"} m="auto">
        <div>contents wrapped</div>
        <div>won't be visible</div>
        </Skeleton>
        
    </div>
  )
}

export default UserSkeliton