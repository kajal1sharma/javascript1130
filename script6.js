console.log("arrays Topic")


let arr = [12,13,14,15,64]
let sum=0;
// for(let  i =0 ;i < arr.length ;i++){
//     sum =arr[i]+sum;
// }

for(let val of arr){
    sum =sum+val;
}

console.log(sum)


let obj ={name :"priya",rollno:24, phone:"234728374982374",marks:[45,67,78,98,78]};

// let sum =0;
// for(let i=0;i<obj.marks.length;i++){
//     sum =sum +obj.marks[i];
// }

let total =0;
for (let marks of obj.marks){
    total =total +marks;
}

// console.log(obj.name + " has got "+total+" marks")

// obj.name="priya verma"
// obj["rollno"]=67;


// for(let key in obj){
//     console.log(obj[key])
// }

// let arr =["rina","tina","ria"]

// for(let key in arr){
    
//    console.log(key +"  "+arr[key]) 
// }


// console.log(obj)

//let arr=["priya","anu","tina","reena"]

// for -of 
// for(let ele of arr){
//     console.log(ele)
// }

// //iterator and indexer
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }





// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])
// console.log(arr[3])
// console.log(arr[4])


// collection of data 
//in a single unit is 
//called as array


// let student1 ="reena";
// let student2 ="tina";
// let student3="ram";
// // 60

// let studentNames =["reena","tina","ram"];
// studentNames[0] ="reena gupta";
// studentNames[1] ="tina xyz";
// studentNames[2] ="ram rst"


// console.log(studentNames)


// let arr = [1232.234,false,"iam a string", "kskdnfs",2334]

// console.log(arr[0]);
// console.log(arr[1])
// console.log(arr[2])
// console.log(arr)
