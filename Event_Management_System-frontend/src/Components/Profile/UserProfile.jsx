import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const UserProfile = () => {
    const userId = useSelector((state) => state.Event.userId)
    const dispatch= useDispatch()
    // useEffect(()=>{
    
    // },[dispatch])
    console.log(userId)
  return (
    <div></div>
  )
}

export default UserProfile