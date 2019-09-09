
var boton = document.getElementById("change_color_container"); 
boton.addEventListener("click", change_color); 

function alerta(){
    alert("hola")   
}

function change_color(){
    var contenedor = document.getElementById("blog-post_container");
    var color_continer = "rgb(";
    color_continer = color_continer + (Math.random()*255).toFixed(2) + ","; 
    color_continer = color_continer + (Math.random()*255).toFixed(2) + ",";
    color_continer = color_continer + (Math.random()*255).toFixed(2) + ")";
    
    contenedor.style.color = color_continer;
    
    
}

