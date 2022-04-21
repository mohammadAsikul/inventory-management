$(document).ready(function () {
    // var html = '<tr><td><select name="itemSelectBox" id="itemSelectBox"><option value="" disabled selected>select your item</option></select></td><td>1</td><td><input type="number" name="itemRate" id="itemRate" placeholder="item rate" value=""></td><td><input type="number" name="itemQty" id="itemQty" placeholder="item qty" value=""></td><td><input type="number" name="itemDiscount" id="itemDiscount" placeholder="item discount" value=""></td><td>100</td><td><button id="itemDeleteBtn" class="item__delete--btn"><i class="fa-solid fa-trash"></i></button></td></tr>';
    var html = "Hello";

    var x = 1;
    $("#addNewRow").click(function () {
        $("#invoiceItemTable").append(html);
    })
});