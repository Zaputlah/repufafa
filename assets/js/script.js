fetch('assets/json/imgs.json')
  .then(response => response.json())
  .then(data => {
    const fiturList = document.getElementById("fitur-list");
    data.forEach(item => {
      const card = `
        <a href="${item.link}" class="min-w-[180px] rounded-lg overflow-hidden shadow hover:shadow-lg transition transform hover:-translate-y-1 flex-shrink-0">
          <img src="${item.img}" alt="${item.alt}" class="w-full h-72 object-cover">
        </a>
      `;
      fiturList.innerHTML += card;
    });
  })
  .catch(err => console.error("Gagal memuat JSON:", err));

   const ads = [
    {
      img: "assets/imgs/iklan1.jpg", // gambar iklan
      url: "https://contohiklan.com", // link iklan
      start: "2025-08-01", // mulai tayang
      end: "2025-08-31" // selesai tayang
    }
  ];

  // Default banner kalau iklan sudah habis
  const defaultAd = {
    img: "assets/imgs/default-banner.jpg",
    url: "#"
  };

  // Cek iklan aktif
  function loadAd() {
    const today = new Date();
    let activeAd = null;

    ads.forEach(ad => {
      const startDate = new Date(ad.start);
      const endDate = new Date(ad.end);

      if (today >= startDate && today <= endDate) {
        activeAd = ad;
      }
    });

    // Pasang iklan
    const adImage = document.getElementById("ad-image");
    const adLink = document.getElementById("ad-link");

    if (activeAd) {
      adImage.src = activeAd.img;
      adLink.href = activeAd.url;
    } else {
      adImage.src = defaultAd.img;
      adLink.href = defaultAd.url;
    }
  }

  loadAd();

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("contactForm").addEventListener("submit", function(event) {
    let nama = document.getElementById("nama").value.trim();
    let email = document.getElementById("email").value.trim();
    let pesan = document.getElementById("pesan").value.trim();

    let namaRegex = /^[A-Za-z\s]+$/;
    let pesanRegex = /^[A-Za-z\s]+$/;
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!namaRegex.test(nama)) {
      alert("Nama hanya boleh berisi huruf dan spasi.");
      event.preventDefault();
      return;
    }

    if (!emailRegex.test(email)) {
      alert("Format email tidak valid.");
      event.preventDefault();
      return;
    }

    if (!pesanRegex.test(pesan)) {
      alert("Pesan hanya boleh berisi huruf dan spasi.");
      event.preventDefault();
      return;
    }
  });
});