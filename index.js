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