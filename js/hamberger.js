const btn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

btn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

const dropdownBtn = document.getElementById('dropdownBtn');
const dropdownMenu = document.getElementById('dropdownMenu');

dropdownBtn.addEventListener('click', () => {
    dropdownMenu.classList.toggle('hidden');
});

// ปิด dropdown ถ้าคลิกนอกเมนู
window.addEventListener('click', (e) => {
    if (!dropdownBtn.contains(e.target) && !dropdownMenu.contains(e.target)) {
        dropdownMenu.classList.add('hidden');
    }
});