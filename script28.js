
window.addEventListener('load',()=>{
    console.log("document has been loaded")
    let buttonele=  document.getElementById("button");
    let paraele = document.getElementById("para")
    console.log(buttonele)
    console.log(paraele)
    let count =0 

    buttonele.addEventListener('click',()=>{
        count++;
        paraele.innerText=count;
    })


})