// Q1:take input from user , check odd or even
// Q2:number should be divisible by both 3 and 5
let num = prompt("enter a number")
num = Number(num)
let result = num%3 == 0 && num %5 ==0 
console.log("is number divisible by 3 and 5 : "+result)
// logical operators => && || !

// console.log(true || true) 
// console.log( true || false)
// console.log(  false || true)
// console.log( false || false )

// let a=11;
// let b=35;
//  Ques= >  multiplication is odd or even
// console.log(a%2 == 0 || b%2 ==0 )

// !not operator (one operand)

// console.log(!true)
// console.log(!false)


// input  => boolean 
// (binary )

// let a=10;
// let b=90;
// let c=100;

// let result = c>a && c>b
// console.log("is c the greatest among three of the number :"+result)

// console.log(true && true)
// console.log(true && false)
// console.log( false && true)
// console.log( false && false  )


// post inccrement and pre dec (unary operators)

// let a = 10 
// let b= --a + a-- + --a + a--;
// console.log(a)
// console.log(b)




// post  = > first it uses the value ,then it updates 
// pre => first inc the value then use it