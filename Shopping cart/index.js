
function main() {
    const numbers = new Array(5).fill(0).map( () => {
        return Math.floor(Math.random() * 100 + 1)
    })
    console.log(numbers);
    const somaNum = numbers.reduce((total,num) => {
        return total * num
    })
    console.log(somaNum);
}

main();