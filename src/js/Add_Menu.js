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

//Modal Pop Up 1
document.addEventListener("DOMContentLoaded", () => {
  let packetCount = 0;
  const formContainer = document.getElementById("form-container");

  document.getElementById("paket-new").addEventListener("click", () => {
    packetCount++;
    const newFormId = `form-${packetCount}`;
    const newRawMaterialModalId = `raw-material-modal-${packetCount}`;
    const newRawMaterialSectionId = `raw-material-section-${packetCount}`;

    const newFormHTML = `
      <div class="rounded-lg bg-white h-auto w-full p-4 overflow-y-vis package-container" id="${newFormId}">
        <div class="flex flex-col justify-between items-start w-full gap-4">
          <form class="mx-auto w-full">
            <label for="menu-name-${packetCount}" class="block mb-2 text-sm font-medium text-gray-900">Product Name</label>
            <select id="menu-name-${packetCount}" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
              <option selected disabled>Product name to choose</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </form>
          <div class="flex justify-start gap-4 w-full">
            <form class="mx-auto w-full">
              <label for="first_name-${packetCount}" class="block mb-2 text-sm font-medium text-gray-900">Product Price(Rp)</label>
              <input type="number" id="first_name-${packetCount}" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="1234" required />
            </form>
            <form class="mx-auto w-full">
              <label for="menu-price-${packetCount}" class="block mb-2 text-sm font-medium text-gray-900">Variant Menu</label>
              <select id="menu-price-${packetCount}" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                <option selected>Variant to choose</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </form>
          </div>
          <button id="add-raw-material-bttn-${packetCount}" class="flex flex-row items-center mt-4">
            <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 12H18" stroke="#F97013" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M12 18V6" stroke="#F97013" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
            <p class="text-sm font-normal font-pop text-[#F97013] ml-2">Raw Material Input</p>
          </button>
          <div id="${newRawMaterialSectionId}" class="w-full mt-4"></div>
        </div>
      </div>

      <!-- Modal Raw Material -->
      <div id="${newRawMaterialModalId}" class="hidden fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 overflow-y-auto">
        <div class="bg-white p-4 rounded-lg w-1/2 overflow-y-scroll h-3/4">
          <div class="flex flex-col justify-center items-center gap-2 p-4">
            <form class="mx-auto w-full">
              <label for="raw-material-select-${packetCount}" class="block mb-2 text-sm font-medium text-gray-900">Raw Material</label>
              <select id="raw-material-select-${packetCount}" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                <option selected disabled>Raw Material to choose</option>
                <option value="Tepung">Tepung</option>
                <option value="Minyak">Minyak</option>
                <option value="Gula">Gula</option>
                <option value="Garam">Garam</option>
              </select>
            </form>
            <form class="mx-auto w-full">
              <label for="weight-${packetCount}" class="block mb-2 text-sm font-medium text-gray-900">Weight Raw Material</label>
              <input type="number" id="weight-${packetCount}" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="1000" required />
            </form>
            <form class="mx-auto w-full">
              <label for="price-${packetCount}" class="block mb-2 text-sm font-medium text-gray-900">Price Raw Material (Rp)</label>
              <input type="number" id="price-${packetCount}" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="1000" required />
            </form>
            <div class="mt-4">
              <button id="material-new-${packetCount}" class="flex flex-row items-center">
                <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 12H18" stroke="#F97013" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M12 18V6" stroke="#F97013" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
                <p class="text-sm font-normal font-pop text-[#F97013] ml-2">Add new material</p>
              </button>
            </div>
            <!-- New Material -->
            <div id="form-material-${packetCount}" class="w-full"></div>
          </div>
          <button id="add-raw-material" class="bg-blue-500 text-white px-4 py-2 rounded-full">Add Material</button>
          <button id="cancel-modal-${packetCount}" class="bg-gray-500 text-white px-4 py-2 rounded-full ml-2">Cancel</button>
        </div>
      </div>
    `;

    formContainer.insertAdjacentHTML("beforeend", newFormHTML);

    document
      .getElementById(`add-raw-material-bttn-${packetCount}`)
      .addEventListener("click", () => {
        document
          .getElementById(newRawMaterialModalId)
          .classList.remove("hidden");
      });

    document
      .getElementById(`cancel-modal-${packetCount}`)
      .addEventListener("click", () => {
        resetModalForm(packetCount);
        document.getElementById(newRawMaterialModalId).classList.add("hidden");
      });

    document
      .getElementById(`add-raw-material`)
      .addEventListener("click", () => {
        const rawMaterialSelect = document.getElementById(
          `raw-material-select-${packetCount}`
        );
        const selectedMaterial =
          rawMaterialSelect.options[rawMaterialSelect.selectedIndex].text;
        const weight = document.getElementById(`weight-${packetCount}`).value;
        const price = document.getElementById(`price-${packetCount}`).value;

        const newMaterialHTML = `
          <div class="flex justify-between items-center mb-2">
            <span>${selectedMaterial}</span>
            <span>${weight}g</span>
            <span>Rp${price}</span>
            <button class="text-red-500" onclick="this.parentElement.remove()">Remove</button>
          </div>
        `;

        document
          .getElementById(newRawMaterialSectionId)
          .insertAdjacentHTML("beforeend", newMaterialHTML);
        resetModalForm(packetCount);
        document.getElementById(newRawMaterialModalId).classList.add("hidden");
      });
  });

  function resetModalForm(packetCount) {
    document.getElementById(`raw-material-select-${packetCount}`).value = "";
    document.getElementById(`weight-${packetCount}`).value = "";
    document.getElementById(`price-${packetCount}`).value = "";
  }

  function resetFormContainer() {
    formContainer.innerHTML = "";
    packetCount = 0;
  }

  document.getElementById("close-button").addEventListener("click", (event) => {
    event.preventDefault();
    resetFormContainer();
  });

  document
    .getElementById("cancel-button")
    .addEventListener("click", (event) => {
      event.preventDefault();
      resetFormContainer();
    });
});

// raw material
document
  .getElementById("add-raw-material-bttn")
  .addEventListener("click", function () {
    document.getElementById("raw-material-modal").classList.remove("hidden");
  });

document.getElementById("cancel-modal").addEventListener("click", function () {
  document.getElementById("raw-material-modal").classList.add("hidden");
  resetModalForm();
});

document.getElementById("material-new").addEventListener("click", function () {
  const formMaterialContainer = document.createElement("div");
  formMaterialContainer.className = "material-form flex flex-col gap-2";

  formMaterialContainer.innerHTML = `
        <label for="raw-material-select" class="block mb-2 text-sm font-medium text-gray-900">Raw Material</label>
        <select class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
          <option selected disabled>Raw Material to choose</option>
          <option value="Tepung">Tepung</option>
          <option value="Minyak">Minyak</option>
          <option value="Gula">Gula</option>
          <option value="Garam">Garam</option>
        </select>
        <label for="weight" class="block mb-2 text-sm font-medium text-gray-900">Weight Raw Material</label>
        <input type="number" name="weight" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="1000" required />
        <label for="price" class="block mb-2 text-sm font-medium text-gray-900">Price Raw Material (Rp)</label>
        <input type="number" name="price" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="1000" required />
      `;

  document.getElementById("form-material").appendChild(formMaterialContainer);
});

document
  .getElementById("add-raw-material")
  .addEventListener("click", function () {
    const materialSection = document.getElementById("raw-material-section");

    // Get values from the main form
    const mainSelectedMaterial = document.getElementById(
      "raw-material-select"
    ).value;
    const mainWeight = document.getElementById("weight").value;
    const mainPrice = document.getElementById("price").value;

    // Function to create a material div
    function createMaterialDiv(material, weight, price) {
      const materialDiv = document.createElement("div");
      materialDiv.className =
        "flex items-center justify-between bg-gray-100 p-2 rounded mb-2";
      materialDiv.innerHTML = `
          <span>${material}</span>
          <span>${weight}g</span>
          <span>Rp${price}</span>
          <button class="delete-material bg-red-500 text-white px-2 py-1 rounded-full">Delete</button>
        `;

      // Add delete functionality
      materialDiv
        .querySelector(".delete-material")
        .addEventListener("click", function () {
          materialSection.removeChild(materialDiv);
        });

      return materialDiv;
    }

    // Add main form data to the material section if valid
    if (mainSelectedMaterial && mainWeight && mainPrice) {
      const mainMaterialDiv = createMaterialDiv(
        mainSelectedMaterial,
        mainWeight,
        mainPrice
      );
      materialSection.appendChild(mainMaterialDiv);
    }

    // Get values from dynamically created material forms
    const materialForms = document.querySelectorAll(".material-form");

    materialForms.forEach((formMaterialContainer) => {
      const selectedMaterial =
        formMaterialContainer.querySelector("select").value;
      const weight = formMaterialContainer.querySelector(
        "input[name='weight']"
      ).value;
      const price = formMaterialContainer.querySelector(
        "input[name='price']"
      ).value;

      if (selectedMaterial && weight && price) {
        const materialDiv = createMaterialDiv(selectedMaterial, weight, price);
        materialSection.appendChild(materialDiv);
      }
    });

    // Clear the form materials
    document.getElementById("form-material").innerHTML = "";
    // Hide the modal
    document.getElementById("raw-material-modal").classList.add("hidden");
    // Reset the main form
    document.getElementById("raw-material-select").value = "";
    document.getElementById("weight").value = "";
    document.getElementById("price").value = "";
  });

function resetModalForm() {
  document.getElementById("form-material").innerHTML = "";
}

//Modal Pop Up 2
document.addEventListener("DOMContentLoaded", (event) => {
  const openModalButton = document.getElementById("open-pop-up");
  const closeModalButton = document.getElementById("close-button");
  const batalButton = document.getElementById("cancel-button");
  const modal = document.getElementById("confirmation-modal");
  const addBahanBakuButton = document.getElementById("add-raw-material-button");
  const bahanBakuSection = document.getElementById("raw-material-section");
  const paketNewButton = document.getElementById("paket-new");
  const additionalForms = document.getElementById("additional-forms");

  // Function to create a new Bahan Baku select element
  const createBahanBakuElement = () => {
    const formGroup = document.createElement("div");
    formGroup.className = "w-full mt-4";

    const label = document.createElement("label");
    label.className = "block mb-2 text-sm font-medium text-gray-900";
    label.textContent = "Raw Material";

    const select = document.createElement("select");
    select.className =
      "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5";
    select.innerHTML = `
            <option selected>Raw Material to choose</option>
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
    document.getElementById("menu-name").selectedIndex = 0;
    document.getElementById("menu-price").selectedIndex = 0;
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
