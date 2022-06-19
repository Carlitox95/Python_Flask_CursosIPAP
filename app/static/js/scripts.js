//Inicializar el sidenav
document.addEventListener('DOMContentLoaded', function() {
 var elems = document.querySelectorAll('.sidenav');
 var instances = M.Sidenav.init(elems,{});
});

//Activar el listado desplegable
$(document).ready(function(){
    //Initialize dropdown
    $(".dropdown-trigger").dropdown(
        { 
         hover: false,        
         constrainWidth: false 
        }
    );
});

//Inicializar las imagenes clickeables
document.addEventListener('DOMContentLoaded', function() {
 var elems = document.querySelectorAll('.materialboxed');
 var instances = M.Materialbox.init(elems, {});
});

//Funcion para volver a inicializar todos los Dropdown
function inicializarDropdowns() {
    //Initialize dropdown
    $(".dropdown-trigger").dropdown(
        { 
         hover: false,        
         constrainWidth: false 
        }
    );
}

//Funcion para volver a inicializar todos los Collapsibles..
function inicializarCollapsibles() {
    $(document).ready(function(){
     $('.collapsible').collapsible();
    });
}

//Inicializo los collapsible
document.addEventListener('DOMContentLoaded', function() {
 var elems = document.querySelectorAll('.collapsible');
 var instances = M.Collapsible.init(elems,{});
});

//Iniciar DataTable
$(document).ready(function() {
    $('#tabla').DataTable(  { 
     lengthMenu: [[50,100,-1], [50,100,"Todos"]],
     //dom: "<lf<t>ip>",
     dom: "Blfrtip",
         buttons: ['excel','csv',          
                {
                 extend: 'pdfHtml5',
                 orientation: 'landscape',
                 pageSize: 'LEGAL'
                },
            ],
     order: [[ 0, "asc" ]],             
     search: {return: true},
     pagingType: "full_numbers",
        language: {
         lengthMenu: "Mostrar _MENU_ registros",
         zeroRecords: "No se encontraron resultados",
         emptyTable: "No existen registros",
         loadingRecords: "cargando...",
         processing:     "procesando....",
         search:         "Busqueda:",
            paginate: {
             first:"Primera",
             last:"Ultima",
             next:"Siguiente ",
             previous: " Anterior"
            },
         //info: "Pagina _PAGE_ de _PAGES_",
         //infoEmpty: "No records available",
         //infoFiltered : "(Buscando entre _MAX_ registros)"
         sInfo:"Mostrando desde _START_ hasta _END_ de _TOTAL_ registros",
         sInfoEmpty:"Mostrando desde 0 hasta 0 de 0 registros",
         sInfoFiltered:"(filtrado de _MAX_ registros en total)",
         sInfoPostFix:  ""
        }       
    });
 //Voy a configurar los botones
 $(".dt-buttons").removeClass().addClass('col s4 cajaBotones').prepend("<br>");
 //Le voy a dar clase al filtro de cantidad a mostrar por pagina
 $('#tabla_length').removeClass();
 $('#tabla_length').addClass("col s4 dataTables_length");
 $('#tabla_length').prepend("<br>"); //inserto salto de linea para que quede alineado
 //Le voy a dar su clase al filtro de busqueda que no aparece
 $('#tabla_filter').removeClass();
 $('#tabla_filter').addClass("col s4");           
});    

//Funcion que sirve para activar Data Table en una Tabla renderizada por Javascript
function activarDataTableCustom(unaTabla) {  
    $(document).ready(function() {
        $('#'+unaTabla).DataTable(  {         
         lengthMenu: [[50,100,-1], [50,100,"Todos"]],
         //dom: "<lf<t>ip>",
         dom: "Blfrtip",
         buttons: ['excel','csv',         
                {
                 extend: 'pdfHtml5',
                 orientation: 'landscape',
                 pageSize: 'LEGAL'
                },
            ],
         order: [[ 0, "asc" ]],             
         search: {return: true},
         pagingType: "full_numbers",            
            language: {
             lengthMenu: "Mostrar _MENU_ registros",
             zeroRecords: "No se encontraron resultados",
             emptyTable: "No existen registros",
             loadingRecords: "cargando...",
             processing:     "procesando....",
             search:         "Busqueda:",
            paginate: {
             first:"Primera",
             last:"Ultima",
             next:"Siguiente ",
             previous: " Anterior"
            },

         sInfo:"Mostrando desde _START_ hasta _END_ de _TOTAL_ registros",
         sInfoEmpty:"Mostrando desde 0 hasta 0 de 0 registros",
         sInfoFiltered:"(filtrado de _MAX_ registros en total)",
         sInfoPostFix:  ""
         //info: "Pagina _PAGE_ de _PAGES_ (de _MAX_ registros)",
         //infoEmpty: "No records available",
         //infoFiltered : "(Buscando entre _MAX_ registros)"
        }       
    });
    //Voy a configurar los botones
    $(".dt-buttons").removeClass().addClass('col s4 cajaBotones').prepend("<br>");
    //Le voy a dar clase al filtro de cantidad a mostrar por pagina
    $('#'+unaTabla+'_length').removeClass();
    $('#'+unaTabla+'_length').addClass("col s4 dataTables_length");
    $('#'+unaTabla+'_length').prepend("<br>"); //inserto salto de linea para que quede alineado
    //Le voy a dar su clase al filtro de busqueda que no aparece
    $('#'+unaTabla+'_filter').removeClass();
    $('#'+unaTabla+'_filter').addClass("col s4");           
    }); 
}

//Funcion que muestra un alerta por pantalla, recibe el mensaje a mostrar
function mostrarAlerta(mensajeAlerta) {
 M.toast({html: mensajeAlerta});
}

//Funcion que me renderiza el menu para version celulares..
function renderizarMenuMovil(jsonMenu) {
 //Obtengo el contenedor
 let contenedorMenuMovil=document.getElementById("contenedorMenuMovil");

    //Itero sobre los Menus...
    for (let index=0; index < jsonMenu.length; index++) {
     //Creo la estructura
     let liMenu=document.createElement("li");
     liMenu.setAttribute("class","no-padding");
     let ulMenu=document.createElement("ul");
     ulMenu.setAttribute("class","collapsible collapsible-accordion");
     let li=document.createElement("li");
     let aCollapsible=document.createElement("a");
     aCollapsible.setAttribute("class","collapsible-header");
     aCollapsible.innerHTML=jsonMenu[index].nombre+"<i class='material-icons'>arrow_drop_down</i>";
     //Inserto mi Link en el Li
     li.appendChild(aCollapsible);

     //Sigo creando la estructura
     let divCollapsible=document.createElement("div");
     divCollapsible.setAttribute("class","collapsible-body");
     let ulCollapsible=document.createElement("ul");

        //Creo los enlaces para cada menu..
        for (let index2=0; index2 < jsonMenu[index].publicaciones.length; index2++) { 
         let liLink=document.createElement("li");
         let aLink=document.createElement("a");
         aLink.innerHTML=jsonMenu[index].publicaciones[index2].nombre; 

         //Defino el Link correctamente 
         let cadenaEnlaces;
         
            if(jsonMenu[index].publicaciones[index2].tipo == "publicacion") {
             cadenaEnlaces="/publicacion/ver/"+jsonMenu[index].publicaciones[index2].id;
            }
            if(jsonMenu[index].publicaciones[index2].tipo == "enlace") {
             cadenaEnlaces=jsonMenu[index].publicaciones[index2].url;
            }

         aLink.setAttribute("href",cadenaEnlaces);
         //Genero el link insertando
         liLink.appendChild(aLink);   
         //inserto los li en el Ul Collapsible
         ulCollapsible.appendChild(liLink);    
        }
     
     //Inserto estructura html a estructura html
     divCollapsible.appendChild(ulCollapsible);
     //Inserto el div dentro del listado
     li.appendChild(divCollapsible);
     //Inserto
     ulMenu.appendChild(li);
     liMenu.appendChild(ulMenu);     
     //Inserto el menu actual en el contenedor de los menus..
     contenedorMenuMovil.appendChild(liMenu);
    }  

 //Invoco a la funcion para volver a inicializar los menus desplegables..
 inicializarCollapsibles();
}


//Funcion para renderizar el Menu de escritorio..
function renderizarMenuPrincipal(jsonMenu) {
 //Contenedores de los Triggers y Dropdowns
 let contenedorTrigger=document.getElementById("contenedorTrigger");
 let contenedorDropdowns=document.getElementById("contenedorDropdowns");
 
    //Itero sobre los Menus...
    for (let index=0; index < jsonMenu.length; index++) {
     //Por cada Menu creo un Trigger..
     let liTrigger=document.createElement("li");
     let aDropdown=document.createElement("a");
     aDropdown.setAttribute("class","dropdown-trigger");
     aDropdown.setAttribute("href","#");
     aDropdown.setAttribute("data-target","dropdown"+jsonMenu[index].nombre);
     aDropdown.innerHTML=jsonMenu[index].nombre+"<i class='material-icons right'>arrow_drop_down</i>";
     liTrigger.appendChild(aDropdown);
     contenedorTrigger.appendChild(liTrigger);

     //Debo crear los Dropdowns con todos los Links del menu actual...
     let ulDropdowns=document.createElement("ul");
     ulDropdowns.setAttribute("class","dropdown-content");
     ulDropdowns.setAttribute("id","dropdown"+jsonMenu[index].nombre);
          
 
        //Debo crear cada link que tenga el menu actual...
        for (let index2=0; index2 < jsonMenu[index].publicaciones.length; index2++) {         
         //Creo el Li
         let liActual=document.createElement("li");
         //Creo el A
         let aActual=document.createElement("a");
    
         //Defino el Link correctamente 
         let cadenaEnlaces;
         

            if(jsonMenu[index].publicaciones[index2].tipo == "publicacion") {
             cadenaEnlaces="/publicacion/ver/"+jsonMenu[index].publicaciones[index2].id;
            }
            if(jsonMenu[index].publicaciones[index2].tipo == "enlace") {
             cadenaEnlaces=jsonMenu[index].publicaciones[index2].url;
            }

         //Asigno la ruta del Symfony al elemento del Menu
         aActual.setAttribute("href",cadenaEnlaces);
         aActual.innerHTML=jsonMenu[index].publicaciones[index2].nombre;
         liActual.appendChild(aActual);
         //Inserto al Ul Trigger actual..
         ulDropdowns.appendChild(liActual);
         //Inserto el Dropdown actual al contenedor..
         contenedorDropdowns.appendChild(ulDropdowns);
        }
    }

 //Vuelvo a Inicializar todos los Dropdowns generados
 inicializarDropdowns(); 
}

