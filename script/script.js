function openLightbox(imageSrc) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    
    // Set the image source
    lightboxImg.src = imageSrc;
    
    // Make the lightbox visible
    lightbox.classList.add('active');
    
    // Prevent scrolling on the main page
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    
    // Hide the lightbox
    lightbox.classList.remove('active');
    
    // Re-enable scrolling on the main page
    document.body.style.overflow = 'auto';
}

// Close lightbox when the Escape key is pressed
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeLightbox();
    }
});
