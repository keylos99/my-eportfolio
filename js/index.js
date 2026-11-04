const toggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav-link');
const btnBackToTop = document.querySelector('#btnToTop');
const elPortfolio = document.querySelector('#portfolio');
const elProject = document.querySelector('#project');
const forms = document.querySelectorAll('.needs-validation');

document.body.onload = () => btnBackToTop.classList.remove('visible');
window.onscroll = function() { scrollFunction() };
window.onload = function() { if(elPortfolio) initPortfolio(); if(elProject) getProject(); };

toggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    });
});

btnBackToTop.addEventListener('click', () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      btnBackToTop.classList.add('visible');
    } else {
        btnBackToTop.classList.remove('visible');
    }
}

forms.forEach(form => {
    if (form.id === 'frmContact') {
        form.addEventListener('submit', event => {
            if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
            } else {
                sendMessage(form);
            }
            form.classList.add('was-validated');
        });
    }
});

function sendMessage(form) {
    let name = form.elements.namedItem('contact-name').value;
    let email = form.elements.namedItem('contact-email').value;
    let subject = form.elements.namedItem('contact-subject').value;
    let message = form.elements.namedItem('contact-message').value;
    let source = window.location.href;
    let messageBody = `user name: ${name}%0D%0Auser email: ${email}%0D%0Acontact source: ${source}%0D%0A%0D%0A${message}`;
    window.location.href = `mailto:hrrm.1986lt@gmail.com?subject=${subject}&body=${messageBody}`;
}

const arrProject = [
                        {
                            id: "p_01",
                            title: "Project 1",
                            subtitle: "Project 1 subtitle",
                            desc: "Project 1 description...",
                            techList: ["Technology 1", "Technology 2", "Technology 3"],
                            resLinks: [{resource: "website", link: "#"}, {resource: "github", link: "#"}],
                            imgCover: "img/portfolio/project-cover.jpg",
                            metaDate: "Aug 20, 2018",
                            metaCategory: "Web App",
                            metaLikes: 20,
                            prevProject: null,
                            nextProject: {id: "p_02", title: "Project 2 Title", type: "Mobile App", thumbnail: "img/portfolio/project-thumbnail.png"},
                            imgList: ["img/portfolio/project-image-01.png", "img/portfolio/project-image-02.png", "img/portfolio/project-image-03.png"]
                        },
                        {
                            id: "p_02",
                            title: "Project 2",
                            subtitle: "Project 2 subtitle",
                            desc: "Project 2 brief description",
                            techList: ["Technology 1", "Technology 2", "Technology 3", "Technology 4"],
                            resLinks: [{resource: "website", link: "#"}, {resource: "github", link: "#"}],
                            imgCover: "img/portfolio/project-cover.jpg",
                            metaDate: "Sep 04, 2019",
                            metaCategory: "Mobile App",
                            metaLikes: 13,
                            prevProject: {id: "p_01", title: "Project 1 Title", type: "Web App", thumbnail: "img/portfolio/project-thumbnail.png"},
                            nextProject: {id: "p_03", title: "Project 3 Title", type: "Web App", thumbnail: "img/portfolio/project-thumbnail.png"},
                            imgList: ["img/portfolio/project-image-01.png", "img/portfolio/project-image-02.png", "img/portfolio/project-image-03.png"]
                        },
                        {
                            id: "p_03",
                            title: "Project 3",
                            subtitle: "Project 3 subtitle",
                            desc: "Project 3 description.",
                            techList: ["Technology 1", "Technology 2", "Technology 3", "Technology 4", "Technology 5"],
                            resLinks: [{resource: "website", link: "#"}, {resource: "github", link: "#"}],
                            imgCover: "img/portfolio/project-cover.jpg",
                            metaDate: "Feb 15, 2018",
                            metaCategory: "Web App",
                            metaLikes: 7,
                            prevProject: {id: "p_02", title: "Project 2 Title", type: "Mobile App", thumbnail: "img/portfolio/project-thumbnail.png"},
                            nextProject: {id: "p_04", title: "Project 4 Title", type: "Web App", thumbnail: "img/portfolio/project-thumbnail.png"},
                            imgList: ["img/portfolio/project-image-01.png", "img/portfolio/project-image-02.png", "img/portfolio/project-image-03.png"]
                        },
                        {
                            id: "p_04",
                            title: "Project 4",
                            subtitle: "Project 4 subtitle",
                            desc: "Project 4 description.",
                            techList: ["Technology 1", "Technology 2", "Technology 3", "Technology 4", "Technology 5"],
                            resLinks: [{resource: "website", link: "#"}, {resource: "github", link: "#"}],
                            imgCover: "img/portfolio/project-cover.jpg",
                            metaDate: "Mar 10, 2016",
                            metaCategory: "Web App",
                            metaLikes: 7,
                            prevProject: {id: "p_03", title: "Project 3 Title", type: "Mobile App", thumbnail: "img/portfolio/project-thumbnail.png"},
                            nextProject: {id: "p_05", title: "Project 5 Title", type: "Web App", thumbnail: "img/portfolio/project-thumbnail.png"},
                            imgList: ["img/portfolio/project-image-01.png", "img/portfolio/project-image-02.png", "img/portfolio/project-image-03.png"]
                        },
                        {
                            id: "p_05",
                            title: "Project 5",
                            subtitle: "Project 5 subtitle",
                            desc: "Project 5 description.",
                            techList: ["Technology 1", "Technology 2", "Technology 3", "Technology 4", "Technology 5"],
                            resLinks: [{resource: "website", link: "#"}, {resource: "github", link: "#"}],
                            imgCover: "img/portfolio/project-cover.jpg",
                            metaDate: "Jan 20, 2019",
                            metaCategory: "Web App",
                            metaLikes: 7,
                            prevProject: {id: "p_04", title: "Project 4 Title", type: "Mobile App", thumbnail: "img/portfolio/project-thumbnail.png"},
                            nextProject: {id: "p_06", title: "Project 6 Title", type: "Web App", thumbnail: "img/portfolio/project-thumbnail.png"},
                            imgList: ["img/portfolio/project-image-01.png", "img/portfolio/project-image-02.png", "img/portfolio/project-image-03.png"]
                        },
                        {
                            id: "p_06",
                            title: "Project 6",
                            subtitle: "Project 6 subtitle",
                            desc: "Project 6 description.",
                            techList: ["Technology 1", "Technology 2", "Technology 3", "Technology 4", "Technology 5"],
                            resLinks: [{resource: "website", link: "#"}, {resource: "github", link: "#"}],
                            imgCover: "img/portfolio/project-cover.jpg",
                            metaDate: "Feb 13, 2018",
                            metaCategory: "Web App",
                            metaLikes: 12,
                            prevProject: {id: "p_5", title: "Project 5 Title", type: "Mobile App", thumbnail: "img/portfolio/project-thumbnail.png"},
                            nextProject: null,
                            imgList: ["img/portfolio/project-image-01.png", "img/portfolio/project-image-02.png", "img/portfolio/project-image-03.png"]
                        }
                    ];

function initPortfolio() {
    const elBtnLoadMore = document.querySelector('#btnLoadMore');
    const elPortfInner = elPortfolio.getElementsByClassName("portfolio")[0];
    elBtnLoadMore.style.display = "none";

    // replace portfolio demo data with real projects information
    if (arrProject.length) {
        elPortfInner.innerHTML = "";
        arrProject.forEach((project, index) => {
            if (index < 6)
                elPortfInner.innerHTML += `<div class="portfolio-item">
                                            <a class="portfolio-link" data-project-id="${project.id}">
                                                <img src="${project.imgCover}" alt="Image cover" class="portfolio-img">
                                                <div class="portfolio-text">
                                                    <div class="portfolio-item-title">${project.title}</div>
                                                    <span class="portfolio-item-subtitle">${project.subtitle}</span>
                                                </div>
                                            </a>
                                        </div>`;
        });
        if (arrProject.length > 6) elBtnLoadMore.style.display = "inline-block";
    }

    // set event onClick for portfolio items
    let pLinks = document.querySelectorAll('.portfolio-link');
    pLinks.forEach(link => {
        let idProject = link.dataset.projectId;
        link.addEventListener('click', () => {
            this.location.assign("./portfolio-item.html?id="+idProject);
        });
    });
}

function loadMorePortfItems() {
    const elBtnLoadMore = document.querySelector('#btnLoadMore');
    const elPortfInner = elPortfolio.getElementsByClassName("portfolio")[0];
    let counter = 0, index = 0, numItems = elPortfInner.children.length;

    if (numItems < arrProject.length) {
        index = numItems;
        while ((index < arrProject.length) && (counter < 6)) {
            projectItem = arrProject[index];
            elPortfInner.innerHTML += `<div class="portfolio-item">
                                        <a class="portfolio-link" data-project-id="${projectItem.id}">
                                            <img src="${projectItem.imgCover}" alt="Image cover" class="portfolio-img">
                                            <div class="portfolio-text">
                                                <div class="portfolio-item-title">${projectItem.title}</div>
                                                <span class="portfolio-item-subtitle">${projectItem.subtitle}</span>
                                            </div>
                                        </a>
                                    </div>`;
            index++;
            counter++;
        }
    }
    
    if (elPortfInner.children.length < arrProject.length) elBtnLoadMore.style.display = "inline-block";
    else elBtnLoadMore.style.display = "none";
}

function getProject() {
    // declare global vars
    let title = "Showing demo data!";
    let text = "In order to display project information, the project id must be passed as part of the URL string, therefore this page was loaded using demo data. Click on the desired project in the portfolio section on the home page to load project data correctly.";
    let bottomText = "<strong>Correct URL format:</strong> ../portfolio-item.html?id=project_id";

    // get project_id via get param
    let url = new URL(window.location.href);
    let idProject = url.searchParams.get("id");
    if (idProject === null || idProject === undefined) {
        genAlert(title, text, bottomText);
        return;
    }

    // load project data
    let objProject = arrProject.find(project => project.id === idProject);
    if (objProject === undefined) {
        genAlert(title, text, bottomText);
        return;
    }

    // populate view with project data
    populateView(objProject);
}

function populateView(objProject) {
    const elProjectMeta = document.querySelector('#projectMeta');
    const elProjectGallery = document.querySelector('#projectGallery');
    const elProjectNav = document.querySelector('#projectNav');
    const elProjectInfo = document.querySelector('#projectInfo');

    // step 0 > set project's title
    (elProject.firstElementChild.lastElementChild.getElementsByTagName("strong")[0]).innerHTML = objProject.title;
    // step 1 > fill up project's metadata
    elProjectMeta.firstElementChild.firstElementChild.lastElementChild.innerHTML = objProject.metaDate;
    elProjectMeta.firstElementChild.lastElementChild.lastElementChild.innerHTML = objProject.metaCategory;
    elProjectMeta.children[1].firstElementChild.lastElementChild.innerHTML = objProject.metaLikes;
    elProjectMeta.lastElementChild.children[1].href = "https://www.facebook.com/sharer/sharer.php?u=" + window.location.href;
    elProjectMeta.lastElementChild.children[2].href = "https://twitter.com/home?status=" + window.location.href;
    elProjectMeta.lastElementChild.children[3].href = "https://pinterest.com/pin/create/button/?url=" + window.location.href + "&media=&description=";
    // step 2 > fill up project's gallery
    let elCarouselInner = elProjectGallery.children[1];
    // remove all demo slides
    while (elCarouselInner.hasChildNodes()) {  
        elCarouselInner.removeChild(elCarouselInner.firstChild);
    }
    var htmlSlides;
    // add project's images to gallery
    objProject.imgList.forEach((imgUrl, index) => {
        let status = (!index)? "active" : "";
        htmlSlides += `<div class="carousel-item ${status}">
                        <img src="${imgUrl}" class="d-block w-100" width="480" height="auto" alt="...">
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Slide ${++index}</h5>
                            <p></p>
                        </div>
                    </div>`;
    });
    elCarouselInner.innerHTML = htmlSlides;
    // step 3 > fill up projects navigation
    if (objProject.prevProject) {
        elProjectNav.firstElementChild.firstElementChild.addEventListener('click', () => {
            this.location.assign("./portfolio-item.html?id="+objProject.prevProject.id);
        });
        elProjectNav.firstElementChild.lastElementChild.firstElementChild.firstElementChild.src = objProject.prevProject.thumbnail;
        elProjectNav.firstElementChild.lastElementChild.lastElementChild.firstElementChild.innerHTML = objProject.prevProject.title;
        elProjectNav.firstElementChild.lastElementChild.lastElementChild.lastElementChild.innerHTML = '<i class="fas fa-tag"></i>'+objProject.prevProject.type;
    }else {
        elProjectNav.firstElementChild.firstElementChild.style.display = "none";
    }
    if (objProject.nextProject) {
        elProjectNav.lastElementChild.firstElementChild.addEventListener('click', () => {
            this.location.assign("./portfolio-item.html?id="+objProject.nextProject.id);
        });
        elProjectNav.lastElementChild.lastElementChild.firstElementChild.firstElementChild.innerHTML = objProject.nextProject.title;
        elProjectNav.lastElementChild.lastElementChild.firstElementChild.lastElementChild.innerHTML = '<i class="fas fa-tag"></i>'+objProject.nextProject.type;
        elProjectNav.lastElementChild.lastElementChild.lastElementChild.firstElementChild.src = objProject.nextProject.thumbnail;
    }else {
        elProjectNav.lastElementChild.firstElementChild.style.display = "none";
    }
    // step 4 > fill up project's details
    elProjectInfo.firstElementChild.firstElementChild.lastElementChild.innerHTML = objProject.desc;
    if (objProject.techList && objProject.techList.length) {
        elProjectInfo.firstElementChild.children[1].lastElementChild.remove();
        let elP = document.createElement('p');
        elP.classList.add("text-muted");
        var htmlTechList = "";
        objProject.techList.forEach(tech => {
            htmlTechList += `<kbd class="mr-2">${tech}</kbd>`;
        });
        elP.innerHTML = htmlTechList;
        elProjectInfo.firstElementChild.children[1].appendChild(elP);
    }
    var htmlResources = '<h2 class="section-info--title">Resources</h2>';
    objProject.resLinks.forEach(objLink => {
        if (objLink.resource === "github") {
            htmlResources += `<a class="btn-link github-btn btn-link-dark mr-3 mb-3" href="${objLink.link}">
                                <span class="mb-subtitle">Access code on</span>
                                <span class="mb-title">GitHub</span>
                            </a>`;
        }
        if (objLink.resource === "website") {
            htmlResources += `<a class="btn-link website-btn btn-link-dark mr-3 mb-3" href="${objLink.link}">
                                <span class="mb-subtitle">View project on the</span>
                                <span class="mb-title">WebSite</span>
                            </a>`;
        }
    });
    elProjectInfo.firstElementChild.lastElementChild.innerHTML = htmlResources;
}

function genAlert(title = "Warning!", text = "Warning message.", bottomText = null, type = "warning") {
    const elMessageDiv = document.querySelector('#messages');
    if (elMessageDiv) {
        elMessageDiv.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                                    <h4 class="alert-heading">${title}</h4>
                                    <p>${text}</p>
                                    <hr>
                                    <p class="mb-0">${bottomText}</p>
                                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>`;
    }
}

function likeIt(element) {
    let likes = parseInt(element.lastElementChild.textContent, 10) + 1;
    // update the project metadata and save it to the database of your choice (Ex: local JSON file)
    //ToDo ...
    // update view element
    element.lastElementChild.innerHTML = likes;
}