const people =  {
    name: 'carlos',
    age: 30,
    wheight: 80
}

console.log(Object.keys(people))
console.log(Object.values(people))
console.log(Object.entries(people))

Object.entries(people).forEach(([key,valor]) => {
    console.log(`${key}: ${valor}`)
})

Object.defineProperty(people, 'birthdate', {
    enumerable: true,
    writable: false,
    value: '01/01/2019'
})

people.birthdate = '01/01/2017'
console.log(people.birthdate)
console.log(Object.keys(people))

const dest = {a:1 }
const o1 = {b:2 } 
const o2 = {c:3, a: 4 }
const obj = Object.assign(dest,o1,o2)

Object.freeze(obj)
obj.c = 1234
console.log(obj)

