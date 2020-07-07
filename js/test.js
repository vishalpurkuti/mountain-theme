
function routeOpen(x) {
    let array = document.getElementById('route-slider').querySelectorAll('h2');
    let array2 = document.getElementById('route-slider').querySelectorAll('h3');
    let array3 = document.getElementById('route-slider').querySelectorAll('button');
    array[x].style.display = 'block';
    array2[x].style.display = 'block';
    array3[x].style.display = 'block';

}
function reset(y) {
    let arr = document.getElementById('route-slider').querySelectorAll('h2');
    let arr2 = document.getElementById('route-slider').querySelectorAll('h3');
    let arr3 = document.getElementById('route-slider').querySelectorAll('button');
    arr[y].style.display = 'none';
    arr2[y].style.display = 'none';
    arr3[y].style.display = 'none';
}