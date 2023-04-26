/*
cargar personas
listar personas
agregar personas 
editar personas
borrar personas

Personas
id
nombre
apellido
cin
direccion -> texto
ciudad
fecha de nacimiento*/

var personas=[]
var pdatos=[]

pdatos.push({id:1,apellido:"davalos",nombre: "ivan", cin:5549165,fecha_nac:"01/11/2002", ciudad_id:1, direccion:"Pacu Cua" })
pdatos.push({id:2,apellido:"Pereira",nombre: "abril", cin:5576308,fecha_nac:"11/04/2003", ciudad_id:2, direccion:"San Pedro" })
pdatos.push({id:3,apellido:"Oleñik",nombre: "mario", cin:5556302,fecha_nac:"11/04/2003", ciudad_id:2, direccion:"San Pedro" })
console.log(pdatos)

function pcargar()
{
    var data=localStorage.getItem("personas");
    //recupera datos del local storage
    if (!data || data=="")
    {
        let aux=JSON.stringify(pdatos);
        personas=JSON.parse(aux);
        //personas=JSON.parse(JSON.stringify(pdatos));
    }else
    {
        //en caso de existir se asignan los datos al array personas
        personas=JSON.parse(data);
    }
    console.log(personas);
    dibujarTabla();  
}

function dibujarTabla()
{
    console.log("dibujando");
    var lista= document.getElementById("lista");
    //console.log(personas);
    //lista.innerHTML = lista.innerHTML+"<p>Estoy dentro</p>";
    var thead='<table class="table table-dark "><thead><tr><th>id</th><th>Apellido</th><th>Nombre</th><th>Doc.</th><th>DoB</th><th>Ciudad</th><th>Dir</th><th colspan="2"><button id="btnew" class="btn btn-primary ">Nuevo</button></th></tr></thead><tbody></tbody>';
    var tfoot="</tbody></table>";
    var tbody="";
    personas.forEach( (e) => 
    {     
        tbody =
				tbody +
				"<tr><td>" +
				e.id +
				"</td><td>" +
                e.apellido +
				"</td><td>" +
				e.nombre +
				"</td><td>" +
                e.cin +
				"</td><td>" +
                e.fecha_nac +
				"</td><td>" +
                e.ciudad_id +
				"</td><td>" +
                e.direccion +
				"</td><td><button data-id='" +
				e.id +
				"'  class='btn btn-warning btedit '>Editar</button></td> <td><button  data-id='" +
				e.id+
				"'  class='btn btn-danger btdel '>Borrar</button></td></tr>";
    }); 
    lista.innerHTML = thead+tbody+tfoot;
    addEventosClk();
}
    
function addEventosClk()/// desde acá se agregan las funciones onclk
{
    var btnpeditar=  document.getElementsByClassName('btedit');
    /// console.log(btnEditar.length);
    for (let i=0; i<btnpeditar.length;i++)
    {
        btnpeditar[i].addEventListener("click", clkpeditar);
        // console.log(btnEditar[i]);
    }
    var btnuevo=document.getElementById("btnew");
    btnew.addEventListener("click", clknuevo);
    ////
    var btnborrar = document.getElementsByClassName("btdel");
    // btnborrar.addEventListener("click", clkborrar);
    for (let i = 0; i < btnborrar.length; i++) 
    {
		btnborrar[i].addEventListener("click", clkborrar);
		// console.log(btnEditar[i]);
	}
    console.log("Los eventos fueron cargados")
}

function clknuevo()
{
    ///alert("pasa por nuevo");
    console.log("nuevo");
    document.getElementById("id").value =-1;
    document.getElementById("apellido").value ="";
	document.getElementById("nombre").value ="";
    document.getElementById("cin").value ="";
    document.getElementById("fecha_nac").value ="";
    document.getElementById("ciudad_id").value ="";
    document.getElementById("direccion").value ="";             
}

function clkpeditar(e)
{
	///alert("pasa por editar");
	eid=e.target.getAttribute('data-id');
    personas.forEach((item) =>
    { 
        if (item.id==eid)
        {
            console.log(item);
            document.getElementById('id').value=item.id;  
            document.getElementById("nombre").value = item.nombre;
            document.getElementById("apellido").value = item.apellido;
            document.getElementById("cin").value = item.cin;
            document.getElementById("fecha_nac").value = item.fecha_nac;
            document.getElementById("ciudad_id").value = item.ciudad_id;
            document.getElementById("direccion").value = item.direccion;     
        }
    });
}

function clkborrar(e)
{
    ///alert("pasa por borrar");
	console.log("borrando...");
    eid = e.target.getAttribute("data-id");
    //console.log(e.target.getAttribute("data-id"));
    console.log(personas);
    personas.forEach((item,idx) => 
    {
        if (item.id==eid)
        {
            personas.splice(idx,1);   
        }
    });
    console.log(personas);
    persistir();
    dibujarTabla();
}
//falta que funcione guardar, el resto ya funciona
function guardar()
{
    alert("pasa por guardar");
    var gid = document.getElementById("id").value;
    var gapellido = document.getElementById("apellido").value;
    var gnombre = document.getElementById("nombre").value;
    var gcin = document.getElementById("cin").value;
    var gfecha_nac = document.getElementById("fecha_nac").value;
    var gciudad_id = document.getElementById("ciudad_id").value;
    var gdireccion = document.getElementById("direccion").value;        
    console.log(gid+" - "+gapellido+" - "+gnombre+" - "+gcin+" - "+gfecha_nac+" - "+gciudad_id+" - "+gdireccion);	
    if (gid==-1)
    {
        console.log("nuevo item");
        gid=personas[personas.length-1].id+1;
        personas.push({ id: gid, apellido: gapellido, nombre: gnombre, cin: gcin, fecha_nac: gfecha_nac, ciudad_id: gciudad_id, direccion: gdireccion  });
    }else
    {
        console.log("editar item")
        personas.forEach((e) =>
        {
            if (gid==e.id) 
            { 
                e.apellido=gapellido;
                e.nombre=gnombre;
                e.cin=gcin;
                e.fecha_nac=gfecha_nac;
                e.ciudad_id=gciudad_id;
                e.direccion=gdireccion;
            }
        })   
    }
    persistir();
    dibujarTabla();
}

function persistir()
{
    ///alert("pasa por persistir");
    localStorage.setItem("data",JSON.stringify(personas));
}

window.addEventListener("load", cargar);