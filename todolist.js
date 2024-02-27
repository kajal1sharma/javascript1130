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
        let divtask = document.createElement('div')
        divtask.style="display:flex"
        divtask.style.justifyContent="center"

        
        let para=  document.createElement('p')
       para.innerText= task;
       let buttondelete = document.createElement('button')
       buttondelete.innerText="delete"
       divtask.appendChild(para)
       divtask.appendChild(buttondelete)

       taskcontainer.appendChild(divtask)

        buttondelete.addEventListener('click',()=>{
            divtask.remove();
        })

    })
})