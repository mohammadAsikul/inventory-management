// toggle menu item list
let navLi = document.querySelectorAll("#navLi");
// toggle side menu
let header = document.querySelector("#header");
let nav = document.querySelector("#nav");
let navToggleBtn = document.querySelector("#navToggleBtn");

navLi.forEach(function(list){
    list.addEventListener('click', function (e) {
        if (!e.currentTarget.nextElementSibling.classList.contains("active__sub--ul")) {
            resetActiveSubUl();
            e.currentTarget.nextElementSibling.classList.add("active__sub--ul");
            header.classList.remove("deactive__nav");
            nav.classList.remove("deactive__nav");
        } else {
            e.currentTarget.nextElementSibling.classList.remove("active__sub--ul");
            header.classList.remove("deactive__nav");
            nav.classList.remove("deactive__nav");           
        }
    })
});

// function for reset active__sub--ul
function resetActiveSubUl() {
    navLi.forEach(function(list){
        list.nextElementSibling.classList.remove("active__sub--ul");
    });
}

// toggle side menu functionlity
navToggleBtn.addEventListener('click', function (e) {
    header.classList.toggle("deactive__nav");
    nav.classList.toggle("deactive__nav");
    resetActiveSubUl();
})
