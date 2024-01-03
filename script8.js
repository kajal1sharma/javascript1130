// find sum of all the digits
let num =84219;
let rev=0;
while(num!=0){
    let digit = num%10;
    rev = rev*10+digit;
    num =Math.floor(num/10)
}
console.log(rev)


// 9+8+4+2+8+3

// let  sum =0
// while(num!=0){
//     let digit = num%10;
//     sum=sum+digit;
//     num =Math.floor(num/10)
// }

// console.log(sum)

//first digit 

// while(num>10){  
//     num =Math.floor(num/10)
// }


// console.log(num)

//largest digit
// let max=-1;
// while(num!=0){
//     let digit = num%10;
//    if(digit>max){
//     max=digit;
//    }
//     num =Math.floor(num/10)
// }
// console.log(max)





// let arr1= [1,0,2,3,4]
// let arr2= [3,5,6,7,8,13];

// // to find the larger array
// if(arr1.length<arr2.length){
//     for(let i=0;i<arr1.length;i++){
//         arr2[i]=arr1[i]+arr2[i];
//     }
//     console.log(arr2)
// }
// else{
//     for(let i=0;i<arr2.length;i++){
//         arr1[i]=arr1[i]+arr2[i];
//     }
//     console.log(arr1)
// }
