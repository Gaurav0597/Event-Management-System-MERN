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
export const NonTechEventDataPost = (payload) => (dispatch) => {
  dispatch(NonTecheventDataRequest())
  Axios.post('http://localhost:5000/nonTechnicalEvent', payload)
    .then((response) => {
      // console.log(response.data)
    })
    .then(() => {
      dispatch(nonTectdataFetch())
      // console.log(response.data)
    })
    .catch((error) => {
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

// write axios request here for indivudual Event  data

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
export const getUserRegisterTechEvents = (_id) => (dispatch) => {
  console.log('hello')
  axios
    .get(`http://localhost:5000/user/techEvent/${_id}`)
    .then((res) => {
      console.log(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
}
export const addTechEventToUser = (payload) => (dispatch) => {
  axios
    .post('http://localhost:5000/event/userData', payload)
    .then((res) => {
      dispatch(getUserRegisterTechEvents(res.data._id))
      //   console.log(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
}
