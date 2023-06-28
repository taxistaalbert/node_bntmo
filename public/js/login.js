pagina=1;

document.addEventListener('DOMContentLoaded',function(){
    iniciarApp();
});

function iniciarApp(){

    //Resalta el button actual segun el tab al que se presiona
    mostrarSeccion();
    //Oculta o muestra una sección según el tab a que se presiona
    cambiarSeccion();
}

function mostrarSeccion(){

    //Eiminar mostrar sección de la sección anterior
    const anterior=document.querySelector('.mostrar-seccion');
    if(anterior){
        anterior.classList.remove('mostrar-seccion');
    }

    const seccionActual= document.querySelector(`#paso-${pagina}`);
    seccionActual.classList.add('mostrar-seccion');

    //Elimiar la clase active en el tab anterior

    const tabAnterior=document.querySelector(".active");
    if(tabAnterior){
        tabAnterior.classList.remove('active');
    }

    //El actual
    const tab=document.querySelector(`[data-paso="${pagina}"]`);
    tab.classList.add('active');

    console.log(pagina);

    // manejo over-grid
    if(pagina === 2){
        document.querySelector('#over-grid').classList.add('d-none')
    }else{
        if(document.querySelector('#over-grid').classList.contains('d-none')){
            document.querySelector('#over-grid').classList.remove('d-none');
        }
    }
}


function cambiarSeccion(){
    const spans= document.querySelectorAll('.nav-tabs span');

    spans.forEach(span=>{
        span.addEventListener('click',(e)=>{
            e.preventDefault();

            pagina=parseInt(e.target.dataset.paso);
            mostrarSeccion();

        })
    })
}