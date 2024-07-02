let platos = document.querySelector(".resultados")

fetch('json/platos_argentinos.json')
.then(response => {
     return response.json()
    })
.then(plato => {
      for (let i=0; i < 1; i++){
         platos.innerHTML += `
        <section class="resto_imagen pr">
        <a href="index.html" class="volver iconos pa">close</a>
        <img src=" ${plato[i].image}" class="img_fit">
        <div class="resto_plato centgrid pa sombra">$ ${plato[i].price}</div>
    </section>
   
    <section class="resto_desc">
       
        <div class="flex100">
            
            <div class="resto_titulo">
                <h3>${plato[i].plato}</h3>
                <h3>${plato[i].description}</h3>
            </div>
        </div>

                <span>
                    <h2>Datos: </h2>
                ${plato[i].description}
                </span>
                
    </section>`
       
    }
})
