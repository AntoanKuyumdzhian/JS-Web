const fs = require('fs')
let data = {}

let validateKey = (key) => {
    if (typeof key !== 'string') {
        throw new Error('Key must be a string!')
    }
}

let keyExists = (key) => {
    if(!data.hasOwnProperty(key)){
        throw new Eror('Key could not be found')
    }
}

let put = (key, value) => {
    validateKey(key)
    if(data.hasOwnProperty(key)){
        throw new Eror('Key already exists')
    }
    data[key] = value
}

let get = (key) => {
    validateKey(key)
    keyExists(key)
    return data[key]
}

let update = (key, value) => {
    validateKey(key)
    keyExists(key)
    data[key] = value
}

let deleteRecord = (key) => {
    validateKey(key)
    keyExists(key)
    delete data[key]
}

let clear = () => {
    data = {}
}

let save = () => {
    let dataString = JSON.stringify(data)
    fs.writeFileSync('storage.dat', dataString)

}
let load = () => {
    let dataString = fs.readFileSync('storage.dat', 'UTF8')
    data = JSON.parse(dataString)
}

module.exports = {
    put: put,
    get: get,
    update: update,
    delete: deleteRecord,
    clear: clear,
    save: save,
    load: load
}