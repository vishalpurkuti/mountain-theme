function show1() {

    document.getElementById('case1').style.zIndex = '1';
    document.getElementById('case2').style.zIndex = '0';
    document.getElementById('case3').style.zIndex = '0';
    document.getElementById('case4').style.zIndex = '0';

}
function show2() {
    document.getElementById('case2').style.zIndex = '1';
    document.getElementById('case1').style.zIndex = '0';
    document.getElementById('case3').style.zIndex = '0';
    document.getElementById('case4').style.zIndex = '0';


}
function show3() {

    document.getElementById('case3').style.zIndex = '1';
    document.getElementById('case1').style.zIndex = '0';
    document.getElementById('case2').style.zIndex = '0';
    document.getElementById('case4').style.zIndex = '0';

}
function show4() {

    document.getElementById('case4').style.zIndex = '1';
    document.getElementById('case1').style.zIndex = '0';
    document.getElementById('case3').style.zIndex = '0';
    document.getElementById('case2').style.zIndex = '0';

}

let buttons = document.querySelectorAll('.inner-route');
buttons.forEach(button => {
    button.addEventListener('click', function () {
        buttons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
    });
});