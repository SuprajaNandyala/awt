function *generator(i){
console.log('in generator function');
yield i;
yield i+10;
yield i*10
}
const obj=generator(100);
console.log(obj.next().value);
console.log(obj.next().value);
console.log("generator function continuation");
console.log(obj.next().value);