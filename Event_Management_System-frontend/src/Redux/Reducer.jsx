import * as types from "./ActionType.jsx"

const initState={
    error:"",
    loading:false,
    userId: null,
    userName:null,
    adminId:null,
    adminName:null,
    TechnicalEvent:[],
    NonTechnicalEvent:[],
    individualData:{},
    coursesData:[],
    userData:{}
}

const EventReducer=(state=initState,{type,payload}) =>{
    // console.log("payload",payload)
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
     //individual  event data cases
     case types.GETINDIVIDUALEVENT_DATA_REQUEST:
     return{
        ...state,
        loading:true,
        error:""
     }
     case types.GETINDIVIDUALEVENT_DATA_SUCCESS:
        return{
            ...state,
            loading:false,
            individualData:payload,
            error:""
        }
    case  types.GETINDIVIDUALEVENT_DATA_FAILURE:
        return {
            ...state,
            loading:false,
            error:payload
        }

    //-------------------------------------------------------------------------------------//
     //courses data cases
     case types.COURSES_DATA_REQUEST:
     return{
        ...state,
        loading:true,
        error:""
     }
     case types.COURSES_DATA_SUCCESS:
        return{
            ...state,
            loading:false,
            coursesData:payload,
            error:""
        }
    case types.COURSES_DATA_FAILURE:
        return {
            ...state,
            loading:false,
            error:payload
        }

    //-------------------------------------------------------------------------------------//

    //username and userid

     //userId
     case types.GETUSERID:
        return {
          ...state,
          userId: payload,
          adminId:null,
          adminName:null,
        }
     //username
     case types.GETUSERNAME:
      return {
        ...state,
        userName:payload,
        adminId:null,
        adminName:null,
      }
     
     case types.GETADMINID:
        return {
          ...state,
          adminId: payload,
          userId: null,
          userName:null,
        }
     //username
     case types.GETADMINNAME:
      return {
        ...state,
        adminName:payload,
        userId: null,
        userName:null,
      }
      //--------------------------------------------------------------------------------------------------------
  
    //    Get Userndata
      case types.GET_USER_TECH_DATA_REQUEST:
        return{
           ...state,
           loading:true,
           error:""
        }
        case types.GET_USER_TECH_DATA_SUCCESS:
           return{
               ...state,
               loading:false,
               userData:payload,
               error:""
           }
       case types.GET_USER_TECH_DATA_FAILURE:
           return {
               ...state,
               loading:false,
               error:payload
           }
      default:
            return state
    }
}

export default EventReducer