<script>
function openLightbox(imageSrc) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.src = imageSrc;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scrolling
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto'; // Re-enable scrolling
}

// Close lightbox with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeLightbox();
    }
});
</script>
