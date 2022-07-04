var vārds_uzvards = "Antons Flīze";
var nauda = "1200";

var pelna1 = (nauda * 0.0001) * 1;
var pelna2 = (nauda * 0.0002) * 2;
var pelna3 = (nauda * 0.0003) * 3;
var pelna4 = (nauda * 0.0004) * 4;
var pelna5 = (nauda * 0.0005) * 5;

document.getElementById("klients").innerHTML = vārds_uzvards;
document.getElementById("nauda").innerHTML = nauda;
document.getElementById("procenti1").innerHTML = pelna1;
document.getElementById("procenti2").innerHTML = pelna2;
document.getElementById("procenti3").innerHTML = pelna3;
document.getElementById("procenti4").innerHTML = pelna4;
document.getElementById("procenti5").innerHTML = pelna5;

const cars = ["BMW", "Audi", "Volvo"];
cars.sort()

