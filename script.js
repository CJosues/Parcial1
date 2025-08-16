$(document).ready(function() {
    // Alerta de bienvenida
    $("#btn-bienvenida").click(function() {
        alert("¡Bienvenido, César!");
    });

    // Cambiar fondo
    $("#btn-color").click(function() {
        $("body").css("background-color", "#ffe4e1");
        localStorage.setItem("fondo", "#ffe4e1");
    });

    // Restaurar fondo al cargar
    const fondoGuardado = localStorage.getItem("fondo");
    if (fondoGuardado) {
        $("body").css("background-color", fondoGuardado);
    }

    // Cambiar texto
    $("#btn-cambiar-texto").click(function() {
        $("#intro").text("Texto actualizado con jQuery.");
    });

    // Agregar a lista
    $("#btn-agregar").click(function() {
        const nuevoItem = $("#nombre").val();
        if (nuevoItem) {
            $("#lista-intereses").append("<li>" + nuevoItem + "</li>");
        }
    });

    // Validación de formulario
    $("#formulario").submit(function(e) {
        e.preventDefault();
        let errores = [];
        if (!$("#nombre").val()) errores.push("Nombre vacío");
        if (!$("#correo").val()) errores.push("Correo vacío");
        if (!$("#comentario").val()) errores.push("Comentario vacío");

        if (errores.length > 0) {
            alert("Errores:\n" + errores.join("\n"));
        } else {
            localStorage.setItem("nombre", $("#nombre").val());
            localStorage.setItem("correo", $("#correo").val());
            localStorage.setItem("comentario", $("#comentario").val());
            alert("Formulario enviado correctamente.");
        }
    });

    // Precargar datos
    $("#nombre").val(localStorage.getItem("nombre") || "");
    $("#correo").val(localStorage.getItem("correo") || "");
    $("#comentario").val(localStorage.getItem("comentario") || "");
});
