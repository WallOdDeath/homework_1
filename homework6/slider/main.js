
function init(){
	var images = document.querySelectorAll("img");
	for (var i = 0; i < images.length; i++) {
        images[i].addEventListener('click', changePic);
	}
}
function changePic(event) {
    var bigDiv = document.getElementById('big_picture'); 
    bigDiv.innerHTML = '';
    var smallSrc = event.currentTarget.getAttribute('src');
    var newImg = document.createElement('img'); 
    newImg.src = smallSrc.replace('small', 'big');
    bigDiv.appendChild(newImg);
    newImg.onerror = function () {bigDiv.innerHTML ='<h2 style="text-align:center; position:absolute; top:0; width:100%">Такого изображения нет</h2>'}
}
var clearScreen = document.getElementById('big_picture');
clearScreen.onclick = clear;
var next = document.getElementById('next');
next.onclick=nextSlide;
var prev = document.getElementById('prev');
prev.onclick=prevSlide;
var clickCount =0;      
var i=0;
     i++;
function nextSlide (){
    clear();
    var images = document.querySelectorAll("img");
    clickCount+=i;  
    if (clickCount<images.length) { 
        changeClass(images[clickCount-1],images[clickCount]);
    }else if (clickCount>images.length-1) {
        changeClass(images[clickCount-1],images[0]);
        clickCount=0;
    }
}
function prevSlide(){
    clear();
    var images = document.querySelectorAll("img");
    clickCount-=i;
    if (clickCount<0) {
        clickCount=images.length-1;
        changeClass(images[0],images[clickCount]);
    } else if (clickCount<images.length-1) {
        changeClass(images[clickCount+1],images[clickCount]);
    } 
}
function clear () {
    var bigDiv = document.getElementById('big_picture'); 
    bigDiv.innerHTML = '';
}
function changeClass (a,b){
    a.className="hide";
    b.className="active";
}
window.onload = init;
