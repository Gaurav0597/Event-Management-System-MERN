import React from 'react'

const Courses = () => {
  return (
    <div>
        <div className="flex flex-col  h-[350px] w-[305px] bg-gray-100/10 rounded-2xl">
                 <div className="h-2/5 w-full">
                    <img className="w-full h-full" src="https://static.toiimg.com/thumb/msid-84847748,imgsize-44422,width-400,resizemode-4/84847748.jpg" alt="" />
                 </div>
                 <div className="h-1/6 flex mt-4">
                    <div>
                        <img className="h-5/6 w-16 " src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/SUNY_brandmark.svg/1200px-SUNY_brandmark.svg.png" alt="" />
                    </div>
                    <p className="mt-2 ml-2 text-white ">The State University of New York</p>
                </div>  
                 <div className="h-1/6 text-white mt-2 text-2xl leading-none font-normal">Build Your First Android App</div>  
                 <div className="h-1/6 mt-2">
                  <p className=" text-white"><strong >Skill you will Gain:</strong>Android Studio,Android Development</p>    
                </div>  
                 <div className="h-1/6 text-white mt-2"><strong>Type:</strong>Mixed-Course</div>   
        </div>
    </div>
  )
}

export default Courses