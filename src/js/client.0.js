const Person = {
    firstName : 'Venkatram',
    lastName : 'Veerareddy'
};
//declarative way creating object
const copyPerson = Object.assign({},Person, {age: 50});
console.dir(Person);
console.dir(copyPerson);
console.log(Person === copyPerson);

//
let colors = ['Venkatram','Srijan','Chintu','Aaryan','Krish'];
let newColors = colors.concat('Tinku'); //return new object

console.dir(colors);
console.dir(newColors);
let modifiedColors = colors.slice((colors.length - 1), 1); //return new object
console.dir(modifiedColors);
console.dir(colors);

//
const actions = [1,2,3,4,5];

const sum = actions.reduce((state, action) =>{
    console.log('prev: ', state, 'current: ', action);
    return state + action;
});

console.log(sum);

const actions2 = [
    {type: 'add', value:1},
    {type: 'subtract', value:2},
    {type: 'add', value:3},
    {type: 'asubtractdd', value:4},
    {type: 'add', value:5},
];

const finalSum = actions2.reduce((state, action) =>{
    console.log('prev: ', state, 'current: ', action);
    switch(action.type){
        case 'add':
            return Object.assign({}, state, {sum:state.sum + action.value}); //return new object
        case 'subtract':
        return Object.assign({}, state, {sum:state.sum - action.value}); //return new object
        default:
            return state;
    }
},{sum:0});
/*
stores are the containers for applying the action to the state using the 
reducer function, and they contain the current state.

*/


console.log(finalSum);