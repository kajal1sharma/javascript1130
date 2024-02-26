window.addEventListener('load',function(){

    let addButton = document.getElementById('inputbutton');
    let inputField = this.document.getElementById("inputfield");

    inputField.addEventListener('input',function(event){
        // console.log("input")
        console.log(event.target.value)
    })
})