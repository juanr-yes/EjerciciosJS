//                                                                                          --------PRIMER EJERCICIO--------

// $(function() {
//   $("#formulario").on("submit", function(e) {
//     e.preventDefault()
//     var nuevoBg = $("#bgcolor").val()
//     $("body").css("background-color", nuevoBg)
//     var nuevoBg = $("#bgcolor").val("")
//   })
// })

//                                                                                          --------SEGUNDO EJERCICIO--------

// $(function() {
//   $("#formulario").on ("submit", function(e) {
//     e.preventDefault()
//     var altura = $("#alturaUs").val()
//     var peso = $("#pesoUs").val() 
//     var calcularIMC = peso / (altura * altura)
//     console.log(calcularIMC)
//     if (calcularIMC > 24 || calcularIMC <= 19) {
//         $('#resultado').html('sobrepeso').css("color", "red")
//     } else {
//       $('#resultado').html('no tienes sobrepeso').css("color", "green")
//     }
//     })
//   })

//                                                                                          --------TERCER EJERCICIO--------

// $(function() {
//   $("#formulario").on("submit", function(e) {
//     e.preventDefault()
//     var valor = $("#valorUs").val()
//     var calculoIVA = Math.round(valor * 1.19)
//     $("#valorIVA").val(calculoIVA)
//   })
// })

//                                                                                          --------CUARTO EJERCICIO--------

// $(function() {
//   $("#formulario").on("submit", function(e) {
//     e.preventDefault()
//     var nombre = $("#nombreUs").val()
//     var apellido = $("#apellidoUs").val()
//     var concatenar = nombre + " " + apellido
//     console.log(concatenar)
//     $("#resultadoUS").val(concatenar)
//   })
// })

//                                                                                          --------CUARTO EJERCICIO (PARTE DOS)--------

// $(function() {
//   $('#nombreUs, #apellidoUs').on("keyup", function (e) {
//     var nombre = $("#nombreUs").val()
//     var apellido = $("#apellidoUs").val()
//     $("#resultadoUS").val(nombre + " " + apellido)
//   });
// })

//                                                                                          --------QUINTO EJERCICIO--------

// $(function() {
//   $("#formulario").on("submit", function(e) {
//     e.preventDefault()
//     var ancho = $("#anchoUS").val()
//     var alto = $("#altoUS").val()
//     $("#cuadro").addClass("cuadro").removeClass("hidden").css({
//       "width": ancho,
//       "height": alto
//     })
//   })
// })

//                                                                                          --------SEXTO EJERCICIO--------

// $(function() {
//   $(".agrProd").on("click", function(e) {
//     var producto = $(this).siblings(".producto").text()
//     $("#venta").append("<li>" + producto + "</li>")
//   })
// })

// //                                                                                          --------SEPTIMO EJERCICIO--------

// $(function() {
//     var x = ""
//     var y = ""
//     var display = ""
//     var primerNum = true
//     var suma = false
//     var resta = false
//     var multi = false
//     var divid = false

//     function mostrarDis (str) {
//       if (str == "Reiniciar operacion") {
//         return $("#display").val("")
//       }
//       return $("#display").val(display += str)
//     }

//     function juntandoNum(str) {
//       if (str == '+' || str == '-' || str == '/' || str == '*') {
//         return str.slice(0, -1)
//       }
//       if (str == "Resultado") {
//         return str.slice(0, -1)
//       }
//       if (str == "Limpiar") {
//         return str.slice(0, -1)
//       }
//       if (primerNum) {
//         return x += Number(str)
//     } else {
//         return y += Number(str)
//       }
//     }

//     function operacionDis(a, b) {
//       if (suma) {
//         return $("#display").val(a + b)
//       } else if (resta) {
//         return $("#display").val(a - b)
//       } else if (multi) {
//         return $("#display").val(a * b)
//       } else if (divid) {
//         return $("#display").val(a / b)
//       } 
//     }

//     $(".btn").on("click", function(e) {
//       var botonPulsado = $(this).html()
//       juntandoNum(botonPulsado)
//       mostrarDis(botonPulsado)

//       if (isNaN(botonPulsado)) {
//         if (botonPulsado == "+") {
//           primerNum = false
//           suma = true
//           $(".simbolo").attr("disabled", "disabled")
//         }
//         if (botonPulsado == "-") {
//           primerNum = false
//           resta = true
//           $(".simbolo").attr("disabled", "disabled")
//         }
//         if (botonPulsado == "*") {
//           primerNum = false
//           multi = true
//           $(".simbolo").attr("disabled", "disabled")
//         }
//         if (botonPulsado == "/") {
//           primerNum = false
//           divid = true
//           $(".simbolo").attr("disabled", "disabled")
//         }
//       }

//       if (botonPulsado == "Resultado" && suma) {
//         x = operacionDis(Number(x), Number(y)).val()
//         y = ""
//         primerNum = true
//         suma = false
//         display = x
//         $(".simbolo").removeAttr("disabled")
//       } else if (botonPulsado == "Resultado" && resta) {
//         x = operacionDis(Number(x), Number(y)).val()
//         y = ""
//         primerNum = true
//         resta = false
//         display = x
//         $(".simbolo").removeAttr("disabled")
//       } else if (botonPulsado == "Resultado" && multi) {
//         x = operacionDis(Number(x), Number(y)).val()
//         y = ""
//         primerNum = true
//         multi = false
//         display = x
//         $(".simbolo").removeAttr("disabled")
//       } else if (botonPulsado == "Resultado" && divid) {
//         x = operacionDis(Number(x), Number(y)).val()
//         y = ""
//         primerNum = true
//         divid = false
//         display = x
//         $(".simbolo").removeAttr("disabled")
//       }

//       if (botonPulsado == "Reiniciar operacion") {
//         display = 0
//         x = 0
//         y = 0
//         botonPulsado = 0
//         suma = false
//         resta = false
//         multi = false
//         divid = false
//         $(".simbolo").removeAttr("disabled")
//       }
//     })
// })
