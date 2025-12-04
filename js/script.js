
"use strict";

document.addEventListener("DOMContentLoaded", () => {

    /* ===============================
    PARALLAX LEMON + LEAF EFFECT
    ================================ */
    const lemon1 = document.querySelector(".lemon1");
    const lemon2 = document.querySelector(".lemon2");
    const leaf = document.querySelector(".leaf");

    const movement = 25;

    document.body.addEventListener("mousemove", function (e) {

        const width = window.innerWidth;
        const height = window.innerHeight;

        const centerX = width / 2;
        const centerY = height / 2;

        const offsetX = (e.clientX - centerX) / centerX * movement;
        const offsetY = (e.clientY - centerY) / centerY * movement;

        lemon1.style.transform = `translate(calc(-50% + ${offsetX * 0.4}px), ${offsetY * 0.4}px)`;
        lemon2.style.transform = `translate(calc(-50% + ${offsetX * -0.3}px), ${offsetY * -0.3}px)`;
        leaf.style.transform = `translate(calc(-50% + ${offsetX * 0.6}px), ${offsetY * 0.6}px)`;
    });

    document.body.addEventListener("mouseleave", () => {
        lemon1.style.transform = `translate(-50%, 0px)`;
        lemon2.style.transform = `translate(-50%, 0px)`;
        leaf.style.transform = `translate(-50%, 0px)`;
    });


    /* ===============================
            NAVBAR SCROLL EFFECT
    ================================ */
    window.addEventListener("scroll", function () {
        const navbar = document.querySelector(".navbar");
        const medsos = document.querySelector(".sosmed-list");
        const logo = document.querySelector(".logo-dew");
        const menuList = document.querySelectorAll(".menu-list, .menu-list2");
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
            medsos.classList.add("scrolled");
            logo.classList.add("scrolled");
            menuList.forEach(menu => menu.classList.add("scrolled"));
        } else {
            navbar.classList.remove("scrolled");
            medsos.classList.remove("scrolled");
            logo.classList.remove("scrolled");
            menuList.forEach(menu => menu.classList.remove("scrolled"));
        }
    });

    document.querySelectorAll('.dropdown-hover .dropdown-toggle').forEach(item => {
        item.addEventListener('click', function (e) {
            e.preventDefault(); // cegah toggle klik
        });
    });

});

