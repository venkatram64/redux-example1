import {createStore} from "redux";

//step 2
const reducer = function(state, action){
    if(action.type === "INC"){
        return state + action.payload;
    }
    if(action.type === "DEC"){
        return state - action.payload;
    }
    return state;   
}
//step 1
const store = createStore(reducer, 0); //initial state is 0
//step 3
store.subscribe( () => {
    console.log("store changed. ", store.getState());
});

//step 4
store.dispatch({type: "INC", payload: 11});
store.dispatch({type: "INC", payload: 10});
store.dispatch({type: "INC", payload: 12});
store.dispatch({type: "INC", payload: 16});

store.dispatch({type: "DEC", payload: 11});
store.dispatch({type: "DEC", payload: 10});
store.dispatch({type: "DEC", payload: 12});
store.dispatch({type: "DEC", payload: 16});

