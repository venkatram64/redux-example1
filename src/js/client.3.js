import {applyMiddleware, createStore} from "redux";

//step 2
const reducer = (initialState = 0, action) =>{
    if(action.type === "INC"){
        return initialState + 1;
    }else if(action.type === "DEC"){
        return initialState - 1;
    }else if(action.type === "E"){
        throw new Error("AAAAA!!!!!!");
    }
    return initialState;   
}

const logger = (store) => (next) => (action) =>{
    console.log("action fired. ", action);
    //action.type = "DEC";  //every time dec will fire
    next(action) //this will fire the store.subscibe
}

const error = (store) => (next) => (action) =>{
    try{
        next(action) //this will fire the store.subscibe
    }catch(e){
        console.log('AHHHHHH!!', e);
    }
}
    

const middleware = applyMiddleware(logger, error);

//step 1
const store = createStore(reducer, 1, middleware); //initial state is 1

//step 3
store.subscribe( () => {
    console.log("store changed. ", store.getState());
});
//step 4
store.dispatch({type: "INC"});
store.dispatch({type: "INC"});
store.dispatch({type: "INC"});
store.dispatch({type: "DEC"});
store.dispatch({type: "DEC"});
store.dispatch({type: "DEC"});
store.dispatch({type: "E"});