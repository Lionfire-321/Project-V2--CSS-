document.addEventListener('DOMContentLoaded', function() {
    const clickableImages = document.querySelectorAll('.clickable-image');
    const expandedImage = document.getElementById('expandedImage');
    const expandedImage2 = document.getElementById('expandedImage2');
    const overlay = document.getElementById('overlay');
    const closeButton = document.getElementById('closeButton');

    //Loop due to multiple images
    clickableImages.forEach(function(image) {           //For Lanscape Images
        image.addEventListener('click', function() {
            expandedImage.src = this.src; 
            overlay.classList.remove('hidden');
        });
    });

    clickableImages.forEach(function(image) {           //For Protrait Images
        image.addEventListener('click', function() {
            expandedImage2.src = this.src;  
            overlay.classList.remove('hidden');
        });
    });

    closeButton.addEventListener('click', function() {   // When the close button is clicked
        overlay.classList.add('hidden');
    });
});
