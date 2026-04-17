// ================= NAVBAR TOGGLE =================
$(document).ready(function () {

    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if (window.scrollY > 60) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }
    });
});


// ================= TAB VISIBILITY TITLE =================
document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === "visible") {
        document.title = "Projects | Gourav Kumar";
        $("#favicon").attr("href", "/assets/images/favicon.png");
    } else {
        document.title = "Gourav Kumar Portfolio";
        $("#favicon").attr("href", "/assets/images/favhand.png");
    }
});


// ================= FETCH PROJECTS =================
function getProjects() {
    return fetch("projects.json")
        .then(response => response.json())
        .then(data => {
            return data;
        });
}


// ================= SHOW PROJECTS =================
function showProjects(projects) {
    let projectsContainer = document.querySelector(".work .box-container");
    let projectsHTML = "";

    projects.forEach(project => {
        projectsHTML += `
        <div class="grid-item ${project.category}">
            <div class="box tilt" style="width: 380px; margin: 1rem">
                <img draggable="false" src="/assets/images/projects/${project.image}.png" alt="project" />
                
                <div class="content">
                    <div class="tag">
                        <h3>${project.name}</h3>
                    </div>

                    <div class="desc">
                        <p>${project.desc}</p>
                        <small>Tech: ${project.tech || "HTML, CSS, JavaScript"}</small>

                        <div class="btns">
                            <a href="${project.links.view}" class="btn" target="_blank">
                                <i class="fas fa-eye"></i> View
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
    });

    projectsContainer.innerHTML = projectsHTML;


    // ================= ISOTOPE FILTER =================
    var $grid = $('.box-container').isotope({
        itemSelector: '.grid-item',
        layoutMode: 'fitRows'
    });

    // filter buttons
    $('.button-group').on('click', 'button', function () {
        $('.button-group').find('.is-checked').removeClass('is-checked');
        $(this).addClass('is-checked');

        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });
}


// ================= INIT =================
getProjects().then(data => {
    showProjects(data);
});