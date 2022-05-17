const titulo = document.getElementById("titulo");
const tarea = document.getElementById("tarea");
const añadir = document.getElementById("añadir");
const selector = document.getElementById("selector");
//const main = document.getElementsByTagName("main");
const main = document.getElementById("main");//deja ver los hijos del objeto 
const lista = document.getElementById("lista");
//console.log(main.innerText);//Imprime en consola solo el texto como tal (las etiqeutas son interpretadas pero no se imprimen)
//console.log(main.innerHTML);//Imprime en consola toda la estructura HTML, (como esta escrita en nuestro HTML)


//console.log(main);//Imprime en consola el objeto "Main"

console.log(titulo);
console.log(tarea);
console.log(añadir);
console.log(lista);


titulo.addEventListener("change", () =>{
    if(titulo.value == 5)
    {
        console.log("XDDD");
        
        //titulo.outerHTML = titulo.outerHTML+"<input type='text' name='titulo' id='titulo'><br/><br/>"
        let elemento = document.createElement("input")
        elemento.setAttribute("id", "otraTarea");        
        selector.appendChild(elemento);
        
        console.log(elemento);
                
        //main.insertBefore()
    }
    else{        
        let elemento = document.getElementById("otraTarea");
        console.log(elemento);
        if (elemento != null)
        {
            selector.removeChild(elemento);
        }
    }
});



añadir.addEventListener("click", (evento) => {
    if(tarea.value != '' && tarea.value != ' '){

        if(titulo.value != 5)
        {
            lista.innerHTML = lista.innerHTML+"<div id='tareita'>"+titulo.value+"<br/>";
            lista.innerHTML = lista.innerHTML+"<button class='arriba'>Arriba</button><button class='acabada'>Marcar como acabada</button><button class='eliminar'>Eliminar</button><br/>";
            lista.innerHTML = lista.innerHTML+"<button class='abajo'>Abajo</button>"+tarea.value;
            lista.innerHTML = lista.innerHTML+"<hr/></div>";
        }
        else{
            let elemento = document.getElementById("otraTarea");   
            if(elemento.value != '' && elemento!=' ')
            {
                lista.innerHTML = lista.innerHTML+"<div id='tareita'>"+elemento.value+"<br/>";
                lista.innerHTML = lista.innerHTML+"<button class='arriba'>Arriba</button><button class='acabada'>Marcar como acabada</button><button class='eliminar'>Eliminar</button><br/>";
                lista.innerHTML = lista.innerHTML+"<button class='abajo'>Abajo</button>"+tarea.value;
                lista.innerHTML = lista.innerHTML+"<hr/></div>";

                const nuevaSeleccion = document.createElement("option");
                nuevaSeleccion.setAttribute("value", elemento.value);
                nuevaSeleccion.innerHTML = elemento.value;

                console.log(nuevaSeleccion);

                titulo.appendChild(nuevaSeleccion);
            }
            
        }
        
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