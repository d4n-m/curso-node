const momIsHappy = true;

const willIGetNewPhone = new Promise(
    (resolve, reject)=>{
        if(momIsHappy){
            resolve ({
                brand: 'Samsung',
                color: 'black'
            })} else{
                const reason = new Error('mom is not happy')
                reject(reason)
            }
})


// console.log(WillIGetNewPhone(momIsHappy));
const showOff = (phone)=>{
    const message = `Hey bros, I have a new ${phone.color} ${phone.brand} phone`;
    // return new Promise((resolve,reject)=>{
    //     resolve(message);
    // })
    return Promise.resolve(message);
}

const askMom = ()=>{
    willIGetNewPhone
        // .then(console.log)
        .then(showOff)
        .then(console.log)
        .catch(error =>console.error
            (error.message))
}

askMom();