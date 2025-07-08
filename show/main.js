function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}
function greet(name, age) {
    console.log(`Hello, my name is ${name} and I am ${age} years old.`);
}