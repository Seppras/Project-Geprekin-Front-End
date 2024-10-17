// Table
$(document).ready(function () {
  var salesData = [
    {
      name: "Ayam",
      expens: "PCS",
      variant: "Rp. 2.000",
      shift: "1",
      date: "2015-01-01",
    },
    // other data
  ];

  var wasteData = [
    {
      type: "Menu",
      name: "Ayam",
      qty: "PCS",
      unit: "Rp. 2.000",
      shift: "2",
      date: "2015-01-01",
    },
    // other data
  ];

  var soldData = [
    {
      name: "Ayam",
      expens: "PCS",
      variant: "Rp. 2.000",
      shift: "2",
      date: "2015-01-01",
    },
    // other data
  ];

  var stokData = [
    {
      name: "Ayam",
      qty: "PCS",
      unit: "Rp. 2.000",
      mutation: "1",
      shift: "2",
      date: "2015-01-01",
    },
    // other data
  ];

  var salesColumns = [
    { data: "name", title: "Product Name" },
    { data: "expens", title: "Expensi" },
    { data: "variant", title: "Variant" },
    { data: "shift", title: "Shift" },
    { data: "date", title: "Date" },
  ];

  var wasteColumns = [
    { data: "type", title: "Waste Type" },
    { data: "name", title: "Item Name" },
    { data: "qty", title: "QTY" },
    { data: "unit", title: "Unit" },
    { data: "shift", title: "Shift" },
    { data: "date", title: "Date" },
  ];

  var soldColumns = [
    { data: "name", title: "Product Name" },
    { data: "expens", title: "Expensi" },
    { data: "variant", title: "Variant" },
    { data: "shift", title: "Shift" },
    { data: "date", title: "Date" },
  ];

  var stokColumns = [
    { data: "name", title: "Item Name" },
    { data: "qty", title: "QTY" },
    { data: "unit", title: "Unit" },
    { data: "mutation", title: "Mutation" },
    { data: "shift", title: "Shift" },
    { data: "date", title: "Date" },
  ];

  var table = $("#example").DataTable({
    data: salesData,
    columns: salesColumns,
    language: {
      paginate: {
        first: "Start",
        last: "End",
        next: "Next",
        previous: "Previous",
      },
    },
  });

  function updateTable(newData, newColumns) {
    table.clear().destroy(); // Clear and destroy the existing table
    $("#example thead").empty(); // Clear the header
    $("#example tbody").empty(); // Clear the body

    // Reinitialize the table with the new data and columns
    table = $("#example").DataTable({
      data: newData,
      columns: newColumns,
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
  }

  $("#tableSelect").on("change", function () {
    var selectedValue = $(this).val();
    if (selectedValue === "Sales") {
      updateTable(salesData, salesColumns);
      $("#tableTitle").text("Sales");
    } else if (selectedValue === "Waste") {
      updateTable(wasteData, wasteColumns);
      $("#tableTitle").text("Waste");
    } else if (selectedValue === "Sold") {
      updateTable(soldData, soldColumns);
      $("#tableTitle").text("Sold");
    } else if (selectedValue === "Stock") {
      updateTable(stokData, stokColumns);
      $("#tableTitle").text("Stock");
    }
  });

  // Initialize the table with sales data by default
  updateTable(salesData, salesColumns);
});

// Modal Pop-Up
// Ambil elemen-elemen form yang dibutuhkan
const avatarInput = document.getElementById("avatarInput");
const firstNameInput = document.getElementById("first_name");
const cuInputList = document.querySelectorAll(
  "#salesForm input[type='number']"
);

// Ambil tombol-tombol yang dibutuhkan
const closeButton = document.getElementById("close-button");
const batalButton = document.getElementById("batal-button");

// Fungsi untuk mereset nilai-nilai form
function resetFormValues() {
  avatarInput.value = ""; // Reset input file (gambar)
  firstNameInput.value = ""; // Reset input teks (Nama)
  cuInputList.forEach((input) => (input.value = "")); // Reset semua input angka
}

// Tambahkan event listener untuk tombol-tombol yang dibutuhkan

// Tombol Tutup Modal
closeButton.addEventListener("click", function () {
  resetFormValues(); // Panggil fungsi reset saat modal ditutup
  closeModal(); // Fungsi untuk menutup modal (bisa disesuaikan dengan kebutuhan)
});

// Tombol Batal
batalButton.addEventListener("click", function () {
  resetFormValues(); // Panggil fungsi reset saat tombol Batal diklik
});

// Fungsi untuk menutup modal (disesuaikan dengan kebutuhan)
function closeModal() {
  const modal = document.getElementById("confirmation-modal");
  modal.classList.add("hidden");
}

// Modal Pop-Up 2
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
