
// functions are also first class citizen


// let a=90;
// console.log(a)

function acceptfun(arg){
    console.log(arg)
    function fn(){
        console.log("iam an inner function")
    }
    return fn
}

function sum(a, b){
    printTheseValues(a,b)
    let sum =a+b;
    return sum;
}

let result = acceptfun(10)
result()
console.log(result)

// function printTheseValues(a,b){
//     console.log(a);
//     console.log(b)
// }


// let num1=90;
// let num2=100
// let s=sum(num1, num2)
// sum(num1, num2)

 //console.log(sum(num1, num2))




// function add(a,b){
    
//     let sum=a+b;
//     console.log(sum)
// }

// function addArr(arr){
//     let sum =0;
//     for(let i=0;i<arr.length;i++){
//         sum=sum+arr[i];
//     }
//     return sum
// }

// // function
// let r =45
// let q=56
// add(r,q)
// add(100,600)
// add(34 ,45)
// let brr = [23,34,5,67,8,98,98];
// let s=addArr(brr)
// console.log(s)





