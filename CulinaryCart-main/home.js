
document.addEventListener('DOMContentLoaded', function () {
  const container = document.querySelector('.scrollable-container');
  const btnLeft = document.querySelector('.scroll-left-button');
  const btnRight = document.querySelector('.scroll-right-button');

  let isScrolling = false;

  function startScroll(direction) {
      if (!isScrolling) {
          isScrolling = true;
          const scrollAmount = (direction === 'left') ? -10 : 10;
          const scrollInterval = setInterval(function() {
              container.scrollLeft += scrollAmount;
          }, 10);
          
          const stopScroll = function() {
              clearInterval(scrollInterval);
              isScrolling = false;
              btnLeft.removeEventListener('mouseup', stopScroll);
              btnRight.removeEventListener('mouseup', stopScroll);
          };

          btnLeft.addEventListener('mouseup', stopScroll);
          btnRight.addEventListener('mouseup', stopScroll);
      }
  }

  btnLeft.addEventListener('mousedown', function() {
      startScroll('left');
  });

  btnRight.addEventListener('mousedown', function() {
      startScroll('right');
  });
});
