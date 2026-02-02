const numbers = [12, 45, 7, 89, 34, 2, 66];
const highestNum = (numbers) =>{
    let highest = numbers[0];
    for(let num of numbers){
        if(num> highest){
            highest = num;
        }
    }
    return(highest)
}

const lowestNum = (numbers) => {
    let lowestNum= numbers[0];
    for(let num of numbers){
        if(num < lowestNum){
            lowestNum = num
        }
    }
    return lowestNum

}

const average = (numbers) => {
    let sum = 0;
    let count = 0;
    for(let num of numbers){
        sum += num;
        count++;
    }
    return sum/count;
}

console.log(`Highest number = ${highestNum(numbers)}`);
console.log(`Lowest number = ${lowestNum(numbers)}`);
console.log(`Average = ${average(numbers)}`);
