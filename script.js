function openmenu(){
    document.getElementById("mynav").style.width="100%";
}
function closemenu(){
    document.getElementById("mynav").style.width="0%";
}
function matricandbsoff(){
    document.querySelector(".matric").style.opacity="0";
    document.querySelector(".graduation").style.opacity="0";
    document.querySelector(".fsc").style.opacity="1";
  
}
function fscandbsoff(){
    document.querySelector(".matric").style.opacity="1";
    document.querySelector(".graduation").style.opacity="0";
    document.querySelector(".fsc").style.opacity="0";
 
}
function matricandfscoff(){
    document.querySelector(".matric").style.opacity="0";
    document.querySelector(".graduation").style.opacity="1";
    document.querySelector(".fsc").style.opacity="0";
  
}

function openeducation(){
    document.querySelector(".education").style.height="450px";
    document.querySelector(".open").style.visibility="hidden";
    document.querySelector(".education-hide").style.borderRadius="70px 70px 0 0";
    document.querySelector(".close").style.visibility="visible";
}

function closeeducation(){
    
    document.querySelector(".education").style.height="0px";
    document.querySelector(".close").style.visibility="hidden";
    document.querySelector(".open").style.visibility="visible";
}

//typewriter effect
//'A <strong>WEB DEVELOPER</strong>', '<strong>WEB DESIGNER</strong>','And <strong>PROGRAMMER</strong>'
var typed = new Typed('#element', {
    strings: ['A <strong>WEB DEVELOPER</strong>', '<strong>WEB DESIGNER</strong>','And <strong>PROGRAMMER</strong>'],
    typeSpeed: 50,
  });
//current time
function displaytime(){
    time = new Date();
    console.log(time);
    document.getElementById('time').innerHTML = time;
}
setInterval(displaytime, 1000);

  //sign in popup
function popup(){
    document.querySelector('.tooltip-text').style.opacity='1';
}
function hide(){
    document.querySelector('.tooltip-text').style.opacity='0';
}
setTimeout(popup,3000);
setTimeout(hide,9000);
