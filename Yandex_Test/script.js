// document.addEventListener('DOMContentLoaded', function () {
//   const carousel = document.getElementById('swiper');
//   if (!carousel) return;

//   const switch1 = document.querySelector('#switch1');
//   const switch2 = document.querySelector('#switch2');
//   const numberText = document.querySelector('.numbertext');
//   const switches = [switch1, switch2];

//   let currentIndex = 0;

//   const updateNumberText = () => {
//     if (switch1.checked) {
//       numberText.innerHTML = '3<span> / 6</span>';
//     } else if (switch2.checked) {
//       numberText.innerHTML = '6<span> / 6</span>';
//     }
//   };

//   const autoSwitch = () => {
//     currentIndex = (currentIndex + 1) % switches.length;
//     switches[currentIndex].checked = true;
//     updateNumberText();
//   };

//   switch1.addEventListener('change', updateNumberText);
//   switch2.addEventListener('change', updateNumberText);

//   setInterval(autoSwitch, 4000);
// });
document.addEventListener('DOMContentLoaded', function () {
  const initCarousel = () => {
    const carousel = document.getElementById('swiper');
    if (!carousel) return;

    const switch1 = document.querySelector('#switch1');
    const switch2 = document.querySelector('#switch2');
    const numberText = document.querySelector('.numbertext');
    const switches = [switch1, switch2];

    let currentIndex = 0;

    const updateNumberText = () => {
      if (switch1.checked) {
        numberText.innerHTML = '3<span> / 6</span>';
      } else if (switch2.checked) {
        numberText.innerHTML = '6<span> / 6</span>';
      }
    };

    const autoSwitch = () => {
      currentIndex = (currentIndex + 1) % switches.length;
      switches[currentIndex].checked = true;
      updateNumberText();
    };

    switch1.addEventListener('change', updateNumberText);
    switch2.addEventListener('change', updateNumberText);

    setInterval(autoSwitch, 4000);
  };

  const handleResize = () => {
    if (window.innerWidth > 1365) {
      initCarousel();
    }
  };

  // Initial check
  handleResize();

  // Add event listener for window resize
  window.addEventListener('resize', handleResize);
});

// 375
document.addEventListener('DOMContentLoaded', function () {
  const initCarousel = () => {
    const carousel = document.getElementById('swiper-pts');
    if (!carousel) return;

    const switches = [
      document.querySelector('#switch-pts1'),
      document.querySelector('#switch-pts2'),
      document.querySelector('#switch-pts3'),
      document.querySelector('#switch-pts4'),
      document.querySelector('#switch-pts5'),
      document.querySelector('#switch-pts6')
    ];

    const numberText = document.querySelector('.numbertext-pts');
    let currentIndex = 0;
    let intervalId;

    const updateNumberText = () => {
      numberText.innerHTML = `${currentIndex + 1}<span> / 6</span>`;
    };

    const autoSwitch = () => {
      currentIndex = (currentIndex + 1) % switches.length;
      switches[currentIndex].checked = true;
      updateNumberText();
    };

    const manualSwitch = (index) => {
      currentIndex = index;
      switches[currentIndex].checked = true;
      updateNumberText();
      clearInterval(intervalId); // Stop the auto-switching
      intervalId = setInterval(autoSwitch, 4000); // Restart the auto-switching
    };

    switches.forEach((switchElement, index) => {
      switchElement.addEventListener('change', () => manualSwitch(index));
    });

    intervalId = setInterval(autoSwitch, 4000); // Start the auto-switching
  };

  const handleResize = () => {
    if (window.innerWidth < 1365) {
      initCarousel();
    }
  };

  // Initial check
  handleResize();

  // Add event listener for window resize
  window.addEventListener('resize', handleResize);
});

// document.addEventListener('DOMContentLoaded', function () {
//   const carousel = document.getElementById('swiper-pts');
//   if (!carousel) return;

//   const switches = [
//     document.querySelector('#switch-pts1'),
//     document.querySelector('#switch-pts2'),
//     document.querySelector('#switch-pts3'),
//     document.querySelector('#switch-pts4'),
//     document.querySelector('#switch-pts5'),
//     document.querySelector('#switch-pts6')
//   ];

//   const numberText = document.querySelector('.numbertext-pts');
//   let currentIndex = 0;
//   let intervalId;

//   const updateNumberText = () => {
//     numberText.innerHTML = `${currentIndex + 1}<span> / 6</span>`;
//   };

//   const autoSwitch = () => {
//     currentIndex = (currentIndex + 1) % switches.length;
//     switches[currentIndex].checked = true;
//     updateNumberText();
//   };

//   const manualSwitch = (index) => {
//     currentIndex = index;
//     switches[currentIndex].checked = true;
//     updateNumberText();
//     clearInterval(intervalId); // Stop the auto-switching
//     intervalId = setInterval(autoSwitch, 4000); // Restart the auto-switching
//   };

//   switches.forEach((switchElement, index) => {
//     switchElement.addEventListener('change', () => manualSwitch(index));
//   });

//   intervalId = setInterval(autoSwitch, 4000); // Start the auto-switching
// });

