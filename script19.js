console.log("hello world")


// let arr= [1,2,3,4,5]
// let arr2=["red", false, {name:"rita"}]
// let result = arr.concat(arr2, [5,7,9,0]);
// console.log(result)




// value> 4

// every => ele satisfy the condition

// arr.every(function(ele){
    
//     console.log(ele)
//     // console.log(index)
//     // console.log(arr)
//     console.log("================")
//     if(ele!=4){
        
//         return true;
//     }
//     return false

// })

// console.log(res)
// Q : JavaScript Program to 
// Remove Duplicate Elements from an Array



// let res=  arr.fill(100, 2,4);

// let res1=  arr.fill(100, 2);
// let res2=  arr.fill(100);
// console.log(res)
// console.log(res1)
// console.log(arr)//in-place


let arr =["ram","sita","rita","geeta","tia"]
let res= arr.map((ele)=>{
    if(ele.length>3){
        return "happy birthday "+ele
    }
    else{
        return "good morning "+ele
    }
    // return "hello "+ele
})
console.log(res)
console.log(arr)


// arr.find
// arr.findIndex
// arr.includes
// arr.toString
// arr.indexOf
// arr.reverse
// arr.sort
// arr.join



// console.log(arr)

// let obj ={
//     0:1,
//     1:2,
//     2:32,
//     3:4,
//     4:56,
//     5:34,
//     length:6,

//     forEach:function(fn){
//             for(let i=0;i<this.length;i++){
//                 let ele= this[i]
//                 fn(ele,i)
//             }           
//     }
// }
// obj.forEach(function(ele, i){
//     console.log(ele+"++"+i)
// })





