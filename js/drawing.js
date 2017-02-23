enableDrawing();
growBoxes();
changeClass();


function enableDrawing() {
    document.addEventListener('mousedown', function(e) {
        var red = Math.round(Math.random()*255);
        var green = Math.round(Math.random()*255);
        var blue = Math.round(Math.random()*255);
        var rgb = 'rgb(' + red + ', ' + green + ', ' + blue +')';
        var box = document.createElement('div');
        box.style.position = 'absolute';
        box.style.top = e.pageY + 'px';
        box.style.left = e.pageX + 'px';
        box.style.width = '10px';
        box.style.height = '10px';
        box.style.backgroundColor = rgb;
        document.body.appendChild(box);
    });
}

function growBoxes () {
    document.addEventListener('mousedown', function(e) {
        if (e.target.nodeName === 'DIV') {
            e.target.style.width= '20px';
            e.target.style.height = '20px';
            e.target.className = 'nates-class';
        } 
    }) 
}


