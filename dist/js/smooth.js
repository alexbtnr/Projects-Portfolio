const links = document.querySelectorAll("#main-nav .nav-links a");
const btn = document.querySelector('.header-content a');
const img = document.querySelector('#main-nav #image-link');


btn.addEventListener('click', clickHandler);
img.addEventListener('click', clickHandler);

for (const link of links) {
  link.addEventListener("click", clickHandler);
}
 
function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;
 
  scroll({
    top: offsetTop - 50,
    behavior: "smooth"
  });
};