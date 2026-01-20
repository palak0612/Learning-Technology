"use strict"; // treat all js code as newer version
//alert(3+3)  it only runs on browsers console not node js.
let name = "pal"
let num = 4
let igloggedin = false
//number => 2^53 range
//bigint => larger than 2^53
//string => "" '' ``
//boolean => true/false
//null => standalone value
//undefined => uninitialized value
//symbol => unique identifiers
console.log(typeof num);

// two types of js datatypes 
// 1. primitive datatypes
// 2. reference datatypes
// primitive datatypes are stored directly in the location that the variable accesses.
// reference datatypes are objects and are stored as references.
let a = 3; // primitive datatype
let b = a;  // b is copy of a
// 7 types of primitive datatypes
// string, number, bigint, boolean, null, undefined, symbol

// reference datatypes are objects and arrays , functions etc
 

const hero = ["shaktiman", "naagraj", "doga"];
let myobj = {
    name: "pal",
}

const myfunc = function() {
  console.log("hello ");
  
}
// datatype of null is object

// Type	Result
// Undefined	"undefined"
// Null	"object" (reason)
// Boolean	"boolean"
// Number	"number"
// BigInt	"bigint"
// String	"string"
// Symbol	"symbol"
// Function (implements [[Call]] in ECMA-262 terms; classes are functions as well)	"function"


// stack(primitive datatypes) vs heap(reference datatypes)
// stack is used for static memory allocation and heap is used for dynamic memory allocation.
// stack se copy bnjati h or heap ka reference bnjata h.
