
/*let language = "Jānis Jansons";

let text = " ";
for (let x of language) {
  text += x + "<br>";
}

document.getElementById("demo").innerHTML = text;*/

var a = document.getElementById("inp");
a.addEventListener("keyup", function () {
  document.getElementById("count").innerHTML = "Count :" + " " + a.value.length;
})

text = prompt("Cien. lietotāj, lūdzu, ievadi kādu teikumu:");
//text = text + " ";
var burtu_skaitiitaajs_vaardaa = 0;
var simbolu_skaitiitaajs_teikumaa = 0;
var deriigu_vaardu_skaits = 0;
N = 5;
for (let x of text) {
  simbolu_skaitiitaajs_teikumaa++;
  if (x == " ") {
    //console.log(x + " tā ir atstarpe");
    //console.log("Iepriekšējā vārdā bija " + burtu_skaitiitaajs_vaardaa + " burti");
    if (burtu_skaitiitaajs_vaardaa >= N) {
      //console.log("Vēl vairāk, iepriekšējā vārdā bija " + N + " un vairāk burti");
      deriigu_vaardu_skaits++;
    }
    burtu_skaitiitaajs_vaardaa = 0;
  } else {
    burtu_skaitiitaajs_vaardaa++;
    //console.log(x + " tas ir " + burtu_skaitiitaajs_vaardaa + ". simbols vārdā");

    if (simbolu_skaitiitaajs_teikumaa == text.length) {
      //console.log("Iepriekšējā vārdā bija " + burtu_skaitiitaajs_vaardaa + " burti");
      if (burtu_skaitiitaajs_vaardaa >= N) {
        //console.log("Vēl vairāk, iepriekšējā vārdā bija " + N + " un vairāk burti");
        deriigu_vaardu_skaits++;
      }
      burtu_skaitiitaajs_vaardaa = 0;
      //console.log("Un vēl vairāk šis bija pēdējais vārds teikumā");
    }
  }
}

document.getElementById("text_analysis").innerHTML = "Šajā teikumā:<br><b>" + text + 
                                                    "</b><br>ir "+ deriigu_vaardu_skaits + " vārdi, kuru"+
                                                    " garums ir >= " + N;
