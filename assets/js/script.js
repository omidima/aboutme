
document.onreadystatechange = function () {
    if (document.readyState == "complete") {
        loadingHide: document.getElementById('loader').style.display = "none"
        console.log("hey loadinh")
    }
}

var el = document.getElementsByTagName('section');
for (i = 0; i < el.length; i++) {
    el[i].style.height = window.innerHeight + "px";
}

// const swiper = new Swiper('.body', {
//   // Optional parameters
//   direction: 'vertical',
//   loop: false,
//   clickable: true,


//   // And if we need scrollbar
//   scrollbar: {
//     el: '.swiper-scrollbar',
//   },
// });
let active = 1;
document.body.onscroll = () => {
    if (window.scrollY > 300) {
        document.getElementById('section-2').setAttribute('style','opacity:1');
        document.getElementById('section-2').classList.add('animate__animated');
        document.getElementById('section-2').classList.add('animate__slideInUp');
        active++
    }
    if (window.scrollY > 1000) {
        document.getElementById('section-3').setAttribute('style','opacity:1');
        document.getElementById('section-3').classList.add('animate__animated');
        document.getElementById('section-3').classList.add('animate__slideInUp');
        active++
    }
}
