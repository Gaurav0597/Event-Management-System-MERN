import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserRegisterEvents } from '../../Redux/Action'

const UserProfile = () => {
    const userId = useSelector((state) => state.Event.userId)
    const userdata = useSelector((state) => state.Event.userData)
    console.log(userdata)
    const dispatch= useDispatch()
    useEffect(()=>{
     dispatch(getUserRegisterEvents(userId))
    },[])
 
  return (
    <div></div>
  )
}

export default UserProfile