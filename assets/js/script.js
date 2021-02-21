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

var dotsCount = document.body.offsetHeight / window.innerHeight;
var div = document.createElement("div");
div.setAttribute("id", "dots");

var ul = document.createElement("ul")
ul.className = "dotsList";

for (var i = 1; i <= dotsCount; i++) {

    if (i == 1) {
        var li = document.createElement("li");
        li.className = "dots-item";
        li.classList.add("active");
        li.setAttribute("id", "dots-" + i);
        ul.append(li);
    } else {
        var li = document.createElement("li");
        li.className = "dots-item";
        li.setAttribute("id", "dots-" + i);
        ul.append(li);
    }

}

div.append(ul);
document.body.append(div);


document.addEventListener("scroll", sectionControll);
let pageCount = 1
function sectionControll() {
    // console.log("into")
    var count = document.scrollingElement.scrollTop;
    var size = window.innerHeight;
    var re = count / size;
    console.log(re)
    var a = document.getElementById('pic');
    if (0 < re && re < 1) {
        document.getElementById('dots-' + pageCount).classList.toggle('active');
        document.getElementById('dots-1').classList.toggle('active');
        a.style.marginTop = document.scrollingElement.scrollTop + "px";
        pageCount = 1;
    } else if (1 < re && re < 2) {
        a.style.marginTop = "0px";
        document.getElementById('dots-' + pageCount).classList.toggle('active');
        document.getElementById('dots-2').classList.toggle('active');
        pageCount = 2;
    } else if (2 < re && re < 3) {
        document.getElementById('dots-' + pageCount).classList.toggle('active');
        document.getElementById('dots-3').classList.toggle('active');
        pageCount = 3;
    } else if (3 < re && re < 4) {
        document.getElementById('dots-' + pageCount).classList.toggle('active');
        document.getElementById('dots-4').classList.toggle('active');
        pageCount = 4;
    } else if (4 < re && re < 5) {
        document.getElementById('dots-' + pageCount).classList.toggle('active');
        document.getElementById('dots-5').classList.toggle('active');
        pageCount = 5;
    } else if (5 < re && re < 6) {
        document.getElementById('dots-' + pageCount).classList.toggle('active');
        document.getElementById('dots-6').classList.toggle('active');
        pageCount = 6;
    } else if (6 < re && re < 7) {
        document.getElementById('dots-' + pageCount).classList.toggle('active');
        document.getElementById('dots-7').classList.toggle('active');
        pageCount = 7;
    }
}
