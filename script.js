// Carrusel de imágenes por producto
const products = [
  [
    "https://picsum.photos/id/1011/800/600",
    "https://picsum.photos/id/1012/800/600",
    "https://picsum.photos/id/1013/800/600"
  ],
  [
    "https://picsum.photos/id/1025/800/600",
    "https://picsum.photos/id/1026/800/600",
    "https://picsum.photos/id/1027/800/600"
  ],
  [
    "https://picsum.photos/id/1003/800/600",
    "https://picsum.photos/id/1004/800/600",
    "https://picsum.photos/id/1005/800/600"
  ]
];

let currentProduct = 0;
let currentSlide = 0;

function openCarousel(productIndex) {
  currentProduct = productIndex;
  currentSlide = 0;
  document.getElementById("modal").style.display = "flex";
  updateCarousel();
}

function closeCarousel() {
  document.getElementById("modal").style.display = "none";
}

function updateCarousel() {
  const img = document.getElementById("carousel-img");
  img.src = products[currentProduct][currentSlide];
}

function prevSlide(event) {
  event.stopPropagation();
  currentSlide = (currentSlide - 1 + products[currentProduct].length) % products[currentProduct].length;
  updateCarousel();
}

function nextSlide(event) {
  event.stopPropagation();
  currentSlide = (currentSlide + 1) % products[currentProduct].length;
  updateCarousel();
}

function toggleMenu() {
  document.getElementById("floating-menu").classList.toggle("show");
}
