document.addEventListener('DOMContentLoaded', function () {
    const thumbnails = document.querySelectorAll('.thumbnails img');
    const overlay = document.querySelector('.overlay');
    const largerImage = document.querySelector('.larger-image img');
    
    function displayImage(src) {
        largerImage.src = src;
        overlay.style.display = 'flex';
    }
    
    function handleThumbnailClick(thumbnail) {
        thumbnail.addEventListener('click', function () {
            displayImage(this.src.replace('thumbnail', 'large'));
        });
        thumbnail.addEventListener('keydown', function (e) {
            if (e.key === 'Enter' || e.key === ' ') {
                displayImage(this.src.replace('thumbnail', 'large'));
            }
        });
    }
    
    overlay.addEventListener('click', function (e) {
        if (e.target === overlay) {
            overlay.style.display = 'none';
        }
    });
    
    // Keyboard navigation between thumbnails
    document.addEventListener('keydown', function (e) {
        const currentIndex = Array.from(thumbnails).findIndex(thumbnail => thumbnail === document.activeElement);
        if (e.key === 'ArrowRight') {
            if (currentIndex < thumbnails.length - 1) {
                thumbnails[currentIndex + 1].focus();
            } else {
                thumbnails[0].focus();
            }
        } else if (e.key === 'ArrowLeft') {
            if (currentIndex > 0) {
                thumbnails[currentIndex - 1].focus();
            } else {
                thumbnails[thumbnails.length - 1].focus();
            }
        }
    });
    
    thumbnails.forEach(thumbnail => {
        handleThumbnailClick(thumbnail);
    });
    
    thumbnails[0].click();
});
