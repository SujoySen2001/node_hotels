// function add(a,b){
//     return a+b;
// }


// var add= function add(a,b){
//     return a+b;
// }

// var add=(a,b)=>{return a+b};

// var add=(a,b) => a+b;
// var result=add(211,79);
// console.log(result);

// (function(){
//     console.log('Hi');
// })();

// function callback(){
//     console.log("Adding is done")
// }

// const add=function(a,b,callback){
//     var result=a+b;
//     console.log("result: "+result);
//     callback();
// }

// add(3,5,callback);

var notes = require('./notes.js');
var age=notes.age;

var _=require('lodash');
var result=notes.add(age,18);
console.log(age);
console.log(result)

var data=["person","name","age",1,2,4,1,"person","2"];
var filter=_.uniq(data)
console.log(filter)
