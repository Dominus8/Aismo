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

// ---------- Увеличенный шрифт ---------- //
let texts = document.querySelectorAll('.small-font');
let glassesBtn = document.querySelector("#glassesBtn");

glassesBtn.addEventListener('click', () => {
    for (let text of texts) {
        text.classList.toggle('big-font');
    }
});

// ---------- Модалки ---------- //

if(document.getElementById('cityPortals')){

document.getElementById('cityPortals').onclick=function(){
        document.getElementById('city-portals').style.display = "block";
}
document.getElementById('modal-close-button').onclick=function(){
    document.getElementById('city-portals').style.display = "none";
}

document.getElementById('socialProtection').onclick=function(){
    document.getElementById('social-protection').style.display = "block";
}
document.getElementById('modal-close-button2').onclick=function(){
    document.getElementById('social-protection').style.display = "none";
}


document.getElementById('localGovernment').onclick=function(){
    document.getElementById('local-government').style.display = "block";
}
document.getElementById('modal-close-button3').onclick=function(){
    document.getElementById('local-government').style.display = "none";
}



document.getElementById('callBack').onclick=function(){
    document.getElementById('callback').style.display = "block";
}
document.getElementById('modal-close-button4').onclick=function(){
    document.getElementById('callback').style.display = "none";
}

document.getElementById('callBack2').onclick=function(){
    document.getElementById('callback2').style.display = "block";
}
document.getElementById('modal-close-button5').onclick=function(){
    document.getElementById('callback2').style.display = "none";
}




window.onclick=function(event){
    if(event.target==document.getElementById('city-portals')){
        document.getElementById('city-portals').style.display = "none";
    }
    if(event.target==document.getElementById('social-protection')){
        document.getElementById('social-protection').style.display = "none";
    }
    if(event.target==document.getElementById('local-government')){
        document.getElementById('local-government').style.display = "none";
    }
    if(event.target==document.getElementById('callback')){
        document.getElementById('callback').style.display = "none";
    }
    if(event.target==document.getElementById('callback2')){
        document.getElementById('callback2').style.display = "none";
    }
}
}

if(document.getElementById('taskThreeList')){
    if(document.getElementById('taskThreeList').style.overflow = "hidden" ){
        document.getElementById('taskThreeMore').onclick=function(){
        document.getElementById('taskThreeList').style.overflow = "visible";
        document.getElementById('taskThreeList').style.height = "auto";
        }

    }
}