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
       /*  let variable = claseColor(index); */
        btnCat.classList.add(arregloClasesColor[index]);
    })
});
