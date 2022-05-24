import React from 'react'

function Home() {
  return (
    <div className="bg-primary flex justify-center">
        <div className="flex px-20 container">
            <div className="w-[500px]">
                <img alt='' src='./pizap.jpg'></img>
            </div>
            <div className=' text-white my-auto max-w-lg sm:max-w-sm' >
                <h2 className='text-red-700 font-bold'>Hello Im Diego</h2>
                <h1 className="font-bold text-3xl">full stack developer</h1>
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