import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetAllCoursesData } from '../../Redux/Action'

const Courses = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(GetAllCoursesData())
  }, [dispatch])
  // const coursesData=useSelector((state) => state.Event.coursesData)
  const data = useSelector((state) => state.Event.coursesData)
  console.log(data)
  return (
    <div className=" w-4/5 m-auto grid gap-8 grid-cols-3">
      {data.map((e) => (
        <div className="flex flex-col  h-[350px] bg-gray-100/10 rounded-2xl">
          <div className="h-2/5 w-full">
            <img
              className="w-full h-full"
            src={e.CourseImage}
              alt=""
            />
          </div>
          <div className="h-1/6 flex mt-4">
            <div>
              <img
                className="h-5/6 w-16 "
                src={e.UniversityImage}
                alt=""
              />
            </div>
            <p className="mt-2 ml-2 text-white ">
            {e.University}
            </p>
          </div>
          <div className="h-1/6 text-white mt-2 text-2xl leading-none font-normal">
            {e.CourseName}
          </div>
          <div className="h-1/6 mt-2">
            <p className=" text-white">
             {e.Skill}
            </p>
          </div>
          <div className="h-1/6 text-white mt-2">
            {e.Type}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Courses
