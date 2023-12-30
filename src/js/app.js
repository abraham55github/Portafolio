document.addEventListener('DOMContentLoaded', function(){
    iniciarApp();
});


function iniciarApp(){
    scrollNav();
    crearGaleria();
    navegador();
    createProjectElement();
    
}

function navegador(){
    const nav = document.querySelector("#nav");
    const abrir = document.querySelector("#abrir");
    const cerrar = document.querySelector("#cerrar");

    abrir.addEventListener("click", () => {
        nav.classList.add("visible");
    })

    cerrar.addEventListener("click", () => {
        nav.classList.remove("visible");
    })
}


function scrollNav(){
    const enlaces = document.querySelectorAll('.nav-list a');
    enlaces.forEach( enlace => {
        enlace.addEventListener('click', function(e) {
            e.preventDefault();

            const seccionScroll = e.target.attributes.href.value;
            const seccion = document.querySelector(seccionScroll);
            seccion.scrollIntoView({ behavior: "smooth"});
        });
    });
}


function crearGaleria(selector, j, k){
    const galeria = document.querySelector(selector);
    
    for(let i = j; i <= k; i++){
        const imagen = document.createElement('picture');
        imagen.innerHTML = `
            <source srcset="build/img/GaleriaSkills/${i}.avif" type="image/avif">
            <source srcset="build/img/GaleriaSkills/${i}.webp" type="image/webp">
            <img loading="lazy" width="200" height="300" src="build/img/GaleriaSkills/${i}.jpg" alt="imagen galeria">
        `

        galeria.appendChild(imagen);
    }

}

crearGaleria('.lenguajes-imagenes', 1, 5);
crearGaleria('.frameworks-imagenes', 6, 9);
crearGaleria('.tecnologias-imagenes', 10, 19);


const projectData = [
    {
        name: "Rock & EDM festival",
        imageSrc: "build/img/Proyectos/pr1.jpg",
        websiteURL: "https://playful-marshmallow-975247.netlify.app/",
        githubURL: "https://github.com/abraham55github/PracticaFestivalMusica"
    },
    {
        name: "Blog de Cafe",
        imageSrc: "build/img/Proyectos/pr2.jpg",
        websiteURL: "https://admirable-flan-7767d0.netlify.app",
        githubURL: "https://github.com/abraham55github/PracticaBlogCafe"
    },
    {
        name: "Diseño y Desarrollo Web Freelancer",
        imageSrc: "build/img/Proyectos/pr3.jpg",
        websiteURL: "https://shiny-dragon-7f9884.netlify.app",
        githubURL: "https://github.com/abraham55github/PracticaFrelancer"
    },
    {
        name: "FrontEndStore",
        imageSrc: "build/img/Proyectos/pr4.jpg",
        websiteURL: "https://cerulean-swan-9261ae.netlify.app",
        githubURL: "https://github.com/abraham55github/PracticaFrontEndStore"
    }
]

function createProjectElement(project){
    const projectContainer = document.querySelector('.proyectos-enlaces');
    const projectDiv = document.createElement('div');
    projectDiv.setAttribute('data-aos', 'fade-down');
    projectDiv.classList.add('proyectos-links');

    const projectLink = document.createElement('a');
    projectLink.href = project.websiteURL;
    projectLink.target = "_blank";

    const projectImage = document.createElement('img');
    projectImage.src = project.imageSrc;
    projectImage.alt = "";

    const projectTitle = document.createElement('h4');
    projectTitle.classList.add('proyecto-titulo');
    projectTitle.textContent = project.name;

    const projectLinkItem = document.createElement('div');
    projectLinkItem.classList.add('proyecto-link-item');

    const githubLink = document.createElement('a');
    githubLink.href = project.githubURL;
    githubLink.classList.add('proyecto-item');
    githubLink.target = "_blank";

    const githubIcon = document.createElement('i');
    githubIcon.classList.add('bx', 'bxl-github');

    const websiteLink = document.createElement('a');
    websiteLink.href = project.websiteURL;
    websiteLink.classList.add('proyecto-item');
    websiteLink.target = "_blank";

    const websiteIcon = document.createElement('i');
    websiteIcon.classList.add('bx', 'bx-globe');

    // Construir la estructura del proyecto
    githubLink.appendChild(githubIcon);
    websiteLink.appendChild(websiteIcon);
    projectLinkItem.appendChild(githubLink);
    projectLinkItem.appendChild(websiteLink);
    projectLink.appendChild(projectImage);
    projectDiv.appendChild(projectLink);
    projectDiv.appendChild(projectTitle);
    projectDiv.appendChild(projectLinkItem);

    // Agregar el proyecto al contenedor principal
    projectContainer.appendChild(projectDiv);
}

projectData.forEach((project) => {
    createProjectElement(project)
})



