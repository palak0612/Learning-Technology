// comparison operators > < >= < <= == === != !==

console.log(null > 0);// null is considered as 0 in numeric comparisons
console.log(null >= 0); // true because null is converted to 0
console.log(null == 0);// false because null is only equal to undefined

console.log(undefined > 0);// false
console.log(undefined < 0);// false
console.log(undefined == 0);// false

// in js ==means value equality and === means value and type equality


