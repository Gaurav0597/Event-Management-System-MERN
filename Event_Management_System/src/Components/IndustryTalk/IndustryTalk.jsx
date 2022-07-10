import React from 'react'

const IndustryTalk = () => {
  return (
    <div>
      <h1
        className="title text-6xl font-semibold text-center text-white pb-12 mt-8"
        style={{ fontFamily: 'Quicksand' }}
      >
        SEMINARS
      </h1>

      <div className="md:w-4/5 mx-auto bg-gray-100/10 flex p-4 my-6">
        <div className="flex flex-col items-center justify-center w-full md:w-3/12">
          <img
            src="https://pbs.twimg.com/profile_images/1172820413715378176/PJVEwuGx_400x400.jpg"
            alt="speaker"
            className="h-[200px] w-[200px] rounded-full"
          />
          <h3 className="md:text-white text-2xl md:text-3xl my-2 text-blue-500">
             Swanand Kadam
          </h3>
        </div>
        <div className=" w-full md:w-9/12">
          <h1 className="text-2xl text-center md:text-left md:text-4xl text-white mb-2">
             History of Kalam
          </h1>
          <div className="grid grid-cols-4 gap-4 my-4">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-blue-500 border-b border-gray-400/10">
                Date
              </h3>
              <p className="mb-4 text-sm md:text-xl text-white">
                15<sup>th</sup> Aug, 2022
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-blue-500 border-b border-gray-400/10">
                Time
              </h3>
              <p className="mb-4 text-sm md:text-xl text-white">
                5:00pm - 5:45pm
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-blue-500 border-b border-gray-400/10">
                Platform
              </h3>
              <p className="mb-4 text-sm md:text-xl text-white">Zoom</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-blue-500 border-b border-gray-400/10">
                Link
              </h3>
              <p>
                <a
                  href="https://teams.microsoft.com/l/meetup-join/19%3a4e7342607a3546e2a7d2cc3729d5fb91%40thread.tacv2/1645161097635?context=%7b%22Tid%22%3a%220a0aa63d-82d0-4ba1-b909-d7986ece4c4c%22%2c%22Oid%22%3a%22375f278a-baa2-4fcd-adad-f2043d4b2bb5%22%7d"
                  target="_blank"
                  rel="noreferrer"
                  className="mb-4 text-sm md:text-xl text-white"
                >
                  Click here to Register
                </a>
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-blue-500 border-b border-gray-400/10">
              About Speaker
            </h3>
            <ul className="list-disc mx-4 my-2">
              <li className="text-sm md:text-xl text-white">
               Senior Software Developer
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IndustryTalk
