// ============================================================
// script.js — Interactividad básica para The Witcher 3
// Curso: CLV-0062 | Universidad Fidélitas
// Herramientas: jQuery (ya cargado desde index.html)
// ============================================================

// $(document).ready(): espera a que el HTML esté completamente cargado
// antes de ejecutar cualquier código jQuery
// Buena práctica: SIEMPRE envolver el código jQuery aquí dentro
$(document).ready(function () {

  // ----------------------------------------------------------
  // 1. MENSAJE DE BIENVENIDA AL CARGAR LA PÁGINA
  // ----------------------------------------------------------

  // alert(): muestra un cuadro de diálogo con un mensaje al usuario
  // Se ejecuta una sola vez cuando la página termina de cargar
  // alert("¡Bienvenido a la página de The Witcher 3!");

  // ----------------------------------------------------------
  // 2. EFECTO AL HACER CLIC EN UN ARTÍCULO
  // ----------------------------------------------------------

  // $("section article"): selecciona todos los <article> dentro de <section>
  // .on("click", function): asigna una función al evento clic
  $("section article").on("click", function () {

    // $(this): hace referencia al artículo específico que se hizo clic
    // .find("h2"): busca el elemento <h2> dentro de ese artículo
    // .text(): obtiene el texto del h2 encontrado
    var titulo = $(this).find("h2").text();
    // var: declara la variable que guarda el título del artículo clickeado

    // alert(): muestra el título del artículo seleccionado
    // alert("Seleccionaste: " + titulo);
    // El operador + concatena el texto fijo con el valor de la variable
  });

  // ----------------------------------------------------------
  // 3. CAMBIO DE COLOR AL PASAR EL MOUSE POR EL HEADER
  // ----------------------------------------------------------

  // $("header"): selecciona el elemento <header> del HTML
  // .on("mouseenter"): evento que se activa cuando el cursor entra al elemento
  $("header").on("mouseenter", function () {

    // .css(): cambia estilos CSS directamente desde JavaScript
    // Oscurece el header al pasar el mouse por encima
    $(this).css("background-color", "#1e2a33");
    // "#1e2a33": versión más oscura del azul grisáceo del header
  });

  // .on("mouseleave"): evento que se activa cuando el cursor sale del elemento
  $("header").on("mouseleave", function () {

    // Restaura el color de fondo original del header
    $(this).css("background-color", "#364552");
    // "#364552": color original definido en style.css para este proyecto
  });

  // ----------------------------------------------------------
  // 4. CONTAR Y MOSTRAR LOS ARTÍCULOS EN CONSOLA
  // ----------------------------------------------------------

  // $("section article").length: cantidad de artículos encontrados en la página
  var totalArticulos = $("section article").length;
  // var: guarda el número total en una variable

  // console.log(): imprime en la consola del navegador sin molestar al usuario
  // Para verlo: F12 → pestaña "Console"
  console.log("Total de secciones en la página: " + totalArticulos);
  // El operador + une el texto descriptivo con el valor numérico de la variable

}); // Fin de $(document).ready()

// ============================================================
// FIN DE script.js
// ============================================================