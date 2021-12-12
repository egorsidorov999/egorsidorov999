window.onload = function() {
    var drawingCanvas = document.getElementById('canvs');
    if(drawingCanvas && drawingCanvas.getContext) {
     var context = drawingCanvas.getContext('2d');
     // Рисуем окружность 
     context.strokeStyle = "red";
     context.fillStyle = "orange";
     context.beginPath();
     context.arc(100,100,100,0,Math.PI*2,true);
     context.closePath();
     context.stroke();
     context.fill();
     // Рисуем левый глаз 
     context.fillStyle = "#fff";
     context.beginPath();
     context.arc(84,90,8,0,Math.PI*2,true);
     context.closePath();
     context.stroke();
     context.fill();
     // Рисуем правый глаз 
     context.beginPath();
     context.arc(116,90,8,0,Math.PI*2,true);
     context.closePath();
     context.stroke();
     context.fill();
     // Рисуем рот
     context.beginPath();
     context.moveTo(70,115);
     context.quadraticCurveTo(100,130,130,115);
     context.quadraticCurveTo(100,150,70,115); 
     context.closePath();
     context.stroke();
     context.fill();
    }
   }