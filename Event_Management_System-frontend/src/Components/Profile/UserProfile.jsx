import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { EventRemoveByUser, getUserRegisterEvents } from '../../Redux/Action'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserProfile = () => {
    const userId = useSelector((state) => state.Event.userId)
    const userName = useSelector((state) => state.Event.userName)
    const userdata = useSelector((state) => state.Event.userData)
    console.log(userdata)
    const dispatch= useDispatch()
    var nontech="nonTechnicalEvent"
    var tech="event"

    const handleRemove=(route,id)=>{
 
       dispatch(EventRemoveByUser(route,userId,id,toast))
    }
    useEffect(()=>{
     dispatch(getUserRegisterEvents(userId))
    },[])
 
  return (
    <div className="w-4/5 m-auto">
      <div className=" flex justify-center">
      <h1
              className="title text-4xl font-semibold flex text-white pb-8 mt-8 ml-32"
              style={{ fontFamily: 'Quicksand' }}
            >
            Welcome
              <h1
                className="title text-4xl font-semibold  text-sky-500 pb-4 ml-4 mt-0"
                style={{ fontFamily: 'Quicksand' }}
              >
                {userName} 👋
              </h1>{' '}
            </h1>
      </div>
       <h1 className="text-2xl text-center md:text-left md:text-4xl text-white mb-2 ml-14">
             Registered Technical Events
       </h1>
       <div className="xl:w-11/12 xl:m-auto gap-8 xl:flex-nowrap xl:justify-none grid md:grid-cols-4">
        {userdata.techdata?.map((e, i) => (
          <div
            key={`event${i}`}
            className=" bg-gray-100/10 flex flex-col items-center hover:scale-105 transition-all w-full
             my-4 p-4 
              md:p-4
             xl:mx-0 xl:p-4 "
          >
            <h1 className="text-white text-3xl text-center uppercase">
              {e.EventName}
            </h1>
            <div className="h-[200px] w-full">
              <img
                src={e.EventImage}
                alt="event"
                className="max-h-full max-w-full m-auto"
              />
            </div>
            <p className="text-white text-justify">{e.Introduction}</p>
            <div>
              <button
               onClick={()=>{handleRemove(tech,e._id)}}
                className="text-white rounded-0
                py-2 px-4 mt-4
                md:py-2 md:px-4 md:mt-4
                xl:py-2 xl:px-4 xl:mt-4 bg-blue-400 hover:bg-blue-600 transition"
              >
                Cancel Event
              </button>
            </div>
          </div>
        ))}
      </div>
      <h1 className="text-2xl text-center md:text-left md:text-4xl text-white mb-2 ml-14">
             Registered Non-Technical Events
       </h1>
       <div className="xl:w-11/12 xl:m-auto gap-8 xl:flex-nowrap xl:justify-none grid md:grid-cols-4">
        {userdata.nontechData?.map((e, i) => (
          <div
            key={`event${i}`}
            className=" bg-gray-100/10 flex flex-col items-center hover:scale-105 transition-all w-full
             my-4 p-4 
              md:p-4
             xl:mx-0 xl:p-4 "
          >
            <h1 className="text-white text-3xl text-center uppercase">
              {e.EventName}
            </h1>
            <div className="h-[200px] w-full">
              <img
                src={e.EventImage}
                alt="event"
                className="max-h-full max-w-full m-auto"
              />
            </div>
            <p className="text-white text-justify">{e.Introduction}</p>
            <div>
              <button
               onClick={()=>{handleRemove(nontech,e._id)}}
                className="text-white rounded-0
                py-2 px-4 mt-4
                md:py-2 md:px-4 md:mt-4
                xl:py-2 xl:px-4 xl:mt-4 bg-blue-400 hover:bg-blue-600 transition"
              >
                Cancel Event
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default UserProfile