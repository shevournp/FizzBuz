// Write your solution below this line:
let i = 1;
while(i <= 50) {
    console.log(i);
    i++
if (i % 3 === 0) {
    console.log('fizz');
} 
else if (i % 5 === 0) {
    console.log('buzz');
} 
else if (i % 3 === 0 && i % 5 === 0) {
    console.log ('fizbuzz')
}
}