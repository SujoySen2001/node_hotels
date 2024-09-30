const jsonString= '{"name" : "Sujoy", "age" : 23, "city" : "Habra"}';

const jsonObj=JSON.parse(jsonString);
console.log(jsonObj.name);

const obj={
    name: "Alice", 
    age: 23
};

const json=JSON.stringify(obj);
console.log(json)