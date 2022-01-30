var PageSlideIndex = 1;
PageShowSlides(PageSlideIndex);

function PagePlusSlides(n) {
  PageShowSlides(PageSlideIndex += n);
}

function PageCurrentSlide(n) {
  PageShowSlides(PageSlideIndex = n);
}

function PageShowSlides(n) {
  var i;
  var PageSlides = document.getElementsByClassName("Page");
  var dots = document.getElementsByClassName("PageSelector");
  if (n > PageSlides.length) {PageSlideIndex = 1}    
  if (n < 1) {PageSlideIndex = PageSlides.length}
  for (i = 0; i < PageSlides.length; i++) {
    PageSlides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  PageSlides[PageSlideIndex-1].style.display = "block";  
  dots[PageSlideIndex-1].className += " active";
}