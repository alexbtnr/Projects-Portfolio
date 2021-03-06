const links = document.querySelectorAll("#main-nav a");
const btn = document.querySelector('.header-content a');


btn.addEventListener('click', clickHandler);
 
for (const link of links) {
  link.addEventListener("click", clickHandler);
}
 
function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;
 
  scroll({
    top: offsetTop - 100,
    behavior: "smooth"
  });
};