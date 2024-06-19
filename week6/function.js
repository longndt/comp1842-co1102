//declare function with old (traditional) method
function multiplication(a, b) {
   return a * b;
}

c = multiplication(3, 5);
console.log(c);

//declare function with new way using arrow function
total = (a, b) => a + b

c = total(3, 5);
console.log(c);
