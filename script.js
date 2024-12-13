let currentImageIndex = 0;
const images = [
    "/redbulls77/images/1.JPEG",
    "/redbulls77/images/2.JPEG",
    "/redbulls77/images/3.JPEG",
    "/redbulls77/images/4.JPEG"
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

