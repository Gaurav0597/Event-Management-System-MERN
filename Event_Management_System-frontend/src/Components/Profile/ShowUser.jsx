import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUserByAdmin, getUserRegisterEvents } from '../../Redux/Action'
import ShowUserDetails from './ShowUserDetails'

const ShowUser = (props) => {
    const [booleanValue,setBooleanValue]=useState(false)
    const userdata = useSelector((state) => state.Event.userData)
    // console.log(userdata)
    const dispatch=useDispatch()
    const handleuserDetails=(e)=>{
        setBooleanValue(true)
       dispatch(getUserRegisterEvents(e))
    }
    const DeleteUser=(e)=>{
        dispatch(deleteUserByAdmin(e))
    }
  return (
    <div className="flex w-4/5 m-auto">
    <div class="flex flex-col container max-w-md mt-10  w-1/2  bg-violet-900 rounded-lg ">
      <ul class="flex flex-col divide-y w-full">
        {props.updatedUser.map((e) => {
          return (
            <div className="dark:bg-gray-800 " >
             <li class="flex flex-row ">
              <div class="select-none cursor-pointer  flex flex-1 items-center p-4 " >
                <div class="flex flex-col w-10 h-10 justify-center items-center mr-4">
                  <a href="#" class="block relative">
                    <img
                      alt="profil"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8czzbrLzXJ9R_uhKyMiwj1iGxKhJtH7pwlQ&usqp=CAU"
                      class="mx-auto object-cover rounded-full h-10 w-10"
                    />
                  </a>
                </div>
                <div class="flex-1 pl-1">
                  <div class="font-medium dark:text-white">{e.name}</div>
                  <div class="text-gray-600 dark:text-gray-200 text-sm">
                    {e.email}
                  </div>
                </div>
                <div class="flex flex-row justify-center">
               
                  <svg 
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-orange-200 mr-2 mt-1"
                    onClick={()=>DeleteUser(e._id)}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                  <button
                  onClick={()=>handleuserDetails(e._id)}
                    type="button"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    className="inline-block px-6 py-2.5 bg-blue-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                  View details
                  </button>
                </div>
              </div>
            </li> 
            </div>  
          ) 
        })}
      </ul>
    </div>
    {booleanValue?  <div className=" w-2/5  mt-10 ml-5">
        <ShowUserDetails data={userdata}/>
    </div>:null}
      
    </div>

  )
}

export default ShowUser
