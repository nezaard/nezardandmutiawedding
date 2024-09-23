function navigateToSection(event, sectionId) {
  event.preventDefault();
  const targetSection = document.getElementById(sectionId);

  // Scroll to the target section smoothly
  targetSection.scrollIntoView({ behavior: "smooth" });

  // Update the URL without adding a history entry and without the hash
  const newUrl =
    window.location.pathname + window.location.search + `#${sectionId}`;
  window.history.replaceState(null, "", newUrl);

  // Remove the hash from the URL after a short delay to allow scrolling
  setTimeout(() => {
    const cleanUrl = window.location.pathname + window.location.search;
    window.history.replaceState(null, "", cleanUrl);
  }, 0);
}

document.addEventListener("DOMContentLoaded", () => {
  const navbarLinks = document.querySelectorAll(".nav-link");
  navbarLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const sectionId = link.getAttribute("href").substring(1);
      navigateToSection(event, sectionId);
    });
  });
});

function smoothScroll(event) {
  event.preventDefault();
  const targetId = event.currentTarget.getAttribute("href").substring(1);
  const targetElement = document.getElementById(targetId);

  if (targetElement) {
    // Scroll to the target element smoothly
    targetElement.scrollIntoView({ behavior: "smooth" });

    // Update the URL without adding a history entry and without the hash
    const newUrl = window.location.pathname + window.location.search;
    window.history.replaceState(null, "", newUrl);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll("a");
  navLinks.forEach((link) => {
    link.addEventListener("click", smoothScroll);
  });
});
