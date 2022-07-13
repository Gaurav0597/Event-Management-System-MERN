import * as types from "./ActionType.jsx"
import Axios from "axios"

//technicalevent data actioncreation funtion

const TecheventDataRequest=(payload)=>{
    return{
        type:types.TECHNICALEVENT_DATA_REQUEST,
        payload,
    }
}
const TecheventDataSuccess=(payload)=>{
    return{
        type:types.TECHNICALEVENT_DATA_SUCCESS,
        payload,
    }
}
const TecheventDataFailure=(payload)=>{
    return{
        type:types.NONTECHNICALEVENT_DATA_FAILURE,
        payload,
    }
}


// write axios request here for technical data 

export const TechEventDataFetch=(payload)=>(dispatch)=>{
    dispatch(TecheventDataRequest())
    Axios.get("http://localhost:5000/event")
    .then((response)=>{
        dispatch(TecheventDataSuccess(response.data))
        // console.log(response.data)
    }).catch((error)=>{
        dispatch(TecheventDataFailure(error))
    })
}

//--------------------------------------------------------------------//
//nontechnicalevent data actioncreation funtion

const NonTecheventDataRequest=(payload)=>{
    return{
        type:types.NONTECHNICALEVENT_DATA_REQUEST,
        payload,
    }
}
const NonTecheventDataSuccess=(payload)=>{
    return{
        type:types.NONTECHNICALEVENT_DATA_SUCCESS,
        payload,
    }
}
const NonTecheventDataFailure=(payload)=>{
    return{
        type:types.TECHNICALEVENT_DATA_FAILURE,
        payload,
    }
}

// write axios request here for nontechnical data 

export const nonTectdataFetch=(payload)=>(dispatch)=>{
    dispatch(NonTecheventDataRequest())
    Axios.get("http://localhost:5000/nonTechnicalEvent").
    then((res)=>{
        // console.log(res.data)
        dispatch(NonTecheventDataSuccess(res.data))
    }).catch((err)=>{
        dispatch(NonTecheventDataFailure(err))
    })
}

//---------------------------------------------------------------//