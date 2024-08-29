function pintarDatos(coso){
    let nombreResto = coso;
    // alert(`El nombre del resto es: ${nombreResto}`);

    fetch('json/cafe.json')
    .then(response => {
        return response.json();
    })
    .then(cate => {
        
        cate.forEach(element => {
            // alert(nombreResto)
            if(element.nombre === nombreResto){
                localStorage.clear();
                localStorage.setItem("img", element.img);
                localStorage.setItem("nombre", element.nombre);
                console.log(localStorage.getItem("img"))
            }
        });
    });
    // .catch(error => {
    //     alert('Error al obtener los datos:', error);
    // });
}
