//template

//constructor fnction => create and object of 
// function Person(){
//     this.name="reena"
//     this.phone="1221323"
//     this.age=23
//     this.getInfo=function(){
//                 console.log(this.name)
//                 console.log(this.age)
//                 console.log(this.phone)
//             }
// }

function Person(name, phone, age){
    this.name=name
    this.phone=phone
    this.age=age
    this.getInfo=function(){
                console.log(this.name)
                console.log(this.age)
                console.log(this.phone)
            }
}

let obj  = new Person("reena","234234",34)
let obj2 = new Person("tina", "576867",12)
let obj3= new Person("seema", "3454354",78)
// obj2.phone="655643"
// obj.name="tina"

console.log(obj, obj2, obj3)
// console.log(obj2)
// objects

//Singleton object
// let obj = {
//     name:"tina",
//     age:34,
//     phone:"354798",
//     getInfo:function(){
//         console.log(this.name)
//         console.log(this.age)
//         console.log(this.phone)
//     }
// }

// let obj2 = new obj();
// console.log(obj2)

// let obj2 = obj;
// obj2.name="reena"

// console.log(obj)
// console.log(obj2)

// console.log(obj)
// obj.getInfo()



// let strarr = ["rita","teena","ram","pooja",
// "ramesh","mohit","shalika","saket"]

// strarr.sort();
// console.log(strarr)

// strarr.sort(function(a,b){
//     if(a.length>b.length){
//         return 1
//     }
//     else if(a.length===b.length){
//         return 0;
//     }
//     else{
//         return -1
//     }
// })

// console.log(strarr)


// sort arr => length of string
//sort  => alphabetical order


// console.log("hello world")

//let arr= [1,4,2,67,89,23,5,78]





// ascending 
// let result = arr.sort(function(a,b){
//    if(a<b){
//         return 1;
//    } 
//    else if(a===b){
//         return 0;
//    }
//    else{
//         return -1
//    }
// });

// console.log(result)
// console.log(arr)