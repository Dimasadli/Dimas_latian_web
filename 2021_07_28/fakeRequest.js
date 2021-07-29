const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const timeOut = Math.random()
        setTimeout(() => {
            if (timeOut > 0, 6) {
                resolve('Yeay Request got', url)
            }
            reject('Oh no your data is invalid')
        })
    })
}
///params data itu didapet dari resolve
///params err itu didapet dari reject
const yourdata = fakeRequest('/google.id/')
    .then((data) => {
        console.log('Here is your data')
        console.log(data)
    })
    .catch((err) => {
        console.log('failed timeout')
        console.log(err)
    })

///fakerequest dengan async function
///try itu kalo dia resolve dan catch itu kalo di reject
async makeRequest()=> {
    try {
        let data1 = await fakeRequest('/page1')
        console.log(data1)
    }
    catch (e) {
        console.log('Oh no connection time out')
        console.log(e)
    }
}

///async function dan await
///return sebagai promise (resolved)
async function hello() {
    //throw bakal langsung reject si promisenya 
    throw new Error('ada problem')
    return 'here my request'
}

hello.then((data) => {
    console.log('promise result', data)
})

//contoh
const login = async (username, password) => {
    if (!username || !password) throw 'Missing the username/password'
    if (password === 'kakitiga12') return true
    throw 'Invalid Password'
}
/// bakal error karena passworndya ga ada / salah
login('dimasadli')
    .then(msg => {
        console.log('Yeay Logged in')
        console.log(msg)
    })
    .catch(err => {
        console.log('Oh no')
        console.log(err)
    })