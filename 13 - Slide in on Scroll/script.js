//debounce helps performance by limiting when and how long a function can run. Many frameworks have it built in, but it is being used as an example in this vanilla JS course.
function debounce(func, wait = 20, immediate = true) { 
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const sliderImages = document.querySelectorAll('img.slide-in');

function checkSlide(e) {
  sliderImages.forEach(sliderImage => {
    const slideFromTop = (window.scrollY + window.innerHeight) - sliderImage.height / 2;    
    const imageBottom = sliderImage.offsetTop + sliderImage.height;
    const isHalfShown = slideFromTop > sliderImage.offsetTop;
    const isNotScrolledPast = window.scrollY < imageBottom;

    if(isHalfShown && isNotScrolledPast) {
      sliderImage.classList.add('active');
    } else {
      sliderImage.classList.remove('active');
    }

    console.log(window.innerHeight, window.scrollY, (window.scrollY + window.innerHeight) - sliderImage.height);
  });
}

window.addEventListener('scroll', checkSlide);
