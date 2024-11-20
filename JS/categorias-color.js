let btn_categorias = document.querySelectorAll('.categories-card-item');


btn_categorias.forEach((btnCat, index) => {
    let arregloClasesColor = ['actCat-0', 'actCat-1', 'actCat-2','actCat-4','actCat-3','actCat-5'];

    btnCat.addEventListener('click', () => {
        for (let i = 0; i < btn_categorias.length; i++) {
            btn_categorias[i].classList.remove('active-categories-item');

            for (let j = 0; j < arregloClasesColor.length; j++) {
                btn_categorias[i].classList.remove(arregloClasesColor[j]);
            }
        }
        
        btnCat.classList.add('active-categories-item');
        btnCat.classList.add(arregloClasesColor[index]);
        backgroundCtaegories(index)
    })
});

backgroundCtaegories(0)
function backgroundCtaegories(pos){
    let categoria_header = document.getElementById('header-category-container-inner');
    let circle_header = document.getElementById('header-category-container-inner-circle');
    let imagesArrayHead = [
        './RECURSOS/HEADER_CATEGORIA/head-all.jpeg', 
        '../RECURSOS/HEADER_CATEGORIA/head-restaurant.jpeg', 
        '../RECURSOS/HEADER_CATEGORIA/head-culture.jpeg', 
        '../RECURSOS/HEADER_CATEGORIA/head-fun.jpeg', 
        '../RECURSOS/HEADER_CATEGORIA/head-party02.jpeg', 
        '../RECURSOS/HEADER_CATEGORIA/head-health.jpeg'
    ];
    let imagesArrayCir = [
        '../RECURSOS/HEADER_CATEGORIA/circle-all.jpeg', 
        '../RECURSOS/HEADER_CATEGORIA/circle-restaurant02.jpeg', 
        '../RECURSOS/HEADER_CATEGORIA/circle-culture.jpeg', 
        '../RECURSOS/HEADER_CATEGORIA/circle-fun.jpeg', 
        '../RECURSOS/HEADER_CATEGORIA/circle-party.jpeg', 
        '../RECURSOS/HEADER_CATEGORIA/circle-health.jpeg'
    ];
    categoria_header.style.backgroundImage = `url(${imagesArrayHead[pos]})`;
    circle_header.style.backgroundImage = `url(${imagesArrayCir[pos]})`;

}



