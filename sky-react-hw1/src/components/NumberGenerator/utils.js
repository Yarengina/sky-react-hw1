function getArrayOfNumbers(num) {
    return Array.from({length: num + 1}, (item, index) => index)
}
  
const isEven = (num) => num % 2 === 0

const isOdd = (num) => !isEven(num)

const isPrime = (num) => {
    // eslint-disable-next-line no-restricted-globals
    if (isNaN(num) || !isFinite(num) || num % 1 || num < 2) {
        return false
    }

    const max = Math.floor(Math.sqrt(num))
    
    for (let i = 2; i <= max; i += 1) {
        if (num % i === 0) {
        return false
        }
    }
    return true
}

function getNumberColor(num) {
    if (isPrime(num)) {
        return {
            backgroundColor: '#ff00008f'
        }
    }
    if (isEven(num)) {
        return {
            backgroundColor: '#00802594'
        }
    }
    if (isOdd(num)) {
        return {
            backgroundColor: '#ffff00ad'
        }
    }
    return false
}
  
export { getArrayOfNumbers, getNumberColor }