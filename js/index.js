window.addEventListener('load', function(e) {
    const featureLink = document.querySelector("a[href='img/barcelona.png']");  
    
    featureLink.addEventListener('click', featureLinkHandler);

    function featureLinkHandler(e){
        let featureImage = document.querySelector('img.feature');
        featureImage.src = featureLink.href;
        featureImage.classList.remove('hidden');

        e.preventDefault();
    }
});
