
// switch(){}

// calulator  => 

//iterator
//do{
    //logic
    //updation of iterator
// }while(condition);



while(true){

        

        let ch =prompt("enter + ,  - , * , /");
        let num1 = Number(prompt("enter number one"))
        let num2 =Number(prompt("enter number two"))
        if(num1 || num2){
            alert("not a number")
            continue;
        }
       
        switch(ch){
            case '+':alert(num1+num2);
                    break;
    
            case '-':alert(num1-num2);
                    break;
            case '*':alert(num1*num2);
                    break;
            case '/':alert(num1/num2);
                    break;
            default : alert("Invalid choice")
        }
        let choice =prompt("enter 1 to continue");
        if(choice != '1'){
            break;
        }
}

alert("operation completed")

// for(let choice  ='1';choice=='1';choice = prompt("enter 1 to continue")){
        
//         let ch =prompt("enter + ,  - , * , /");
//         let num1 = Number(prompt("enter number one"))
//         let num2 =Number(prompt("enter number two"))
//         switch(ch){
//             case '+':alert(num1+num2);
//                     break;
    
//             case '-':alert(num1-num2);
//                     break;
//             case '*':alert(num1*num2);
//                     break;
//             case '/':alert(num1/num2);
//                     break;
//             default : alert("Invalid choice")
//         }
// }


// let choice;
// do{
//     let ch =prompt("enter + ,  - , * , /");
//     let num1 = Number(prompt("enter number one"))
//     let num2 =Number(prompt("enter number two"))
//     switch(ch){
//         case '+':alert(num1+num2);
//                 break;

//         case '-':alert(num1-num2);
//                 break;
//         case '*':alert(num1*num2);
//                 break;
//         case '/':alert(num1/num2);
//                 break;
//         default : alert("Invalid choice")
//     }
    
//     choice = prompt("enter 1 to continue");
// }while(choice =='1');

console.log("okay this is it")

// let n= 10
// let firstTerm=0;
// let secondTerm =1;

// console.log(firstTerm)
// console.log(secondTerm)

// for(let  i =3 ;i<=n;i++){
//     let nextTerm = firstTerm +secondTerm
//     console.log(nextTerm)
//     firstTerm=secondTerm;
//     secondTerm=nextTerm;
// }


// for(init;condition;inc/dec)


// let i=0;
// while(i<5){
//     console.log("hello world")
//    i=i+1; 
// }

// let num =1;
// while(num<=10){
//     console.log(num);
//     num=num+1
// }

// Ques => num =89  this number is prime

// let num2 =15;


// let flag = false;
// for(let i =2;i<=num2-1;i++){
//     if(num2%i==0){
//         flag =true;
//     }
// }


// if(flag ==true){
//     console.log(num2 + " is not a prime number")
// }
// else{
//     console.log(num2+ " is a prime number")
// }


// repeatation of logic  
// for(initialization;condition(true);inc/dec)  


// for(let  i =1; i<=100 ;i++){
//     if(i%2 == 0){
//         console.log(i);
//     }
// }

// for(let i =2 ;i<=100; i=i+2){
//     console.log(i)
// }

// i is used as a multiplier
// for(let  i =1 ; i<=50 ; i++){
//     console.log(i*2);
// }

// for(let i=1 ; i <11 ;i++){
//     console.log(i)
// }


// for(let i=1;i<=100; i++){
//     if(i%3 ==0 && i%5 == 0){
//         console.log(i);
//     }
// }


// let i;
// for(i = 1;i<5;i=i+2){
//     console.log("hello world" + i);
// }
// console.log(i)


// console.log("hello world "+ 1)

// console.log("hello world "+2)

// console.log("hello world "+3)


// for(let i =1 ; i<=10 ;i++){
//     let str = "7 * "+i+" = "+ i*7
//     console.log(str)
// }
