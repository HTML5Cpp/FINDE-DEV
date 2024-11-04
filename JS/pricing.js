let tabs = document.querySelectorAll('.option-pricing');
let infos = document.querySelectorAll('.informacion-pricing');

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        if (!tab.classList.contains('active-price')) {
            tabs.forEach(tabr => {
                tabr.classList.remove('active-price');
            });
            tab.classList.add('active-price');
        }
        let pos = index;

        formsUpdate(pos);
    });

});

function formsUpdate(pos){
    
    infos.forEach(info => {
        info.classList.remove('mostra');
        info.classList.add('ocultar');
    });  

    infos[pos].classList.add('mostra');
    infos[pos].classList.remove('ocultar');
}