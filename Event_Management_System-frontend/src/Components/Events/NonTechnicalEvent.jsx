import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { nonTectdataFetch } from '../../Redux/Action'
import EventComponent from './EventComponent'

const NonTechnicalEvent = () => {
  const dispatch = useDispatch()
  const data = useSelector((state) => state.Event.NonTechnicalEvent)
  console.log(data)

  useEffect(() => {
    dispatch(nonTectdataFetch())
  }, [dispatch])
  return (
    <div>
      <EventComponent data={data} />
    </div>
  )
}

export default NonTechnicalEvent
