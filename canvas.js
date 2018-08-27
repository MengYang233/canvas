canvas = document.getElementById("canvas");
context = canvas.getContext("2d");
context.lineWidth = 1;
canvas.onmousedown = function() {
    old_X = event.clientX;
    old_Y = event.clientY;
    context.moveTo(old_X, old_Y);
}
canvas.onmouseup = function() {
    new_X = event.clientX;
    new_Y = event.clientY;
    context.lineTo(new_X,new_Y);
    context.stroke();
    context.closePath();
}