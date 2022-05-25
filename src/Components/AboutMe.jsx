import React from 'react'

function AboutMe() {
  return (
    <div className="bg-primary p-0 m-0 h-screen w-screen relative">
        <div className="bg-secundary w-[50%] h-screen absolute z-0" >
        </div>
        <div className='h-3/4 w-3/4 absolute' style={{left: 'calc((100vw - 75vw)/2)',top: 'calc((100vh - 75vh)/2)'}}>
            <div className='grid grid-cols-3 gap-3 px-2 '>
                <div className='bg-tertiary h-[30vh] border '></div>
                <div className='bg-tertiary h-[30vh] border'></div>
                <div className='bg-tertiary h-[30vh] border'></div>
            </div>
            <div className='grid grid-cols-6 gap-3 px-2 pt-9'>
                <div className='border col-span-2 h-[40vh]'></div>
                <div className='border col-span-4 h-[40vh]'></div>
            </div>
        </div>
    </div>
  )
}

export default AboutMe