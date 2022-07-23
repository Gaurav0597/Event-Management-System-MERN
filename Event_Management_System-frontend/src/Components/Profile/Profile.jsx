import React from 'react'
import { useSelector } from 'react-redux'
import AdminProfile from './AdminProfile'
import UserProfile from './UserProfile'

const Profile = () => {
const adminId = useSelector((state) => state.Event.adminId)
  return (
    <div>
    {adminId ? <AdminProfile/>:<UserProfile/>} 

    </div>
  )
}

export default Profile