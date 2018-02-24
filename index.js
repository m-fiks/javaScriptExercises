'use strict'

const josh = {
    name:'josh',
    age:33,
    happy:true,
    hairColor:'red',
};

const maddy = {
    name:'maddy',
    age:25,
    happy:false,
    hairColor:'brown',
};

const esteban = {
    name:'esteban',
    age:28,
    happy:true,
    hairColor:'brown',
};

const studentArray =[josh,maddy,esteban];

// console.log(studentArray);

//target the name variable from the array
for(let i = 0; i < studentArray.length; i++) {
    console.log(`hello ${studentArray[i].name}. I heard you are ${studentArray[i].age}. That sure is old. Why are you so ${studentArray[i].happy ? 'happy' : 'unhappy'}?`);
}