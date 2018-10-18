
var canvas = document.getElementById("biglietto");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var ctx = canvas.getContext('2d');
var x = 0 ;
var y = 0 ; 
var x2 = -(canvas.width);
var y2 = -(canvas.width);
var Speedx = 5;
var dinosauro = new Image();
var gatto = new Image();

var animate = ()=>{
 
    
        requestAnimationFrame(animate);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(dinosauro,x,y,400,400);
        

        if( x > canvas.width){
          
            Speedx = -Speedx;
        }
        
        
        if( x < 0){
           
            Speedx = -Speedx;
        }
        x+= Speedx;
    
}


dinosauro.src= "prova.png";

var mettigatto= ()=>{
 
    ctx.drawImage(gatto,x2,y2,400,400);
  
}

gatto.src ="cat.png";

animate();
