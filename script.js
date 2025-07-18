document.addEventListener('DOMContentLoaded', () => {
    // =====================================================================
    // DEFINICIÓN DE TUS PROYECTOS
    // AJUSTA LAS RUTAS DE LAS IMÁGENES Y LOS TÍTULOS PARA CADA PROYECTO.
    // Asegúrate de que los IDs (project1, project2, etc.) sean únicos
    // y corresponden a tus proyectos.
    // =====================================================================
    const projects = {
        'project1': {
            title: 'Branding para Café "El Grano"',
            thumbnail: 'images/thumbnails/project1_thumb.jpg',
            images: [
                'images/projects/project1/img1.jpg',
                'images/projects/project1/img2.jpg',
                'images/projects/project1/img3.jpg'
            ]
        },
        'project2': {
            title: 'Ilustración Digital "Mundos Flotantes"',
            thumbnail: 'images/thumbnails/project2_thumb.jpg',
            images: [
                'images/projects/project2/img1.jpg',
                'images/projects/project2/img2.jpg'
            ]
        },
        'project3': {
            title: 'Diseño Web para Startup Tech',
            thumbnail: 'images/thumbnails/project3_thumb.jpg',
            images: [
                'images/projects/project3/img1.jpg',
                'images/projects/project3/img2.jpg',
                'images/projects/project3/img3.jpg',
                'images/projects/project3/img4.jpg'
            ]
        },
        'project4': {
            title: 'Maquetación Editorial "Revista Viajera"',
            thumbnail: 'images/thumbnails/project4_thumb.jpg',
            images: [
                'images/projects/project4/img1.jpg',
                'images/projects/project4/img2.jpg'
            ]
        },
        'project5': {
            title: 'Packaging para Productos Artesanales',
            thumbnail: 'images/thumbnails/project5_thumb.jpg',
            images: [
                'images/projects/project5/img1.jpg',
                'images/projects/project5/img2.jpg'
            ]
        },
        'project6': {
            title: 'Motion Graphics "Animación Abstracta"',
            thumbnail: 'images/thumbnails/project6_thumb.jpg',
            images: [
                'images/projects/project6/img1.jpg',
                'images/projects/project6/img2.jpg',
                'images/projects/project6/img3.jpg'
            ]
        },
        'project7': {
            title: 'Diseño de Interfaz UX/UI Financiero',
            thumbnail: 'images/thumbnails/project7_thumb.jpg',
            images: [
                'images/projects/project7/img1.jpg',
                'images/projects/project7/img2.jpg'
            ]
        },
        'project8': {
            title: 'Fotografía de Producto y Edición',
            thumbnail: 'images/thumbnails/project8_thumb.jpg',
            images: [
                'images/projects/project8/img1.jpg',
                'images/projects/project8/img2.jpg',
                'images/projects/project8/img3.jpg'
            ]
        },
        'project9': {
            title: 'Ilustración Vectorial para Infografía',
            thumbnail: 'images/thumbnails/project9_thumb.jpg',
            images: [
                'images/projects/project9/img1.jpg'
            ]
        },
        'project10': {
            title: 'Diseño de Carteles para Eventos',
            thumbnail: 'images/thumbnails/project10_thumb.jpg',
            images: [
                'images/projects/project10/img1.jpg',
                'images/projects/project10/img2.jpg'
            ]
        },
        'project11': {
            title: 'Identidad Visual para Restaurante',
            thumbnail: 'images/thumbnails/project11_thumb.jpg',
            images: [
                'images/projects/project11/img1.jpg',
                'images/projects/project11/img2.jpg',
                'images/projects/project11/img3.jpg'
            ]
        },
        'project12': {
            title: 'Diseño de Personajes 3D',
            thumbnail: 'images/thumbnails/project12_thumb.jpg',
            images: [
                'images/projects/project12/img1.jpg',
                'images/projects/project12/img2.jpg'
            ]
        },
        'project13': {
            title: 'Desarrollo de Iconografía para App',
            thumbnail: 'images/thumbnails/project13_thumb.jpg',
            images: [
                'images/projects/project13/img1.jpg'
            ]
        },
        'project14': {
            title: 'Diseño de Folletos Publicitarios',
            thumbnail: 'images/thumbnails/project14_thumb.jpg',
            images: [
                'images/projects/project14/img1.jpg',
                'images/projects/project14/img2.jpg'
            ]
        },
        'project15': {
            title: 'Creación de Storyboards para Publicidad',
            thumbnail: 'images/thumbnails/project15_thumb.jpg',
            images: [
                'images/projects/project15/img1.jpg',
                'images/projects/project15/img2.jpg',
                'images/projects/project15/img3.jpg'
            ]
        },
        'project16': {
            title: 'Retoque Digital de Fotos Artísticas',
            thumbnail: 'images/thumbnails/project16_thumb.jpg',
            images: [
                'images/projects/project16/img1.jpg',
                'images/projects/project16/img2.jpg'
            ]
        },
        'project17': {
            title: 'Diseño de Plantillas para Redes Sociales',
            thumbnail: 'images/thumbnails/project17_thumb.jpg',
            images: [
                'images/projects/project17/img1.jpg',
                'images/projects/project17/img2.jpg',
                'images/projects/project17/img3.jpg'
            ]
        },
        'project18': {
            title: 'Animación 2D para Videos Corporativos',
            thumbnail: 'images/thumbnails/project18_thumb.jpg',
            images: [
                'images/projects/project18/img1.jpg',
                'images/projects/project18/img2.jpg'
            ]
        },
        'project19': {
            title: 'Diseño de Mascota para Marca',
            thumbnail: 'images/thumbnails/project19_thumb.jpg',
            images: [
                'images/projects/project19/img1.jpg'
            ]
        },
        'project20': {
            title: 'Diseño de Infografías Interactivas',
            thumbnail: 'images/thumbnails/project20_thumb.jpg',
            images: [
                'images/projects/project20/img1.jpg',
                'images/projects/project20/img2.jpg'
            ]
        },
        'project21': {
            title: 'Identidad Gráfica para Festival Musical',
            thumbnail: 'images/thumbnails/project21_thumb.jpg',
            images: [
                'images/projects/project21/img1.jpg',
                'images/projects/project21/img2.jpg',
                'images/projects/project21/img3.jpg'
            ]
        },
        'project22': {
            title: 'Ilustración para Libros Infantiles',
            thumbnail: 'images/thumbnails/project22_thumb.jpg',
            images: [
                'images/projects/project22/img1.jpg',
                'images/projects/project22/img2.jpg'
            ]
        },
        'project23': {
            title: 'Diseño de Stands y Exposiciones',
            thumbnail: 'images/thumbnails/project23_thumb.jpg',
            images: [
                'images/projects/project23/img1.jpg'
            ]
        },
        'project24': {
            title: 'Creación de Mockups UI/UX',
            thumbnail: 'images/thumbnails/project24_thumb.jpg',
            images: [
                'images/projects/project24/img1.jpg',
                'images/projects/project24/img2.jpg'
            ]
        },
        'project25': {
            title: 'Diseño de Tipografía Personalizada',
            thumbnail: 'images/thumbnails/project25_thumb.jpg',
            images: [
                'images/projects/project25/img1.jpg',
                'images/projects/project25/img2.jpg',
                'images/projects/project25/img3.jpg'
            ]
        }
    };

    // =====================================================================
    // Elementos del DOM
    const portfolioGrid = document.getElementById('portfolio-grid');
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const closeButton = document.querySelector('.lightbox-close');
    const prevButton = document.querySelector('.lightbox-nav.prev');
    const nextButton = document.querySelector('.lightbox-nav.next');

    let currentProjectImages = [];
    let currentImageIndex = 0;

    // =====================================================================
    // Función para GENERAR DINÁMICAMENTE los cuadros de la cuadrícula
    function generateGridItems() {
        // Itera sobre el objeto projects para crear cada card
        for (const projectId in projects) {
            const project = projects[projectId];

            const gridItem = document.createElement('div');
            gridItem.classList.add('grid-item', 'project-card');
            gridItem.dataset.projectId = projectId; // Asigna el ID del proyecto

            const img = document.createElement('img');
            img.src = project.thumbnail; // Usa la miniatura definida en el objeto projects
            img.alt = `Miniatura ${project.title}`;
            gridItem.appendChild(img);

            const projectTitle = document.createElement('div');
            projectTitle.classList.add('project-title');
            projectTitle.textContent = project.title; // Usa el título del proyecto
            gridItem.appendChild(projectTitle);

            portfolioGrid.appendChild(gridItem); // Añade el cuadro a la cuadrícula
        }

        // Después de generar todos los elementos, asigna los event listeners
        assignProjectCardListeners();
    }

    // =====================================================================
    // Función para asignar Event Listeners a los project-card
    function assignProjectCardListeners() {
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach(card => {
            card.addEventListener('click', () => {
                const projectId = card.dataset.projectId;
                if (projectId) {
                    openLightbox(projectId);
                }
            });
        });
    }

    // =====================================================================
    // Función para abrir el lightbox
    function openLightbox(projectId) {
        const project = projects[projectId];
        if (!project || project.images.length === 0) { // Verifica si el proyecto o sus imágenes existen
            console.error('Proyecto no encontrado o sin imágenes:', projectId);
            return;
        }

        currentProjectImages = project.images;
        currentImageIndex = 0; // Siempre empezar por la primera imagen

        updateLightboxContent(project.title); // Pasa el título para la leyenda
        lightbox.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Evita scroll en el body
    }

    // =====================================================================
    // Función para actualizar la imagen y la leyenda del lightbox
    function updateLightboxContent(projectTitle) {
        if (currentProjectImages.length > 0) {
            lightboxImage.src = currentProjectImages[currentImageIndex];
            lightboxCaption.textContent = projectTitle || ''; // Usa el título del proyecto o vacío
        } else {
            lightboxImage.src = '';
            lightboxCaption.textContent = '';
        }
    }

    // =====================================================================
    // Event Listeners del Lightbox
    closeButton.addEventListener('click', () => {
        lightbox.style.display = 'none';
        document.body.style.overflow = '';
    });

    prevButton.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex > 0) ? currentImageIndex - 1 : currentProjectImages.length - 1;
        // Obtener el título del proyecto actual para la leyenda (puede ser mejorado si el proyecto ID se mantuviera)
        const currentProjectId = Object.keys(projects).find(key => projects[key].images.includes(currentProjectImages[currentImageIndex]));
        updateLightboxContent(projects[currentProjectId] ? projects[currentProjectId].title : '');
    });

    nextButton.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex < currentProjectImages.length - 1) ? currentImageIndex + 1 : 0;
        // Obtener el título del proyecto actual para la leyenda
        const currentProjectId = Object.keys(projects).find(key => projects[key].images.includes(currentProjectImages[currentImageIndex]));
        updateLightboxContent(projects[currentProjectId] ? projects[currentProjectId].title : '');
    });

    // Cerrar lightbox con la tecla ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.style.display === 'flex') {
            lightbox.style.display = 'none';
            document.body.style.overflow = '';
        }
    });

    // =====================================================================
    // INICIAR: Generar los cuadros de la cuadrícula al cargar la página
    generateGridItems();
});
