
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById('notch').style.opacity = '1.0';
        document.getElementById('test').style.opacity = '1.0';

    } else {
        document.getElementById('notch').style.opacity = '0.0';
        document.getElementById('test').style.opacity = '0.0';
    }
    prevScrollpos = currentScrollPos;
}