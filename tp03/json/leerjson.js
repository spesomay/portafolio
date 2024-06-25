let resto = document.querySelector(".resultados")

fetch('json/restaurantes.json')
.then(response => {
     return response.json()
    })
.then(data => {
      for (let i=0; i < 6; i++){
       let puntu = ""
        let rango = ""

        if(data[i].rango === "4"){
            rango= "euro euro euro euro"
           }
           else if(data[i].rango === "3"){
            rango = "euro euro euro"
           }
           else if(data[i].rango === "2"){
            rango = "euro euro"
           }
           else {
            rango  = "euro"
           }
    

       if(data[i].puntuacion === "4"){
        puntu= "star star star star"
       }
       else if(data[i].puntuacion === "3"){
        puntu = "star star star"
       }
       else if(data[i].puntuacion === "2"){
        puntu = "star star"
       }
       else {
        puntu = "star"
       }

         document.querySelector('.resultados').innerHTML += `
         <a href="restaurante.html" class="resto" >
                <div class="img-resto">
                    <img src="${data[i].avatar.src}" width="500px" height="100px">
                </div>
                <div class="datos-resto">
                    <div class="tit">${data[i].name}</div>
                    <div class="secont">${data[i].horario}</div>
                    <div class="iconos-tit">
                        <div class="iconos icon_S">${puntu}</div>
                        <div class="iconos icon_S">${rango}</div>
                    </div>    
                </div>
                <div class="puntu-resto">4.8</div>
            </a>
           `
       
    }
})
