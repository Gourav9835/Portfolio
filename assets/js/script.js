// ================= NAVBAR =================
$(document).ready(function () {

    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        // scroll top button
        if (window.scrollY > 60) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }

        // scroll spy
        $('section').each(function () {
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            if (top > offset && top < offset + height) {
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });

    // smooth scroll
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        }, 500, 'linear');
    });

    // ================= EMAILJS =================
    $("#contact-form").submit(function (event) {
        emailjs.init("YOUR_USER_ID"); // 🔥 replace with your EmailJS ID

        emailjs.sendForm('service_id', 'template_id', '#contact-form')
            .then(function () {
                document.getElementById("contact-form").reset();
                alert("Message sent successfully!");
            }, function () {
                alert("Failed to send message!");
            });

        event.preventDefault();
    });

});


// ================= TAB TITLE =================
document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === "visible") {
        document.title = "Portfolio | Gourav Kumar";
        $("#favicon").attr("href", "assets/images/favicon.png");
    } else {
        document.title = "Gourav Kumar Portfolio";
        $("#favicon").attr("href", "assets/images/favhand.png");
    }
});


// ================= TYPING TEXT =================
var typed = new Typed(".typing-text", {
    strings: [
        "SEO & Digital Marketing",
        "Web Development",
        "WordPress Development",
        "Frontend Development"
    ],
    loop: true,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 500,
});


// ================= FETCH DATA =================
async function fetchData(type = "skills") {
    let response;

    if (type === "skills") {
        response = await fetch("skills.json");
    } else {
        response = await fetch("./projects/projects.json");
    }

    return await response.json();
}


// ================= SHOW SKILLS =================
function showSkills(skills) {
    let skillsContainer = document.getElementById("skillsContainer");
    let skillHTML = "";

    skills.forEach(skill => {
        skillHTML += `
        <div class="bar">
            <div class="info">
                <img src="${skill.icon}" alt="skill" />
                <span>${skill.name}</span>
            </div>
        </div>`;
    });

    skillsContainer.innerHTML = skillHTML;
}


// ================= SHOW PROJECTS =================
function showProjects(projects) {
    let projectsContainer = document.querySelector("#work .box-container");
    let projectHTML = "";

    projects.forEach(project => {
        projectHTML += `
        <div class="box tilt">
            <img draggable="false" src="/assets/images/projects/${project.image}.png" alt="project" />
            
            <div class="content">
                <div class="tag">
                    <h3>${project.name}</h3>
                </div>

                <div class="desc">
                    <p>${project.desc}</p>
                    <small>Tech: ${project.tech}</small>

                    <div class="btns">
                        <a href="${project.links.view}" class="btn" target="_blank">
                            <i class="fas fa-eye"></i> View
                        </a>
                    </div>
                </div>
            </div>
        </div>`;
    });

    projectsContainer.innerHTML = projectHTML;

    // tilt effect
    VanillaTilt.init(document.querySelectorAll(".tilt"), {
        max: 15,
    });

    // scroll reveal
    const srtop = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 1000,
        reset: true
    });

    srtop.reveal('.work .box', { interval: 200 });
}


// ================= INIT =================
fetchData().then(data => showSkills(data));
fetchData("projects").then(data => showProjects(data));


// ================= GLOBAL ANIMATIONS =================
const srtop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
});

// HOME
srtop.reveal('.home .content h2', { delay: 200 });
srtop.reveal('.home .content p', { delay: 200 });
srtop.reveal('.home .content .btn', { delay: 200 });
srtop.reveal('.home .image', { delay: 400 });

// ABOUT
srtop.reveal('.about .content h3', { delay: 200 });
srtop.reveal('.about .content p', { delay: 200 });

// SKILLS
srtop.reveal('.skills .container', { interval: 200 });

// EDUCATION
srtop.reveal('.education .box', { interval: 200 });

// EXPERIENCE
srtop.reveal('.experience .timeline', { delay: 400 });
srtop.reveal('.experience .timeline .container', { interval: 300 });

// CONTACT
srtop.reveal('.contact .container', { delay: 400 });