import * as types from "./ActionType.js"

const initState={
    error:"",
    loading:false,
    TechnicalEvent:[],
    NonTechnicalEvent:[],
}

const EventReducer=(state=initState,{type,payload}) =>{
    switch(type){

        //Technical event data cases
        case types.TECHNICALEVENT_DATA_REQUEST:
            return {
                ...state,
                error:"",
                loading:true,
            }
        case types.TECHNICALEVENT_DATA_SUCCESS:
            return{
                ...state,
                error:"",
                loading:false,
                TechnicalEvent:payload
            }
        case types.TECHNICALEVENT_DATA_FAILURE:
            return{
                ...state,
                error:payload,
                loading:false,
            }

//-----------------------------------------------------------------//

        //Nontechnical event data cases
        case types.NONTECHNICALEVENT_DATA_REQUEST:
            return{
                ...state,
                loading:true,
                error:""
            }
        case types.NONTECHNICALEVENT_DATA_SUCCESS:
            return {
                ...state,
                loading:false,
                error:"",
                NonTechnicalEvent:payload
            }
        case types.NONTECHNICALEVENT_DATA_FAILURE:
            return{
                ...state,
                loading:false,
                error:payload
            }
//-----------------------------------------------------------------------------------//
        default:
            return state
    }
}