import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const links = [
    { name: 'Home', link: '/' },
    { name: 'Schedule', link: 'schedule' },
    { name: 'Practice', link: 'practice' },
    { name: 'Events', link: 'event' },
    { name: 'Industry Talk', link: 'industryTalk' },
  ]

  return (
    <div className="py-2 flex justify-between items-center px-8 z-10">
      <div className="text-red-500 w-1/6">
        {/* imagediv */}
        imageDiv
      </div>
      <div className="flex justify-between items-center w-4/6">
        {/* pagesDiv */}
        {links.map((item) => {
          return (
            
              <NavLink
                  to={item.link}
                className={({ isActive }) => {
                  return ` text-gray-200 border-b border-purple-500 tracking-widest p-2 px-8 transition hover:bg-purple-400 font-bold hover:scale-125 transform ${
                    isActive ? 'bg-purple-600' : ''
                  }`
                }}
            
              >
                {item.name}
              </NavLink>
            
          )
        })}
      </div>
      <div className="w-1/6 items-center">
        {/* login/logout div */}
        LOginDiv
      </div>
    </div>
  )
}

export default Navbar
