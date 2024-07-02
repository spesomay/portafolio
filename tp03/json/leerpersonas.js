let personas = document.querySelector(".resultados")

fetch('json/personas_argentinas.json')
.then(response => {
     return response.json()
    })
.then(persona => {
    console.log(persona.length)
      for (let i=0; persona.length; i++){
         personas.innerHTML += `
                    <article class="resto sombra">
                <div class="img">
                <div class="precio">4.5</div>
                    <img src="${persona[i].image}">
                </div>
                <div class="titulos">
                    <div class="titu">
                        ${persona[i].nombre}<br>
                        -${persona[i].description}
                    </div>
                    <div class="seconts">
                    ${persona[i].opinion}
                    </div>
                </div>
            </article>`
       
    }
})
