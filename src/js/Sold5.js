document.addEventListener("DOMContentLoaded", (event) => {
  const openModalButton = document.getElementById("open-pop-up");
  const closeModalButton = document.getElementById("close-button");
  const batalButton = document.getElementById("cancel-button");
  const modal = document.getElementById("confirmation-modal");
  const addBahanBakuButton = document.getElementById("add-bahan-baku-button");
  const bahanBakuSection = document.getElementById("bahan-baku-section");
  const paketNewButton = document.getElementById("paket-new");
  const additionalForms = document.getElementById("additional-forms");

  // Show the modal and reset Bahan Baku section
  openModalButton.addEventListener("click", () => {
    document.body.classList.add("no-scroll");
    modal.classList.remove("hidden");
    modal.classList.add("modal-active");
    resetBahanBakuSection();
  });

  // Close the modal and clear Bahan Baku section
  const closeModal = () => {
    document.body.classList.remove("no-scroll");
    modal.classList.remove("modal-active");
    modal.classList.add("hidden");
    resetBahanBakuSection();
    resetFormFields();
  };

  closeModalButton.addEventListener("click", closeModal);
  batalButton.addEventListener("click", closeModal);

  // Function to reset Bahan Baku section
  const resetBahanBakuSection = () => {
    while (bahanBakuSection.childElementCount > 0) {
      bahanBakuSection.removeChild(bahanBakuSection.lastChild);
    }
  };

  // Function to reset form fields
  const resetFormFields = () => {
    // Reset radio buttons
    const radioButtons = document.querySelectorAll(
      'input[name="bordered-radio"]'
    );
    radioButtons.forEach((radio) => {
      radio.checked = false;
    });

    // Reset select elements
    const selectElements = document.querySelectorAll("#formMenu select");
    selectElements.forEach((select) => {
      select.selectedIndex = 0;
    });
  };

  // Add a new Bahan Baku element on button click
  addBahanBakuButton.addEventListener("click", () => {
    bahanBakuSection.appendChild(createBahanBakuElement());
  });

  // Add a new menu form on button click
  paketNewButton.addEventListener("click", () => {
    additionalForms.appendChild(createNewMenuForm());
  });
});
