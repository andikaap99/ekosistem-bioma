// ubah opacity bg ketika scroll
window.addEventListener("scroll", function () {
    const navbar = document.getElementById("navbar-desktop");
    if (window.scrollY > 5) {
        navbar.style.backgroundColor = "rgb(205, 206, 207, 1)"; // Opacity lebih tinggi
    } else {
        navbar.style.backgroundColor = "rgba(205, 206, 207, 0.3)"; // Opacity awal
    }
});



//function untuk menampilkan sidebar
const menuBtn = document.getElementById('menu-btn');
const navbar = document.getElementById('navbar');
let isOpenNavBar = false;

menuBtn.addEventListener('click', () => {
    isOpenNavBar = !isOpenNavBar;
    navbar.classList.toggle('-translate-y-full', !isOpenNavBar);
    navbar.classList.toggle('translate-y-0', isOpenNavBar);
});


const sidebarToggle = document.getElementById('sidebarToggle');
const sidebar = document.getElementById('sidebar');

let sidebarOpen = false;

sidebarToggle.addEventListener('click', () => {
    if (sidebarOpen) {
        sidebar.style.left = "-100%";
        sidebarToggle.innerHTML = "➜"; // Ubah ikon ke kanan
    } else {
        sidebar.style.left = "0";
        sidebarToggle.innerHTML = "⬅"; // Ubah ikon ke kiri
    }
    sidebarOpen = !sidebarOpen;
});


// function load isi konten (belum beres)
function loadContent(page) {
    fetch(page)
        .then(response => response.text())
        .then(html => {
            document.getElementById('content').innerHTML = html;
        })
        .catch(error => console.error('Gagal memuat konten:', error));
}


// function untuk buka anak menu
let activeMenu = null;

function toggleMenu(id) {
    const submenu = document.getElementById(id);

    //tutup menu yang terbuka
    if (activeMenu && activeMenu !== submenu) {
            activeMenu.classList.add("hidden");
    }

    //toggle menu yang di klik
    submenu.classList.toggle("hidden");

    //simpan active menu
    activeMenu = submenu.classList.contains("hidden") ? null : submenu;
}