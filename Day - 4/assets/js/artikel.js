let dataArtikel = [];

function getCurrentDate() {
    const today = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return today.toLocaleDateString('id-ID', options);
}

function SubmitArtikel(event) {
    // Mencegah halaman direfresh saat form disubmit
    event.preventDefault();

    let inputJudul = document.getElementById("inputJudul").value;
    let inputKonten = document.getElementById("inputKonten").value;
    let inputGambar = document.getElementById("inputGambar").files;

    // Membuat array untuk menyimpan pesan kesalahan
    var errors = [];

    // Memeriksa setiap input dan menambahkan pesan kesalahan ke array
    if (inputJudul === "") {
        errors.push("Judul Belum Diisi");
    }
    if (inputKonten === "") {
        errors.push("Konten Harus dilengkapi");
    }
    if (inputGambar.length === 0) {
        errors.push("Gambar Harus dicantumkan");
    }

    // Menampilkan alert jika ada pesan kesalahan
    if (errors.length > 0) {
        alert("Berikut adalah kesalahan yang perlu diperbaiki:\n\n" + errors.join("\n") + "\n===================================\nsegera perbaiki errornya sebelum diupload\nterimakasih");
        return;
    }

    // Mengambil sumber dari file image (jpg/png)
    inputGambar = URL.createObjectURL(inputGambar[0]);

    // Data ini akan kita masukkan ke dalam sebuah array
    const Artikel = {
        Judul: inputJudul,
        Konten: inputKonten,
        Gambar: inputGambar,
        Dipostingpada: getCurrentDate(),
        Penulis: "Gunawan Hidayat",
    };

    dataArtikel.push(Artikel);
    console.log("dataArray:", dataArtikel);
    renderArtikel();
}

function renderArtikel() {
    document.getElementById("konten").innerHTML = "";
    for (let index = 0; index < dataArtikel.length; index++) {
        document.getElementById("konten").innerHTML += `
            <div class="list-artikel-items">
                <div class="artikel-gambar">
                    <img src="${dataArtikel[index].Gambar}" alt="upload gambar" />
                </div>
                <div class="artikel-konten">
                    <div class="btn-group">
                        <button class="btn-edit"> Edit Artikel </button>
                        <button class="btn-post"> Post Artikel </button>
                    </div>
                    <h1>
                        <a href="Artikel-detail.html" target="_blank">${dataArtikel[index].Judul}</a>
                    </h1>
                    <div class="detail-artikel">
                        ${dataArtikel[index].Dipostingpada} | ${dataArtikel[index].Penulis}
                    </div>
                    <p>
                    ${dataArtikel[index].Konten}
                    </p>
                </div>
            </div>
        `;
    }
}
