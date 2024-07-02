
fetch('json/restaurantes.json')
.then(response => {
     return response.json()
    })
    //persona.length

.then(persona => {
    console.log(persona.length)
      for (let i=0; i < 1; i++){
        document.querySelector(".resultados").innerHTML += `
        <section class="resto_imagen pr">

        <a href="index.html" class="volver iconos pa">close</a>

        <img class="img_fit" src="${persona[i].avatar.src}">
        <div class="resto_precio centgrid pa sombra">443</div>
    </section>
   
    <section class="resto_desc">
       
        <div class="flex100">
            
            <div class="resto_titulo">
                <h3>${persona[i].name}</h3>
                <h3>Teo y sus Maladros - Manuel Alberti</h3>
            </div>

            <div class="iconos"> attach_money attach_money attach_money</div>
        </div>
        <div class="iconos_menu">
            <a class="item_cat">
                <div class="iconos icon_S">schedule</div>
                10am-10pm
            </a>
            <a class="item_cat">
                <div class="iconos icon_S">location_on</div>
                1.6KM
            </a>
            <a class="item_cat">
                <div class="iconos icon_S">room_service</div>
                Delivery
            </a>
        </div>
                <span>
                    <h2>Datos: </h2>
                    ${persona[i].bio}
                </span>`
       
    }
})
