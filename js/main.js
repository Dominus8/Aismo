// ---------- Header Toggle ---------- //
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

// ---------- Swiper ---------- //
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

// ---------- Tabs Start ---------- //
const showTab = (elTabBtn) => {
    const elTab = elTabBtn.closest('.tab');
    if (elTabBtn.classList.contains('tab-btn-active')) {
        return;
    }
    const targetId = elTabBtn.dataset.targetId;
    const elTabPane = elTab.querySelector(`.tab-pane[data-id="${targetId}"]`);
    if (elTabPane) {
        const elTabBtnActive = elTab.querySelector('.tab-btn-active');
        elTabBtnActive.classList.remove('tab-btn-active');
        const elTabPaneShow = elTab.querySelector('.tab-pane-show');
        elTabPaneShow.classList.remove('tab-pane-show');
        elTabBtn.classList.add('tab-btn-active');
        elTabPane.classList.add('tab-pane-show');
    }
}

document.addEventListener('click', (e) => {
    if (e.target && !e.target.closest('.tab-btn')) {
        return;
    }
    const elTabBtn = e.target.closest('.tab-btn');
    showTab(elTabBtn);
});
