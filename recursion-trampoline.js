const trampoline = fn => (...args) => {
    let result = fn(...args)
    
    while (typeof result === 'function') {
      result = result()
    }
    
    return result
}


const sumBelowRec = (number, sum = 0) => (
    number === 0
      ? sum
      : () => sumBelowRec(number - 1, sum + number)
)


trampoline(sumBelowRec)(100000,0)  
