window.onload = function(){
    setTimeout(function(){
      document.getElementById("loader-wrapper").style.display = "none";
      document.getElementById("allHome-content").style.display = "block";
    }, 1000);
}

function activarSideBar() 
{
    let element = document.getElementById("sidebar");
    element.classList.add("active");
    
    let element2 = document.getElementById("overlay");
    element2.classList.add("active");
}

/* Quitar la clase active a los elementos con id sidebar y overlay */
function desactivarSideBar() 
{
    let element = document.getElementById("sidebar");
    element.classList.remove("active");
    
    let element2 = document.getElementById("overlay");
    element2.classList.remove("active");
}

let modal = document.getElementById('modal');
let modal_content = document.getElementById('modal_content');

document.getElementById('login').onclick = function(){
  modal.style.display = "block";
}

document.getElementById('exit').onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event){
  if(event.target == modal ){
    modal.style.display = "none";
  }
}

const parallax = document.getElementById("parallax");

window.addEventListener("scroll", function(){
  let offset = window.pageYOffset;
  parallax.style.backgroundPositionY = offset * 0.7 + "px";
});
