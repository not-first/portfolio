import "./style.css";

// Simple portfolio interactions
document.addEventListener("DOMContentLoaded", () => {
  console.log("portfolio loaded");

  // Add smooth hover effects for links
  const links = document.querySelectorAll("a");
  links.forEach((link) => {
    link.addEventListener("mouseenter", () => {
      link.style.transition = "color 0.2s ease";
    });
  });

  // Simple analytics or tracking can go here
  console.log("visitor loaded portfolio");
});
