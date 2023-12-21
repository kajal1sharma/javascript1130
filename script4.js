//calculator
// + , - , *, /

let num = Number(prompt("Enter some number"))

switch(num % 5){
    case 1:console.log("1jshjkdhs");
            break;
    case 2: console.log("2sadiijsadk");
            break;
    case 3:console.log("3sadijsdij")
            break;
    default:console.log("invalid")
}


// let num1 = prompt("enter first number");
// num1 = Number(num1);

// let num2 = Number(prompt("enter second number"));

// let symbol = prompt("Enter operation sym : + - / * ");



// let result =0;
// switch("Symbol "+symbol){
//     case 'Symbol +' :  result = num1+num2;
//                 console.log("sum is = "+result);
//                 break;
//     case 'Symbol -' :  result = num1-num2;
//                 console.log("diff is = "+result);
//                 break; 
//     case "Symbol /" :  result = num1/num2;
//                 console.log("div is = "+result); 
//                 break;  
//     case  "Symbol *" :result = num1*num2;
//                 console.log("mul is = "+result); 
//                 break; 
//     default : console.log( " invalid symbol")

// }


let result =0;
if(symbol == "+"){
    result = num1+num2;
}
else if( symbol == "-"){
    result  = num1-num2;
}
else if(symbol == "*"){
    result =num1*num2
}
else if(symbol=="/"){
    result = num1/num2
}
else if( symbol =="**"){
    result = num1**num2
}
else{
    console.log("not a valid symbol")
}


// console.log(result)