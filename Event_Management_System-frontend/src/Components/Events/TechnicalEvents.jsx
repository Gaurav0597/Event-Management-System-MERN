import React, { useEffect } from 'react'
import {useDispatch,useSelector} from "react-redux"
import { TechEventDataFetch } from '../../Redux/Action'

const TechnicalEvents = () => {
  const dispatch=useDispatch()
  const data=useSelector((state)=>state.Event.TechnicalEvent)
  console.log(data)

  useEffect(()=>{
     dispatch(TechEventDataFetch())
  },[dispatch])
  return (
    <div>TechnicalEvents</div>
  )
}

export default TechnicalEvents