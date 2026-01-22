//singleton - if you make a object
// if we make object thorough literals then singleton is not made
// object literals
const JsUser = {
  name : "Palak",
  age : 18,
  location: "gurugram",
  email: "abs@gmail.com",
  isloggedIn: false
}

console.log(JsUser.email);
Object.freeze(JsUser) // unfreeze to make changes
JsUser.email = "palak0708";
//console.log(JsUser);

JsUser.greeting = function(){
  console.log("hello there");
}
console.log(JsUser.greeting); //undefined 
JsUser.greetingTwo = function(){
  console.log(`hello js user, ${this.name}`);
  
}
console.log(JsUser.greetingTwo());


