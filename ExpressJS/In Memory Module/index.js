const storage = require('./storage')

storage.put('first', 'some value')
storage.put('second', true)
storage.put('third', 1)

let someValue = storage.get('first')
console.log(someValue)

storage.update('first', 'another value')
let anotherValue = storage.get('first')
console.log(anotherValue)

storage.delete('first')

storage.clear()

storage.put('first', 'some value')
storage.put('second', true)
storage.put('third', 1)

storage.save()

storage.clear()

storage.load()

let afterLoad = storage.get('second')
console.log(afterLoad)
