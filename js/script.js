document.querySelector(".icon-menu").addEventListener("click", function (event) {
  event.preventDefault();
  document.body.classList.toggle("menu-open");
});

const spollerButtons = document.querySelectorAll("[data-spoller] .spollers-faq__button");

spollerButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const currentItem = button.closest("[data-spoller]");
    const content = currentItem.querySelector(".spollers-faq__text");

    const parent = currentItem.parentNode;
    const isOneSpoller = parent.hasAttribute("data-one-spoller");

    if (isOneSpoller) {
      const allItems = parent.querySelectorAll("[data-spoller]");
      allItems.forEach((item) => {
        if (item !== currentItem) {
          const otherContent = item.querySelector(".spollers-faq__text");
          item.classList.remove("active");
          otherContent.style.maxHeight = null;
        }
      });
    }

    if (currentItem.classList.contains("active")) {
      currentItem.classList.remove("active");
      content.style.maxHeight = null;
    } else {
      currentItem.classList.add("active");
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});

// Testimonial Carousel
function initTestimonialCarousel() {
  const row = document.querySelector('.testimonials__row');
  const blocks = document.querySelectorAll('.testimonial-block');
  let currentIndex = 0;

  function updateCarousel() {
    const totalBlocks = blocks.length;
    const visibleBlocks = 3; // Number of blocks to show at a time
    const offset = (currentIndex * (100 / visibleBlocks));
    row.style.transform = `translateX(-${offset}%)`;
  }

  // Auto scroll every 8 seconds
  setInterval(() => {
    currentIndex = (currentIndex + 1) % Math.ceil(blocks.length / visibleBlocks);
    updateCarousel();
  }, 8000);

  // Initial state
  updateCarousel();
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initTestimonialCarousel);