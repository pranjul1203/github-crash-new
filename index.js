const age=24;
let name="John";
let dob="1999-01-01";

function greet() {
    console.log(`Hello, my name is ${name} and I am ${age} years old.`);
}

function calculateAge() {
    const currentYear = new Date().getFullYear();
    const birthYear = new Date(dob).getFullYear();
    return currentYear - birthYear;
}
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
} 