
//funkciju definēšan ar apgalvjuma palīdzību

/*function square_statment (number) {
return number * number;
}
const x = square_statment(4);
console.log(x);


//funkciju definēšanas ar izteiksmes palīdzību

const square = function (number) {
    return number * number;
  }
  const y = square(4); // x gets the value 16

  console.log(y);

  const factorial = function fac(n) {
    return n < 2 ? 1 : n * fac(n - 1);
  }
  
  console.log(factorial(3))

  function map(f, a) {
    const result = [];
    //i = 0;
    for (const v of a) {
      //result[i] = f(v);
      //i++;
      result.push(f(v));
    }
    return result;
  }

  const square_for_each_element = function (x) {
    return x * x;
  }
  
  const cube_for_each_element = function (x) {
    return x * x * x;
  }
  
  const numbers = [0, 1, 2, 5, 10];

  const squares = map(square_for_each_element, numbers);
  console.log(squares);

  const cube = map(cube_for_each_element, numbers);
  console.log(cube);
*/
  // The following variables are defined in the global scope

function getYears() {
  const num1 = 16;
  const num2 = 2;
  const name = 'Jānim ir ';

  function add() {
    return name + (num1 * num2) + ' gadi';
  }

  return add();
}

getYears(); // Returns "Chamakh scored 5"
document.getElementById("demo").innerHTML = getYears();
