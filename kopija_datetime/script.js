/*
let arg = prompt("divi + divi?");
switch (arg) {
  case '0':
  case '1':
  case '2':
  case '3':
    alert( 'Pacenties vairāk' );
    break;
  case '4':
  case 'chetri':
    alert( 'Pareizi' );
    break;
    
  default:
    alert( 'Nepareizi' );
} 
*/
const days = ["Svēdiena","Pirmdiena","Otrdiena","Trešdiena","Ceturdiena","Piektdiena","Sesdiena"];
const datums = new Date();
let day = days[datums.getDay()];


const datuma_teksta = datums.toLocaleString('lv-LV');
const dtg = datuma_teksta.length;




document.getElementById("CurrentDay").innerHTML = document.getElementById("CurrentDay").innerHTML + day ;
document.getElementById("CurrentTime").innerHTML = document.getElementById("CurrentTime").innerHTML + datuma_teksta.slice( 11,dtg ) ;