window.addEventListener('load', function () {
    const loading = document.getElementById('loading');
    const content = document.getElementById('content');

    // تنظیم حداقل زمان نمایش لودینگ
    setTimeout(() => {
        loading.style.opacity = '0';
        setTimeout(() => {
            loading.style.display = 'none';
            content.style.display = 'block'; 
        }, 500);
    }, 6000); 
});


// Menu links
let getAbout = document.getElementById("getAbout");
let getResume = document.getElementById("getResume");
let getProject = document.getElementById("getProject");
let getContact = document.getElementById("getContact");

// Sections
let about = document.getElementById("about");
let resume = document.getElementById("resume");
let project = document.getElementById("project");
let contact = document.getElementById("contact");

function removeClass() {
    // Remove 'selected' class from all links
    getAbout.classList.remove('selected');
    getResume.classList.remove('selected');
    getProject.classList.remove('selected');
    getContact.classList.remove('selected');
    
    // Remove 'view' class from all sections
    about.classList.remove('view');
    resume.classList.remove('view');
    project.classList.remove('view');
    contact.classList.remove('view');
}

// About click handler
getAbout.addEventListener('click', function (e) {
    if (window.innerWidth > 1040) {
        e.preventDefault();
        removeClass();
        about.classList.add('view');
        getAbout.classList.add('selected');
    }
});

// Resume click handler
getResume.addEventListener('click', function (e) {
    if (window.innerWidth > 1040) {
        e.preventDefault();
        removeClass();
        resume.classList.add('view');
        getResume.classList.add('selected');
    }
});

// Projects click handler
getProject.addEventListener('click', function (e) {
    if (window.innerWidth > 1040) {
        e.preventDefault();
        removeClass();
        project.classList.add('view');
        getProject.classList.add('selected');
    }
});

// Contact click handler
getContact.addEventListener('click', function (e) {
    if (window.innerWidth > 1040) {
        e.preventDefault();
        removeClass();
        contact.classList.add('view');
        getContact.classList.add('selected');
    }
});

// Mobile navigation (for width < 1040px)
function setupMobileNavigation() {
    if (window.innerWidth <= 1040) {
        // Remove preventDefault for mobile
        getAbout.onclick = null;
        getResume.onclick = null;
        getProject.onclick = null;
        getContact.onclick = null;
        
        // Smooth scroll for mobile
        document.querySelectorAll('nav a').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    window.scrollTo({
                        top: targetSection.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
}

// Run on load and resize
window.addEventListener('load', setupMobileNavigation);
window.addEventListener('resize', setupMobileNavigation);


