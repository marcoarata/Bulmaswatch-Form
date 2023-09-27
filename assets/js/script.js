/* :::::: Dropdown Menu :::::: */
// 1. Creamos una función que se habilita cuando el DOM se carga completamente addEventListener('DOMContentLoaded', function() {})
// 2. Esta función lo que hace es hacer funcionar el botón de hamburguesa que se crea en el navbar en su versión mobile
document.addEventListener('DOMContentLoaded', function() {

    const menus = document.querySelectorAll('.navbar-burger');
    const dropdowns = document.querySelectorAll('.navbar-menu');

    if (menus.length && dropdowns.length) {

        for (var i = 0; i < menus.length; i++) {

            menus[i].addEventListener('click', function() {

                for (var j = 0; j < dropdowns.length; j++) {
                    dropdowns[j].classList.toggle('is-active');
                }

            });
        }

    }

});

// <--- Aquí debes escribir la funcionalidad asociada al formulario --->

// Creamos una Función Flecha que se ejecutará al dar click en el botón
const formSubmitted = () => {

    // Capturamos el botón con JavaScript
    const boton = document.getElementById('button_submit_form');


    // Deshabilitamos el Botón agregándole el atributo "disabled"
    boton.setAttribute('disabled', '') ;


    // Agregamos la clase de bulma "is-loading" para agregar un efecto de cargando ...
    boton.classList.add('is-loading');


    // Ejecutamos nuestro SweetAlert2 Personalizado durante 3 segundos
    Swal.fire({position: 'center',icon: 'success',title: '💪🏻 Reserva Enviada', text: '📩 Instrucciones en tu correo electrónico', showConfirmButton: false, timer: 3000 }) ;


    // Se lo quitamos después de 3.5 Segundos ...
    setTimeout(()=> {

        // Removemos la clase "is-loading" para que deje de cargar
        boton.classList.remove('is-loading');


        // Volvemos a habilitar el botón removiendo el atributo "disabled"
        boton.removeAttribute('disabled');


        boton.innerHTML = 'Reserva Enviada 📨'




    }, 3500 /* Este es el tiempo en milisegundos */ );



    // Si quisiéramos Redireccionar a una URL después de 4 segundos ...
    setTimeout(()=> {

        // Redireccionamos al HOME
        //window.location='/'


    }, 4000 /* Este es el tiempo en milisegundos */ );


}

// carousel
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop:true,
        margin:15,
        // nav:true,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });
});

// ir a inicio botón
$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('#scroll').fadeIn();
        } else {
            $('#scroll').fadeOut();
        }
    });
    $('#scroll').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 0);
        return false;
    });
});
