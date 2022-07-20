function getArrayOfNumbers(num) {
    const arr = []
    for (let i = 0; i <= num; i += 1) {
      arr.push(i)
    }
    return arr
  }
  
const isEven = (num) => num % 2 === 0

const isOdd = (num) => Math.abs(num % 2) === 1

const isPrime = (num) => {
    if (Number.isNaN(num) || !Number.isFinite(num) || num % 1 || num < 2) {
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