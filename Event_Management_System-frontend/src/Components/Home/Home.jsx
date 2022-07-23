import React from 'react'
import { useSelector } from 'react-redux'

const Home = () => {
  const userId = useSelector((state) => state.Event.userId)
  const adminId = useSelector((state) => state.Event.adminId)
  console.log("userId",userId)
  console.log("adminId",adminId)
  return (
    <div>Home</div>
  )
}

export default Home