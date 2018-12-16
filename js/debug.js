//FALTA: esto es solo para debug mientras desarrollo

window.onload = function(){
    logearCoordenadas();
    
}

function logearCoordenadas(){
    const myCanvas = document.getElementsByTagName("canvas");
    myCanvas[0].addEventListener("mousemove", function(e){
        // console.log("Screen coords: " + e.screenX + ", Y coords: " + e.screenY);
        // console.log("X coords: " + e.clientX + ", Y coords: " + e.clientY);
        x = e.x - e.currentTarget.offsetLeft;
        y = e.y - e.currentTarget.offsetTop;
        console.log("X : " + x + ", Y : " + y);
    });
}