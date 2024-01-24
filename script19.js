console.log("hello world")


let arr= [1,2,3,4,5]
console.log(arr)

let obj ={
    0:1,
    1:2,
    2:32,
    3:4,
    4:56,
    5:34,
    length:6,

    forEach:function(fn){
            for(let i=0;i<this.length;i++){
                let ele= this[i]
                fn(ele,i)
            }           
    }
}


obj.forEach(function(ele, i){
    console.log(ele+"++"+i)
})



