document.addEventListener("DOMContentLoaded", () => {
  menuScroll();
});

let menu_scroll = document.querySelectorAll(".menu-scroll");
let contenido_1 = document.getElementById("contenido-1");
let contenido_2 = document.getElementById("contenido-2");

function menuScroll() {
  menu_scroll.forEach((menu, i) => {
    menu.addEventListener("click",(e) => {
      if(e.target.classList.contains("menu-scroll__opcion")) {
        let menu_id = e.target.parentElement.id;
        let child_n = Array.prototype.indexOf.call(e.target.parentNode.children, e.target);
        console.log(child_n);
        menu_id = menu_id[menu_id.length - 1];

        document.getElementById(`contenido-${menu_id}`).style.left = ((child_n) * -360) + "px";
        console.log(document.getElementById(`contenido-${menu_id}`).style.left);



      }
    });
  });

}
