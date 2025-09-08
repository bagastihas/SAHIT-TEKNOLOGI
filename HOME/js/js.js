document.addEventListener('DOMContentLoaded', function() {
    // Fungsi untuk mengamati elemen dan menerapkan animasi
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.animate-on-scroll');

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    // Opsional: Hentikan mengamati setelah animasi pertama kali muncul
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1 // Ketika 10% dari elemen terlihat
        });

        elements.forEach(element => {
            observer.observe(element);
        });
    };

    animateOnScroll();

    // Smooth scroll for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Basic form validation (saran)
    const contactForm = document.querySelector('.upgrade-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            const nama = document.getElementById('nama').value;
            const email = document.getElementById('email').value;
            const telepon = document.getElementById('Telepon').value; // Mengambil dari id="Telepon"
            const pesan = document.getElementById('pesan').value;

            if (nama === '' || email === '' || telepon === '' || pesan === '') {
                e.preventDefault();
                alert('Semua kolom harus diisi!');
            } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                e.preventDefault();
                alert('Masukkan alamat email yang valid!');
            } else if (!/^[0-9+ ]+$/.test(telepon)) {
                e.preventDefault();
                alert('Nomor telepon hanya boleh berisi angka dan tanda plus.');
            } else {
                alert('Formulir berhasil dikirim!');
            }
        });
    }
});