//

console.log(window.location);
console.log(document.location);
console.log(location);

// URL pilna adrese
console.log(location.href);

//protokols (http un https datu plumai caurtilu un ari aplikaciju darbinasanai)

console.log(location.protocol);

// host (ip vai vardiska adrese)
console.log(location.host);

console.log(location.port);

//web servisa ceļš
console.log(location.pathname);


// meklesena pec ? 
console.log(location.search);

// lietotaja vards parole
//pirms host name 

alert('Tūlīt ielādēsies cita lapa');

location.replace('http://127.0.0.1:5500/class_20220729/index.html')
