document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    // Ambil data
    let nama = document.getElementById("nama").value.trim();
    let email = document.getElementById("email").value.trim();
    let telp = document.getElementById("telp").value.trim();
    let kategori = document.getElementById("kategori").value;
    let kesan = document.getElementById("kesan").value.trim();
    let pesan = document.getElementById("pesan").value.trim();

    // VALIDASI TAMBAHAN
    if (!/^[0-9]+$/.test(telp)) {
        tampilNotif("Nomor HP harus berupa angka!", "error");
        return;
    }

    if (telp.length < 10) {
        tampilNotif("Nomor HP terlalu pendek!", "error");
        return;
    }

    // LOADING EFFECT
    let hasilDiv = document.getElementById("hasil");
    hasilDiv.innerHTML = `<p style="text-align:center;">⏳ Mengirim data...</p>`;

    setTimeout(() => {

        // SANITASI (hindari input aneh)
        function safe(text) {
            return text.replace(/</g, "&lt;").replace(/>/g, "&gt;");
        }

        hasilDiv.innerHTML = `
            <h3 class="judul-hasil">✔ Data Berhasil Dikirim</h3>

            <div class="card-hasil">
                <h2>Terima Kasih 🎉</h2>

                <p><b>Nama:</b> ${safe(nama)}</p>
                <p><b>Email:</b> ${safe(email)}</p>
                <p><b>No HP:</b> ${safe(telp)}</p>
                <p><b>Kategori:</b> ${safe(kategori)}</p>
                <p><b>Kesan:</b> ${safe(kesan)}</p>
                <p><b>Kritik & Saran:</b> ${safe(pesan)}</p>

                <button onclick="resetHasil()" class="btn-reset">Reset</button>
            </div>
        `;

        hasilDiv.style.opacity = 0;
        setTimeout(() => {
            hasilDiv.style.opacity = 1;
        }, 100);

        tampilNotif("Data berhasil dikirim!", "success");

        document.getElementById("contactForm").reset();

    }, 800); // delay biar terasa real
});


// 🔔 NOTIFIKASI CUSTOM
function tampilNotif(pesan, tipe) {
    let notif = document.createElement("div");
    notif.className = `notif ${tipe}`;
    notif.innerText = pesan;

    document.body.appendChild(notif);

    setTimeout(() => {
        notif.remove();
    }, 3000);
}


// 🔄 RESET HASIL
function resetHasil() {
    document.getElementById("hasil").innerHTML = "<p>Data dikosongkan.</p>";
}