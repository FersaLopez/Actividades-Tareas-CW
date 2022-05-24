const canvas_estrellas = document.getElementById("canvas-estrella");
const ctx = canvas_estrellas.getContext("2d");
const div_ingresoData = document.getElementById("inputs");
const inPicos = document.getElementById("in_picos");
const inColor = document.getElementById("in_color");
const inPicudez = document.getElementById("in_picudez");
const inRelleno = document.getElementById("in_relleno");
const inTamaño = document.getElementById("in_tamaño");

let tamaño = 500;
let radio_picudez = 50;
let picos = 4;
let color = "Orange";

const centro = 500;

const xInicial = centro, yInicial = centro;
let xNueva, yNueva;
let anguloRad;

function dibujarStar ()
{
    let radio_star = tamaño/2;
    let angulo = -(360/(picos*2)*(picos/2));
    let numeroVertices = picos*2;
    ctx.clearRect(0, 0, 1000, 1000);
    ctx.beginPath();        
    for(let i=0; i<numeroVertices+1;i++)
    {
        anguloRad = ((angulo * Math.PI)/180);
        if(i%2 == 0)
        {
            radioPro = radio_star;
            //console.log("JIJIJA");
            /*anguloRad = ((angulo * Math.PI)/180);*/
        }
        else
        {
            radioPro = (radio_picudez/100)*(radio_star);
            //console.log("NOPAPU")
            /*anguloRad = ((angulo * Math.PI)/180)/2;*/
        }
        xNueva = xInicial + (radioPro * Math.cos(anguloRad))
        yNueva = yInicial + (radioPro * Math.sin(anguloRad))        
        ctx.lineTo(xNueva, yNueva);
        ctx.lineWidth = 2;
        angulo+=(360/(picos*2));        
    }
    if(inRelleno.value == "on")
    {
        ctx.fillStyle = color;
        ctx.fill(); 
    }
    else
    {
        ctx.strokeStyle = color;
        ctx.stroke();
    }
    ctx.closePath();    
}
dibujarStar();

inTamaño.addEventListener("change", ()=>{    
    tamaño = inTamaño.value;
    dibujarStar();
});
inPicos.addEventListener("change", ()=>{    
    if(inPicos.value >= 4 && inPicos.value <= 30)
    {
        picos = inPicos.value;
    }
    dibujarStar();
});
inColor.addEventListener("change", ()=>{    
    color = inColor.value;
    dibujarStar();

});
inPicudez.addEventListener("change", ()=>{    
    radio_picudez = inPicudez.value;
    dibujarStar();

});
inRelleno.addEventListener("change", ()=>{    
    if(inRelleno.value == "on")
    {
        inRelleno.value = "off";
    }
    else
        inRelleno.value = "on";
    dibujarStar();
});