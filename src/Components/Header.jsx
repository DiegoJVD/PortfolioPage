import React from 'react'

function Header() {
  return (
    <div className="bg-primary flex justify-center">
        <div className=" text-white h-12 flex items-center px-20 justify-between container">
            <div><h1>Logo</h1></div>
            <div className="flex justify-between">
                <div className="px-1">
                <a href="www.google.com">Home</a>
                </div>
                <div className="px-1">
                <a href="www.google.com">Projects</a>
                </div>
                <div className="px-1">
                <a href="www.google.com">About</a>
                </div>
                <div className="px-1">
                <a href="www.google.com">Contact</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header