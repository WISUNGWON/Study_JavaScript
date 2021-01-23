/* The join() method creates and returns a new string by concatenating all of the elements 
in an array (or an arry-like object), separated by commas or a specified separator string.
*/

const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
console.log(elements.join(''));
console.log(elements.join('-'));

// if the array has only one item, then that item will be returned without using the separator.
const element = ['Wind'];

console.log(element.join());
console.log(element.join('-'));

/* Syntax
arr.join([separator]) : separator is Optional,
*/
