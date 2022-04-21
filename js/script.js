// toggle menu item list
let navLi = document.querySelectorAll("#navLi");
// toggle side menu
let header = document.querySelector("#header");
let nav = document.querySelector("#nav");
let navToggleBtn = document.querySelector("#navToggleBtn");
let mainContent = document.querySelector("#main");
// invoice new line adding
let invoiceItemTable = document.querySelector("#invoiceItemTable");
let addNewRow = document.querySelector("#addNewRow");

navLi.forEach(function(list){
    list.addEventListener('click', function (e) {
        if (!e.currentTarget.nextElementSibling.classList.contains("active__sub--ul")) {
            resetActiveSubUl();
            e.currentTarget.nextElementSibling.classList.add("active__sub--ul");
            header.classList.remove("deactive__nav");
            nav.classList.remove("deactive__nav");
            mainContent.classList.remove("deactive__nav");
        } else {
            e.currentTarget.nextElementSibling.classList.remove("active__sub--ul");
            header.classList.remove("deactive__nav");
            nav.classList.remove("deactive__nav"); 
            mainContent.classList.remove("deactive__nav");          
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
    mainContent.classList.toggle("deactive__nav");
    resetActiveSubUl();
})

// invoice new line adding
let addLineHtml = '<tr><td><select name="itemSelectBox" id="itemSelectBox"><option value="" disabled selected>select your item</option></select></td><td>1</td><td><input type="number" name="itemRate" id="itemRate" placeholder="item rate" value=""></td><td><input type="number" name="itemQty" id="itemQty" placeholder="item qty" value=""></td><td><input type="number" name="itemDiscount" id="itemDiscount" placeholder="item discount" value=""></td><td>100</td><td><button id="itemDeleteBtn" class="item__delete--btn"><i class="fa-solid fa-trash"></i></button></td></tr>';

let x = 1;
addNewRow.addEventListener('click', function (e) {
    // invoiceItemTable.appendChild(addLineHtml);
    console.log("hello you click me!");
})