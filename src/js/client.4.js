
import {applyMiddleware, createStore} from "redux";
import axios from "axios";
import logger from "redux-logger";
import thunk from "redux-thunk";

const initialState = {
    fetching: false,
    fetched: false,
    users: [],
    error: null
}

//step 2
const reducer = (state = initialState, action) =>{
    if(action.type === "FETCH_USERS_START"){
        return {...state, fetching: true};
    }else if(action.type === "RECEIVE_USERS"){
        return {
            ...state, 
            fetching: false, 
            fetched: true, 
            users: action.payload
        };
    }else if(action.type === "RECEIVE_USERS_ERROR"){
        return {...state, fetching: false, error: action.payload};    
    }
    return state;   
}

const middleware = applyMiddleware(thunk, logger()); //thunk middleware
//step 1
const store = createStore(reducer, middleware); //initial state is 1

//step 4
store.dispatch((dispatch) => {
    dispatch({type: "FETCH_USERS_START"}); //dispatch event
    axios.get("http://rest.learncode.academy/api/wstern/users")
        .then(response =>{
            dispatch({type: "RECEIVE_USERS", payload: response.data}); 
        }).catch((error) => {
            dispatch({type: "RECEIVE_USERS_ERROR", payload: error});    
        });
});

