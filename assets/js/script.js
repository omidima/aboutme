// loading to status control and run main code 
var loading = {
    elementLoadingId: "loader",
    loadingShow: document.getElementById('loader').style.display = "",
    loadingHide: document.getElementById('loader').style.display = "none",
    ready: {
        status: null,
        running: document.onreadystatechange = function () {
            if (document.readyState == "complete") {
                pageControl.elementSetStyleTagName('section');
                loading.ready.status = 200;
                loading.loadingHide
                main();
            }
        }
    }
}

// set page height size { unrunable }
var pageControl = {
    pageCount: 5,
    pageActive: 1,
    move: (ele) => {
        ele.scrollIntoView()
    },
    pageHeight: window.innerHeight,
    elementSetStyleTagName: (tagName) => {
        var el = document.getElementsByTagName(tagName);
        for (i = 0; i < el.length; i++) {
            el[i].style.height = pageControl.pageHeight + "px";
        }
    }

}

// create dots page controller
function dots(a, b) {
    this.a = a;
    this.b = b;
    this.dotsCount = a / b;
    this.dotsCreate = () => {

        var div = document.createElement("div");
        div.setAttribute("id", "dots")


        var ul = document.createElement("ul")
        ul.className = "dotsList";

        for (i = 1; i <= this.dotsCount; i++) {

            if (i == 1) {
                var li = document.createElement("li");
                li.className = "dots-item";
                li.classList.add("active")
                li.setAttribute("id", "dots-" + i)
                ul.append(li);
            } else {
                var li = document.createElement("li");
                li.className = "dots-item";
                li.setAttribute("id", "dots-" + i)
                ul.append(li);
            }

        }

        div.append(ul);
        document.body.append(div);
    }
}
let scrolling = false;
window.scroll = () => {
    sectionControll()

}


document.addEventListener("scroll", sectionControll);
// function inte(){
var root = setInterval(function () {
    if (scrolling) {
        sectionControll()
        scrolling = false;
        clearInterval(root);
        // console.log("interval running");
    }
})
// }

function sectionControll() {
    var count = document.body.scrollTop;
    var size = window.innerHeight;
    var re = count / size;
    // console.log(re)
    var a = document.getElementById('pic');
    if (0 < re && re < 1) {
        document.getElementById('dots-' + pageControl.pageActive).classList.toggle('active')
        document.getElementById('dots-1').classList.toggle('active')
        a.style.marginTop = document.body.scrollTop;
        pageControl.pageActive = 1;
    } else if (1 < re && re < 2) {
        a.style.marginTop = "0px";
        document.getElementById('dots-' + pageControl.pageActive).classList.toggle('active')
        document.getElementById('dots-2').classList.toggle('active')
        pageControl.pageActive = 2;
    } else if (2 < re && re < 3) {
        document.getElementById('dots-' + pageControl.pageActive).classList.toggle('active')
        document.getElementById('dots-3').classList.toggle('active')
        pageControl.pageActive = 3;
    } else if (3 < re && re < 4) {
        document.getElementById('dots-' + pageControl.pageActive).classList.toggle('active')
        document.getElementById('dots-4').classList.toggle('active')
        pageControl.pageActive = 4;
    } else if (4 < re && re < 5) {
        document.getElementById('dots-' + pageControl.pageActive).classList.toggle('active')
        document.getElementById('dots-5').classList.toggle('active')
        pageControl.pageActive = 5;
    } else if (5 < re && re < 6) {
        document.getElementById('dots-' + pageControl.pageActive).classList.toggle('active')
        document.getElementById('dots-6').classList.toggle('active')
        pageControl.pageActive = 6;
    } else if (6 < re && re < 7) {
        document.getElementById('dots-' + pageControl.pageActive).classList.toggle('active')
        document.getElementById('dots-7').classList.toggle('active')
        pageControl.pageActive = 7;
    }
}

// main function Running code in page
function main() {
    var obj = new dots(document.body.offsetHeight, window.innerHeight);
    obj.dotsCreate();

}