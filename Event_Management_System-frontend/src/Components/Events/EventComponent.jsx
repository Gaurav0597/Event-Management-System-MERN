import React from 'react'
import {Link, useParams} from "react-router-dom"

const EventComponent = (props) => {
  var str=window.location.pathname
  // console.log(str)
  return (
    <div>
      <h1
        className="title text-6xl font-semibold text-center text-white pb-12"
        style={{ fontFamily: 'Quicksand' }}
      >
        EVENTS
      </h1>
      <div className="xl:w-11/12 xl:m-auto gap-8 xl:flex-nowrap xl:justify-none grid md:grid-cols-4">
        {props.data.map((e, i) => (
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
            <p className="text-white">{e.Introduction}</p>
            <Link to={`${str}/${e._id}`}>
              <button
                className="text-white rounded-0
                py-2 px-4 mt-4
                md:py-2 md:px-4 md:mt-4
                xl:py-2 xl:px-4 xl:mt-4 bg-blue-400 hover:bg-blue-600 transition"
              >
                Read More!
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default EventComponent