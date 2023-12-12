// DataType refers to what kind/type of value a variable can hold.
// Since JavaScript is dynamically type programming language the type of value hold by a variable can change by during time.
// Two type of datatype:
// 1. Primitive DataType : these types holds a value directly within their variable and do not need to be referenced by another objects.
// Types : 
// i) Number: int, float,etc
// Eg:
let num1 = 10;
let num2 = 20.324;
console.log(typeof num1);

// ii) String :
// Eg:
let name = 'Roshan';
let fname = 'noob';

// iii) Boolean :
let isOld = true;
let isFat = false;

// iv) undefined : If a variable is declared and value is not assigned at that time it holds undefined datatype.
// Eg:
let lname;
let fnam = undefined;

// v) Null : If a variable is declared and value is empty.
// Eg:
let num = '';

// vi) Symbol() :
// Eg:
let symb1 = Symbol(1);

// vii) Bigint : denote using 'n' after any number.
// Eg:
let largnum = 10n;

// 2. Non-primitive DataType (Reference DataType) : these types do not holds a value directly within their variable and need to be referenced by another objects.
// Type:
// i) Array:
let array = [1,2,3,4,5]
console.log(array);

// ii) Object:
// Eg:
let obj1 = {
    a:1,
    b:2
}

// why it is call reference datatype ?
// ans :
// Eg: 
let age = 19
let olAge = age
age = age + 1
console.log(age);
console.log(olAge);


// Error
// let arr1 = [1,2,3]
// let arr2 = arr1;
// arr2.push(4)
// console.log(arr1);
// console.log(arr2);

// Solution
let arr1 = [1,2,3]
let arr2 = [...arr1];  //'...' is use to make empty and use to spread out the element. It is call spread. 
arr2.push(4)
console.log(arr1);
console.log(arr2);