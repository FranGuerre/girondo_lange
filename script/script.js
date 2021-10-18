document.addEventListener("DOMContentLoaded", () => {
  menuScroll();
});

let menu_scroll = document.querySelectorAll(".menu-scroll");
let contenido_1 = document.getElementById("contenido-1");
let contenido_2 = document.getElementById("contenido-2");

function menuScroll() {
  menu_scroll.forEach((menu, i) => {
    menu.addEventListener("click",(e) => {
      if(e.target.classList.contains("menu-scroll__opcion"))
        let menu_activo = e.target.parentElement;
        // menu_id obtiene del id que menu está siendo utilizado
        let menu_id = menu_activo.id;
        menu_id = menu_id[menu_id.length - 1];
        // child_index obtiene el índice del child para luego utilizarlo para modificar la posición
        let child_index = Array.prototype.indexOf.call(menu_activo.children, e.target);

        document.getElementById(`contenido-${menu_id}`).style.left = ((child_index) * -360) + "px";
      }
    });
  });

}
