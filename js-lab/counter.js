module.exports = {
    makeCounter
}

function makeCounter(value) {
    const init = value ? value : 1
    var current = init

    return {
        get() {
            return current
        },
        increment() {
            current++
        },
        decrement() {
            current--
        },
        reset() {
            current = init
        }
    }
}



