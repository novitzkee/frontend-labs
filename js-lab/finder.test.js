finder = require('./finder')

const people = [
    {
        firstName: 'Anna', lastName: 'Nowak', gender: 'F', age: 33, childs: [
            { firstName: 'Piotr', lastName: 'Nowak', gender: 'M', age: 15 },
            { firstName: 'Natalia', lastName: 'Nowak', gender: 'F', age: 11 }
        ]
    },
    { firstName: 'Dagmara', lastName: 'Kowalska', gender: 'F', age: 50, childs: [] },
    {
        firstName: 'Andrzej', lastName: 'Wietrzyński', gender: 'M', age: 36, childs: [
            { firstName: 'Piotr', lastName: 'Nowak', gender: 'M', age: 15 },
            { firstName: 'Natalia', lastName: 'Nowak', gender: 'F', age: 11 }
        ]
    },
    {
        firstName: 'Robert', lastName: 'Andrzejewski', gender: 'M', age: 35, childs: [
            { firstName: 'Zofia', lastName: 'Andrzejewska', gender: 'F', age: 3 },
            { firstName: 'Natalia', lastName: 'Andrzejewska', gender: 'F', age: 8 }
        ]
    },
    { firstName: 'Jadwiga', lastName: 'Słoczyńska', gender: 'F', age: 48, childs: [] },
    {
        firstName: 'Judyta', lastName: 'Nahita', gender: 'F', age: 23, childs: [
            { firstName: 'Ireneusz', lastName: 'Nahita', gender: 'M', age: 5 }
        ]
    },
    {
        firstName: 'Zuzanna', lastName: 'Topolewska', gender: 'F', age: 45, childs: [
            { firstName: 'Ireneusz', lastName: 'Nahita', gender: 'M', age: 16 },
            { firstName: 'Justyna', lastName: 'Nahita', gender: 'F', age: 3 },
            { firstName: 'Milena', lastName: 'Nahita', gender: 'F', age: 9 }
        ]
    },
    { firstName: 'Adam', lastName: 'Daleki', gender: 'M', age: 32, childs: [] },
    { firstName: 'Sebastian', lastName: 'Dudkiewicz', gender: 'M', age: 19, childs: [] },
    { firstName: 'Franciszek', lastName: 'Sypieczyk', gender: 'M', age: 51, childs: [] },
];

function getNames(people) {
    return people.map(person => person.firstName)
}

test('Should find women', () => {
    const expected = ['Anna', 'Dagmara', 'Jadwiga', 'Judyta', 'Zuzanna']
    const actual = getNames(finder.findWomen(people))
    expect(actual).toEqual(expected)
})

test('Should find people over 30', () => {
    const expected = getNames(people)
        .filter(name => !['Judyta', 'Sebastian'].includes(name))

    const actual = getNames(finder.findPeopleOver30(people))
    expect(actual).toEqual(expected)
})

test('Should find people with 3 children', () => {
    const expected = ['Zuzanna']
    const actual = getNames(finder.findPeopleWith3Children(people))
    expect(actual).toEqual(expected)
})

test('Should find people with 2 daughters', () => {
    const expected = ['Robert', 'Zuzanna']
    const actual = getNames(finder.findPeopleWith2Daughters(people))
    expect(actual).toEqual(expected)
})

test('Should find people with 2 children over 10', () => {
    const expected = ['Anna', 'Andrzej']
    const actual = getNames(finder.findPeopleWith2ChildrenOver10(people))
    expect(actual).toEqual(expected)
})

test('Should find anyone below 20', () => {
    const expected = ['Piotr', 'Natalia', 'Zofia', 'Natalia', 'Ireneusz', 'Ireneusz', 'Justyna', 'Milena', 'Sebastian']

    const equalByKeys = person => ['firstName', 'lastName', 'gender', 'age']
        .map(key => person[key])
        .reduce((prev, next) => prev + '|' + next, "")

    const actual = getNames(finder.findPeopleAndChildrenBelow20(people, equalByKeys))

    expect(actual.sort()).toEqual(expected.sort())
})
