let resto = document.querySelector(".resultados")

fetch('json/cafe.json')
.then(response => {
     return response.json()
    })                          
.then(resto => {
      for (let i=0; i <8; i++){
    
        document.querySelector('.resultados').innerHTML +=
        `
                <a href="cafe.html" class="cuadra">
                    <div class="imagee">
                         <img src="${resto[i].img}" alt="">
                    </div>
                        
                        <div class="titulo-img">${resto[i].nombre}</div>
                        <div class="sub">${resto[i].direccion}</div>
                        <div class="abajo">
                            <div class="iconos icon_S">star</div>
                            ${resto[i].estrellas}
                        </div>
                    
                </a>
               
         
            </div>
     
        `
       
    }
})
