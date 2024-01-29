// console.log("hello world")

let arr= [1,4,2,67,89,23,5,78]



let result = arr.sort(function(a,b){
   if(a<b){
        return -1;
   } 
   else if(a===b){
        return 0;
   }
   else{
        return 1
   }
});

console.log(result)
console.log(arr)