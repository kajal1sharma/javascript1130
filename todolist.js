window.addEventListener('load',function(){


    let addButton = document.getElementById('inputbutton');
    let inputField = this.document.getElementById("inputfield");
    let task="";
    let taskcontainer =this.document.getElementById('taskdisplayer')

    inputField.addEventListener('input',function(event){
        // console.log("input")
        task= event.target.value
    })

    addButton.addEventListener('click',function(){
       let para=  document.createElement('p')
       para.innerText= task;
       taskcontainer.appendChild(para)
    })
})