var x = 56{
document.getElementById("dec").innerHTML = x;

var bit_number = 7;
var y = (x << bit_number-7) >> bit_number;
var z = String(y);
y = (x << bit_number-6) >> bit_number;
z = z + String(y);
y = (x << bit_number-5) >> bit_number;
z = z + String(y);
y = (x << bit_number-4) >> bit_number;
z = z + String(y);
y = (x << bit_number-3) >> bit_number;
z = z + String(y);
y = (x << bit_number-2) >> bit_number;
z = z + String(y);
y = (x << bit_number-1) >> bit_number;
z = z + String(y);
y = (x << 7) >> bit_number;
z = z + String(y);}

y = "0b00101101"
document.getElementById("bin").innerHTML = y;

//let carName = "Volvo";
//document.getElementById("demo").innerHTML = carName;

/*var a = 34;
console.log("mainīgā vērtība no galvenā zara "+a);
{
    console.log("mainīgā vērtība no pārdefinēšanas (no scope) "+a);
    var a = 33
    console.log("mainīgā vērtība no pārdefinēšanas(no scope) "+a);
}
console.log("mainīgā vērtība no galvenā zara pēc scope mainīšanas "+a);

ar a = 34;
console.log("mainīgā vērtība no galvenā zara "+a);
{
    console.log("mainīgā vērtība no pārdefinēšanas (no scope) "+a);
    var a = 33
    console.log("mainīgā vērtība no pārdefinēšanas(no scope) "+a);
}
console.log("mainīgā vērtība no galvenā zara pēc scope mainīšanas "+a);

ar a = 34;
console.log("mainīgā vērtība no galvenā zara "+a);
{
    console.log("mainīgā vērtība no pārdefinēšanas (no scope) "+a);
    var a = 33
    console.log("mainīgā vērtība no pārdefinēšanas(no scope) "+a);
}
console.log("mainīgā vērtība no galvenā zara pēc scope mainīšanas "+a);
456 || 0
//console.log(456 || 0); */

/*document.getElementById("demo").innerHTML = 456 || 0;*/

/*
function myFunction() {
    document.getElementById("demo").innerHTML = "Paragraph changed.";
    }
    */
   /* let carName = "Volvo";
document.getElementById("demo").innerHTML = carName; */