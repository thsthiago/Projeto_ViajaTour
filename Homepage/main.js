let bars = document.querySelector('header #nav-mobile i');
let nav = document.querySelector('header #nav-mobile ul');

bars.onclick = function() {
  if(nav.classList.contains('n-nav')) {
    nav.classList.remove('n-nav');
  } else {
    nav.classList.add('n-nav');
  }
}

let imgConosco = document.querySelector('.img-fale-conosco');
let faleConosco = document.querySelector('.fale-conosco');
let formFale = document.querySelector('.fale-conosco form');

faleConosco.style.visibility = 'hidden';

console.log(faleConosco.style.visibility == 'hidden');
console.log(faleConosco);

imgConosco.onclick = function() {
  if(faleConosco.style.visibility === 'hidden') {
    faleConosco.style.visibility = 'visible';
    faleConosco.style.width = '100%';
    faleConosco.style.height = '470px';
    faleConosco.style.opacity = '1';
    formFale.style.opacity = '1';
  } else {
    faleConosco.style.visibility = 'hidden';
    faleConosco.style.width = '0';
    faleConosco.style.height = '0';
    faleConosco.style.opacity = '0';
    formFale.style.opacity = '0';
  }
}