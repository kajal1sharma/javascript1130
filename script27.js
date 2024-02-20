


window.addEventListener('load',function(){
    console.log("page has been loaded")


    let buttonvar = this.document.getElementById("buttonpress")
    setTimeout(() => {
        buttonvar.style.width="500px"
    }, 5000);
    
    console.log(buttonvar)

})
