// This example explains the currying technique with the help of closures.
// During the thread of execution, the x() function will be invoked.
// Inside there is an anonymous function, that receives a parameter and returns some code.
// We are exposing our function to another function, so closure will be created.
// Closure always contains the function definition along with the lexical environment of the parent,
// both things remain connected as a bundle. Hence, it does not matter where we invoke them, the all inner functions
// will always hold access to the variable of their parent. As soon as we have got the returned result
// as a function the next argument is ready to be passed, this process will continue till the second last function.
// Finally, the innermost return keyword returns the expected result.

function x(a) {
  console.log(a); //2
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(x(2)(3)(4));
