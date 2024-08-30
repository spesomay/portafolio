function pintarDatos(coso){
    let nombreResto = coso;
    // alert(`El nombre del resto es: ${nombreResto}`);

    fetch('json/resto.json')
    .then(response => {
        return response.json();
    })    
    .then(cate => {        
        cate.forEach(element => {
            // alert(nombreResto)
            if(element.nombre === nombreResto){
                localStorage.clear(); // Limpiar localStorage antes de guardar nuevos datos

                // Guardar datos en localStorage
                localStorage.setItem("nombre", element.nombre);
                localStorage.setItem("origen", element.origen);
                localStorage.setItem("descripcion", element.descripcion);
                localStorage.setItem("direccion", element.direccion);
                localStorage.setItem("estrellas", element.estrellas);
                localStorage.setItem("img", element.img);

                // Guardar imágenes adicionales del restaurante
                localStorage.setItem("img1", element.resto.img1);
                localStorage.setItem("img2", element.resto.img2);
                localStorage.setItem("img3", element.resto.img3);
                localStorage.setItem("img3", element.resto.img4);

                // Guardar menú
                localStorage.setItem("menu1", element.menu.nombre);
                localStorage.setItem("precio1", element.menu.precio);
                localStorage.setItem("menu2", element.menu.nombre2);
                localStorage.setItem("precio2", element.menu.precio2);
                localStorage.setItem("menu3", element.menu.nombre3);
                localStorage.setItem("precio3", element.menu.precio3);

                console.log("Datos guardados en localStorage");
            }
        });
    });

    
}
