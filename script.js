let currentImageIndex = 0;
let images = [];

function openLightbox(img) {
  images = Array.from(document.querySelectorAll('.gallery-img')).filter(el => el.style.display !== 'none');
  currentImageIndex = images.indexOf(img);
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  lightboxImg.src = img.src;
  lightbox.style.display = "flex";
}

function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  lightbox.style.display = "none";
}

function showImage(index) {
  const lightboxImg = document.getElementById("lightbox-img");
  if (images.length === 0) return;
  currentImageIndex = (index + images.length) % images.length;
  lightboxImg.src = images[currentImageIndex].src;
}

document.getElementById("prevBtn").addEventListener("click", function(event) {
  event.stopPropagation();
  showImage(currentImageIndex - 1);
});

document.getElementById("nextBtn").addEventListener("click", function(event) {
  event.stopPropagation();
  showImage(currentImageIndex + 1);
});

function filterImages(category) {
  const allImages = document.querySelectorAll(".gallery-img");
  allImages.forEach(img => {
    if (category === "all" || img.classList.contains(category)) {
      img.style.display = "inline-block";
    } else {
      img.style.display = "none";
    }
  });
}
