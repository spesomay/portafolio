let resto = document.querySelector(".resultado")

let imagenRestoLocal = localStorage.getItem("img")

fetch('json/cafe.json')
.then(response => {
     return response.json()
    })                          
.then(resto => {
    // console.log(localStorage.getItem("img"));
    // console.log(localStorage.getItem("nombre"));

      for (let i=0; i <1; i++){
    
        document.querySelector('.resultado').innerHTML +=
        `
        <div class="algo">
        <a href="resto.html" class="cuadrado">
            <div class="iconos icon_S">arrow_back</div>
        </a>
        <div class="largo">
            <div class="cuadrado">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"/></svg>       </div>
            <div class="cuadrado">
                <div class="iconos icon_S">upload</div>
            </div>
        </div>

    </div>
    <div class="imagen">
        
        <div class="contenedor-img">
            <img src="${localStorage.getItem("img")}" alt="">
        </div>
        <div class="contenedor">
            <div class="titulo">
            ${localStorage.getItem("origen")}
                <h5>see on a map</h5>
            </div>
            <div class="informacion">
            ${localStorage.getItem("descripcion")}
            </div>
           <div class="nose ">
                <div class="infor">
            ${localStorage.getItem("direccion")}
                    <div class="abajo">
                            <div class="iconos icon_S">star</div>
                            4.5 (478)
                    </div>
                </div>
                <div class="cuadrado">
                    <div class="iconos icon_S">call</div>
                </div>
            </div> 
            <div class="lugares">
                <div class="imagee">
                    <img src="${localStorage.getItem("img1")}" alt="">
                </div>
                <div class="imagee">
                    <img src="${localStorage.getItem("img2")}" alt="">
                </div>
                <div class="imagee">
                    <img src="${localStorage.getItem("img3")}" alt="">
                </div>
                <div class="imagee">
                    <img src="${localStorage.getItem("img4")}" alt="">
                </div>
            </div>  
            <div class="menu">
                <div class="title"> Our menu</div>
                <div class="opciones">
                    <button class="button-81" role="button">Cakes</button>
                    <button class="button-81" role="button">Cookies</button>
                    <button class="button-81" role="button">coffe</button>
                    <button class="button-81" role="button">tea</button>
                </div>
                <div class="precio">
                    <div class="cualalo">
                        ${localStorage.getItem("menu1")}
                        <div class="cantidad">
                        ${localStorage.getItem("precio1")}
                            <div class="cuadrado2">
                                <div class="iconos icon_S">arrow_forward</div>
                            </div>
                        </div>
                    </div>
                    <div class="cualalo">
                        ${localStorage.getItem("menu2")}
                        <div class="cantidad">
                        ${localStorage.getItem("precio2")}
                            <div class="cuadrado2">
                                <div class="iconos icon_S">arrow_forward</div>
                            </div>
                        </div>
                    </div>
                    <div class="cualalo">
                        ${localStorage.getItem("menu3")}
                        <div class="cantidad">
                        ${localStorage.getItem("precio3")}
                            <div class="cuadrado2">
                                <div class="iconos icon_S">arrow_forward</div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        
    </div>
     
        `
       
    }
})
