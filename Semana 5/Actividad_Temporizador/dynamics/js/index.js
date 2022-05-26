const div_inputs = document.getElementById("inputs");
const div_tempo = document.getElementById("temporizador_visual");

const in_horas = document.getElementById("in_horas");
const in_minutos = document.getElementById("in_minutos");
const in_segundos = document.getElementById("in_segundos");
const btn_aceptar = document.getElementById("aceptar_tiempo");
const btn_iniciar = document.getElementById("btn_iniciar");
const btn_detener = document.getElementById("btn_detener");

const alarma = new Audio("./statics/media/alarma.mp3");
let horas = 0, minutos = 0, segundos = 0;

function reiniciarValores(){
    horas = 0;
    minutos = 0;
    segundos = 0;
}
function ponerCeros(tiempo)
{
    let stringTiempo;   
    parseInt(tiempo);
    if(parseInt(tiempo) < 10 && parseInt(tiempo) > 0)
        stringTiempo = "0"+tiempo;
    else if(tiempo >= 10)
        stringTiempo = tiempo;    
    else if(tiempo == null || tiempo == 0)
        stringTiempo = "00";
    return stringTiempo;
}

let pararTempo = 0, tiempoActivado = 0;
function iniciarTempoProcesado(hora, minutos, segundos)
{
    let allSeconds = 0;
    allSeconds += parseInt(hora * 3600);
    allSeconds += parseInt(minutos * 60);
    allSeconds += parseInt(segundos);   

    tiempoActivado = 1;
    console.log(allSeconds);      
    btn_iniciar.style = "display: none"    

    let temporizador = setInterval(()=>{
        
        if(allSeconds == 1)
        {
            btn_iniciar.style = "display: blocked";
            tiempoActivado = 0;
            alarma.volume = 0.1;
            alarma.play();
            reiniciarValores();                        
        }

        if(allSeconds == 0)
        {
            clearInterval(temporizador);      
            //console.log(hora, minutos, segundos)      
        }
        else
        {
            div_tempo.children[0].children[0].textContent = ponerCeros(hora);
            div_tempo.children[0].children[1].textContent = ponerCeros(minutos);
            div_tempo.children[0].children[2].textContent = ponerCeros(segundos); 
            if(pararTempo == 0)
            {
                allSeconds--;

                if(segundos != -1)
                {
                    segundos--;
                }
                if(segundos == -1)
                {
                    segundos = 59;
                    if(minutos != -1)
                    {
                        minutos--;
                    }
                    if(minutos == -1)
                    {
                        minutos = 59;
                        if(hora != -1)
                        {
                            hora--;
                        }
                        if(hora == -1)
                        {
                            hora = 59;                            
                        }
                    }
                }                
            }
            console.log(segundos) 
            console.log(ponerCeros(segundos))
            div_tempo.children[0].children[0].textContent = ponerCeros(hora);
            div_tempo.children[0].children[1].textContent = ponerCeros(minutos);
            div_tempo.children[0].children[2].textContent = ponerCeros(segundos);        
        }
    }, 1000);
}

btn_detener.addEventListener("click", ()=>{
    if(pararTempo == 0)
    {
        pararTempo = 1;
        btn_detener.style = "background-color: orange";

    }
    else
    {
        pararTempo = 0;
        btn_detener.style = "";

    }
})

div_tempo.addEventListener("click", ()=>{
    in_horas.value = null;
    in_minutos.value = null;
    in_segundos.value = null;
});


div_inputs.addEventListener("keyup", (evento)=>{
    let inputEspecifico = evento.target.id;
    if(inputEspecifico == "in_horas")
    {
        if(evento.target.value >= 0 && evento.target.value < 60)               
            evento.target.parentElement.children[2].innerText = "";                                             
        else        
            evento.target.parentElement.children[2].innerText = "Dato inválido";                     
    }
    else if(inputEspecifico == "in_minutos")
    {        
        if(evento.target.value >= 0 && evento.target.value < 60)            
            evento.target.parentElement.children[2].innerText = "";                                 
        else        
            evento.target.parentElement.children[2].innerText = "Dato inválido";                     
    }
    else
    {        
        if(evento.target.value >= 0 && evento.target.value < 60)              
            evento.target.parentElement.children[2].innerText = "";                         
        else        
            evento.target.parentElement.children[2].innerText = "Dato inválido";                 
    }
    //console.log(evento.target);
});

btn_aceptar.addEventListener("click", ()=>{
    
    if(tiempoActivado == 0)
    {
        if((in_horas.value >= 0) || in_horas.value == "")
        {
            if(in_horas.value != "")     
            {
                if(in_horas.value > 59)
                    horas = 59;  
                else                                     
                    horas = in_horas.value;
    
            }       
            div_tempo.children[0].children[0].textContent = ponerCeros(horas);
        }        
        if((in_minutos.value >= 0) || in_minutos.value == "")
        {                          
            if(in_minutos.value != "")            
                if(in_minutos.value > 59)
                    minutos = 59;  
                else                                     
                    minutos = in_minutos.value;           
            div_tempo.children[0].children[1].textContent = ponerCeros(minutos);        
        }
        if((in_segundos.value >= 0) || in_segundos.value == "")
        {        
            if(in_segundos.value != "")            
                if(in_segundos.value > 59)
                    segundos = 59;  
                else                                     
                    segundos = in_segundos.value;
            div_tempo.children[0].children[2].textContent = ponerCeros(segundos);        
        }    

    }
    console.log(horas, minutos, segundos);    
});

btn_iniciar.addEventListener("click", ()=>{
    if(!(horas == 0 && minutos == 0 && segundos == 0))
        iniciarTempoProcesado(horas, minutos, segundos);
    if(pararTempo == 1)
    {
        pararTempo = 0;
    }

});