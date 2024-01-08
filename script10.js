console.log("hello world")

// *
// * *
// * * *
// * * * *
// * * * * *

// let str= "*"
// console.log(str)
// // str ="* *"

// str=""
// for(let i=0;i<2;i++){
//     str= str+"*"
// }

// console.log(str)

// str=""
// for(let i=0;i<3;i++){
//     str= str+"*"
// }
// console.log(str)

// str=""
// for(let i=0;i<4;i++){
//     str= str+"*"
// }
// console.log(str)


// let str;

// for(let j=0;j<10 ;j++)
// {
//         str=""
//     for(let i=1;i<=j+1;i++){
//         str= str+"*"
//     }
//     console.log(str)

// }



// 1 
// 1 2 
// 1 2 3 
// 1 2 3 4 
// 1 2 3 4 5 
// 1 2 3 4 5 6 
// 1 2 3 4 5 6 7 
// 1 2 3 4 5 6 7 8
// let str="";
// for(let i=0;i<8;i++){
//     str=""
//     // let num =1;
//     for(let j=1;j<=i+1;j++){
//         str=str+j;
    
//     }
//     console.log(str);
// }

let firstterm =0;
let secondterm =1;
for(let i=0;i<4;i++){
    let str="";
   
    for(let j=0;j<=i;j++){
        str=str+" "+secondterm;
        let newterm = firstterm+secondterm;
        
        firstterm=secondterm;
        secondterm=newterm;
    }
    console.log(str);
}














