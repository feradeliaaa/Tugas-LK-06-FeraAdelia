document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let nama = document.getElementById("nama").value;
    let email = document.getElementById("email").value;
    let telp = document.getElementById("telp").value;
    let kategori = document.getElementById("kategori").value;
    let kesan = document.getElementById("kesan").value;
    let pesan = document.getElementById("pesan").value;

    alert("Data evaluasi berhasil dikirim!");

    document.getElementById("hasil").innerHTML = `
        <h3 class="judul-hasil">Keterangan Berhasil Dikirim</h3>

        <div class="card-hasil">
            <h2>Data Evaluasi Berhasil Dikirim <span class="check">✅</span></h2>
            
            <p><b>Nama:</b> ${nama}</p>
            <p><b>Email:</b> ${email}</p>
            <p><b>No HP:</b> ${telp}</p>
            <p><b>Kategori:</b> ${kategori}</p>
            <p><b>Kesan:</b> ${kesan}</p>
            <p><b>Kritik & Saran:</b> ${pesan}</p>
        </div>
    `;

    document.getElementById("contactForm").reset();
});