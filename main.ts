//part 20 // question 24// more condinational test

let car: string = "subaru";
let age: number = 20;
let numbers: number[] = [3,6.9,12,15];

// ... string test...
// true test
console.log("Is car == `subaru`? I predict true,")
console.log(car == `subaru`); // true

// false true
console.log("Is car !== `subaru`? I predict false,")
console.log(car  !== `subaru`); // false




//.... lower case function test....

// true test
console.log("Is car.tolowercase() == `subaru`? I predict true,")
console.log(car.toLowerCase() == `subaru`); // true

// false test
console.log("Is car.tolowercase() == `toyota`? I predict false,")
console.log(car.toLowerCase() == `toyota`); // false

// .... numerical test .....
console.log("Is age == 20? I predict true,")
console.log(age == 20); // true

console.log("Is age != 25? I predict true,")
console.log(age != 25); // true

// greater then and less then
console.log("Is age > 18? I predict true,")
console.log(age > 18); // true

console.log("is age < 18? I predict false,")
console.log(age < 18); // false
// greater than or equal to and less than equal to
console.log("Is age >= 18? I predict True,")
console.log(age >= 18); // true

console.log("Is age<= 15? I predict false,")
console.log(age <= 15); // false
 
// ... AND OR OPERATOR Test...

// true test with `and` operator
console.log("Is 10 < age < 25? I predict true,")
console.log(age < 25 && age > 10); // true

// false test with `or` operator
console.log("Is age > 5 or age < 15? I predict false,")
console.log(age > 20 || age < 15); // fale

// test whether as item is in array
console.log("Is `3` in numbers? I predict true,")
console.log(3 in numbers); // true
// false test
console.log("Is `7` in number? I predict false,")
console.log(7 in numbers ); // false