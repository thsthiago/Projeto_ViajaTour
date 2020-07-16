let bars = document.querySelector('header #nav-mobile i');
let nav = document.querySelector('header #nav-mobile ul');

bars.onclick = function() {
  if(nav.classList.contains('n-nav')) {
    nav.classList.remove('n-nav');
  } else {
    nav.classList.add('n-nav');
  }
}