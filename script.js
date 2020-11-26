$(".cross").click(function() {
    // alert("The cross button is working.")
    event.preventDefault();
    $(this).parent().remove();

    // *******
    // If one only wants to hide the items:
    // $(this).parent().hide();
    // instead of the line above.

});

$(".text").click(function() {
    event.preventDefault();
    $(this).css("text-decoration","line-through");
    $(this).siblings(".check").css("visibility", "visible");
    $(this).parent().css("background-color", "rgba(184, 204, 224, 0.603)")
});

$(".add").click(function() {
    event.preventDefault();
});
