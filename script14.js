console.log("script 14")


// function read(){
//     console.log("i read something")
// }

// console.log(read)
// read()

// let print = function(){
//                 console.log("i do something")
//             }


// arrow function

// let print = ()=>{
//     console.log("hello world")
//     console.log("happy birthday")
// }


// print();
// console.log(typeof print)


//default initialization
// let add= (a=0,b)=>{
//     let sum =a+b;
//     console.log(sum)
// }
// add(0,12);

//arrow functio with single para

// let getWish = name=>{
//         console.log("happy birthday "+name)
// }

// getWish("reena")

// single instruction

// let getWish = name =>  console.log("happy bithday "
// +name);


//  getWish("tina")

let add = (a,b)=>a+b

let sum1 = add(12,13);
console.log(sum1)

let add2 = (a,b)=>{
    return a+b
}
let sum2 = add2(12,13);
console.log(sum2)

let wish = name=>"happy birthday "+name
let str = wish("tina")
console.log(str)







































