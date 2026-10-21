function pindahHalaman(idHalamanTujuan) {
    const semuaHalaman = document.querySelectorAll('.halaman');
    
    semuaHalaman.forEach(halaman => {
        halaman.classList.remove('aktif');
    });

    document.getElementById(idHalamanTujuan).classList.add('aktif');
}

const lagu = document.getElementById("backsound");
const tombol = document.getElementById("tombolMusik");

// Perbaikan: Ubah huruf 'L' menjadi kapital, gunakan titik dua (:), dan tambahkan koma (,)
const daftarLirik = [
    {waktu: 0, teks: "Mana Senyumnya ✨"},
    {waktu: 3, teks: "Sudah cukup marahnya 🤏🏻"},
    {waktu: 5, teks: "Tak baik lama-lama 😞"},
    {waktu: 7, teks: "Sudah setengah hari 🌞🕰️"},
    {waktu: 8, teks: "Kita tak bicara..."},
    {waktu: 11, teks: "Jujur diam-diam kau merindukanku 🙂‍↔️"},
    {waktu: 15, teks: "Bohong tak kurang"},
    {waktu: 17, teks: "Tanpa orang yang..."},
    {waktu: 19, teks: "Paling ku Sayang Satu Bumi 🐻🌎"},
    {waktu: 21, teks: "Naik Setengah lebih tinggi 📈"},
    {waktu: 24, teks: "Biar 2000x..."},
    {waktu: 28, teks: "Kita bertengkar tapi.."},
    {waktu: 31, teks: "Yang penting kau baik balik lagi 🌻✨"}
];

const teksLirik = document.getElementById("teksLirik");

lagu.addEventListener("timeupdate", function() {
    const waktuSekarang = lagu.currentTime;

    for (let i = daftarLirik.length - 1; i >= 0; i--) {
        if (waktuSekarang >= daftarLirik[i].waktu) {
            teksLirik.textContent = daftarLirik[i].teks;
            break; 
        }
    }
});

tombol.addEventListener("click", function() {
    if (lagu.paused) {
        lagu.play(); 
        tombol.textContent = "⏸️ Jeda Musik"; 
    } else {
        lagu.pause(); 
        tombol.textContent = "🎵 Putar Musik"; 
    }
});