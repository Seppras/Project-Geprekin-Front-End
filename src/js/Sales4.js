// Ambil elemen-elemen form yang dibutuhkan
const avatarInput = document.getElementById("avatarInput");
const firstNameInput = document.getElementById("first_name");
const cuInput = document.getElementById("cuInput");
const menuPriceSelect = document.getElementById("menu-price");
const mokaInput = document.getElementById("mokaInput");
const messageTextarea = document.getElementById("message");

// Ambil tombol-tombol yang dibutuhkan
const closeButton = document.getElementById("close-button");
const batalButton = document.getElementById("batal-button");

// Fungsi untuk mereset nilai-nilai form
function resetFormValues() {
  avatarInput.value = ""; // Reset input file (gambar)
  firstNameInput.value = ""; // Reset input teks (Nama)
  cuInput.value = ""; // Reset input angka (CU)
  menuPriceSelect.selectedIndex = 0; // Reset dropdown (Jenis Sales)
  mokaInput.value = ""; // Reset input angka (Sales Moka)
  messageTextarea.value = ""; // Reset textarea (Keterangan)
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

// Anda mungkin memerlukan fungsi lain untuk membuka modal atau melakukan aksi Kirim
// sesuai dengan logika aplikasi Anda.
