canvas = document.getElementById("canvas");
context = canvas.getContext("2d");
context.lineWidth = 1;
var count = 0;
window.onload = function()
{
	canvas.setAttribute("width",window.innerWidth)
	canvas.setAttribute("height",window.innerHeight)
}
function hua() 
{
new_X = event.clientX;
new_Y = event.clientY;
if(count >= 0.2)
{
	context.moveTo(new_X, new_Y);
	count = 0;
}
context.lineTo(new_X, new_Y);
context.stroke();
context.closePath();
count+=0.05;
}
canvas.onmousemove = function() {
	hua();
}
function clearCanvas()
{
	canvas.height=canvas.height;
}







