import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {useParams} from "react-router-dom"

const EventDetailsComponet = () => {
   const {id} =useParams()
   const dispatch=useDispatch()
  //  console.log(id)
  useEffect(()=>{
      //  dispatch(GetIndividualEvent())
  },[dispatch])
  return (
    <div>EventDetailsComponet</div>
  )
}

export default EventDetailsComponet