
console.log("bismillah praktikum dimulai");
 
// ===== AKTIVITAS 1: DOM SELECTION =====
 
// judul utama dan sub judul
const judulUtama = document.getElementById("judul-utama");
const subJudul = document.querySelector("#sub-judul");
 
// kartu 1: manipulasi teks dan style
const teksPreview = document.getElementById("teks-preview");
const boxPreview = document.getElementById("box-preview");
const cardManipulasi = document.getElementById("card-manipulasi");
 
// tombol-tombol kartu 1
const btnUbahTeks = document.getElementById("btn-ubah-teks");
const btnToggleWarna = document.getElementById("btn-toggle-warna");
const btnReset = document.getElementById("btn-reset");
 
// kartu 2: catatan dinamis (to-do list sederhana)
const inputCatatan = document.getElementById("input-catatan");
const btnTambah = document.getElementById("btn-tambah");
const daftarCatatan = document.getElementById("daftar-catatan");
const jumlahCatatan = document.getElementById("jumlah-catatan");
const pesanKosong = document.getElementById("pesan-kosong");
 
// ===== AKTIVITAS 2: MANIPULASI DOM =====
 
// a. ubah teks dan warna secara langsung
btnUbahTeks.addEventListener("click", function () {
    // .innerText = mengganti isi teks di dalam elemen
    teksPreview.innerText = "Hebat! Teks ini berhasil diubah pake DOM!";
    // .style.color = mengubah warna teks (inline style)
    teksPreview.style.color = "#4138ee";
    console.log("[DOM] Teks Preview telah diperbaharui!");
});
 
// b. manipulasi class CSS
btnToggleWarna.addEventListener("click", function () {
    // classList.toggle = tambah class jika belum ada, hapus jika sudah ada
    boxPreview.classList.toggle("active-mode");
    cardManipulasi.classList.toggle("highlight");
    console.log("[DOM] Class CSS telah diperbaharui!");
});
 
// c. tombol reset
btnReset.addEventListener("click", function () {
    // 1. kembalikan teks
    teksPreview.innerText = "hai teks ini siap di ubah oleh javascript DOM";
 
    // 2. kosongkan warna teks (kembali ke warna semula)
    teksPreview.style.color = "";
 
    // 3. hapus class CSS yang sudah ditambahkan
    boxPreview.classList.remove("active-mode");
    cardManipulasi.classList.remove("highlight");
    console.log("[DOM] Tampilan di-reset!");
});
 
// ===== AKTIVITAS 3 & 4: ELEMEN DINAMIS & EVENT HANDLING =====
 
// Langkah 1: variabel penampung jumlah catatan
// "let" dipakai karena nilainya berubah-ubah (bertambah/berkurang)
let totalCatatan = 0;
 
// Langkah 2: fungsi update angka counter & pesan status
function perbaruiJumlah() {
    // tampilkan angka total di <span id="jumlah-catatan">
    jumlahCatatan.innerText = totalCatatan;
 
    if (totalCatatan === 0) {
        // jika 0: hapus class "hidden" supaya pesan "belum ada catatan" muncul
        pesanKosong.classList.remove("hidden");
    } else {
        // jika > 0: tambah class "hidden" supaya pesan tersembunyi
        pesanKosong.classList.add("hidden");
    }
}
 
// Langkah 3: fungsi utama tambah catatan
function tambahCatatan() {
    // 3.1 ambil teks dari input, trim() menghapus spasi di awal/akhir
    const isiTeks = inputCatatan.value.trim();
 
    // 3.2 validasi: jika kosong tampilkan alert lalu hentikan fungsi
    if (isiTeks === "") {
        alert("Catatan kamu tidak boleh kosong!");
        return;
    }
 
    // 3.3 buat elemen <li> baru
    const liBaru = document.createElement("li");
    liBaru.className = "note-item";
 
    // 3.4 isi <li> dengan teks catatan dan tombol hapus (pakai backtick)
    liBaru.innerHTML = `<span>${isiTeks}</span> <button class="btn-hapus">Hapus</button>`;
 
    // 3.5 pasang event listener pada tombol hapus milik <li> ini
    const btnHapus = liBaru.querySelector(".btn-hapus");
    btnHapus.addEventListener("click", function () {
        liBaru.remove(); // hapus <li> dari layar
        totalCatatan--; // kurangi total 1
        perbaruiJumlah(); // update angka di layar
        console.log(`[DOM] Catatan "${isiTeks}" dihapus.`);
    });
 
    // 3.6 masukkan <li> ke dalam <ul id="daftar-catatan">
    daftarCatatan.appendChild(liBaru);
 
    // 3.7 kosongkan input supaya bisa diketik lagi
    inputCatatan.value = "";
 
    // 3.8 tambah total 1, lalu update angka di layar
    totalCatatan++;
    perbaruiJumlah();
 
    console.log(`[DOM] Catatan "${isiTeks}" ditambahkan.`);
}
 
// Langkah 4: klik tombol "Tambah"
btnTambah.addEventListener("click", tambahCatatan);
 
// Langkah 5: tekan "Enter" di kolom input
inputCatatan.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        tambahCatatan();
    }
});
 
// tampilkan kondisi awal (pesan kosong muncul, jumlah = 0)
perbaruiJumlah();
liBaru.innerHTML = `<span>${isiTeks}</span> <button class="btn-hapus">Hapus</button>`;