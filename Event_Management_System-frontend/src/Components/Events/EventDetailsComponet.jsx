import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addTechEventToUser, GetIndividualTechEventData ,deleteIndividualEvent} from '../../Redux/Action'

const EventDetailsComponet = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const details = useSelector((state) => state.Event.individualData)
  const userId = useSelector((state) => state.Event.userId)
  const adminId = useSelector((state) => state.Event.adminId)
  var str=window.location.pathname
   const handleRegister = () => {
    const obj = {
      _id :details._id,
      userId : userId,
      pathname:str
    }
    dispatch(addTechEventToUser(obj))
   }
 
   const handleEventdelete=()=>{
    // const deleteobj={
    // //   id:details._id,
    // //   pathname:str
    //   }
      dispatch(deleteIndividualEvent(str))

   }


  useEffect(() => {
    dispatch(GetIndividualTechEventData(str))
  }, [dispatch])
  return (
    <div className="w-full mx-auto bg-gray-100/10 transition-all relative flex flex-col md:min-h-[500px] xl:flex-row xl:w-11/12">
      <div className="flex flex-col m-auto items-center justify-center space-y-8 min-h-[500px]">
        <h1 className="text-white text-4xl text-center w-full">
          {details.EventName}
        </h1>
        <div className="h-[150px] w-[150px]">
          <img
            className="max-h-full max-w-full m-auto"
            src={details.EventImage}
            alt="eventdetail"
          />
        </div>
        {adminId!==null?<div className="text-red-500 text p-2 px-4 border border-red-400 rounded-full" onClick={handleEventdelete}>
          Delete Event
        </div>: <div className="text-red-500 text p-2 px-4 border border-red-400 rounded-full" onClick={handleRegister}>
          Registrations Open
        </div>}
       
      </div>
      <div className="mt-4 overflow-auto xl:w-8/12 text-gray-200 text-sm bg-black/10 p-4 min-h-[300px]">
        <div className="grid auto-cols-auto md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-blue-500 border-b border-gray-400/10">
              Schedule
            </h3>
            <div className="mb-4 text-smƒ">
              Date:<p className="mb-2 text-sm">{details.Date}</p>
              Time:<p className="mb-2 text-sm">{details.Time}</p>
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-blue-500 border-b border-gray-400/10">
              Platform
            </h3>
            <p className="mb-4 text-sm">{details.Platform}</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-blue-500 border-b border-gray-400/10">
              Participant(s)
            </h3>
            <p className="mb-4 text-sm">{details.Participant}</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-blue-500 border-b border-gray-400/10">
              Prizes
            </h3>
            <div className="mb-4 text-sm">
              Prize 1:<p className="mb-2 text-sm">₹ {details.Prize1}</p>
              Prize 2:<p className="mb-2 text-sm">₹ {details.Prize2}</p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-blue-500 border-b border-gray-400/10">
              Fees
            </h3>
            <p className="mb-4 text-sm">
              Rs. {details.Fees}{' '}
              {details.Participant > 1 ? 'per team' : 'per individual'}
            </p>
          </div>
        </div>
        <h3 className="text-xl font-bold text-blue-500 border-b border-gray-400/10">
          Introduction
        </h3>
        <p className="mb-4">{details.Introduction}</p>
        <h3 className="text-xl font-bold text-blue-500 border-b border-gray-400/10">
          Rules
        </h3>
        <p className="mb-3 text-base">* {details.Rule1}</p>
        <p className="mb-3 text-base">* {details.Rule2}</p>
        <p className="mb-3 text-base">* {details.Rule3}</p>
        <p className="mb-3 text-base">* {details.Rule4}</p>
        <p className="mb-3 text-base">* {details.Rule5}</p>
      </div>
    </div>
  )
}

export default EventDetailsComponet
