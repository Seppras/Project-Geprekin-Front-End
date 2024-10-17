// Handling dropdown toggle
document.querySelectorAll("[data-dropdown-toggle]").forEach((button) => {
  button.addEventListener("click", (event) => {
    event.stopPropagation(); // Prevent other event handlers from firing
    const dropdownId = button.getAttribute("data-dropdown-toggle");
    document.getElementById(dropdownId).classList.toggle("hidden");
  });
});

// Closing dropdown when clicking outside
window.addEventListener("click", (event) => {
  document.querySelectorAll("[data-dropdown-toggle]").forEach((button) => {
    const dropdownId = button.getAttribute("data-dropdown-toggle");
    const dropdown = document.getElementById(dropdownId);
    if (!dropdown.contains(event.target) && !button.contains(event.target)) {
      dropdown.classList.add("hidden");
    }
  });
});

// Handling card details toggle
document.querySelectorAll(".card-header").forEach((header) => {
  header.addEventListener("click", () => {
    const card = header.closest(".card");
    const detail = card.querySelector(".card-detail");
    const line = card.querySelector(".card-line");

    // Close other cards
    document.querySelectorAll(".card-detail").forEach((d) => {
      if (d !== detail) {
        d.classList.add("hidden");
      }
    });

    document.querySelectorAll(".card-line").forEach((l) => {
      if (l !== line) {
        l.classList.add("hidden");
      }
    });

    detail.classList.toggle("hidden");
    line.classList.toggle("hidden");
  });
});
