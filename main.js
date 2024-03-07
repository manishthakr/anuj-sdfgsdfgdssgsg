document.addEventListener('DOMContentLoaded', function() {
  var header = document.getElementById('myHeader');
  var page = document.getElementById('page');
  var openMenuButton = document.getElementById('openmenu');

  window.addEventListener('scroll', function() {
      page.classList.remove('menuopen');
      if (window.scrollY >= 100) {
          header.classList.add('sticky');
      } else {
          header.classList.remove('sticky');
      }
  });

  // Event listener to remove the sticky class when the button is clicked
  openMenuButton.addEventListener('click', function() {
      header.classList.remove('sticky');
      page.classList.add('menuopen');
  });

var links = document.querySelectorAll('a[href^="#"]');

  links.forEach(function(link) {
      link.addEventListener('click', function(event) {
          // Prevent the default action
          event.preventDefault();

          // Get the target element
          var targetId = this.getAttribute('href');
          var targetElement = document.querySelector(targetId);

          // Smooth scroll to target
          if (targetElement) {
              targetElement.scrollIntoView({
                  behavior: 'smooth'
              });
          }
      });
  });
});

const labels = document.querySelectorAll('.form-control label');

labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((letter, index) => `<span style="transition-delay:${index * 50}ms">${letter}</span>`)
        .join('');
});

// Get the textarea element
const textarea = document.getElementById('userInput');

// Listen for input events (keyup or paste)
textarea.addEventListener('input', () => {
    const userInput = textarea.value.trim(); // Remove leading/trailing spaces
    const wordCount = userInput.split(/\s+/).length; // Count words

    // Calculate the shade of red based on word count
    const maxWords = 10;
    const redIntensity = Math.min(255, Math.floor((wordCount / maxWords) * 255));
    const backgroundColor = `rgb(${redIntensity}, 0, 0)`;

    // Set the background color
    textarea.style.backgroundColor = backgroundColor;
});




       // Function to toggle the "clicked" class on the icon
       function rotateIcon() {
        const icon = document.querySelector('.bx-reset');
        icon.classList.toggle('clicked');
    }



    function generateBalls() {
        for (var i = 0; i < Math.floor(window.innerWidth/20); i++) {
          $(".gooey-animations").append(`
          <div class="ball"></div>
        `);
          var colors = ['#ff0000','#FFf'];
          $(".ball").eq(i).css({"bottom":"0px","left":Math.random()*window.innerWidth-100,"animation-delay":Math.random()*5+"s","transform":"translateY("+Math.random()*10+"px)","background-color":colors[i%2]});
        }
      }
      generateBalls();
      
      window.addEventListener('resize', function(e) {
        $(".gooey-animations .ball").remove();
        generateBalls();
      })