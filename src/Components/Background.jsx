import React from 'react'

export default function Background() {
  return (
    <>
    <div className='w-full h-screen fixed z-[2]'>

     <div className='flex justify-center py-10 absolute top-[5%]  w-full  font-semibold text-zinc-300'>Documents</div>
      <h1 className=' text-[13vw] leading-none tracking-tighter  font-semibold text-zinc-500 -translate-x-[50%] -translate-y-[50%] absolute top-1/2 left-1/2 '>Docs.</h1>
 
    </div>
    </>
  )
}
