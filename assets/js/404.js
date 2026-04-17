// ================= NAVBAR TOGGLE =================
$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

});


// ================= OPTIONAL: TITLE CHANGE =================
document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === "visible") {
        document.title = "404 | Gourav Kumar";
    } else {
        document.title = "Page Not Found";
    }
});