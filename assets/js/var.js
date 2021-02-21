function loading(document,id,callback){
    this.document = document;
    this.id = id;
    this.callback = callback;
    this.action ={
        loadingShow: document.getElementById('loader').style.display = "",
        loadingHide: document.getElementById('loader').style.display = "none",
    }
    document.onreadystatechange = function (e=this.action) {
        if (document.readyState == "complete") {    
            pageControl.elementSetStyleTagName('section');
            e.loadingShow;
            // loadingHide: document.getElementById('loader').style.display = "none"
            console.log("hey loadinh")
            callback
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
    this.document = a;
    this.b = b;
    this.dotsCount = a / b;
    this.dotsCreate = () => {

        var div = document.createElement("div");
        div.setAttribute("id", "dots")

        var ul = document.createElement("ul")
        ul.className = "dotsList";

        for (var i = 1; i <= this.dotsCount; i++) {

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