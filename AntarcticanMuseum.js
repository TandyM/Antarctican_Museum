function menu_push() {
    var menu = document.getElementById("menu");
    if (menu.style.right === "0") {
        menu.style.right = "-50%";
    } else {
        menu.style.right = "0";
    }
}
function menu_push_back() {
    var menu = document.getElementById("menu");
    if (menu.style.right === "-50%") {
        menu.style.right = "0";
    } else {
        menu.style.right = "-50%";
    }
}
function draw_shadow () {
    var sha = document.getElementById('shadow')
    sha.style.visibility = 'visible'
    sha.style.opacity = '0.8'
}
function remove_shadow () {
    var sha = document.getElementById('shadow')
    sha.style.visibility = 'hidden'
    sha.style.opacity = '0'
}