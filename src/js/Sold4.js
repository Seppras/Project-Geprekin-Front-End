document.addEventListener("DOMContentLoaded", function () {
  const tambahButton = document.getElementById("paket-new");
  const formContainer = document.getElementById("form-container");
  const formMenu = document.getElementById("formMenu");
  const closeButton = document.getElementById("close-button");
  const batalButton = document.getElementById("cancel-button");
  const modal = document.getElementById("confirmation-modal");

  tambahButton.addEventListener("click", function () {
    // Clone the formMenu div
    const newForm = formMenu.cloneNode(true);

    // Clear input values if needed
    clearInputValues(newForm);

    // Append the cloned form to the form container
    formContainer.appendChild(newForm);

    // Optional: Scroll to the newly added form
    newForm.scrollIntoView({ behavior: "smooth", block: "end" });
  });

  closeButton.addEventListener("click", function () {
    // Remove all cloned forms in formContainer
    while (formContainer.firstChild) {
      formContainer.removeChild(formContainer.firstChild);
    }

    // Reset input values in formMenu
    clearInputValues(formMenu);

    // Close the modal (if necessary)
    modal.classList.add("hidden");
  });
  batalButton.addEventListener("click", function () {
    // Remove all cloned forms in formContainer
    while (formContainer.firstChild) {
      formContainer.removeChild(formContainer.firstChild);
    }

    // Reset input values in formMenu
    clearInputValues(formMenu);

    // Close the modal (if necessary)
    modal.classList.add("hidden");
  });

  // Function to clear input values of form
  function clearInputValues(form) {
    const inputs = form.querySelectorAll("input, select");
    inputs.forEach((input) => {
      if (input.tagName === "INPUT") {
        input.value = "";
      } else if (input.tagName === "SELECT") {
        input.selectedIndex = 0;
      }
    });
  }
});
