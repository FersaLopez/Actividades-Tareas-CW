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
            
            let permiteRegistro = true
            for (let valor of lista.children)
            {            
                console.log("JIJIJA: "+valor.children[6].textContent);
                if(valor.children[6].textContent == tarea.value)
                {
                    permiteRegistro = false;
                }

            }
            if (permiteRegistro != false)
            {
                const nuevaDiv = document.createElement("div");
                //nuevaDiv.setAttribute("id", "tareita");
                nuevaDiv.className = "tareita";
                nuevaDiv.innerHTML += select_titulo.value+"<br/>";
                //nuevaDiv.innerHTML += "<button class='arriba'>Arriba</button>"
                nuevaDiv.innerHTML += "<button class='arriba'>Arriba</button><button class='acabada'>Marcar como acabada</button><button class='eliminar'>Eliminar</button><br/>";
                nuevaDiv.innerHTML += "<button class='abajo'>Abajo</button>"+"<span>"+tarea.value+"</span>";
                nuevaDiv.innerHTML += "<hr/></div>";
                lista.appendChild(nuevaDiv);
    
                //lista.innerHTML = lista.innerHTML+"<div id='tareita'>"+select_titulo.value+"<br/>";
                //lista.innerHTML = lista.innerHTML+"<button class='arriba'>Arriba</button><button class='acabada'>Marcar como acabada</button><button class='eliminar'>Eliminar</button><br/>";
                //lista.innerHTML = lista.innerHTML+"<button class='abajo'>Abajo</button>"+tarea.value;
                //lista.innerHTML = lista.innerHTML+"<hr/></div>";                
            }
        }        
        else                //Si no esta definita, se crea la tarea y la opcion nueva
        {
            let elemento = document.getElementById("otraTarea");   
            if(elemento != null)
            {
                if(elemento.value != '' && elemento.value !=' ')
                {
                    let permiteRegistro = true
                    for (let valor of lista.children)
                    {            
                        console.log("JIJIJA: "+valor.children[6].textContent);
                        if(valor.children[6].textContent == tarea.value)
                        {
                            permiteRegistro = false;
                        }

                    }
                    if (permiteRegistro != false)
                    {
                        const nuevaDiv = document.createElement("div");
                        //nuevaDiv.setAttribute("id", "tareita");                    
                        nuevaDiv.className = "tareita";
                        nuevaDiv.innerHTML += elemento.value+"<br/>";
                        //nuevaDiv.innerHTML += "<button class='arriba'>Arriba</button>"
                        nuevaDiv.innerHTML += "<button class='arriba'>Arriba</button><button class='acabada'>Marcar como acabada</button><button class='eliminar'>Eliminar</button><br/>";
                        nuevaDiv.innerHTML += "<button class='abajo'>Abajo</button>"+"<span>"+tarea.value+"</span>";
                        nuevaDiv.innerHTML += "<hr/></div>";
                        lista.appendChild(nuevaDiv);
                        /*
                        lista.innerHTML = lista.innerHTML+"<div id='tareita'>"+elemento.value+"<br/>";
                        lista.innerHTML = lista.innerHTML+"<button class='arriba'>Arriba</button><button class='acabada'>Marcar como acabada</button><button class='eliminar'>Eliminar</button><br/>";
                        lista.innerHTML = lista.innerHTML+"<button class='abajo'>Abajo</button>"+tarea.value;
                        lista.innerHTML = lista.innerHTML+"<hr/></div>";
        */                                        
                        
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
        console.log(lista);        
    }
});
lista.addEventListener("click", (evento) =>{    
    console.log(evento.target.parentElement);        
    /*
    if(evento.target.className === 'eliminar'){
        evento.target.parentElement.outerHTML = '';
    } */           
});



console.log(main);//Imprime en consola el objeto "Main"