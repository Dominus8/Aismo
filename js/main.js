// ---------- Header Toggle Start ---------- //
let menuBtn = document.getElementById("menuBtn");
let menuList = document.querySelector(".menu");
menuBtn.addEventListener("click", ()=> {
    menuBtn.classList.toggle("fa-xmark");
    menuList.classList.toggle("open");
    document.body.classList.toggle('no-scroll')
});

let menuLinks = document.querySelectorAll(".menu__list-link");
for (let menuLink of menuLinks) {
    menuLink.addEventListener("click", ()=> {
        menuBtn.classList.toggle("fa-xmark");
        menuList.classList.toggle("open");
        document.body.style.overflowY = 'visible';
    });
}
// ---------- Header Toggle End ---------- //


const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 30,
    freeMode: true,
    autoplay: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});
