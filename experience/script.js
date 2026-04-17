// ================= NAVBAR =================
$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load',function(){
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if(window.scrollY > 60){
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }
    });
});


// ================= SCROLL ANIMATION =================
const srtop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
});

/* EXPERIENCE ANIMATION */
srtop.reveal('.experience .timeline',{delay: 300});
srtop.reveal('.experience .timeline .container',{interval: 200});


// ================= TAB TITLE CHANGE =================
document.addEventListener('visibilitychange', function(){
    if(document.visibilityState === "visible"){
        document.title = "Experience | Gourav Kumar";
        $("#favicon").attr("href","/assets/images/favicon.png");
    }
    else {
        document.title = "Gourav Kumar Portfolio";
        $("#favicon").attr("href","/assets/images/favhand.png");
    }
});