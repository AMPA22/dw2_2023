var datos=[];
var mensajes=[];
//const tiempoTranscurrido = Date.now();
//const hoy = new Date(tempoTranscurrido);
datos.push({ nombre: "Raul", email: "raul@gmail.com", mensaje:"Hay muchas variaciones de los pasajes de Lorem Ipsum disponibles, pero la mayoría sufrió alteraciones en alguna manera, ya sea porque se le agregó humor, o palabras aleatorias que no parecen ni un poco creíbles. Si vas a utilizar un pasaje de Lorem Ipsum, necesitás estar seguro de que no hay nada avergonzante escondido en el medio del texto. Todos los generadores de Lorem Ipsum que se encuentran en Internet tienden a repetir trozos predefinidos cuando sea necesario, haciendo a este el único generador verdadero (válido) en la Internet. Usa un diccionario de mas de 200 palabras provenientes del latín, combinadas con estructuras muy útiles de sentencias, para generar texto de Lorem Ipsum que parezca razonable. Este Lorem Ipsum generado siempre estará libre de repeticiones, humor agregado o palabras no características del lenguaje, etc."});
datos.push ({ nombre: "Sonia", email: "sonia@gmail.com", mensaje:"Al contrario del pensamiento popular, el texto de Lorem Ipsum no es simplemente texto aleatorio. Tiene sus raices en una pieza cl´sica de la literatura del Latin, que data del año 45 antes de Cristo, haciendo que este adquiera mas de 2000 años de antiguedad. Richard McClintock, un profesor de Latin de la Universidad de Hampden-Sydney en Virginia, encontró una de las palabras más oscuras de la lengua del latín,  en un pasaje de Lorem Ipsum, y al seguir leyendo distintos textos del latín, descubrió la fuente indudable. Lorem Ipsum viene de las secciones 1.10.32 y 1.10.33 de (Los Extremos del Bien y El Mal) por Cicero, escrito en el año 45 antes de Cristo. Este libro es un tratado de teoría de éticas, muy popular durante el Renacimiento. La primera linea del Lorem Ipsum, viene de una linea en la sección 1.10.32"});
datos.push ({ nombre: "Carlos", email: "carlos@gmail.com", mensaje:"El trozo de texto estándar de Lorem Ipsum usado desde el año 1500 es reproducido debajo para aquellos interesados. Las secciones 1.10.32 y 1.10.33 de por Cicero son también reproducidas en su forma original exacta, acompañadas por versiones en Inglés de la traducción realizada en 1914 por H. Rackham."});

console.log(datos);

function enviar() {
    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let mensaje = document.getElementById("mensaje").value;

    //datos.push({ nombre: nombre, email: email, mensaje: mensaje });
    //localStorage.setItem("datos", JSON.stringify(datos)); 

    mensajes.push({ nombre: nombre, email: email, mensaje: mensaje });
    localStorage.setItem("mensajes", JSON.stringify(mensajes));

    console.log(datos);
    dibujartabla();
}


function cargar() {
    var data = localStorage.getItem("mensajes");
    if (!data || data=="") {
    mensajes = datos;
    } else {
    mensajes = JSON.parse(data);
    }
    dibujartabla();
}

function dibujartabla() {
    console.log("dibujando");
    var sms=document.getElementById("sms");
    var thead='<table class="table table-light "><thead><tr><th>Usuario</th><th>Email</th><th>Mensaje<th></th></th></tr></thead><tbody>';
    var tfoot="</tbody></table>";
    var tbody="";
    mensajes.forEach((e, index) => { 
          tbody +=
          "<tr><td>" +
          e.nombre +
          "</td><td>" +
          e.email +
          "</td><td>" +
          e.mensaje +
          "</td><td><button data-id='" +
          index +
          //"' class='btn btn-warning btedit' onclick='enviar()'>Enviar</button></td><td><button data-id='" +
          index +
          "' class='btn btn-danger btdel' onclick='borrar(" +
          index +
          ")'>Borrar</button></td></tr>";
    });
    sms.innerHTML=thead+tbody+tfoot;  
}
//cargar();
function borrar(id) {
    console.log("borrando...");
    datos.splice(id, 1);
    persistir();
    dibujartabla();
} 
function limpiar() {
    document.getElementById("nombre").value=" ";
    document.getElementById("email").value=" ";
    document.getElementById("mensaje").value=" ";  
}
function persistir()
{
localStorage.setItem("mensajes",JSON.stringify(mensajes));
console.log(mensajes);
}  
window.addEventListener("load", cargar);