
import {applyMiddleware, createStore} from "redux";
import axios from "axios";
import logger from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

const initialState = {
    fetching: false,
    fetched: false,
    users: [],
    error: null
}

//step 2
const reducer = (state = initialState, action) =>{
    if(action.type === "FETCH_USERS_PENDING"){
        return {...state, fetching: true};
    }else if(action.type === "RECEIVE_USERS_FULFILLED"){
        return {
            ...state, 
            fetching: false, 
            fetched: true, 
            users: action.payload
        };
    }else if(action.type === "RECEIVE_USERS_REJECTED"){
        return {...state, fetching: false, error: action.payload};    
    }
    return state;   
}

const middleware = applyMiddleware(promise(), thunk, logger());
//step 1
const store = createStore(reducer, middleware); //initial state is 1

//step 4

store.dispatch({
    type: "FETCH_USERS",
    payload: axios.get("http://rest.learncode.academy/api/wstern/users")   
});



