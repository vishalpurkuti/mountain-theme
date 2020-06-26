
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

function onpackage(element) {

    document.getElementById(element.id).classList.add('activePackage');
    document.getElementById(element.id).classList.remove('passivePackage');
    document.getElementById('package2').classList.add('passivePackage');

}
function offpackage(element) {
    document.getElementById(element.id).classList.remove('activePackage');
    document.getElementById(element.id).classList.add('passivePackage');
    document.getElementById('package2').classList.remove('passivePackage');
}

