//scripta faila sākums sastāv ar 5 mainīgo( const) definēšanu.
const toggle = document.getElementById('toggle');
const close = document.getElementById('close');
const open = document.getElementById('open');
const modal = document.getElementById('modal');
const navbar = document.getElementById('navbar');


//navigācijas joslas scripst, kura funkcija ir atvērt un aizvērt navigācijas joslu
//satāv no kodu zarošānas ar if lai atvērtu navigacijas joslu
//iekļauj eventlistner kas gaida atbildi, šajā gadijumā klikšķi uz pogas lai izpildītu darbību
//body.classlist property kas definē funkcijas darbību un ko tā ietver
function closeNavbar(e) {  
if (
    document.body.classList.contains('show-nav') &&
    e.target !== toggle &&
    !toggle.contains(e.target) &&
    e.target !== navbar &&
    !navbar.contains(e.target)
  ) {
    document.body.classList.toggle('show-nav');
    document.body.removeEventListener('click', closeNavbar);
  } else if (!document.body.classList.contains('show-nav')) {
    document.body.removeEventListener('click', closeNavbar);
  }
}

// koda daļa kas aizver navigācijas joslu ja ir uzspiests uz body sadaļu
toggle.addEventListener('click', () => {
  document.body.classList.toggle('show-nav');
  document.body.addEventListener('click', closeNavbar);
});
//javascrpt koda daļa lai atvērtu reģistrācijas sadaļu, kas ir noslēpta
//open.addeventlistner daļa kas gaida klišķi uz pogas lai atvērtu reģistrācijas formu
//close.addeventlitsner daļa kuras uzdevums ir aizvērt reģistrācijas sadaļu
//iekļau vēl window.addeventlistner kurš aizver reģistrācijas formu ja klikšķis ir bijis arpus kontaktu sadaļai

open.addEventListener('click', () => modal.classList.add('show-modal'));


close.addEventListener('click', () => modal.classList.remove('show-modal'));


window.addEventListener('click', e =>
  e.target == modal ? modal.classList.remove('show-modal') : false
);

//js fails izmanto gan html gan css(css norāda uz izmēriem kādi būs izpildot doto uzdevumu)