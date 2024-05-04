let galleryIndex = 0;
const galleryImages = document.querySelectorAll('.photo-gallery img');
const galleryContainer = document.querySelector('.photo-gallery');
const galleryLength = galleryImages.length;
const imageWidth = galleryImages[0].offsetWidth;
const totalWidth = imageWidth * galleryLength; // Calculate total width of the gallery

function scrollGallery() {
    galleryIndex++;
    if (galleryIndex >= galleryLength) {
        galleryIndex = 0;
        galleryContainer.style.transition = 'none'; // Disable transition for instant reset
        galleryContainer.style.transform = `translateX(0)`;
        setTimeout(() => {
            galleryContainer.style.transition = ''; // Re-enable transition after reset
        }, 50); // Add a slight delay for the transition to reset properly
    } else {
        const scrollAmount = imageWidth * galleryIndex;
        galleryContainer.style.transform = `translateX(-${scrollAmount}px)`;
    }
}

// Automatically scroll the gallery every 3 seconds
setInterval(scrollGallery, 3000);
