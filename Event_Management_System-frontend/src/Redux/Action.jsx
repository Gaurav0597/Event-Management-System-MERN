import * as types from './ActionType.jsx'
import Axios from 'axios'
import axios from 'axios'


//technicalevent data actioncreation funtion

const TecheventDataRequest = (payload) => {
  return {
    type: types.TECHNICALEVENT_DATA_REQUEST,
    payload,
  }
}
const TecheventDataSuccess = (payload) => {
  return {
    type: types.TECHNICALEVENT_DATA_SUCCESS,
    payload,
  }
}
const TecheventDataFailure = (payload) => {
  return {
    type: types.NONTECHNICALEVENT_DATA_FAILURE,
    payload,
  }
}

// write axios request here for technical data

export const TechEventDataFetch = (payload) => (dispatch) => {
  dispatch(TecheventDataRequest())
  Axios.get('http://localhost:5000/event')
    .then((response) => {
      dispatch(TecheventDataSuccess(response.data))
      // console.log(response.data)
    })
    .catch((error) => {
      dispatch(TecheventDataFailure(error))
    })
}
export const TechEventDataPost = (payload) => (dispatch) => {
  dispatch(TecheventDataRequest())
  Axios.post('http://localhost:5000/event', payload)
    .then((response) => {
      // dispatch(TecheventDataSuccess(response.data))
      // console.log(response.data)
    })
    .then(() => {
      dispatch(TechEventDataFetch())
      // console.log(response.data)
    })
    .catch((error) => {
      dispatch(TecheventDataFailure(error))
    })
}

//--------------------------------------------------------------------//
//nontechnicalevent data actioncreation funtion

const NonTecheventDataRequest = (payload) => {
  return {
    type: types.NONTECHNICALEVENT_DATA_REQUEST,
    payload,
  }
}
const NonTecheventDataSuccess = (payload) => {
  return {
    type: types.NONTECHNICALEVENT_DATA_SUCCESS,
    payload,
  }
}
const NonTecheventDataFailure = (payload) => {
  return {
    type: types.TECHNICALEVENT_DATA_FAILURE,
    payload,
  }
}

// write axios request here for nontechnical data

export const nonTectdataFetch = (payload) => (dispatch) => {
  dispatch(NonTecheventDataRequest())
  Axios.get('http://localhost:5000/nonTechnicalEvent')
    .then((res) => {
      // console.log(res.data)
      dispatch(NonTecheventDataSuccess(res.data))
    })
    .catch((err) => {
      dispatch(NonTecheventDataFailure(err))
    })
}
export const NonTechEventDataPost = (payload,toast) => (dispatch) => {
  dispatch(NonTecheventDataRequest())
  Axios.post('http://localhost:500/nonTechnicalEvent', payload)
    .then((response) => {
        console.log(response)
        toast("New event Added successfully",{
          type:"success"
     })

    })
    .then(() => {
      dispatch(nonTectdataFetch())
      // console.log(response.data)
    })
    .catch((error) => {
      toast("New event has not Added unfortunately",{
           type:"error"
      })
      dispatch(NonTecheventDataFailure(error))
    
    })
}
//---------------------------------------------------------------//

// INDIVIDUAL EVENT ACTION CREATOR FUNCTIONS --------------------------------

const GetIndividualEventDataRequest = (payload) => {
  return {
    type: types.GETINDIVIDUALEVENT_DATA_REQUEST,
    payload,
  }
}

const GetIndividualEventDataSuccess = (payload) => {
  return {
    type: types.GETINDIVIDUALEVENT_DATA_SUCCESS,
    payload,
  }
}

const GetIndividualEventDataFailure = (payload) => {
  return {
    type: types.GETINDIVIDUALEVENT_DATA_FAILURE,
    payload,
  }
}

// write axios request here for to get indivudual Event  data

// for Technical event And nontechnical data
export const GetIndividualTechEventData = (payload) => (dispatch) => {
  dispatch(GetIndividualEventDataRequest())

  Axios.get(`http://localhost:5000${payload}`)
    .then((response) => {
      // console.log(response.data)
      dispatch(GetIndividualEventDataSuccess(response.data))
    })
    .catch((error) => {
      dispatch(GetIndividualEventDataFailure(error))
    })
}

// write axios request here for to delete indivudual Event  data

export const deleteIndividualEvent = (payload) => (dispatch) => {
  Axios.delete(`http://localhost:5000${payload}`)
    .then((response) => {})
    .catch((error) => {
      console.log('error')
    })
}

//----------------------------------------------------------------------------//

// COURSES ACTION CREATOR FUNCTIONS --------------------------------

const GetCoursesDataRequest = (payload) => {
  return {
    type: types.COURSES_DATA_REQUEST,
    payload,
  }
}

const GetCoursesDataSuccess = (payload) => {
  // console.log(payload)
  return {
    type: types.COURSES_DATA_SUCCESS,
    payload,
  }
}

const GetCoursesDataFailure = (payload) => {
  return {
    type: types.COURSES_DATA_FAILURE,
    payload,
  }
}

// write axios request here for indivudual Event  data
export const GetAllCoursesData = (payload) => (dispatch) => {
  dispatch(GetCoursesDataRequest())
  Axios.get(`http://localhost:5000/course`)
    .then((response) => {
      console.log(response.data)
      dispatch(GetCoursesDataSuccess(response.data))
    })
    .catch((error) => {
      dispatch(GetCoursesDataFailure(error))
    })
}

//-------------------------------------------------------------------------------------------------------//

//login userid and username
export const login1 = (payload) => {
  return {
    type: types.GETUSERID,
    payload,
  }
}

export const loginUser = (payload) => {
  return {
    type: types.GETUSERNAME,
    payload,
  }
}
export const loginAdminId = (payload) => {
  // console.log(payload)
  return {
    type: types.GETADMINID,
    payload,
  }
}
export const loginAdminName = (payload) => {
  // console.log(payload)
  return {
    type: types.GETADMINNAME,
    payload,
  }
}
//---------------------------------------------------------------------------------------------------------//

export const addEventTOUserReq = () => {
  return {
    type: types.GET_USER_TECH_DATA_REQUEST,
  }
}
export const addEventTOUserSuc = (payload) => {
  return {
    type: types.GET_USER_TECH_DATA_SUCCESS,
    payload,
  }
}
export const addEventTOUserFail = (payload) => {
  return {
    type: types.GET_USER_TECH_DATA_FAILURE,
    payload,
  }
}
export const getUserRegisterEvents = (_id) => (dispatch) => {
  // console.log('hello')
  axios
    .get(`http://localhost:5000/user/${_id}`)
    .then((res) => {
      const obj = {
        techdata: res.data.techEvent,
        nontechData: res.data.nontechEvent,
      }
      dispatch(addEventTOUserSuc(obj))
    })
    .catch((err) => {
      console.log(err)
    })
}
export const addTechEventToUser = (payload) => (dispatch) => {
  const { pathname } = payload
  console.log(pathname)
  axios
    .post(`http://localhost:5000${pathname}`, payload)
    .then((res) => {
      dispatch(getUserRegisterEvents(res.data._id))
      //   console.log(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
}

//-----------------------------------------------------------------------------------------------//

// GET ALL USER DATA ACTION CREATOR FUNCTION--------------------------------

const getAllUserDataRequest = (payload) => {
  return {
    type: types.GET_ALL_USER_DATA_REQUEST,
    payload,
  }
}

const getAllUserDataSuccess = (payload) => {
  return {
    type: types.GET_ALL_USER_DATA_SUCCESS,
    payload,
  }
}

const getAllUserDataFailure = (payload) => {
  return {
    type: types.GET_ALL_USER_DATA_FAILURE,
    payload,
  }
}
// write axios request here for to delete indivudual Event  data

export const getAllUserDataFromBackend = (payload) => (dispatch) => {
  dispatch(getAllUserDataRequest())
  Axios.get('http://localhost:5000/getuser')
    .then((res) => {
      dispatch(getAllUserDataSuccess(res.data))
    })
    .catch((err) => {
      dispatch(getAllUserDataFailure())
    })
}
