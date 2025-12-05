
"use strict";

document.addEventListener("DOMContentLoaded", () => {

    let lemon1 = document.querySelector(".lemon1");
    let lemon2 = document.querySelector(".lemon2");
    let leaf = document.querySelector(".leaf");

    let movement = 25;

    document.body.addEventListener("mousemove", function (e) {
        let width = window.innerWidth;
        let height = window.innerHeight;

        let centerX = width / 2;
        let centerY = height / 2;

        let offsetX = (e.clientX - centerX) / centerX * movement;
        let offsetY = (e.clientY - centerY) / centerY * movement;

        if (lemon1) lemon1.style.transform = `translate(calc(-50% + ${offsetX * 0.4}px), ${offsetY * 0.4}px)`;
        if (lemon2) lemon2.style.transform = `translate(calc(-50% + ${offsetX * -0.3}px), ${offsetY * -0.3}px)`;
        if (leaf) leaf.style.transform = `translate(calc(-50% + ${offsetX * 0.6}px), ${offsetY * 0.6}px)`;
    });

    document.body.addEventListener("mouseleave", () => {
        if (lemon1) lemon1.style.transform = `translate(-50%, 0px)`;
        if (lemon2) lemon2.style.transform = `translate(-50%, 0px)`;
        if (leaf) leaf.style.transform = `translate(-50%, 0px)`;
    });

    window.addEventListener("scroll", function () {
        let navbar = document.querySelector(".navbar");
        let medsos = document.querySelector(".sosmed-list");
        let logo = document.querySelector(".logo-dew");
        let menuList = document.querySelectorAll(".menu-list, .menu-list2");

        let scrolled = window.scrollY > 50;

        navbar?.classList.toggle("scrolled", scrolled);
        medsos?.classList.toggle("scrolled", scrolled);
        logo?.classList.toggle("scrolled", scrolled);
        menuList.forEach(menu => menu.classList.toggle("scrolled", scrolled));
    });

    document.querySelectorAll('.dropdown-hover .dropdown-toggle').forEach(item => {
        item.addEventListener('click', e => e.preventDefault());
    });

    let productCols = document.querySelectorAll(
        ".product-grid .col-lg-3, .product-grid .col-md-4, .product-grid .col-sm-6, .product-grid .col-12"
    );

    productCols.forEach((col, index) => {
        let card = col.querySelector(".card-best");
        if (!card) return;

        let titleEl = card.querySelector(".card-title");
        if (!titleEl) return;

        let title = titleEl.textContent.toLowerCase();

        let flavor = "jamu-twist";
        if (title.includes("kopi")) {
            flavor = "kopi-blossom";
        } else if (title.includes("aloe") || title.includes("lychee")) {
            flavor = "aloe-lychee";
        }

        let sweetness = index % 2 === 0 ? "low-cal" : "no-sugar";

        let size = index < 4 ? "250" : "330";

        col.dataset.flavor = flavor;
        col.dataset.sweetness = sweetness;
        col.dataset.size = size;

        col.classList.add("product-item");
    });

    let checkboxes = document.querySelectorAll(".filter-checkbox");
    let products = document.querySelectorAll(".product-item");

    function applyFilters() {
        let activeFilters = {};

        checkboxes.forEach((cb) => {
            let group = cb.dataset.group;
            let value = cb.value;

            if (!activeFilters[group]) activeFilters[group] = new Set();
            if (cb.checked) activeFilters[group].add(value);
        });

        let noFilterActive = Object.values(activeFilters).every(set => set.size === 0);

        products.forEach((product) => {
            let visible = true;

            if (!noFilterActive) {
                for (const [group, values] of Object.entries(activeFilters)) {
                    if (values.size === 0) continue;

                    if (!values.has(product.dataset[group])) {
                        visible = false;
                        break;
                    }
                }
            }

            product.classList.toggle("d-none", !visible);
        });
    }

    applyFilters();
    checkboxes.forEach(cb => cb.addEventListener("change", applyFilters));

});



$(document).ready(function () {
    $(".owl-menu").owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        margin: 40,
        nav: true,
        dots: false,
        responsive: {
            0: { items: 1 },
            576: { items: 2 },
            992: { items: 3 }
        },
        slideBy: 1
    });

    $(".owl-best").owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        margin: 40,
        nav: true,
        dots: false,
        responsive: {
            0: { items: 1 },
            576: { items: 2 },
            992: { items: 4 }
        },
        slideBy: 1
    });
    $(".owl-testimonial").owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        margin: 40,
        nav: true,
        dots: false,
        responsive: {
            0: { items: 1 },
            576: { items: 1 },
            992: { items: 1 }
        },
        slideBy: 1
    });
});

