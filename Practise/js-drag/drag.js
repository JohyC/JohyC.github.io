var elem, initialx, initialy;
addEventListener("mousedown", function(e){
    if(e.target.matches('div')){
        if(e.which === 1){
            elem = e.target;
            initialx = e.pageX;
            initialy = e.pageY;
            window.addEventListener("mousemove", moved);
            e.preventDefault();
            elem.style.zIndex = 10;
            elem.style.background = `rgb(${random()},${random()},${random()})`;
            // 'rgb(' + random() + ',' + random() + ',' + random() + ')';
        }
    }
});
addEventListener("mouseup",function(e){
    if(e.target.matches('div')){
        if(e.which === 1){
            elem = e.target;
            elem.style.zIndex = 0;
        }
    }
})
function moved(e){
    if(e.which !== 1){
        elem.removeEventListener("mousemove",moved);
    }else{
        let lastx, lasty;
        lastx = e.pageX - initialx;
        lasty = e.pageY - initialy;
        sleft = elem.style.left ? parseFloat(elem.style.left) : lastx;
        stop = elem.style.top ? parseFloat(elem.style.top) : lasty;
        elem.style.position = "absolute";
        elem.style.left = sleft + lastx + 'px';
        elem.style.top = stop + lasty + 'px';
        initialx = e.pageX;
        initialy = e.pageY; 
    }
}
function random(){
    return Math.floor(Math.random() * 256);
}

