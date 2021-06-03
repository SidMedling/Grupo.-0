
            $(document).ready(function(){
                $("#formulario").validate({
                    rules: {
                        nombre: {
                            required: true,
                            maxlength: 15
                        },
                        email: {
                             required: true,
                             email: true
                        },
                        comentario: {
                            required: true
                        },
                        telefono:{
                            required: true,
                            number: true,
                             minlength: 9,
                            maxlength: 10
                        },
                        fecha: {
                            required: true,
                            date: true
                        }
                    },
                      messages: {
                        nombre: {
                            required: "Ingrese su nombre correctamente",
                            maxlength: "Su nombre es demasiado largo",
                        },
                        email: {
                            required: "Complete el campo",
                            email: "Ingrese un email veridico"
                        },
                        comentario: {
                            required: "Ingrese algunas palabras como comentario"
                        },
                        telefono:{
                            required: "Este campo debe de ser completado correctamente",
                            number: "Ingrese un numero veridico",
                            minlength: "Ingrese al menos 9 numeros"
                        },
                        fecha: {
                            required: "Ingrese una fecha"
                        }
                    }
                });
            });
    