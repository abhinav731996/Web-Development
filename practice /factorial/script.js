// let a = 6

// function foactorial(number) {
//     let arr = Array.from(Array(number).keys())
//     console.log(arr);
// }
// foactorial(a)

// Function to calculate factorial
function factorial(n) {
    if (n === 0 || n === 1) { // Base case: factorial of 0 or 1 is 1
        return 1;
    } else {
        return n * factorial(n - 1); // Recursive call
    }
}

// Numbers to calculate factorial for
const numbers = [6, 4, 7];

// Loop through numbers and calculate factorial
numbers.forEach(num => {
    console.log(`Factorial of ${num} is: ${factorial(num)}`);
});
