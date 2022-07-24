import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Home = () => {
  const userId = useSelector((state) => state.Event.userId)
  const adminId = useSelector((state) => state.Event.adminId)
  console.log('userId', userId)
  console.log('adminId', adminId)
  return (
    <div>
      <div className=" mt-8">
        <div className=" flex items-center md:justify-between w-full flex-col xl:flex-row">
          <div className=" p-8 flex flex-col items-center justify-center xl:block xl:p-20">
            <h1 className="text-4xl text-white xl:text-8xl font-bold">RAJWAN</h1>
            <p className="text-xl text-center text-cyan-300 my-4 mt-4 uppercase xl:text-3xl xl:text-left">
              where imagination turns into reality
            </p>
            <h3 className="text-white text-2xl xl:text-4xl font-bold">
              15th Nov to 26th july
            </h3>
            <Link to="/event" style={{ textDecoration: 'none' }}>
              <button className="btn text-2xl mt-4 ml-2 text-white">  
                Participate!
              </button>
            </Link>
          </div>
          <div data-mdb-ripple="true">
            <img 
              src="https://drive.google.com/uc?export=view&id=1j8GKWFBp478GG1KtL3uhqRricA64fmP-"
              alt="RAJWAN"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
