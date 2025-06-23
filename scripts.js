// scripts.js

// Fungsi modal Detail dan Zoom (ini harus ada di scripts.js karena dipanggil dari onclick di HTML)
function showDetailModal(name, image, description, price) {
    const detailModal = document.getElementById('detail_modal');
    if (detailModal) {
        document.getElementById('modal_name').innerText = name;
        document.getElementById('modal_image').src = image;
        document.getElementById('modal_description').innerText = description;
        document.getElementById('modal_price').innerText = `Rp ${price}`;
        detailModal.style.display = 'flex';
    } else {
        console.warn("Modal detail tidak ditemukan di halaman ini.");
    }
}

function closeDetailModal() {
    const detailModal = document.getElementById('detail_modal');
    if (detailModal) {
        detailModal.style.display = 'none';
    }
}

function showZoomModal(image) {
    const zoomModal = document.getElementById('zoom_modal');
    if (zoomModal) {
        document.getElementById('zoom_image').src = image;
        zoomModal.style.display = 'flex';
    } else {
        console.warn("Modal zoom tidak ditemukan di halaman ini.");
    }
}

function closeZoomModal() {
    const zoomModal = document.getElementById('zoom_modal');
    if (zoomModal) {
        zoomModal.style.display = 'none';
    }
}


// Hamburger Menu Script dan Carousel (dibungkus dalam DOMContentLoaded)
document.addEventListener('DOMContentLoaded', () => {
    // Hamburger Menu Logic
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });

        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
    } else {
        console.warn("Hamburger atau Nav Links tidak ditemukan. Pastikan elemen HTML ada.");
    }

    // Carousel script (hanya relevan untuk index.html)
    const carouselImages = document.querySelectorAll('.carousel img');
    if (carouselImages.length > 0) {
        let index = 0;
        setInterval(() => {
            carouselImages.forEach(img => img.classList.remove('active'));
            index = (index + 1) % carouselImages.length;
            carouselImages[index].classList.add('active');
        }, 3000);
    }

    console.log("DOM content loaded and external script is running.");
});