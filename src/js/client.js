import {createStore} from "redux";

//step 2
const reducer = function(state, action){
    if(action.type === "INC"){
        return state + 1;
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
store.dispatch({type: "INC", payload: 1});
