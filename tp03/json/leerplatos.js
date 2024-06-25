let platos = document.querySelector(".resultados")

fetch('json/platos_argentinos.json')
.then(response => {
     return response.json()
    })
.then(plato => {
      for (let i=0; i < 6; i++){
         platos.innerHTML += `
                <a href="plato.html" class="resto sombra">
                <div class="img">
                    <img class="img_fit" src="${plato[i].image}">
                </div>
                <div class="titulos">
                    <div class="primero">
                        ${plato[i].plato}
                   
                  
                        <span>${plato[i].description}</span>    
                    </div>
                </div>
            </a>`
       
    }
})
