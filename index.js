console.log('hello world')

const something = new Promise((resolve, reject) => {
    const a = 'five'
    const b = 'five'
    if(a === b){
        resolve('success')
    }else{
        reject('failed')
    }
})
console.log(something)

something.then((message)=>{
    console.log(`this promises ${message}`)
}).catch((message)=>{
    console.log(`this promises ${message}`)
})



function numberOne(){
   new Promise((resolve, reject) => {
    setTimeout(()=>{
        console.log('this function number One')
    },1000)
    resolve(numberTwo)
   })
   .then((two)=>{
        two(numberTwo)
   })
}

function numberTwo(){
 new Promise((resolve, reject) => {
    setTimeout(()=>{
         console.log('this is function number Two')
    },2000)
    resolve(numberThree)
 })
 .then((three)=>{
   three(numberThree)
 })
}

function numberThree(){
    new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log('this is function number Three')
        },3000)
        resolve(numberFour)
    })
    .then((four)=>{
       four(numberFour)
    })
}

function numberFour(){
    new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log('this is function number Four')
        },4000)
        resolve(numberFive)
    })
    .then((five)=>{
      five(numberFive)
    })
}

function numberFive(){
    new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log('this is functon number Five')
        },5000)
        resolve(numberSix)
    })
    .then((six)=>{
        six(numberSix)
    })
}

function numberSix(){
    new Promise((resolve, reject) => {
        setTimeout(()=>{
         console.log('this is function number Six')
        },6000)
        resolve('success')
    })
    .then((message)=>{
           console.log(`this is ${message}`)
    })
}


numberOne(numberTwo)