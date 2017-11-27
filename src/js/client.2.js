import {combineReducers, createStore} from "redux";

//step 2
const userReducer = (state = {}, action) => {
    switch(action.type){
        case "CHANGE_NAME": {
            state = {...state, name: action.payload};//return alway new state
            break;
        }
        case "CHANGE_AGE": {
            state = {...state, age:action.payload}
            break;
        }
    }
    return state;
};

const tweetsReducer = (state = [], action) => {
    return state;
}
const reducers = combineReducers({
    user: userReducer ,
    tweets: tweetsReducer   
});
//step 1
const store = createStore(reducers); 

//step 3
store.subscribe( () => {
    console.log("store changed. ", store.getState());
});

//step 4
store.dispatch({type: "CHANGE_NAME", payload: "Venkatram"});
store.dispatch({type: "CHANGE_AGE", payload: 48});
store.dispatch({type: "CHANGE_AGE", payload: 50});


