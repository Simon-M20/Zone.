const menuShow = (menuBtn, menu, menuLink, closeBtn) => {
    document.addEventListener("click", e => {
        if (e.target.matches(menuBtn) || e.target.matches(`${menuBtn} *`)) {
            document.querySelector(menu).classList.add("is-active")
          }
      
          if (e.target.matches(menuLink)) {
            document.querySelector(menu).classList.remove("is-active")
            // document.querySelector(menuBtn).classList.remove("is-active")
          }

          if (e.target.matches(closeBtn)) {
            document.querySelector(menu).classList.remove("is-active")
          }
    }) 
}; 

document.addEventListener("DOMContentLoaded", e => {
    menuShow(".menu-btn", ".menu", ".menu-link a", ".close-btn img")  
})