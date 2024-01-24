console.log("hello world...")


//traverse => visit the ele one by one
// let arr = [1,2,3,4,5]


// print(1)
// print(2)
//print(3)
//print(4)
//print(5)


// 1: hello 
//2: hello 
//3:hello 

// print these on console

// function print(ele){
//     console.log(ele+": hello")
// }
// print(1);
// print(100)
// print(45)


// arr.forEach(print)

// arr.forEach(function (ele){
//     console.log(ele+" : hello 2")
// })


// arr.forEach(ele=>{
//     console.log(ele+" : hello 3")
// })

// arr.forEach(function print123(e, i,arr){
//     console.log(arr)
//     console.log(i+"--"+e+" : hello 4")
// })


// let  arr =[11,22,53,14,15,56,37]

// let finalarr = arr.filter(function(ele){
//     if(ele%2==0){
//         return ele
//     }
// })

// console.log(finalarr)

let strarr=["one","two","three","four","five"]

let res=strarr.filter(function(ele){
    return ele.length>=4
    // if(ele.length>=4){
    //     return ele
    // }
})

console.log(strarr)
console.log(res)

// every


// strarr => str=> 5 


// let max =arr.reduce(function(prev, curr){
//     return prev<curr?curr:prev
// },-Infinity)

// console.log(max)


// let result1 = num1.reduce((max,el)=>{
//     if(el>max){
//         return el;
//     }
//     else {
//         return max;
//     }
// });


// string 


// reduce => single value output


// let res=arr.reduce(function(prevVal, ele){
//     let sum = prevVal+ele
//     return sum ;
// })
// let res2=arr.reduce(function(prevVal, ele){
//     let sum = prevVal+ele
//     return sum ;
// },100)
// console.log(res2)













