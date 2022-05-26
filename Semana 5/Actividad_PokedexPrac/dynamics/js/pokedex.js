window.addEventListener("load", ()=>{
  const btnAgregar = document.getElementById("btn-agregar");
  const divAgregar = document.getElementById("contenedor-agregar");
  const btnEnviar = document.getElementById("btn-enviar");
  const buscador = document.getElementById("buscador");
  const divDatos = document.getElementById("contenedor-mostrar");
  const divResultados = document.getElementById("contenedor-resultados");
  const formNuevo = document.getElementById("form-nuevo");

  btnAgregar.addEventListener("click", (evento)=>{
    divAgregar.style.display = "block";
    divDatos.style.display = "none";
  });

  btnEnviar.addEventListener("click", (evento)=>{//crea pokemones
    divAgregar.style.display = "none";
    evento.preventDefault();
    
    let datosForm = new FormData(formNuevo);
    fetch("dynamics/php/crear_pokemon.php", {
      method:"POST", 
      body: datosForm,
    }).then((response)=>{
      return response.json();
    }).then((datosJSON) =>{
      if(datosJSON.ok == true){
        alert("Todo bien");
      }else{
        alert(datosJSON.texto);
      }
    })
  });

  fetch("dynamics/php/tipos.php")//se ponen automaticamente los tipos en el "form"
    .then((response)=>{
      //console.log(response);
      return response.json();      
    })
    .then((datosJSON)=>{
      console.log(datosJSON);
      let selectTipos = document.getElementById("select-tipos");
      for(tipo of datosJSON){
        selectTipos.innerHTML+="<option value='"+tipo.id+"'>"+tipo.nombre+"</option>";
      }
    });

  buscador.addEventListener("keyup", (evento)=>{//mostrar resultados relacionados
    let termino = buscador.value;
    divResultados.innerHTML = "";
    if(termino.length >= 3){
      fetch("dynamics/php/pokemon.php?q="+termino)
        .then((response)=>{
          return response.json();
        })
        .then((datosJSON)=>{//en este punto ya es un arreglo
          //Mostrar resultados
          console.log(datosJSON);
          for(pokemon of datosJSON)
          {
            let div = document.createElement("div");
            div.innerHTML = pokemon.pok_name;
            div.dataset.id = pokemon.pok_id;
            div.classList.add("coincidencia");
            divResultados.appendChild(div);
          }
        });
    }
  });

  divResultados.addEventListener("click", (evento)=>{
    if(evento.target.classList.contains("coincidencia")){
      let id = evento.target.dataset.id;

      fetch("dynamics/php/pokemon.php?id="+id)
        .then((response)=>{
          return response.json();
        })
        .then((datosJSON)=>{
          if(datosJSON.ok == true){
            divDatos.innerHTML="<div class='dato'><strong>Nombre</strong>"+datosJSON.datos.nombre+"</div>";
            divDatos.innerHTML+="<div class='dato'><strong>Altura</strong>"+datosJSON.datos.altura+"</div>";
            divDatos.innerHTML+="<div class='dato'><strong>Peso</strong>"+datosJSON.datos.peso+"</div>";
            divDatos.innerHTML+="<div class='dato'><strong>Tipo</strong>"+datosJSON.datos.tipo+"</div>";
            divDatos.style.display = "flex";
            //divDatos.innerHTML+="<div class='dato' id='btn-eliminar'><strong>Eliminar</strong></div>";
            divDatos.innerHTML+="<div data-id="+id+" class='dato' id='btn-eliminar'><strong>Eliminar</strong></div>";
          }
        });
    }    
  });

  divDatos.addEventListener("click", (evento)=>{
    if(evento.target.id == "btn-eliminar")
    {
      //let id = divDatos.
      //let nombre_pokemon = divDatos.children[0].lastChild.textContent;
      //console.log(nombre_pokemon);


      let datosForm = new FormData();
      datosForm.append("id", evento.target.dataset.id);

      fetch("dynamics/php/eliminar_pokemon.php", {
        method: "POST",
        body: datosForm,
      })     
      .then((response)=>{
        return response.json();
      })
      .then((datosJSON) =>{
        if(datosJSON.ok == true){
          alert(nombre_pokemon+" eliminado");
        }else{
          alert(datosJSON.texto);
        }
      });
      divDatos.innerHTML = "";
      divResultados.innerHTML = "";
    }
/*
      fetch("dynamics/php/eliminar_pokemon.php?q="+nombre_pokemon)     
      .then((response)=>{
        return response.json();
      })
      .then((datosJSON) =>{
        if(datosJSON.ok == true){
          alert(nombre_pokemon+" eliminado");
        }else{
          alert(datosJSON.texto);
        }
      });
      divDatos.innerHTML = "";
      divResultados.innerHTML = "";
    }
   */     
  });

});