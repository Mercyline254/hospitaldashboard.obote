
  document.addEventListener('DOMContentLoaded', function() {
    const counters = document.querySelectorAll('.counter');
    const speed = 2000; // The speed of the counter animation

    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        // Calculate increment for smooth animation
        const inc = target / speed;
        
        if (count < target) {
          counter.innerText = Math.ceil(count + inc);
          setTimeout(updateCount, 1);
        } else {
          counter.innerText = target;
        }
      };

      // Trigger the counter when it's in view
      const observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting === true) {
          updateCount();
        }
      });

      observer.observe(counter);
    });
  });
