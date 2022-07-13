import React, { useEffect } from 'react'
import {useDispatch,useSelector} from "react-redux"
import { nonTectdataFetch } from '../../Redux/Action'

const NonTechnicalEvent = () => {
    const dispatch=useDispatch()
     const data=useSelector((state)=>state.Event.NonTechnicalEvent)
     console.log(data)

    useEffect(()=>{
          dispatch(nonTectdataFetch())
    },[dispatch])
  return (
    <div>NonTechnicalEvent</div>
  )
}

export default NonTechnicalEvent