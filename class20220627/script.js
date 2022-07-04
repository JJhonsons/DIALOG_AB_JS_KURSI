const datums = new Date();
console.log("datums" + datums);

const datuma_teksts = datums.toLocaleString('lv-LV', {timeZone: 'UTC'});
console.log("Datuma teksts(ar lv-LV formātā)" + datuma_teksts);

const datuma_teksta_garums = datums.toLocaleString = datuma_teksts.length;
console.log("Datuma teksta garums" + datuma_teksta_garums);

document.getElementById("currentday").innerHTML = document.getElementById("currentday").innerHTML + datums;

document.getElementById("Currnettime").innerHTML = document.getElementById("Currnettime").innerHTML + datuma_teksts.slice(11,datuma_teksta_garums);