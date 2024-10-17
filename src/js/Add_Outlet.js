// Table
$(document).ready(function () {
  var table = $("#example").DataTable({
    language: {
      searchPlaceholder: "Search...",
      paginate: {
        first: "Start",
        last: "End",
        next: "Next",
        previous: "Previous",
      },
    },
  });
});

// Modal Pop Up 2
document.addEventListener("DOMContentLoaded", (event) => {
  const paketNewButton = document.getElementById("paket-new");
  const formContainer = document.getElementById("form-container");
  const closeButton = document.getElementById("close-button");
  const batalButton = document.getElementById("cancel-button");

  // Function to create a new Bahan Baku select element
  const createBahanBakuElement = () => {
    const formGroup = document.createElement("div");
    formGroup.className = "w-full mt-4";

    const label = document.createElement("label");
    label.className = "block mb-2 text-sm font-medium text-gray-900";
    label.textContent = "Menu";

    const select = document.createElement("select");
    select.className =
      "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5";
    select.innerHTML = `
                    <option selected>Menu to Choose</option>
                    <option value="Tepung">Tepung</option>
                    <option value="Minyak">Minyak</option>
                    <option value="Gula">Gula</option>
                    <option value="Garam">Garam</option>
                `;

    formGroup.appendChild(label);
    formGroup.appendChild(select);

    return formGroup;
  };

  // Function to create a new menu form
  const createNewMenuForm = () => {
    const formContainer = document.createElement("div");
    formContainer.className = "rounded-lg bg-white h-auto w-full p-4 mt-4";

    const nameForm = document.createElement("form");
    nameForm.className = "mx-auto w-full";
    const nameLabel = document.createElement("label");
    nameLabel.className = "block mb-2 text-sm font-medium text-gray-900";
    nameLabel.textContent = "Outlet Name";
    const nameSelect = document.createElement("select");
    nameSelect.className =
      "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5";
    nameSelect.innerHTML = `
                    <option selected>Outlet Name to Choose</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                `;
    nameForm.appendChild(nameLabel);
    nameForm.appendChild(nameSelect);

    const priceForm = document.createElement("form");
    priceForm.className = "mx-auto w-full mt-4";
    const priceLabel = document.createElement("label");
    priceLabel.className = "block mb-2 text-sm font-medium text-gray-900";
    priceLabel.textContent = "Outlet Adress";
    const priceSelect = document.createElement("select");
    priceSelect.className =
      "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5";
    priceSelect.innerHTML = `
                    <option selected>Outlet Adress toChoose</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                `;
    priceForm.appendChild(priceLabel);
    priceForm.appendChild(priceSelect);

    const bahanBakuButton = document.createElement("button");
    bahanBakuButton.className =
      "add-bahan-baku-button flex flex-row items-center mt-4";
    bahanBakuButton.innerHTML = `
                    <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 12H18" stroke="#F97013" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M12 18V6" stroke="#F97013" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                    <p class="text-sm font-normal font-pop text-[#F97013] ml-2">Masukan Menu</p>
                `;
    const bahanBakuSection = document.createElement("div");
    bahanBakuSection.className = "bahan-baku-section w-full";

    bahanBakuButton.addEventListener("click", () => {
      bahanBakuSection.appendChild(createBahanBakuElement());
    });

    formContainer.appendChild(nameForm);
    formContainer.appendChild(priceForm);
    formContainer.appendChild(bahanBakuButton);
    formContainer.appendChild(bahanBakuSection);

    return formContainer;
  };

  // Add a new menu form on button click
  paketNewButton.addEventListener("click", () => {
    formContainer.appendChild(createNewMenuForm());
  });

  // Reset form container on close or batal button click
  const resetFormContainer = () => {
    formContainer.innerHTML = "";
  };

  closeButton.addEventListener("click", resetFormContainer);
  batalButton.addEventListener("click", resetFormContainer);
});

// Modal Pop Up 2
document.addEventListener("DOMContentLoaded", (event) => {
  const openModalButton = document.getElementById("open-modal-button");
  const closeModalButton = document.getElementById("close-button");
  const batalButton = document.getElementById("cancel-button");
  const modal = document.getElementById("confirmation-modal");
  const addBahanBakuButton = document.getElementById("add-menu-button");
  const bahanBakuSection = document.getElementById("menu-section");
  const paketNewButton = document.getElementById("paket-new");
  const additionalForms = document.getElementById("additional-forms");

  // Function to create a new Bahan Baku select element
  const createBahanBakuElement = () => {
    const formGroup = document.createElement("div");
    formGroup.className = "w-full mt-4";

    const label = document.createElement("label");
    label.className = "block mb-2 text-sm font-medium text-gray-900";
    label.textContent = "Menu";

    const select = document.createElement("select");
    select.className =
      "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5";
    select.innerHTML = `
            <option selected>Menu to Choose</option>
            <option value="Tepung">Tepung</option>
            <option value="Minyak">Minyak</option>
            <option value="Gula">Gula</option>
            <option value="Garam">Garam</option>
            `;

    formGroup.appendChild(label);
    formGroup.appendChild(select);

    return formGroup;
  };

  // Show the modal and reset Bahan Baku section
  openModalButton.addEventListener("click", () => {
    modal.classList.remove("hidden");
    modal.classList.add("modal-active");
    resetBahanBakuSection();
  });

  // Close the modal and clear Bahan Baku section
  const closeModal = () => {
    modal.classList.remove("modal-active");
    resetBahanBakuSection();
    modal.classList.add("hidden");
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
    document.getElementById("outlet-name").selectedIndex = 0;
    document.getElementById("outlet-adress").selectedIndex = 0;
  };

  // Add a new Bahan Baku element on button click
  addBahanBakuButton.addEventListener("click", () => {
    bahanBakuSection.appendChild(createBahanBakuElement());
  });

  // Function to create a new menu form
  const createNewMenuForm = () => {
    const formContainer = document.createElement("div");
    formContainer.className = "rounded-lg bg-white h-auto w-full p-4 mt-4";

    const nameForm = document.createElement("form");
    nameForm.className = "mx-auto w-full";
    const nameLabel = document.createElement("label");
    nameLabel.className = "block mb-2 text-sm font-medium text-gray-900";
    nameLabel.textContent = "Nama Menu";
    const nameSelect = document.createElement("select");
    nameSelect.className =
      "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5";
    nameSelect.innerHTML = `
            <option selected>Menu Yang Akan Dipilih</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
            `;
    nameForm.appendChild(nameLabel);
    nameForm.appendChild(nameSelect);

    const priceForm = document.createElement("form");
    priceForm.className = "mx-auto w-full mt-4";
    const priceLabel = document.createElement("label");
    priceLabel.className = "block mb-2 text-sm font-medium text-gray-900";
    priceLabel.textContent = "Harga Menu (Rp)";
    const priceSelect = document.createElement("select");
    priceSelect.className =
      "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5";
    priceSelect.innerHTML = `
            <option selected>Harga Menu Yang Akan dipilih</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
            `;
    priceForm.appendChild(priceLabel);
    priceForm.appendChild(priceSelect);

    formContainer.appendChild(nameForm);
    formContainer.appendChild(priceForm);

    return formContainer;
  };

  // Add a new menu form on button click
  paketNewButton.addEventListener("click", () => {
    additionalForms.appendChild(createNewMenuForm());
  });
});
