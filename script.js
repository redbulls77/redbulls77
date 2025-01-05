let currentImageIndex = 0;
const images = [
    "/images/1.JPEG",
    "/images/2.JPEG",
    "/images/4.JPEG",
    "/images/5.JPEG",
    "/images/6.JPEG",
    "/images/7.JPEG"
];

function changeImage(direction) {
    currentImageIndex += direction;

    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    } else if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }

    document.getElementById("galleryImage").src = images[currentImageIndex];
}

