module.exports = {
    findWomen,
    findPeopleOver30,
    findPeopleWith3Children,
    findPeopleWith2Daughters,
    findPeopleWith2ChildrenOver10,
    findPeopleAndChildrenBelow20
}

function findWomen(people) {
    return people.filter(person => person.gender === 'F')
}

function findPeopleWithAge(people, agePredicate) {
    return people.filter(person => agePredicate(person.age))
}

function findPeopleOver30(people) {
    return findPeopleWithAge(people, age => age > 30)
}

function findPeopleWith3Children(people) {
    return people.filter(person => person.childs.length === 3)
}

function findPeopleWith2Daughters(people) {
    return people.filter(person => findWomen(person.childs).length === 2)
}

function findPeopleWith2ChildrenOver10(people) {
    return people.filter(person => person.childs.length == 2 && person.childs.every(child => child.age > 10))
}

function findPeopleAndChildrenBelow20(people, uniqueBy) {
    const uniquePeople = people
        .flatMap(person => [person, ...person.childs])
        .uniqueBy(uniqueBy)

    return findPeopleWithAge(uniquePeople, age => age < 20)
}

Array.prototype.uniqueBy = function(keyExtractor) {
    return [...new Map(this.map(e => [keyExtractor(e), e])).values()]
}