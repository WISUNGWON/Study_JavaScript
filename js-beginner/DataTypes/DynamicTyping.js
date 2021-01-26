// JS is a `loosely typed and dynamic language`.

let foo = 42; // foo is now a number
foo = 'bar'; // foo is now a string
foo = true; // foo is now a boolean

// Six Data Types that are primitives

console.log(typeof 42); // number
console.log(typeof true === 'boolean'); // true
console.log(typeof 'string'); // string
// A BigInt is created by appending `n` to the end of an integer literal
console.log(typeof 1n); // bigint
// or by calling the function BigInt().
console.log(typeof BigInt('123')); // bigint
console.log(typeof BigInt(123)); // bigint

let obj = { name: 'stiring' };

console.log(obj);
console.log(obj.name);
obj.kim = 'kimmin';
console.log(obj);

let s = 'foo';
s.bar = 'cheese';

console.log(s);
console.log(s.bar);
