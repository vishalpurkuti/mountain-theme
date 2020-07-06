function route2() {
    document.getElementById('route_two').classList.remove('hidden');
    document.getElementById('route_two').classList.add('visible');
    document.getElementById('route_three').classList.add('hidden');
    document.getElementById('route_one').classList.add('hidden');
    document.getElementById('route_three').classList.remove('visible');
    document.getElementById('route_one').classList.remove('visible');
    document.getElementById('route_2').classList.toggle('active');
    document.getElementById('route_1').classList.remove('active');
    document.getElementById('route_3').classList.remove('active');





}
function route3() {
    document.getElementById('route_three').classList.remove('hidden');
    document.getElementById('route_three').classList.add('visible');
    document.getElementById('route_two').classList.add('hidden');
    document.getElementById('route_one').classList.add('hidden');
    document.getElementById('route_two').classList.remove('visible');
    document.getElementById('route_one').classList.remove('visible');
    document.getElementById('route_3').classList.toggle('active');
    document.getElementById('route_1').classList.remove('active');
    document.getElementById('route_2').classList.remove('active');
}
function route1() {
    document.getElementById('route_one').classList.remove('hidden');
    document.getElementById('route_one').classList.add('visible');
    document.getElementById('route_two').classList.add('hidden');
    document.getElementById('route_three').classList.add('hidden');
    document.getElementById('route_two').classList.remove('visible');
    document.getElementById('route_three').classList.remove('visible');
    document.getElementById('route_1').classList.toggle('active');
    document.getElementById('route_2').classList.remove('active');
    document.getElementById('route_3').classList.remove('active');
}