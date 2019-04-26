// Exercise javascript includes: 
// - Template Strings
// - Tag functions

//****************************************************************




//****************************************************************
// -----Exercise Template Strings-----
//****************************************************************

var name = "Tom";
var ordno= 12455;
var total = 300.50;
var msg = "Hello, "+name+" your \
order("+ordno+") was :£"+total+".";

console.log(msg); //Hello, Tom your order(12455) was :£300.5.


var msg1 =
  `Hello, ${name},  your
order(${ordno}) was :£${total}.`;

console.log(msg1);//Hello, Tom,  your
                  //order(12455) was :£300.5.


//****************************************************************

//-----Exercise Tag function-----
//****************************************************************

function upper(strings,...values) {
  var str = "";
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

var msg2 =
  upper`Hello, ${name},  your
order(${ordno}) was :£${total}.`;

console.log(msg2); //Hello, TOM,  your
                   //order(12455) was :£300.5.

//****************************************************************

// -----Exercise Rest Parameter-----
// ...parameter
//****************************************************************


function allItems(item1, ...rest){
  for(var i=0;i<rest.length;i++){
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

var farm = "Myfarm";

startFarm(...farm); // M y f

var animals = ["sheep", "cow", "pig", "dog"];

startFarm(...animals); // sheep cow pig

//****************************************************************
// -----Exercise Destructuring arrays-----
//****************************************************************


var busNos = [474,475,476,477];

var [bus1,bus2]= busNos;

console.log(bus1, bus2); //474 475


// --------
var [bs1,...restBuses] = busNos;

console.log(restBuses); //[475,476,477]


// ---remove first 2 elements fromn array

var [,,...removeTwo] = busNos;

console.log(removeTwo); //[476,477]

//****************************************************************
//-----Exercise Destructuring objects-----
//****************************************************************

//var vid,type,company,make,color;
var car = {
  vid: 123,
  type: "convertible",
  company: "BMW",
  make: "X3",
  color:"blue"
}

var {vid,type,company,make,color} = car;

console.log(company, make,color); // BMW X3 blue

//****************************************************************
//-----IIFE(Immediately Invoked Function Expression) -----
//****************************************************************


(function(){
  console.log("Welcome to IIFE"); //Welcome to IIFE
})();


var first = (function(){
  console.log("Welcome in function IIFE");    //Welcome in function IIFE
})();

//console.log(first);

//****************************************************************
//-----Exercise Closures -----
//****************************************************************

var myClosure =  function(){
  var inc = 707;
  return function(){
    return inc += 1;
  }
};

var count = myClosure();
console.log(count()); //708

//****************************************************************
//----- Exercise THIS with object-----
//****************************************************************

var sheep = {
  name: "becky",
  code: 112,
  getCode: function(){
    return this.code;
  }
};

var cow = {
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

var lamb = {
  name: "baby",
  code:4112
};

console.log(sheep.getCode.call(lamb)); //4112

//****************************************************************
//----- APPLY-----
//****************************************************************

var calf  = {
  name:"caffee",
  code:334
};

console.log(cow.getCode.apply(calf ,["baby"]));//baby334

//****************************************************************
//----- BIND-----
//****************************************************************


// call and apply will not make copy of function, It will only call the functiom
// bind will make copy of function and we can call it

var goat = {name:"Gii", code:101};

var functionBind = sheep.getCode.bind(goat); //functionBind is brand new function for obj goat

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

var dog = new Animal(555);//constuctor function
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

var cat = new NewAnimal(666);
cat.getCode();// Code: 666

//Expanding objects using prototype
NewAnimal.prototype.appendPrefix = function(){
  return " Batch: "+ this.code;
}

cat.appendPrefix(); // Batch: 666

//****************************************************************
//----- Array Methods-----
//****************************************************************

var valueArray = [1,2,3,4,5];
var double = x => x * 2;

// map
console.log(valueArray.map(double)); //[2,4,6,8,10]

var triple = x => x * 3;

console.log(valueArray.map(triple));//[3,6,9,12,15]

var greaterThan10 = x => x > 10;
console.log([1,2,3,4,5,12,34,43].filter(greaterThan10));//[12,34,43]


var animalData = [
  {name:"coco", type:"dog", code:111},
  {name:"meow", type:"cat", code:151},
  {name:"baa", type:"sheep", code:211},
  {name:"scooby", type:"dog", code:311}
];

//forEach
animalData.forEach(animal => console.log(animal));

//filter
var getDogs= animalData.filter( animal => animal.type === "dog"); // {name:"coco", type:"dog", code:111} {name:"scooby", type:"dog", code:311}

console.log(getDogs);

//find - finds only first match and returns
var getCodeGreaterThan200 = animalData.find(
  animal => animal.code > 200
);

console.log(getCodeGreaterThan200);// {name:"baa", type:"sheep", code:211}

//****************************************************************

