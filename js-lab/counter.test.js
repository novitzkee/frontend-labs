counter = require('./counter')

test('Should initialize counter with 1', () => {
    const ctr = counter.makeCounter()
    expect(ctr.get()).toEqual(1)
})

test('Should increment counter', () => {
    const ctr = counter.makeCounter(1)
    ctr.increment()
    expect(ctr.get()).toEqual(2)
})

test('Should decrement counter', () => {
    const ctr = counter.makeCounter(100)
    ctr.decrement()
    expect(ctr.get()).toEqual(99)
})

test('Should reset counter', () => {
    const ctr = counter.makeCounter(5)
    ctr.increment()
    expect(ctr.get()).toEqual(6)
    ctr.reset()
    expect(ctr.get()).toEqual(5)
})

test('Should separate counter state', () => {
    const ctr1 = counter.makeCounter(1)
    const ctr2 = counter.makeCounter(10)
    
    ctr1.increment()
    expect(ctr1.get()).toEqual(2)
    expect(ctr2.get()).toEqual(10)

    ctr2.decrement()
    expect(ctr1.get()).toEqual(2)
    expect(ctr2.get()).toEqual(9)
})