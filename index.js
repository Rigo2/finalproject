var DownloadsSlideIndex = 1;
DownloadShowSlides(DownloadsSlideIndex);

function DownloadPlusSlides(n) {
  DownloadShowSlides(DownloadsSlideIndex += n);
}

function DownloadCurrentSlide(n) {
  DownloadShowSlides(DownloadsSlideIndex = n);
}

function DownloadShowSlides(n) {
  var i;
  var DownloadSlides = document.getElementsByClassName("DownloadSlides");
  var dots = document.getElementsByClassName("DownloadSelector");
  if (n > DownloadSlides.length) {DownloadsSlideIndex = 1}    
  if (n < 1) {DownloadsSlideIndex = DownloadSlides.length}
  for (i = 0; i < DownloadSlides.length; i++) {
    DownloadSlides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  DownloadSlides[DownloadsSlideIndex-1].style.display = "block";  
  dots[DownloadsSlideIndex-1].className += " active";
}



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
  var PageSlides = document.getElementsByClassName("PageSlides");
  var PageSelector = document.getElementsByClassName("PageSelector");
  if (n > PageSlides.length) {PageSlideIndex = 1}    
  if (n < 1) {PageSlideIndex = PageSlides.length}
  for (i = 0; i < PageSlides.length; i++) {
    PageSlides[i].style.display = "none";  
  }
  for (i = 0; i < PageSelector.length; i++) {
    PageSelector[i].className = PageSelector[i].className.replace(" active", "");
  }
  PageSlides[PageSlideIndex-1].style.display = "block";  
  PageSelector[PageSlideIndex-1].className += " active";
}