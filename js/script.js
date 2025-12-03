"use strict";

document.addEventListener("DOMContentLoaded", () => {

    const lemon1 = document.querySelector(".lemon1");
    const lemon2 = document.querySelector(".lemon2");
    const leaf = document.querySelector(".leaf");

    const movement = 25; // sensitivitas lebih besar = gerak lebih jauh

    document.body.addEventListener("mousemove", function (e) {

        const width = window.innerWidth;
        const height = window.innerHeight;

        const centerX = width / 2;
        const centerY = height / 2;

        // Hitung jarak X dan Y dari tengah
        const offsetX = (e.clientX - centerX) / centerX * movement;
        const offsetY = (e.clientY - centerY) / centerY * movement;

        // Terapkan movement 2D ke masing-masing elemen
        lemon1.style.transform = `translate(calc(-50% + ${offsetX * 0.4}px), ${offsetY * 0.4}px)`;
        lemon2.style.transform = `translate(calc(-50% + ${offsetX * -0.3}px), ${offsetY * -0.3}px)`;
        leaf.style.transform   = `translate(calc(-50% + ${offsetX * 0.6}px), ${offsetY * 0.6}px)`;
    });

    // Reset ketika mouse keluar
    document.body.addEventListener("mouseleave", () => {
        lemon1.style.transform = `translate(-50%, 0px)`;
        lemon2.style.transform = `translate(-50%, 0px)`;
        leaf.style.transform   = `translate(-50%, 0px)`;
    });
});

