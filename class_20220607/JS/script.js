/*var text = " ";
console.log(` " " `);
console.log(" ` ` ");
console.log()

*/
document.getElementById("dec").innerHTML = text;

/*
>> un & (interesējošo bitu novietot vienmēr 0. pozīcijā un ar ((x>>?) & 1)
*/

var bit_sequence = "";
var zero_th_bit = (x >> 0) & 1;
/*
x >> 0 -> 60(dec) atbilst 0011 1100(bin)
0011 110_0_ >> 0 -> 0011 1100
           1(dec) atbilst 0000 0001(bin)
(x >> 0) & 1 -> 0011 1100
                0000 0001
                0000 0000(bin) -> 0(dec)
*/
console.log("0. bita attēlošana (pēc nobīdes pa 0 bitiem pa labi un 'reizināšanas' ar 1): "+zero_th_bit);
bit_sequence = zero_th_bit + bit_sequence;
console.log("0. bits: " + bit_sequence);

zero_th_bit = (x >> 1) & 1;
/*
0011 11_0_0 >> 1 -> 0001 1110
(x >> 1) & 1 ->    0001 1110
                   0000 0001
                   0000 0000(bin) -> 0(dec)
*/
console.log("1. bita attēlošana (pēc nobīdes pa 1 bitu pa labi un 'reizināšanas' ar 1): "+zero_th_bit);
bit_sequence = zero_th_bit + bit_sequence;
console.log("0. un 1. bits: " + bit_sequence);

/*
......... Jūsu algoritms dec skaitļa pārveidošanai par bināro skaitli
......... vai par 0 un 1 simbolu secību
......... drīkst izmantot tikai divus vai trīs mainīgos
*/
// sākumā var atrast un pielietot standarta JS funkciju, kas pārveido dec to bin
// if, for utt. pagaidām izmantot nedrīkst
document.getElementById("bin").innerHTML = bit_sequence;






























/*var bit_number = 7;
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
*/
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