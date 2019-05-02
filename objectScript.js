
/****************************************************************
                  WORKING WITH OBJECT 
****************************************************************/

let user1 = {
	name: "Tom",
	score: 33,
	increment: function() {
		user1.score++;
	}
};

console.log(user1.score); //33
user1.increment();
console.log(user1.score); //34


/****************************************************************
                  WORKING WITH OBJECT 
                  Generating objects with function
****************************************************************/


function createUser(name, score) {

  //let newUser = {}; //OR 
  let newUser = Object.create(null);
  newUser.name = name;
  newUser.score = score;
  newUser.increment = function(){ newUser.score++;}
  newUser.logIn = function(){console.log("You are now logged In!!!");}
  return newUser;
}

let tom = createUser('Tom', 24);

console.log(tom.name); //  Tom
console.log(tom.score); // 24
tom.increment();
console.log(tom.score); // 25



/****************************************************************
                  WORKING WITH OBJECT 
                  Generating objects using Prototype nature of Javascript
****************************************************************/

function userCreater(name,score){
	//let newUser = objects.create()
	let newUser = Object.create(userFunctions);
	newUser.name = name;
	newUser.score = score;
	return newUser;
}


let userFunctions = {
	increment : function(){ this.score++;},
	logIn: function(){ console.log("User is now logged In!!")},
};


let newUser1 = userCreater("Jerry", 10);
let newUser2 = userCreater("Tom", 11);

console.log(newUser1.name);// Jerry
console.log(newUser2.name);// Tom

console.log(newUser1.score); //10
console.log(newUser2.score); //11

newUser1.increment();
console.log(newUser1.score);//11

newUser2.logIn(); //User is now logged In!!


/****************************************************************
                  WORKING WITH OBJECT 
                  Generating objects using 
                  New Keywork - It automates a lot of things
****************************************************************/



function UserCreator(name,score){
	this.name = name;
	this.score = score;
}

UserCreator.prototype.increment = function(){ 
	this.score++;
}

UserCreator.prototype.logIn = function(){ 
	console.log("You are now logged In!!!");
}

let myNewUser = new UserCreator("Jack", 12);

console.log(myNewUser.name);// Jack

console.log(myNewUser.score); //12

myNewUser.increment();
console.log(myNewUser.score);//13

myNewUser.logIn(); // You are now logged In!!!


/****************************************************************
                  WORKING WITH OBJECT 
                  Generating objects using CLASS
****************************************************************/

class User{

	constructor(name,score){
		this.name = name;
		this.score = score;
	}

	increment(){
		this.score++;
	}

	logIn(){
		console.log("You are now logged In!!!");	
	}
}

let myNewClassyUser = new User("Felix", 20);

console.log(myNewClassyUser.name);// Felix

console.log(myNewClassyUser.score); // 20

myNewClassyUser.increment();
console.log(myNewClassyUser.score);// 21

myNewClassyUser.logIn(); // You are now logged In!!!

/****************************************************************
                  WORKING WITH OBJECT 
                  Generating objects using 
                  New Keywork - It automates a lot of things
                  
			 	  ISSUE: sub-function inside function can not access this property 
			 	  To Solve we have to use arrow function which bind this lexically 
****************************************************************/


function UserCreator1(name,score){
	this.name = name;
	this.score = score;
}

UserCreator1.prototype.increment = function(){ 
	//const incrementScore = function (){ this.score++; }
	const incrementScore  = () => { this.score++; }
	incrementScore();
}

UserCreator1.prototype.logIn = function(){ 
	console.log("You are now logged In!!!");
}

let myNewUser1 = new UserCreator1("Jack with Issue", 12);

console.log(myNewUser1.name);// Jack

console.log(myNewUser1.score); //12

myNewUser1.increment();
console.log(myNewUser1.score);// 12  

myNewUser1.logIn(); // You are now logged In!!!

/****************************************************************/
 //                 WORKING WITH Closure
 //					only once functionality
/****************************************************************/

function squareNum(num){
	return num*num;
}

function once(func){
	let executed = false;
	let called;
	return function(num){
		if(executed === false){
			called = func(num);
			executed = true;
			console.log("I have now calculated sqaure of num "+num);
		}
		
		return called;
	}
}

let getSquare = once(squareNum);

console.log(getSquare(4)); //I have calculated sqaure of num 4  => 16
console.log(getSquare(4)); // 16
console.log(getSquare(4)); //16

/****************************************************************/





/****************************************************************/