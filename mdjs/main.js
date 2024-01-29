document.addEventListener("DOMContentLoaded", function() {
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");
  
    window.onscroll = function() {
      scrollFunction();
    };
  
    function scrollFunction() {
      if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        scrollToTopBtn.style.display = "block";
      } else {
        scrollToTopBtn.style.display = "none";
      }
    }
  
    function scrollToTop() {
      var currentPosition = document.documentElement.scrollTop || document.body.scrollTop;
  
      if (currentPosition > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, currentPosition - currentPosition / 45);
      }
    }
  
    scrollToTopBtn.addEventListener("click", scrollToTop);
  });
  


  document.addEventListener("DOMContentLoaded", function() {
    var imagesWithCopyright = document.querySelectorAll('img[data-copyright]');

    imagesWithCopyright.forEach(function(image) {
        var copyrightValue = image.getAttribute('data-copyright');

        var watermarkDiv = document.createElement('div');
        watermarkDiv.className = 'watermark-text';

        var copyrightIcon = document.createElement('span');
        copyrightIcon.className = 'copyright-icon';
        copyrightIcon.innerHTML = '©';

        watermarkDiv.appendChild(copyrightIcon);
        watermarkDiv.innerHTML += copyrightValue;

        var container = document.createElement('div');
        container.style.position = 'relative';
        container.style.display = 'inline-block';

        var clonedImage = image.cloneNode(true);

        container.appendChild(clonedImage);
        container.appendChild(watermarkDiv);

        image.parentNode.replaceChild(container, image);
    });
});