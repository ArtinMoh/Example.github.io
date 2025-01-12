window.addEventListener('scroll', function() {
    const targetH = document.querySelector('header');
    const scrollPosition = window.scrollY;

    if (scrollPosition >= 100) {
        targetH.style.padding='0 8vw'; // visible
        targetH.style.height='9%';
    } 
    else {
        targetH.style.padding='0 12vw'; // Hide it again if needed
        targetH.style.height='11%';
    }
});
window.addEventListener('scroll', function() {
const targetT = document.getElementById('ExampleText')
const scrollPosition = window.scrollY;
if (scrollPosition >= 400) {
    targetT.style.letterSpacing='10px'; // visible
} 
else {
    targetT.style.letterSpacing='60px'; // Hide it again if needed
}
});


const ExampleText = document.getElementById('ExampleText');

// Listen for scroll event
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  // Check if scroll is between 200 and 400
  if (scrollY >= 200 && scrollY <= 400) {
    // Calculate letter spacing based on scroll position
    const letterSpacing = Math.max(2, 60 - ((scrollY - 200) / 200) * 58);
    ExampleText.style.letterSpacing = `${letterSpacing}px`;
  } else if (scrollY < 200) {
    // Reset to default when scrolling back above 200
    ExampleText.style.letterSpacing = `60px`;
  } else if (scrollY > 400) {
    // Lock minimum letter spacing below 400
    ExampleText.style.letterSpacing = `2px`;
  }
});

const PhotoSlidesimg1 = document.getElementById('PhotoSlidesimg1');
const PhotoSlidesimg3 = document.getElementById('PhotoSlidesimg3');
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
  
    // Check if scroll is between 200 and 400
    if (scrollY >= 200 && scrollY <= 400) {
      // Calculate letter spacing based on scroll position
      const marginRight = Math.max(25, 33 - ((scrollY - 200) / 200) * 8);
      PhotoSlidesimg1.style.marginRight = `${marginRight}vw`;

      const marginLeft = Math.max(25, 33 - ((scrollY - 200) / 200) * 8);
      PhotoSlidesimg3.style.marginLeft = `${marginLeft}vw`;
    } else if (scrollY < 200) {
      // Reset to default when scrolling back above 200
      PhotoSlidesimg1.style.marginRight = `33vw`;
      PhotoSlidesimg3.style.marginLeft = `33vw`;
    } else if (scrollY > 400) {
      // Lock minimum letter spacing below 400
      PhotoSlidesimg1.style.marginRight = `25vw`;
      PhotoSlidesimg3.style.marginLeft = `25vw`;
    }
  });