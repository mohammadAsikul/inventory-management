let navLi = document.querySelectorAll("#navLi");

navLi.forEach(function(list){
    list.addEventListener('click', function (e) {
        if (!e.currentTarget.nextElementSibling.classList.contains("active__sub--ul")) {
            resetActiveSubUl();
            e.currentTarget.nextElementSibling.classList.add("active__sub--ul");
        } else {
            e.currentTarget.nextElementSibling.classList.remove("active__sub--ul");            
        }
    })
});

// function for reset active__sub--ul
function resetActiveSubUl() {
    navLi.forEach(function(list){
        list.nextElementSibling.classList.remove("active__sub--ul");
    });
}
