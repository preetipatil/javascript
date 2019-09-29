// Exercise javascript includes: 
// - Template Strings
// - Tag functions

//****************************************************************




//****************************************************************
// -----Exercise Template Strings-----
//****************************************************************

const name = "Tom";
const ordno= 12455;
const total = 300.50;
const msg = "Hello, "+name+" your \
order("+ordno+") was :£"+total+".";

console.log(msg); //Hello, Tom your order(12455) was :£300.5.


const msg1 =
  `Hello, ${name},  your
order(${ordno}) was :£${total}.`;

console.log(msg1);//Hello, Tom,  your
                  //order(12455) was :£300.5.


//****************************************************************

//-----Exercise Tag function-----
//****************************************************************

function upper(strings,...values) {
  let str = "";
  for (let i=0; i<strings.length; i++) {
    if (i > 0) {
      if(typeof(values[i-1]) === "string"){
        str += values[i-1].toUpperCase();
      }else{
        str += values[i-1];
      }
    }
    str += strings[i];
  }
  return str;
}

const msg2 =
  upper`Hello, ${name},  your
order(${ordno}) was :£${total}.`;

console.log(msg2); //Hello, TOM,  your
                   //order(12455) was :£300.5.

//****************************************************************

// -----Exercise Rest Parameter-----
// ...parameter
//****************************************************************


function allItems(item1, ...rest){
  for(let i=0;i<rest.length;i++){
    console.log(rest[i]);  // Milk Tea 101 102 103 104
  }
}

allItems("Suger", "Milk", "Tea", 101,102,103,104);


//****************************************************************
//-----Spread Syntax-----
//****************************************************************

function startFarm(str1,str2,str3){
  console.log(str1,str2,str3)
}

const farm = "Myfarm";

startFarm(...farm); // M y f

const animals = ["sheep", "cow", "pig", "dog"];

startFarm(...animals); // sheep cow pig

//EXAMPLE 
/****************************************************************/
//Array - Spread operator
/****************************************************************/

const farmAnimal = 
["Cow", "Pig", "Sheep"];
const zooAnimal = ["Monkey", "Tigher", "Elephant"];

const allAnimal = [...farmAnimal, "Dog", 
"Cat", "rabbit", ...zooAnimal];

console.log(allAnimal);

// const myToyCollection = allAnimal;

// myToyCollection[2] = "lamb";

// console.log(myToyCollection);
// //["Cow", "Pig", "Sheep", "Dog", "Cat", "rabbit", "Monkey", "Tigher", "Elephant"]


// console.log(allAnimal);
//["Cow", "Pig", "Sheep", "Dog", "Cat", "rabbit", "Monkey", "Tigher", "Elephant"]
//AHH Its the same as myToyCollection
//because it is referanceinf on line 104 // const myToyCollection = allAnimal;

//so we can do is

const myToyCollection = [...allAnimal];

myToyCollection[2] = "lamb";

console.log(myToyCollection);
//["Cow", "Pig", "Sheep", "Dog", "Cat", "rabbit", "Monkey", "Tigher", "Elephant"]


console.log(allAnimal);
//["Cow", "Pig", "Sheep", "Dog", "Cat", "rabbit", "Monkey", "Tigher", "Elephant"]

/****************************************************************/

//****************************************************************
// -----Exercise Destructuring arrays-----
//****************************************************************


const busNos = [474,475,476,477];

const [bus1,bus2]= busNos;

console.log(bus1, bus2); //474 475


// --------
const [bs1,...restBuses] = busNos;

console.log(restBuses); //[475,476,477]


// ---remove first 2 elements fromn array

const [,,...removeTwo] = busNos;

console.log(removeTwo); //[476,477]

//****************************************************************
//-----Exercise Destructuring objects-----
//****************************************************************

//var vid,type,company,make,color;
const car = {
  vid: 123,
  type: "convertible",
  company: "BMW",
  make: "X3",
  color:"blue"
}

const {vid,type,company,make,color} = car;

console.log(company, make,color); // BMW X3 blue

//****************************************************************
//-----IIFE(Immediately Invoked Function Expression) -----
//****************************************************************


(function(){
  console.log("Welcome to IIFE"); //Welcome to IIFE
})();


const first = (function(){
  console.log("Welcome in function IIFE");    //Welcome in function IIFE
})();

//console.log(first);

//****************************************************************
//-----Exercise Closures -----
//****************************************************************

const myClosure =  function(){
  let inc = 707;
  return function(){
    return inc += 1;
  }
};

const count = myClosure();
console.log(count()); //708

//****************************************************************
//----- Exercise THIS with object-----
//****************************************************************

const sheep = {
  name: "becky",
  code: 112,
  getCode: function(){
    return this.code;
  }
};

const cow = {
  name: "moohi",
  code: 221,
  getCode: function(prefix){
    return prefix + this.code;
  }
}

console.log(sheep.getCode());//112
console.log(cow.getCode("B")); //B221

//***************************************************************
//----- CALL-----
//****************************************************************

const lamb = {
  name: "baby",
  code:4112
};

console.log(sheep.getCode.call(lamb)); //4112

//****************************************************************
//----- APPLY-----
//****************************************************************

const calf  = {
  name:"caffee",
  code:334
};

console.log(cow.getCode.apply(calf ,["baby"]));//baby334

//****************************************************************
//----- BIND-----
//****************************************************************


// call and apply will not make copy of function, It will only call the functiom
// bind will make copy of function and we can call it

const goat = {name:"Gii", code:101};

const functionBind = sheep.getCode.bind(goat); //functionBind is brand new function for obj goat

console.log(functionBind()); //101

//****************************************************************
//----- Constuctor functions-----
//****************************************************************

function Animal(animalID){
  this.code = animalID;
  this.getCode = function(){
    console.log("Code: "+this.code);
  };
}

const dog = new Animal(555);//constuctor function
dog.getCode() //Code: 555

//If we create 100000 objects of Animal,
// getCode function will be repliated 100000 times
//bz it get created in constuctor function
//so here comes Prototype


//****************************************************************
//----- Prototype -----
// you can create many objects of constuctor function but only one function will be created
//****************************************************************


function NewAnimal(id){
  this.code = id;
}

NewAnimal.prototype.getCode = function(){
  console.log("Code: " + this.code);
}

const cat = new NewAnimal(666);
cat.getCode();// Code: 666

//Expanding objects using prototype
NewAnimal.prototype.appendPrefix = function(){
  return " Batch: "+ this.code;
}

cat.appendPrefix(); // Batch: 666

//****************************************************************
//----- Array Methods-----
//****************************************************************

const valueArray = [1,2,3,4,5];
const double = x => x * 2;

// map
console.log(valueArray.map(double)); //[2,4,6,8,10]

const triple = x => x * 3;

console.log(valueArray.map(triple));//[3,6,9,12,15]

const greaterThan10 = x => x > 10;
console.log([1,2,3,4,5,12,34,43].filter(greaterThan10));//[12,34,43]


const animalData = [
  {name:"coco", type:"dog", code:111},
  {name:"meow", type:"cat", code:151},
  {name:"baa", type:"sheep", code:211},
  {name:"scooby", type:"dog", code:311}
];

//forEach
animalData.forEach(animal => console.log(animal));

//filter
const getDogs= animalData.filter( animal => animal.type === "dog"); // {name:"coco", type:"dog", code:111} {name:"scooby", type:"dog", code:311}

console.log(getDogs);

//find - finds only first match and returns
const getCodeGreaterThan200 = animalData.find(
  animal => animal.code > 200
);

console.log(getCodeGreaterThan200);// {name:"baa", type:"sheep", code:211}

/****************************************************************/
//Generators
/****************************************************************/
function* myNewGenerator(){
    console.log("Hi i m 1 ");
    yield "1";
    console.log("after me");
    yield "3";
}


let aGen =  myNewGenerator();
aGen.next();
// Hi i m 1 
//{value: "1", done: false}
aGen.next();
//after me
{//value: "3", done: false}
aGen.next();
//{value: undefined, done: true}


//****************************************************************
/****************************************************************/

