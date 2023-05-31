var datos=[];
var personas=[];

datos.push({ nombre: "Enzo", email: "esfot26@gmail.com", mensajes:"Hola soy Enzo y tengo 20 años"});
datos.push ({ nombre: "Alheli", email: "alheli@gmail.com", mensajes:"Hola soy Alheli y tengo 11 años"});
datos.push ({ nombre: "Pedro", email: "pedro@gmail.com", mensajes:"Hola soy Pedro y tengo 28 años"});
datos.push({ nombre: "Nestor", email: "nestor@gmail.com", mensajes:"Hola soy Nestor y tengo 13 años"});
console.log(datos);

function enviar() {
      let nombre = document.getElementById("nombre").value;
      let email = document.getElementById("email").value;
      let mensajes = document.getElementById("mensajes").value;

      datos.push({ nombre: nombre, email: email, mensajes: mensajes });
      localStorage.setItem("datos", JSON.stringify(datos)); 

      personas.push({ nombre: nombre, email: email, mensajes: mensajes });
      localStorage.setItem("personas", JSON.stringify(personas));

      console.log(datos);
      dibujartabla();
}


function cargar() {
      var data = localStorage.getItem("personas");
      if (!data || data=="") {
      personas = datos;
      } else {
      personas = JSON.parse(data);
      }
      dibujartabla();
}

function dibujartabla() {
      console.log("dibujando");
      var buzon=document.getElementById("buzon");
      var thead='<table class="table table-dark "><thead><tr><th>Nombre</th><th>Email</th><th>Mensajes<th></th></th></tr></thead><tbody>';
      var tfoot="</tbody></table>";
      var tbody="";
      personas.forEach((e, index) => { 
            tbody +=
            "<tr><td>" +
            e.nombre +
            "</td><td>" +
            e.email +
            "</td><td>" +
            e.mensajes +
            "</td><td><button data-id='" +
            index +
            //"' class='btn btn-warning btedit' onclick='enviar()'>Enviar</button></td><td><button data-id='" +
            index +
            "' class='btn btn-danger btdel' onclick='borrar(" +
            index +
            ")'>Borrar</button></td></tr>";
      });
      buzon.innerHTML=thead+tbody+tfoot;  
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
      document.getElementById("mensajes").value=" ";  
}
function persistir()
{
localStorage.setItem("personas",JSON.stringify(personas));
console.log(personas);
}  
window.addEventListener("load", cargar);