window.onscroll = function(){
    if(window.innerWidth > 576){
        if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
            document.querySelector("#nav-bar").className = "navbar navbar-expand-sm p-2 navbar-dark fixed-top"
            document.querySelector("#title").style.fontSize = "30px"
        }else{
            document.querySelector("#nav-bar").className = "navbar navbar-expand-sm p-3 navbar-dark fixed-top"
            document.querySelector("#title").style.fontSize = "30pt"
        }
    }
}

function isClicked() {
    isExpanded = document.getElementById("toggle-button").getAttribute("aria-expanded")
    if(isExpanded){
        document.getElementById("navbarNav").style.position = "static"
    }
}
window.onresize = function(){
    if(window.innerWidth > 576){
        document.getElementById("navbarNav").style.position = "absolute"
    }
}