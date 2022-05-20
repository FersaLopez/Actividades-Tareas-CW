const main = document.getElementById("main");//deja ver los hijos del objeto 
const selector = document.getElementById("selector");

const select_titulo = document.getElementById("titulo");
const opt_otro = document.getElementById("otro");


const tarea = document.getElementById("tarea");
const btn_añadir = document.getElementById("añadir");
//const main = document.getElementsByTagName("main");

const lista = document.getElementById("lista");//DIV
//console.log(main.innerText);//Imprime en consola solo el texto como tal (las etiqeutas son interpretadas pero no se imprimen)
//console.log(main.innerHTML);//Imprime en consola toda la estructura HTML, (como esta escrita en nuestro HTML)


//console.log(main);//Imprime en consola el objeto "Main"

console.log(select_titulo);
console.log(tarea);
console.log(btn_añadir);
console.log(lista);


select_titulo.addEventListener("change", () =>{
    if(select_titulo.value == 5)//habilitar el espacio par aingresar una nueva tarea
    {
        console.log("XDDD");
        
        //titulo.outerHTML = titulo.outerHTML+"<input type='text' name='titulo' id='titulo'><br/><br/>"
        let elemento = document.createElement("input");
        elemento.setAttribute("id", "otraTarea");        
        selector.appendChild(elemento);
        
        console.log(elemento);
                
        //main.insertBefore()
    }
    else{        //si se elige otro que no es otro, se quita el input
        let elemento = document.getElementById("otraTarea");
        console.log(elemento);
        if (elemento != null)
        {
            selector.removeChild(elemento);
        }
    }
});


btn_añadir.addEventListener("click", (evento) => {
    if(tarea.value != '' && tarea.value != ' ') //Al darle al boton de añadir, Crea las secciones de tareas si el input no estaba vacio
    {

        if(select_titulo.value != 5)//Si es una tarea definida
        {
            
            let permiteRegistro = true, tituloConcordante = 0;
            for (let valor of lista.children)
            {            
                //console.log("JIJIJA: "+valor.children[6].textContent);
                if(valor.children[6].textContent == tarea.value)
                {
                    permiteRegistro = false;
                    tituloConcordante = valor.firstChild.data;
                }                
            }
            //console.log(tituloConcordante);
            if (permiteRegistro != false || tituloConcordante != select_titulo.value)
            {
                const nuevaDiv = document.createElement("div");
                //nuevaDiv.setAttribute("id", "tareita");
                nuevaDiv.className = "tareita";
                nuevaDiv.innerHTML += select_titulo.value+"<br/>";
                //nuevaDiv.innerHTML += "<button class='arriba'>Arriba</button>"
                nuevaDiv.innerHTML += "<button class='arriba'>Arriba</button><button class='acabada'>Marcar como Acabada</button><button class='eliminar'>Eliminar</button><br/>";
                nuevaDiv.innerHTML += "<button class='abajo'>Abajo</button>"+"<span>"+tarea.value+"</span>";
                nuevaDiv.innerHTML += "<hr/></div>";
                lista.appendChild(nuevaDiv);                    
            }
        }        
        else                //Si no esta definita, se crea la tarea y la opcion nueva
        {
            let elemento = document.getElementById("otraTarea");   
            if(elemento != null)
            {
                if(elemento.value != '' && elemento.value !=' ')
                {
                    let permiteRegistro = true, tituloConcordante = 0;
                    for (let valor of lista.children)
                    {            
                        console.log("JIJIJA: "+valor.children[6].textContent);                        
                        if(valor.children[6].textContent == tarea.value)
                        {
                            permiteRegistro = false;
                            tituloConcordante = valor.firstChild.data;
                        }                        
                    }
                    console.log(permiteRegistro, tituloConcordante);
                    if (permiteRegistro != false || tituloConcordante != elemento.value)
                    {
                        const nuevaDiv = document.createElement("div");
                        //nuevaDiv.setAttribute("id", "tareita");                    
                        nuevaDiv.className = "tareita";
                        nuevaDiv.innerHTML += elemento.value+"<br/>";
                        //nuevaDiv.innerHTML += "<button class='arriba'>Arriba</button>"
                        nuevaDiv.innerHTML += "<button class='arriba'>Arriba</button><button class='acabada'>Marcar como Acabada</button><button class='eliminar'>Eliminar</button><br/>";
                        nuevaDiv.innerHTML += "<button class='abajo'>Abajo</button>"+"<span>"+tarea.value+"</span>";
                        nuevaDiv.innerHTML += "<hr/></div>";
                        lista.appendChild(nuevaDiv);                              
                        
                        let permiteRegistro = true, tituloConcordante = 0;
                        for (let valor of select_titulo)
                        {            
                            console.log("CD"+valor.innerHTML);                        
                            if(valor.innerHTML == elemento.value)
                            {
                                permiteRegistro = false;
                                //tituloConcordante = valor.firstChild.data;
                            }                                                    
                        }
                        if(permiteRegistro != false)
                        {
                            const nuevaSeleccion = document.createElement("option");
                            nuevaSeleccion.setAttribute("value", elemento.value);
                            nuevaSeleccion.innerHTML = elemento.value;
            
                            console.log(nuevaSeleccion);
            
                            select_titulo.appendChild(nuevaSeleccion);
                            select_titulo.appendChild(opt_otro);
                        }
                    }                    
                }

            }
            
        }        
        //console.log(lista);                
    }
});
lista.addEventListener("click", (evento) =>{    
    console.log(evento.target.parentElement);
    if(evento.target.className === 'eliminar'){
        //console.log("XDDDD");
        console.log(evento.target.parentElement.parentElement);

        evento.target.parentElement.parentElement.removeChild(evento.target.parentElement);
        //evento.target.parentElement.outerHTML = '';
        //console.log(lista);
    }    
});
let tareasHechas = 0;
const numTAcabadas = document.getElementById("numTAcabadas");
lista.addEventListener("click", (evento) =>{    
    //console.log(evento.target.parentElement);
    if(evento.target.className === 'acabada'){
        
        let listaDenuevo = evento.target.parentElement;
        if(listaDenuevo.dataset.hecha == "Marcada")
        {
            listaDenuevo.dataset.hecha = '';            
            tareasHechas--; 
            
            console.log("Acabada PAPU");        
            console.log(numTAcabadas);
            console.log(evento.target)            
            evento.target.innerHTML = 'Marcar como Acabada';
        }
        else{
            listaDenuevo.dataset.hecha = 'Marcada';
            tareasHechas++;           
            evento.target.innerHTML = 'Marcar como NO acabada';
        }
        numTAcabadas.innerText = tareasHechas;
        
        //evento.target.parentElement.outerHTML = '';
        //console.log(lista);
    }    
    console.log(lista);
});



console.log(main);//Imprime en consola el objeto "Main"