// Carrusel de imágenes por producto
const products = [
  ["https://picsum.photos/id/1010/800/600", "https://picsum.photos/id/1011/800/600", "https://picsum.photos/id/1012/800/600"],
  ["https://picsum.photos/id/1013/800/600", "https://picsum.photos/id/1014/800/600", "https://picsum.photos/id/1015/800/600"],
  ["https://picsum.photos/id/1016/800/600", "https://picsum.photos/id/1017/800/600", "https://picsum.photos/id/1018/800/600"],
  ["https://picsum.photos/id/1019/800/600", "https://picsum.photos/id/1020/800/600", "https://picsum.photos/id/1021/800/600"],
  ["https://picsum.photos/id/1022/800/600", "https://picsum.photos/id/1023/800/600", "https://picsum.photos/id/1024/800/600"],
  ["https://picsum.photos/id/1025/800/600", "https://picsum.photos/id/1026/800/600", "https://picsum.photos/id/1027/800/600"],
  ["https://picsum.photos/id/1028/800/600", "https://picsum.photos/id/1029/800/600", "https://picsum.photos/id/1030/800/600"],
  ["https://picsum.photos/id/1031/800/600", "https://picsum.photos/id/1032/800/600", "https://picsum.photos/id/1033/800/600"],
  ["https://picsum.photos/id/1034/800/600", "https://picsum.photos/id/1035/800/600", "https://picsum.photos/id/1036/800/600"],
  ["https://picsum.photos/id/1037/800/600", "https://picsum.photos/id/1038/800/600", "https://picsum.photos/id/1039/800/600"],
  ["https://picsum.photos/id/1040/800/600", "https://picsum.photos/id/1041/800/600", "https://picsum.photos/id/1042/800/600"],
  ["https://picsum.photos/id/1043/800/600", "https://picsum.photos/id/1044/800/600", "https://picsum.photos/id/1045/800/600"],
  ["https://picsum.photos/id/1046/800/600", "https://picsum.photos/id/1047/800/600", "https://picsum.photos/id/1048/800/600"],
  ["https://picsum.photos/id/1049/800/600", "https://picsum.photos/id/1050/800/600", "https://picsum.photos/id/1051/800/600"],
  ["https://picsum.photos/id/1052/800/600", "https://picsum.photos/id/1053/800/600", "https://picsum.photos/id/1054/800/600"],
  ["https://picsum.photos/id/1055/800/600", "https://picsum.photos/id/1056/800/600", "https://picsum.photos/id/1057/800/600"],
  ["https://picsum.photos/id/1058/800/600", "https://picsum.photos/id/1059/800/600", "https://picsum.photos/id/1060/800/600"],
  ["https://picsum.photos/id/1061/800/600", "https://picsum.photos/id/1062/800/600", "https://picsum.photos/id/1063/800/600"],
  ["https://picsum.photos/id/1064/800/600", "https://picsum.photos/id/1065/800/600", "https://picsum.photos/id/1066/800/600"],
  ["https://picsum.photos/id/1067/800/600", "https://picsum.photos/id/1068/800/600", "https://picsum.photos/id/1069/800/600"],
  ["https://picsum.photos/id/1070/800/600", "https://picsum.photos/id/1071/800/600", "https://picsum.photos/id/1072/800/600"],
  ["https://picsum.photos/id/1073/800/600", "https://picsum.photos/id/1074/800/600", "https://picsum.photos/id/1075/800/600"],
  ["https://picsum.photos/id/1076/800/600", "https://picsum.photos/id/1077/800/600", "https://picsum.photos/id/1078/800/600"],
  ["https://picsum.photos/id/1079/800/600", "https://picsum.photos/id/1080/800/600", "https://picsum.photos/id/1081/800/600"]
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
