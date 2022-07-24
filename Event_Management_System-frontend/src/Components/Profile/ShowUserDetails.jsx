import React from 'react'

const ShowUserDetails = (props) => {
    // console.log(props.data.techdata)
  return (
    <div>
      <div>
        <h1 className="text-2xl text-cyan-300 mb-2">Technical event</h1>
        <div>
          <ul class="flex flex-col divide-y w-full">
            {props.data.techdata?.map((e) => {
              return (
                <div>
                  <li class="flex flex-row  ">
                    <div class="select-none cursor-pointer  flex flex-1 items-center p-4 ">
                      <div class="flex flex-col w-10 h-1 justify-center items-center mr-4">
                        <a href="#" class="block relative">
                          <img
                            alt="profil"
                            src={e.EventImage}
                            class="mx-auto object-cover rounded-full h-10 w-10"
                          />
                        </a>
                      </div>
                      <div class="flex-1 pl-1">
                        <div class="font-medium dark:text-white">{e.EventName}</div>
                       
                      </div>
                
                    </div>
                  </li>
                </div>
              )
            })}
          </ul>
        </div>
      </div>
      <div>
        <h1 className="text-2xl text-cyan-300 mb-2 ">Non-Technical event</h1>
        <div>
        <ul class="flex flex-col divide-y w-full">
            {props.data.nontechData?.map((e) => {
              return (
                <div>
                  <li class="flex flex-row  ">
                    <div class="select-none cursor-pointer  flex flex-1 items-center p-4 ">
                      <div class="flex flex-col w-10 h-1 justify-center items-center mr-4">
                        <a href="#" class="block relative">
                          <img
                            alt="profil"
                            src={e.EventImage}
                            class="mx-auto object-cover rounded-full h-10 w-10"
                          />
                        </a>
                      </div>
                      <div class="flex-1 pl-1">
                        <div class="font-medium dark:text-white">{e.EventName}</div>
                       
                      </div>
                
                    </div>
                  </li>
                </div>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ShowUserDetails
