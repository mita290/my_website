let slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
      showSlides(slideIndex += n);
      if (slideIndex > slides.length) {
          slideIndex = 1;
      } else if (slideIndex < 1) {
          slideIndex = slides.length;
      }
  }
  
  

    function showSlides(n) {
        const slides = document.getElementsByClassName("mySlides");
        const prevButton = document.querySelector('.prev');
        const nextButton = document.querySelector('.next');

        if (n > slides.length) {
            slideIndex = 1;
        } else if (n < 1) {
            slideIndex = slides.length;
        }

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        slides[slideIndex - 1].style.display = "block";

        if (slideIndex === 1) {
            prevButton.classList.add('disabled');
        } else {
            prevButton.classList.remove('disabled');
        }

        if (slideIndex === slides.length) {
            nextButton.classList.add('disabled');
        } else {
            nextButton.classList.remove('disabled');
        }
    }