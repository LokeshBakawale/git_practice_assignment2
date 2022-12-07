
let count=0;
let number =5;

for(let i=0; i<=number; i++){
if(number%i==0){
count++
}
}
if(count==2){
console.log(number, "this is prime")
}
else{
console.log(number, "this is not prime")
}
