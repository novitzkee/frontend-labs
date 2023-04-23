function randInt(from, to) {
    return Math.floor(Math.random() * (to - from)) + from
}

Array.apply(null, { length: 50 })
    .map(_ => randInt(1, 1000))
    .filter(n => n % 2 === 0)
    .forEach(e => console.log(e))
