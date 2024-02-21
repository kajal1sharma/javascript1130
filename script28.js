
 window.addEventListener('load',()=>{
    let paraele = document.getElementById("para")
    let startButton =document.getElementById("buttonStart");
    let stopButton =document.getElementById("buttonStop");
    let resetButton =document.getElementById("buttonReset");

    let intervalid=null;
    let count=0;
    startButton.addEventListener('click',()=>{
        intervalid = setInterval(()=>{
            count++;
            paraele.innerText =count;
        },1000)
    })


    stopButton.addEventListener('click',()=>{

        clearInterval(intervalid)
    })

    resetButton.addEventListener('click',()=>{

        clearInterval(intervalid)
        count=0;
        paraele.innerText =count;

    })

 })


// window.addEventListener('load',()=>{
//     console.log("document has been loaded")
//     let buttonele=  document.getElementById("button");
//     let paraele = document.getElementById("para")
//     console.log(buttonele)
//     console.log(paraele)
//     let count =0 

//     buttonele.addEventListener('click',()=>{
//         count++;
//         paraele.innerText=count;
//     })


// })