import React from 'react'

function Home() {
  return (
    <div className="bg-primary flex justify-center">
        <div className="flex px-20 container relative" style={{height: 'calc(100vh - 48px)'}}>
            <div className="w-[400px] absolute" style={{bottom: 'calc(0vh + 0px)'}}>
                <img alt='' src='./photo.png'></img>
            </div>
            <div className=' text-white my-auto max-w-lg sm:max-w-sm left-[50%] absolute' style={{top: 'calc(50vh - 78px)'}} >
                <h2 className='text-red-700 font-bold capitalize'>Hello I'm Diego</h2>
                <h1 className="font-bold text-3xl capitalize">full stack developer</h1>
                <p className='sm:hidden'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum euismod, nisi vel consectetur egestas, nisl nunc
                    aliquet nunc, eget egestas nisl nunc eget nisl.`
                </p>
            </div>
        </div>
    </div>
  )
}

export default Home