const _ = require('lodash');

let dinosaurs = [
    {name: 'Terry' ,species: 'Tyrannosaurus', pen: '1A'},
    {name: 'Theresa' ,species: 'Tyrannosaurus', pen: '1B'},
    {name: 'Henry' ,species: 'Hadrosaur', pen: '2'},
    {name: 'Harriet' ,species: 'Hadrosaur', pen: '3'},
    {name: 'Stanley' ,species: 'Stegosaurus', pen: '4'}
];

const test1 = () =>{
   let dino =  _.find(dinosaurs, (d) =>{
        return d.name === 'Stanley';
    });
    console.log(dino);
}

const allNames = () => {
    let ln = _.pluck(dinosaurs, 'name');
}

module.exports = {
    test1:test1
}