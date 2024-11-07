let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
const sections = document.querySelectorAll(".section");
const readMoreBtn = document.querySelector(".btn-read-more");
const extraContent = document.querySelector(".extra-content");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// Animation
const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("section-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

// Observe each section
sections.forEach((section) => {
  observer.observe(section);
});

// Read more
readMoreBtn.addEventListener("click", () => {
  // Toggle the 'show' class to trigger the animation
  extraContent.classList.toggle("show");

  // Change the button text based on whether content is shown
  if (extraContent.classList.contains("show")) {
    readMoreBtn.textContent = "Read Less";
  } else {
    readMoreBtn.textContent = "Read More";
  }
});
