document.addEventListener('DOMContentLoaded', () => {

    // =====================================================================
    // DETECCIÓN DE LA PÁGINA ACTUAL (MODIFICADO)
    // =====================================================================
    // Usamos .includes() para ser más flexibles con la ruta completa de GitHub Pages
    // Convertimos a minúsculas para evitar problemas de mayúsculas/minúsculas
    const currentPath = window.location.pathname.toLowerCase();

    // =====================================================================
    // DEFINICIÓN DE TUS PROYECTOS (Solo para Portafolio - index.html)
    // ... (El objeto projects se mantiene igual) ...
    const projects = {
        'project1': { title: 'Branding para Café "El Grano"', thumbnail: 'images/thumbnails/project1_thumb.jpg', images: ['images/projects/project1/img1.jpg', 'images/projects/project1/img2.jpg', 'images/projects/project1/img3.jpg'] },
        'project2': { title: 'Ilustración Digital "Mundos Flotantes"', thumbnail: 'images/thumbnails/project2_thumb.jpg', images: ['images/projects/project2/img1.jpg', 'images/projects/project2/img2.jpg'] },
        'project3': { title: 'Diseño Web para Startup Tech', thumbnail: 'images/thumbnails/project3_thumb.jpg', images: ['images/projects/project3/img1.jpg', 'images/projects/project3/img2.jpg', 'images/projects/project3/img3.jpg', 'images/projects/project3/img4.jpg'] },
        'project4': { title: 'Maquetación Editorial "Revista Viajera"', thumbnail: 'images/thumbnails/project4_thumb.jpg', images: ['images/projects/project4/img1.jpg', 'images/projects/project4/img2.jpg'] },
        'project5': { title: 'Packaging para Productos Artesanales', thumbnail: 'images/thumbnails/project5_thumb.jpg', images: ['images/projects/project5/img1.jpg', 'images/projects/project5/img2.jpg'] },
        'project6': { title: 'Motion Graphics "Animación Abstracta"', thumbnail: 'images/thumbnails/project6_thumb.jpg', images: ['images/projects/project6/img1.jpg', 'images/projects/project6/img2.jpg', 'images/projects/project6/img3.jpg'] },
        'project7': { title: 'Diseño de Interfaz UX/UI Financiero', thumbnail: 'images/thumbnails/project7_thumb.jpg', images: ['images/projects/project7/img1.jpg', 'images/projects/project7/img2.jpg'] },
        'project8': { title: 'Fotografía de Producto y Edición', thumbnail: 'images/thumbnails/project8_thumb.jpg', images: ['images/projects/project8/img1.jpg', 'images/projects/project8/img2.jpg', 'images/projects/project8/img3.jpg'] },
        'project9': { title: 'Ilustración Vectorial para Infografía', thumbnail: 'images/thumbnails/project9_thumb.jpg', images: ['images/projects/project9/img1.jpg'] },
        'project10': { title: 'Diseño de Carteles para Eventos', thumbnail: 'images/thumbnails/project10_thumb.jpg', images: ['images/projects/project10/img1.jpg', 'images/projects/project10/img2.jpg'] },
        'project11': { title: 'Identidad Visual para Restaurante', thumbnail: 'images/thumbnails/project11_thumb.jpg', images: ['images/projects/project11/img1.jpg', 'images/projects/project11/img2.jpg', 'images/projects/project11/img3.jpg'] },
        'project12': { title: 'Diseño de Personajes 3D', thumbnail: 'images/thumbnails/project12_thumb.jpg', images: ['images/projects/project12/img1.jpg', 'images/projects/project12/img2.jpg'] },
        'project13': { title: 'Desarrollo de Iconografía para App', thumbnail: 'images/thumbnails/project13_thumb.jpg', images: ['images/projects/project13/img1.jpg'] },
        'project14': { title: 'Diseño de Folletos Publicitarios', thumbnail: 'images/thumbnails/project14_thumb.jpg', images: ['images/projects/project14/img1.jpg', 'images/projects/project14/img2.jpg'] },
        'project15': { title: 'Creación de Storyboards para Publicidad', thumbnail: 'images/thumbnails/project15_thumb.jpg', images: ['images/projects/project15/img1.jpg', 'images/projects/project15/img2.jpg', 'images/projects/project15/img3.jpg'] },
        'project16': { title: 'Retoque Digital de Fotos Artísticas', thumbnail: 'images/thumbnails/project16_thumb.jpg', images: ['images/projects/project16/img1.jpg', 'images/projects/project16/img2.jpg'] },
        'project17': { title: 'Diseño de Plantillas para Redes Sociales', thumbnail: 'images/thumbnails/project17_thumb.jpg', images: ['images/projects/project17/img1.jpg', 'images/projects/project17/img2.jpg', 'images/projects/project17/img3.jpg'] },
        'project18': { title: 'Animación 2D para Videos Corporativos', thumbnail: 'images/thumbnails/project18_thumb.jpg', images: ['images/projects/project18/img1.jpg', 'images/projects/project18/img2.jpg'] },
        'project19': { title: 'Diseño de Mascota para Marca', thumbnail: 'images/thumbnails/project19_thumb.jpg', images: ['images/projects/project19/img1.jpg'] },
        'project20': { title: 'Diseño de Infografías Interactivas', thumbnail: 'images/thumbnails/project20_thumb.jpg', images: ['images/projects/project20/img1.jpg', 'images/projects/project20/img2.jpg'] },
        'project21': { title: 'Identidad Gráfica para Festival Musical', thumbnail: 'images/thumbnails/project21_thumb.jpg', images: ['images/projects/project21/img1.jpg', 'images/projects/project21/img2.jpg', 'images/projects/project21/img3.jpg'] },
        'project22': { title: 'Ilustración para Libros Infantiles', thumbnail: 'images/thumbnails/project22_thumb.jpg', images: ['images/projects/project22/img1.jpg', 'images/projects/project22/img2.jpg'] },
        'project23': { title: 'Diseño de Stands y Exposiciones', thumbnail: 'images/thumbnails/project23_thumb.jpg', images: ['images/projects/project23/img1.jpg'] },
        'project24': { title: 'Creación de Mockups UI/UX', thumbnail: 'images/thumbnails/project24_thumb.jpg', images: ['images/projects/project24/img1.jpg', 'images/projects/project24/img2.jpg'] },
        'project25': { title: 'Diseño de Tipografía Personalizada', thumbnail: 'images/thumbnails/project25_thumb.jpg', images: ['images/projects/project25/img1.jpg', 'images/projects/project25/img2.jpg', 'images/projects/project25/img3.jpg'] }
    };

    // =====================================================================
    // DEFINICIÓN DE LAS ENTRADAS DEL BLOG (Solo para Blog - blog.html)
    // =====================================================================
    const blogPosts = [
        {
            title: 'Las Tendencias de Diseño para 2025',
            thumbnail: 'images/blog/blog-post-1.jpg', // Asegúrate de que esta imagen exista
            date: '23 de Julio, 2025',
            category: 'Diseño Gráfico',
            summary: 'Exploramos las direcciones clave que el diseño gráfico tomará este año, desde el minimalismo hasta el maximalismo audaz.',
            slug: 'blog/tendencias-diseno-2025.html' // Ruta al archivo de la entrada completa del blog
        },
        {
            title: 'Mi Proceso Creativo: Del Concepto a la Realidad',
            thumbnail: 'images/blog/blog-post-2.jpg',
            date: '15 de Julio, 2025',
            category: 'Proceso Creativo',
            summary: 'Un vistazo detrás de cámaras a cómo abordo cada proyecto, desde la ideación inicial hasta la entrega final.',
            slug: 'blog/proceso-creativo.html'
        },
        {
            title: 'Herramientas Esenciales para Ilustradores Digitales',
            thumbnail: 'images/blog/blog-post-3.jpg',
            date: '01 de Julio, 2025',
            category: 'Ilustración',
            summary: 'Una guía de mis herramientas favoritas y cómo las utilizo para dar vida a mis ilustraciones.',
            slug: 'blog/herramientas-ilustradores.html'
        },
        {
            title: 'Cómo usar la psicología del color en tu branding',
            thumbnail: 'images/blog/blog-post-4.jpg',
            date: '28 de Junio, 2025',
            category: 'Branding',
            summary: 'Un análisis de cómo los colores impactan la percepción de la marca y cómo usarlos estratégicamente.',
            slug: 'blog/psicologia-color-branding.html'
        },
        {
            title: 'Case Study: Rediseño de Logo para Restaurante',
            thumbnail: 'images/blog/blog-post-5.jpg',
            date: '20 de Junio, 2025',
            category: 'Diseño de Marca',
            summary: 'Un desglose del proceso de rediseño de un logo, desde la investigación hasta la implementación.',
            slug: 'blog/redisenio-logo-restaurante.html'
        },
        {
            title: 'La Importancia del Storytelling en el Diseño',
            thumbnail: 'images/blog/blog-post-6.jpg',
            date: '10 de Junio, 2025',
            category: 'Estrategia',
            summary: 'Por qué contar historias es fundamental para conectar con tu audiencia a través de tus diseños.',
            slug: 'blog/storytelling-diseno.html'
        },
        {
            title: 'Diseño Responsivo: Más allá de los breakpoints',
            thumbnail: 'images/blog/blog-post-7.jpg',
            date: '05 de Junio, 2025',
            category: 'Diseño Web',
            summary: 'Exploramos técnicas avanzadas para crear sitios web que se adapten fluidamente a cualquier dispositivo.',
            slug: 'blog/diseno-responsivo-avanzado.html'
        },
        {
            title: 'El Futuro de la Realidad Aumentada en el Diseño',
            thumbnail: 'images/blog/blog-post-8.jpg',
            date: '28 de Mayo, 2025',
            category: 'Tecnología',
            summary: 'Cómo la RA está transformando la forma en que interactuamos con el diseño digital y físico.',
            slug: 'blog/ra-en-diseno.html'
        },
        {
            title: 'Guía Completa de Tipografía para Diseñadores',
            thumbnail: 'images/blog/blog-post-9.jpg',
            date: '20 de Mayo, 2025',
            category: 'Tipografía',
            summary: 'Desde los fundamentos hasta las combinaciones avanzadas, domina el arte de la tipografía.',
            slug: 'blog/guia-tipografia.html'
        },
        {
            title: 'Cómo construir un Portafolio que Impresione',
            thumbnail: 'images/blog/blog-post-10.jpg',
            date: '10 de Mayo, 2025',
            category: 'Carrera',
            summary: 'Consejos prácticos para crear un portafolio que destaque y atraiga a tus clientes ideales.',
            slug: 'blog/construir-portafolio.html'
        }
        // Puedes añadir más entradas de blog aquí
    ];

    const postsPerPage = 6; // Cuántas entradas mostrar por defecto
    const postsToLoad = 3;  // Cuántas entradas cargar adicionalmente con "Cargar más"
    let currentPostsDisplayed = 0;

    // =====================================================================
    // LÓGICA GENERAL DEL LIGHTBOX (Usada en Portafolio)
    // =====================================================================
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const closeButton = document.querySelector('.lightbox-close');
    const prevButton = document.querySelector('.lightbox-nav.prev');
    const nextButton = document.querySelector('.lightbox-nav.next');

    let currentProjectImages = [];
    let currentImageIndex = 0;

    function openLightbox(projectId) {
        const project = projects[projectId];
        if (!project || project.images.length === 0) {
            console.error('Proyecto no encontrado o sin imágenes:', projectId);
            return;
        }
        currentProjectImages = project.images;
        currentImageIndex = 0;
        updateLightboxContent(project.title);
        lightbox.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }

    function updateLightboxContent(projectTitle) {
        if (currentProjectImages.length > 0) {
            lightboxImage.src = currentProjectImages[currentImageIndex];
            lightboxCaption.textContent = projectTitle || '';
        } else {
            lightboxImage.src = '';
            lightboxCaption.textContent = '';
        }
    }

    closeButton.addEventListener('click', () => {
        lightbox.style.display = 'none';
        document.body.style.overflow = '';
    });

    prevButton.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex > 0) ? currentImageIndex - 1 : currentProjectImages.length - 1;
        const currentProjectId = Object.keys(projects).find(key => projects[key].images.includes(currentProjectImages[currentImageIndex]));
        updateLightboxContent(projects[currentProjectId] ? projects[currentProjectId].title : '');
    });

    nextButton.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex < currentProjectImages.length - 1) ? currentImageIndex + 1 : 0;
        const currentProjectId = Object.keys(projects).find(key => projects[key].images.includes(currentProjectImages[currentImageIndex]));
        updateLightboxContent(projects[currentProjectId] ? projects[currentProjectId].title : '');
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.style.display === 'flex') {
            lightbox.style.display = 'none';
            document.body.style.overflow = '';
        }
    });

    // =====================================================================
    // LÓGICA ESPECÍFICA DE LA PÁGINA
    // =====================================================================

    if (currentPath.includes('index.html') || currentPath.endsWith('/') || currentPath.endsWith('/' + window.location.host.toLowerCase().split('.').shift())) { // Para la página de Portafolio
        const portfolioGrid = document.getElementById('portfolio-grid');
        function generatePortfolioGridItems() {
            for (const projectId in projects) {
                const project = projects[projectId];
                const gridItem = document.createElement('div');
                gridItem.classList.add('grid-item', 'project-card');
                gridItem.dataset.projectId = projectId;
                const img = document.createElement('img');
                img.src = project.thumbnail;
                img.alt = `Miniatura ${project.title}`;
                gridItem.appendChild(img);
                const projectTitle = document.createElement('div');
                projectTitle.classList.add('project-title');
                projectTitle.textContent = project.title;
                gridItem.appendChild(projectTitle);
                portfolioGrid.appendChild(gridItem);
            }
            assignProjectCardListeners();
        }

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
        generatePortfolioGridItems(); // Llama a la función para generar el portafolio
    }

    else if (currentPath.includes('blog.html')) { // Para la página de Blog
        const blogPostsContainer = document.getElementById('blog-posts-container');
        const loadMoreButton = document.getElementById('load-more-button');

        function displayBlogPosts() {
            const initialCount = blogPostsContainer.children.length; // Contar los ya existentes
            const remainingPosts = blogPosts.slice(currentPostsDisplayed);
            const postsToAdd = remainingPosts.slice(0, postsToLoad);

            postsToAdd.forEach(post => {
                const blogCard = document.createElement('a');
                blogCard.href = post.slug; // Enlace a la entrada completa
                blogCard.classList.add('blog-card');

                const img = document.createElement('img');
                img.src = post.thumbnail;
                img.alt = `Imagen de la entrada de blog: ${post.title}`;
                blogCard.appendChild(img);

                const cardContent = document.createElement('div');
                cardContent.classList.add('card-content');

                const title = document.createElement('h3');
                title.textContent = post.title;
                cardContent.appendChild(title);

                const meta = document.createElement('p');
                meta.classList.add('post-meta');
                meta.textContent = `${post.date} | ${post.category}`;
                cardContent.appendChild(meta);

                const summary = document.createElement('p');
                summary.textContent = post.summary;
                cardContent.appendChild(summary);

                blogCard.appendChild(cardContent);
                blogPostsContainer.appendChild(blogCard);
            });

            currentPostsDisplayed += postsToAdd.length;

            // Ocultar botón si ya no hay más entradas para cargar
            if (currentPostsDisplayed >= blogPosts.length) {
                loadMoreButton.style.display = 'none';
            } else {
                loadMoreButton.style.display = 'block'; // Asegurarse de que esté visible si hay más
            }
        }

        // Mostrar las primeras 'postsPerPage' entradas al cargar la página
        function initializeBlog() {
            // Asegúrate de que blogPostsContainer esté vacío al inicio si el HTML ya tiene placeholders
            blogPostsContainer.innerHTML = '';
            currentPostsDisplayed = 0;
            const initialPosts = blogPosts.slice(0, postsPerPage);

            initialPosts.forEach(post => {
                const blogCard = document.createElement('a');
                blogCard.href = post.slug;
                blogCard.classList.add('blog-card');

                const img = document.createElement('img');
                img.src = post.thumbnail;
                img.alt = `Imagen de la entrada de blog: ${post.title}`;
                blogCard.appendChild(img);

                const cardContent = document.createElement('div');
                cardContent.classList.add('card-content');

                const title = document.createElement('h3');
                title.textContent = post.title;
                cardContent.appendChild(title);

                const meta = document.createElement('p');
                meta.classList.add('post-meta');
                meta.textContent = `${post.date} | ${post.category}`;
                cardContent.appendChild(meta);

                const summary = document.createElement('p');
                summary.textContent = post.summary;
                cardContent.appendChild(summary);

                blogCard.appendChild(cardContent);
                blogPostsContainer.appendChild(blogCard);
            });
            currentPostsDisplayed += initialPosts.length;

            if (currentPostsDisplayed >= blogPosts.length) {
                loadMoreButton.style.display = 'none';
            } else {
                loadMoreButton.style.display = 'block';
            }
        }

        loadMoreButton.addEventListener('click', displayBlogPosts);

        // Llama a la función para inicializar el blog al cargar la página
        initializeBlog();
    }
});
He revisado tu `script.js` completo, y te confirmo que **la lógica para la página del blog (`else if (currentPath.includes('blog.html'))`) está bien escrita y parece correcta.**

La forma en que se crean los `blogCard`s, se añaden las imágenes, los títulos y resúmenes, y cómo se insertan en el `blogPostsContainer` es lo que se espera. También la lógica del botón "Cargar más" (mostrar 6 iniciales, luego 3) es funcional.

Dado que el HTML de `blog.html` también se ve bien, y la lógica JS parece correcta, el problema de que no se vean las entradas del blog casi con seguridad se debe a:

1.  **Las imágenes de las miniaturas del blog no se están cargando.** Esto es lo más frecuente. Si el navegador no encuentra `images/blog/blog-post-1.jpg`, no mostrará esa tarjeta (o la mostrará incompleta), y si hay un error JavaScript durante la carga de esa imagen, podría afectar al resto.
2.  **La condición `currentPath.includes('blog.html')` no se está cumpliendo en tu entorno de GitHub Pages.** Aunque la hemos hecho más robusta, a veces las URLs pueden ser engañosas.

**Para poder darte una solución definitiva, necesito que me compartas:**

1.  **La URL exacta de tu página de blog en GitHub Pages.**
    * (Ejemplo: `https://tu_usuario.github.io/tu_repositorio/blog.html`)
2.  **La URL exacta de tu repositorio de GitHub.**
    * (Ejemplo: `https://github.com/tu_usuario/tu_repositorio`)

**Mientras tanto, por favor, haz esto y dime qué ves en el navegador:**

1.  **Abre tu página de blog en GitHub Pages.**
2.  Abre las **Herramientas de Desarrollador** de tu navegador (clic derecho -> "Inspeccionar").
3.  Ve a la pestaña **"Console" (Consola)**.
    * ¿Hay **errores en rojo**? Si es así, ¿qué dicen? (Busca especialmente errores 404 o "Failed to load resource").
4.  Ve a la pestaña **"Network" (Red)**.
    * Recarga la página (`Ctrl + F5` o `Cmd + Shift + R`).
    * En la lista de recursos cargados, busca tus imágenes del blog (ej. `blog-post-1.jpg`). ¿Se cargan con un estado `200 OK` o con un `404 Not Found`?

Con la URL de tu sitio y la información de la consola, podré identificar el punto exacto de la falla.
