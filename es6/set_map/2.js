const people = new Set() // 实例化了Set
people.add('Wes')
people.add('世龙')
people.add('赖经涛')
people.add('世龙')
// console.log(people)

for (const person of people) {
    console.log(person)
}

const students = new Set(['Wes', 'Kara', 'Tony'])
const dogs = ['Snickers', 'Sunny']
const dogSet = new Set(dogs)
