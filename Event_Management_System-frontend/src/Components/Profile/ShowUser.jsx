import React from 'react'

const ShowUser = (props) => {
  return (
    <div class="flex flex-col container max-w-md mt-10 mx-auto w-full items-center justify-center bg-white dark:bg-gray-800 rounded-lg shadow">
    <ul class="flex flex-col divide-y w-full">
       {props.updatedUser.map((e)=>{
           return (
            <li class="flex flex-row">
            <div class="select-none cursor-pointer hover:bg-gray-50 flex flex-1 items-center p-4">
              <div class="flex flex-col w-10 h-10 justify-center items-center mr-4">
                <a href="#" class="block relative">
                  <img alt="profil" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80" class="mx-auto object-cover rounded-full h-10 w-10" />
                </a>
              </div>
              <div class="flex-1 pl-1">
                <div class="font-medium dark:text-white">{e.name}</div>
                <div class="text-gray-600 dark:text-gray-200 text-sm">{e.email}</div>
              </div>
              <div class="flex flex-row justify-center">
                <div class="text-gray-600 dark:text-gray-200 text-xs">6:00 AM</div>
                <button class="w-10 text-right flex justify-end">
                  <svg width="20" fill="currentColor" height="20" class="hover:text-gray-800 dark:hover:text-white dark:text-gray-200 text-gray-500" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </li>
           )
       })}
    </ul>
  </div>
  )
}

export default ShowUser