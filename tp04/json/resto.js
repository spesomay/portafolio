let resto = document.querySelector(".contenedor-cafe")

fetch('json/cafe.json')
.then(response => {
     return response.json()
    })                          
.then(resto => {
    
    
      for (let i=0; i <resto.length; i++){
        document.querySelector('.contenedor-cafe').innerHTML +=
        `
            <a href="cafe.html" onclick="pintarDatos('${resto[i].nombre}')" class="cuadra" >
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
     
        `
       
    }
})

let restos = document.querySelector(".contenedor-cafee")

fetch('json/cafe.json')
.then(response => {
     return response.json()
    })                          
.then(restos => {
    
    
      for (let i=0; i <restos.length; i++){
        document.querySelector('.contenedor-cafee').innerHTML +=
        `
            <a href="cafe.html" onclick="pintarDatos('${restos[i].nombre}')" class="cuadra" >
                <div class="imagee">
                    <img src="${restos[i].img}" alt="">
                </div>
                        
                <div class="titulo-img">${restos[i].nombre}</div>
                <div class="sub">${restos[i].direccion}</div>
                <div class="abajo">
                    <div class="iconos icon_S">star</div>
                    ${restos[i].estrellas}
                </div>
                    
            </a>
     
        `
       
    }
})