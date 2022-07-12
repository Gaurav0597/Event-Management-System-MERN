import {
    legacy_createStore,
    combineReducers,
    applyMiddleware,
    compose
} from "redux"
import thunk from "redux-thunk"
import EventReducer from "./Reducer";

const rootReducer = combineReducers({Event:EventReducer});

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

export const store = legacy_createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
)