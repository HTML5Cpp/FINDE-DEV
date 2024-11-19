
let btn_options = document.querySelectorAll('.option-btn-sign');
let btn_container = document.querySelectorAll('.container-option-btn-sign');
btn_container[2].classList.add('ocultar');
btn_container[3].classList.add('ocultar');
let btn_siguiente = document.getElementById('btn-next-app');
let btn_regresar = document.getElementById('btn-back-app');

let soy = '';
let voy = ';'

conatrItems(2, 1);
let botonesINOUT = document.getElementById('botones-opcion-container');
let formINGRESO = document.getElementById('form-opcion-container-ingreso');
let formREGISTRO = document.getElementById('form-opcion-container-registro');
let categoriasSEC = document.getElementById('categorias');

let ingreso = document.getElementById('ingreso');
ingreso.addEventListener('click', ingresoF);
function ingresoF(){
    activeBTN(ingreso);
    soy = 'inicio';
    voy = 'formIngreso';
}
let registro = document.getElementById('registro');
registro.addEventListener('click', registroF);
function registroF(){
    activeBTN(registro);
    soy = 'inicio';
    voy = 'opciones';
}
let lugar = document.getElementById('lugar');
lugar.addEventListener('click', lugarF);
function lugarF(){
    activeBTN(lugar);
    soy = 'opciones';
    voy = 'categorias';
}
let usuario = document.getElementById('usuario');
usuario.addEventListener('click', usuarioF);
function usuarioF(){
    activeBTN(usuario);
    soy = 'opciones';
    voy = 'formRegistro';
}
let cate = document.getElementById('categorias');
cate.addEventListener('click', cateF);
function cateF(){
    activeBTN(cate);
    soy = 'categorias';
    voy = 'formRegistro';
}

function activeBTN(elemento){
    btn_options.forEach(btn => {
        btn.classList.remove('option-btn-sign-active');
    });
    elemento.classList.add('option-btn-sign-active');
   
}

let btn_ategorias = document.querySelectorAll('.categoria-item');
btn_ategorias.forEach(btn => {
    btn.addEventListener('click', () => {
        for (let index = 0; index < btn_ategorias.length; index++) {
            btn_ategorias[index].classList.remove('categoria-item-active');
        }
        btn.classList.add('categoria-item-active');
    });
});



function conatrItems(num, pos){
    let conteendor = document.getElementById('counter-opcion-container');
    conteendor.innerHTML ='';    
    for (let i = 0; i < num; i++) {
        let item = document.createElement('div');
        item.classList.add('counter-item');
        item.classList.add('rounded-pill');
        item.classList.add('p-1');
        conteendor.appendChild(item);
    }
    let contadores = document.querySelectorAll('.counter-item');

    for (let i = 0; i < (pos-1); i++) {
        contadores[i].classList.add('counter-pass');
    }
    contadores[pos-1].classList.add('counter-active');
}



function botonesINOUTF(){
    botonesINOUT.classList.remove('ocultar');
}
function formGeneralINGRESO(){
    formINGRESO.classList.remove('ocultar');
}
function formGeneralREGISTRO(){
    formREGISTRO.classList.remove('ocultar');
}
function categoriasSECtion(){
    categoriasSEC.classList.remove('ocultar');
}


function ocultarT(){
    botonesINOUT.classList.add('ocultar');
    formINGRESO.classList.add('ocultar');
    formREGISTRO.classList.add('ocultar');
    categoriasSEC.classList.add('ocultar');
}


btn_siguiente.addEventListener('click', () => next(voy));
function next(v){
    console.log('SOY: ', soy)
    console.log('VOY: ', v)
    if(v !== 'inicio'){
        btn_regresar.classList.remove('ocultar');
    }

    switch (v) {
        case 'inicio':
            ocultarT();
            botonesINOUTF();
            console.log(f);
            btn_regresar.classList.add('ocultar');
            break;
        case 'formIngreso':
            ocultarT();
            formGeneralINGRESO();
            conatrItems(2, 2);
            break;
        case 'opciones':
            btn_container[2].classList.remove('ocultar');
            btn_container[3].classList.remove('ocultar');
            btn_container[0].classList.add('ocultar');
            btn_container[1].classList.add('ocultar');
            conatrItems(3, 2);
            break;
        case 'formRegistro':
            ocultarT();
            formGeneralREGISTRO();
            conatrItems(3, 3);
            break;
        case 'categorias':
            ocultarT();
            categoriasSECtion();
            conatrItems(4, 3);
            break;
    
        default:
            break;
    }
}

btn_regresar.addEventListener('click', () => back(soy));
function back(s){
    console.log('SOY: ', s)
    console.log('VOY: ', voy)
    if(s == 'inicio'){
        btn_regresar.classList.add('ocultar');
    }

    switch (s) {
        case 'inicio':
            ocultarT();
            botonesINOUTF();
            btn_container[2].classList.add('ocultar');
            btn_container[3].classList.add('ocultar');
            btn_container[0].classList.remove('ocultar');
            btn_container[1].classList.remove('ocultar');
            conatrItems(2, 1);
            break;
        case 'formIngreso':
            ocultarT();
            formGeneralINGRESO();
            break;
        
        case 'opciones':
            ocultarT();
            botonesINOUTF();
            btn_container[2].classList.remove('ocultar');
            btn_container[3].classList.remove('ocultar');
            btn_container[0].classList.add('ocultar');
            btn_container[1].classList.add('ocultar');
            conatrItems(3, 2);
            soy = 'inicio'
            break;

        case 'categorias':
            ocultarT();
            categoriasSECtion();
            conatrItems(4, 3);
            break;
       /*  case 'formRegistro':
            ocultarT();
            formGeneralREGISTRO();
            break; */
    
        default:
            break;
    }
}

