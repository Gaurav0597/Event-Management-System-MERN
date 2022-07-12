import * as types from "./ActionType.js"
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
const NonTecheventDataFailure=(payload)=>{
    return{
        type:types.NONTECHNICALEVENT_DATA_FAILURE,
        payload,
    }
}


// write axios request here for technical data 

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
const TecheventDataFailure=(payload)=>{
    return{
        type:types.TECHNICALEVENT_DATA_FAILURE,
        payload,
    }
}

// write axios request here for nontechnical data 

//---------------------------------------------------------------//