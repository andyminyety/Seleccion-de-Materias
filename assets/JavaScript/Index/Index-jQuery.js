$(document).ready(function() {

    var valueNombre = "";
    var valueProvincia = "";
    var valueCiudad = "";
    var valueSector = "";
    var valueCalle = "";
    var valueCarrera = "";

    $("#content-container").on("click", "#btn-form", function () {
      Form();
    });
  
    $("#content-container").on("click", "#btn-clear", function () {
      Limpiar();
    });

    $("#content-container").on("click", "#btn-create", function () {
      Crear();
    });

    $("#content-container").on("click", "#btn-multimedia", function () {
      Multimedia();
    });

    $("#content-container").on("click", "#btn-redes", function () {
      Redes();
    });

    $("#content-container").on("click", "#btn-software", function () {
      Software();
    });
    
    $("#content-container").on("click", "#btn-confirmation1", function () {
      Confirmacion1();
    });

    $("#content-container").on("click", "#btn-confirmation2", function () {
      Confirmacion2();
    });

    $("#content-container").on("click", "#btn-confirmation3", function () {
      Confirmacion3();
    });

    $("#content-container").on("click", "#btn-end", function () {
      $.confirm({
        title: "Estas seguro que quieres finalizar?",
        content: "",
        buttons: {
          confirm: {
            text: "Aceptar",
            btnClass: "btn btn-success",
            action: function () {
            FormEmpty();
              toastr.success("Su selección se ha creado con exito!", "Notificación", {
                TimeOut: 2500,
              });
            },
          },
          cancel: {
            text: "Cancelar",
            btnClass: "btn btn-danger",
            action: function () {
            }
          },
        },
      });
    });

    function Crear() {
      valueNombre = $("#nombre").val();
      valueProvincia = $("#provincia").val();
      valueCiudad = $("#ciudad").val();
      valueSector = $("#sector").val();
      valueCalle = $("#calle").val();
      valueCarrera = $("#carrera").val();
  
      let isValid = Validar();
  
      if (isValid) {
        if ($('#carrera').val() == "Multimedia") 
        Multimedia();
      }

      if (isValid) {
        if ($('#carrera').val() == "Redes")
        Redes();
      }

      if (isValid) {
        if ($('#carrera').val() == "Software")
        Software();

      } else {
        toastr.error("Debes completar todas las informaciones", "Oops, ha ocurrido un error", {
          TimeOut: 2500, positionClass: "toast-top-right"
        });
      }
    }

    function Limpiar() {
      $("#nombre").val("").removeClass("error").focus();
      $("#provincia").val("").removeClass("error");
      $("#ciudad").val("").removeClass("error");
      $("#sector").val("").removeClass("error");
      $("#calle").val("").removeClass("error");
      $("#carrera").val("").removeClass("error");
  
      valueNombre = "";
      valueProvincia = "";
      valueCiudad = "";
      valueSector = "";
      valueCalle = "";
      valueCarrera = "";
    }

    function Validar() {
      let isValid = true;
    
      if (valueNombre == "" || valueNombre == null || valueNombre == undefined) {
        isValid = false;
        $("#nombre").addClass("error");
      } else {
        $("#nombre").removeClass("error");
      }
    
      if (valueProvincia == "" || valueProvincia == null || valueProvincia == undefined) {
        isValid = false;
        $("#provincia").addClass("error");
      } else {
        $("#provincia").removeClass("error");
      }
  
      if (valueCiudad == "" || valueCiudad == null || valueCiudad == undefined) {
        isValid = false;
        $("#ciudad").addClass("error");
      } else {
        $("#ciudad").removeClass("error");
      }

      if (valueSector == "" || valueSector == null || valueSector == undefined) {
        isValid = false;
        $("#sector").addClass("error");
      } else {
        $("#sector").removeClass("error");
      }

      if (valueCalle == "" || valueCalle == null || valueCalle == undefined) {
        isValid = false;
        $("#calle").addClass("error");
      } else {
        $("#calle").removeClass("error");
      }

      if (valueCarrera == "" || valueCarrera == null || valueCarrera == undefined) {
        isValid = false;
        $("#carrera").addClass("error");
      } else {
        $("#carrera").removeClass("error");
      }
    
      return isValid;
    }

    function Select() {
      valueSelect1 = $("#radio1 input[type ='radio']:checked").val();
      valueSelect2 = $("#radio2 input[type ='radio']:checked").val();
      valueSelect3 = $("#radio3 input[type ='radio']:checked").val();
      valueSelect4 = $("#radio4 input[type ='radio']:checked").val();
      valueSelect5 = $("#radio5 input[type ='radio']:checked").val();
    }

    function Form(){
      let formHtml = `
      <div class="col-md-4"></div>
    <div class="col-md-4">

    <div class="card form-register">
        <div class="card-header text-white bg-dark"><h3 class="text-center"><i class="far fa-user-circle icons"></i>Datos Personales</h3></div>
        <div class="card-body">

            <div class="margen-top-2">
                <label for="nombre" class="form-label div-form">Nombre</label>
                <input type="text" class="form-control controls div-form" id="nombre">
            </div>

            <div class="margen-top-1">
                <label for="provincia" class="form-label div-form">Provincia</label>
                <input type="text" class="form-control controls div-form" id="provincia">
            </div>

            <div class="margen-top-1">
                <label for="ciudad" class="form-label div-form">Ciudad</label>
                <input type="text" class="form-control controls div-form" id="ciudad">
            </div>

            <div class="margen-top-1">
                <label for="sector" class="form-label div-form">Sector</label>
                <input type="text" class="form-control controls div-form" id="sector">
            </div>

            <div class="margen-top-1">
                <label for="calle" class="form-label div-form">Calle</label>
                <input type="text" class="form-control controls div-form" id="calle">
            </div>

            <div>
                <label for="carrera" class="form-label div-form">Carrera</label>
                <select class="form-select controls div-form" id="carrera"> 
                    <option class="option-form" value="">Seleccione una carrera</option>
                    <option class="option-form" value="Multimedia">Multimedia</option>
                    <option class="option-form" value="Redes">Redes</option>
                    <option class="option-form" value="Software">Software</option>
                </select>
            </div>
               
            <div class="margen-top-6 mx-auto" style= "width: 208px;">
                <button class="btn btn-primary float-end margen-izq-5" id="btn-create" onclick="Crear()">Registrar</button>
                <button class="btn btn-success float-end margen-izq-5" id="btn-clear" onclick="Limpiar()">Limpiar</button>
            </div>
        </div>
    </div>
 </div>
 <div class="col-md-4"></div>
</div>`;

    $("#content-container").html(formHtml);

    $("#nombre").val(valueNombre)
    $("#provincia").val(valueProvincia)
    $("#ciudad").val(valueCiudad)
    $("#sector").val(valueSector)
    $("#calle").val(valueCalle)
    $("#carrera").val(valueCarrera)
    }

    function FormEmpty(){
      let formHtml = `
      <div class="col-md-4"></div>
     <div class="col-md-4">

        <div class="card form-register">
            <div class="card-header text-white bg-dark"><h3 class="text-center"><i class="far fa-user-circle icons"></i>Datos Personales</h3></div>
            <div class="card-body">

                <div class="margen-top-2">
                    <label for="nombre" class="form-label div-form">Nombre</label>
                    <input type="text" class="form-control controls div-form" id="nombre">
                </div>

                <div class="margen-top-1">
                    <label for="provincia" class="form-label div-form">Provincia</label>
                    <input type="text" class="form-control controls div-form" id="provincia">
                </div>

                <div class="margen-top-1">
                    <label for="ciudad" class="form-label div-form">Ciudad</label>
                    <input type="text" class="form-control controls div-form" id="ciudad">
                </div>

                <div class="margen-top-1">
                    <label for="sector" class="form-label div-form">Sector</label>
                    <input type="text" class="form-control controls div-form" id="sector">
                </div>

                <div class="margen-top-1">
                    <label for="calle" class="form-label div-form">Calle</label>
                    <input type="text" class="form-control controls div-form" id="calle">
                </div>

                <div>
                    <label for="carrera" class="form-label div-form">Carrera</label>
                    <select class="form-select controls div-form" id="carrera"> 
                        <option class="option-form" value="">Seleccione una carrera</option>
                        <option class="option-form" value="Multimedia">Multimedia</option>
                        <option class="option-form" value="Redes">Redes</option>
                        <option class="option-form" value="Software">Software</option>
                    </select>
                </div>
                   
                <div class="margen-top-6 mx-auto" style= "width: 208px;">
                    <button class="btn btn-primary float-end margen-izq-5" id="btn-create" onclick="Crear()">Registrar</button>
                    <button class="btn btn-success float-end margen-izq-5" id="btn-clear" onclick="Limpiar()">Limpiar</button>
                </div>
            </div>
        </div>
     </div>
     <div class="col-md-4"></div>
 </div>`;
  
 $("#content-container").html(formHtml);

    }

    function Multimedia() {

      let formHtml = `
      <div class="col-md-4">
      <div class="card fix-2 bottom-accordion">
      <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="#btn-form" id="btn-form">Datos personales</a></li>
      <li class="breadcrumb-item active" aria-current="page">Selección de materias</li>
      </ol>
      </nav>
      <div class="card-body bg-primary text-white">
      <h5 class="card-title">Selección de materias - Multimedia</h5>
      </div>
      <div class="card fix">
         <ul class="list-group">
          <div class="accordion" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" 
                aria-expanded="false" aria-controls="collapseOne">Ilustración Digital</button>
              </h2>
              <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <div id="radio1" class="accordion-item-body-content">
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="1" id="radio1" value="Lu 14:00 - 17:00">
                      <label class="form-check-label" for="radio1">Lu 08:00 - 11:00</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="1" id="radio1" value="Lu 08:00 - 11:00">
                        <label class="form-check-label" for="radio1">Lu 14:00 - 17:00</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="1" id="radio1" value="Lu 15:00 - 18:00">
                        <label class="form-check-label" for="radio1">Lu 15:00 - 18:00</label>
                      </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                 aria-expanded="false" aria-controls="collapseTwo">Animación 2D</button>
              </h2>
              <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <div id="radio2" class="accordion-item-body-content">
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="2" id="radio2" value="Mie 08:00 - 11:00">
                      <label class="form-check-label" for="radio2">Mie 08:00 - 11:00</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="2" id="radio2" value="Mie 14:00 - 17:00">
                        <label class="form-check-label" for="radio2">Mie 14:00 - 17:00</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="2" id="radio2" value="Mie 17:00 - 20:00">
                        <label class="form-check-label" for="radio2">Mie 17:00 - 20:00</label>
                      </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree"
                 aria-expanded="false" aria-controls="collapseThree">Laboratorio de Animación 2D</button>
              </h2>
              <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <div id="radio3" class="accordion-item-body-content">
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="3" id="radio3" value="Mar 18:00 - 19:00">
                      <label class="form-check-label" for="radio3">Mar 8:00 - 9:00</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="3" id="radio3" value="Mar 8:00 - 9:00">
                        <label class="form-check-label" for="radio3">Mar 14:00 - 15:00</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="3" id="radio3" value="Mar 14:00 - 15:00">
                        <label class="form-check-label" for="radio3">Mar 18:00 - 19:00</label>
                      </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingFour">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" 
                aria-expanded="false" aria-controls="collapseFour">Audio Digital</button>
              </h2>
              <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <div id="radio4" class="accordion-item-body-content">
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="4" id="radio4" value="Vie 8:00 - 11:00">
                      <label class="form-check-label" for="radio4">Vie 8:00 - 11:00</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="4" id="radio4" value="Vie 14:00 - 17:00">
                        <label class="form-check-label" for="radio4">Vie 14:00 - 17:00</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="4" id="radio4" value="Vie 17:00 - 20:00">
                        <label class="form-check-label" for="radio4">Vie 17:00 - 20:00</label>
                      </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingFour">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" 
                aria-expanded="false" aria-controls="collapseFive">3D Modelado y Renderizado</button>
              </h2>
              <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <div id="radio5" class="accordion-item-body-content">
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="5" id="radio5" value="Jue 16:00 - 18:00">
                      <label class="form-check-label" for="radio5">Jue 08:00 - 11:00</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="5" id="radio5" value="Jue 08:00 - 11:00">
                        <label class="form-check-label" for="radio5">Jue 14:00 - 17:00</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="5 id="radio5" value="Jue 14:00 - 17:00">
                        <label class="form-check-label" for="radio5">Jue 16:00 - 18:00</label>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
         </ul>
       </div>
       <div class="margen-bottom-20">
       <button id="btn-confirmation1" class="btn btn-primary float-end margen-izq-20">Siguiente</button>
   </div>
  </div>
</div>`;
  
      $("#content-container").html(formHtml);
    }

    function Redes() {
      let formHtml = `
      <div class="col-md-4">
      <div class="card fix-2 bottom-accordion">
      <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="#btn-form" id="btn-form">Datos personales</a></li>
      <li class="breadcrumb-item active" aria-current="page">Selección de materias</li>
      </ol>
      </nav>
      <div class="card-body bg-primary text-white">
      <h5 class="card-title">Selección de materias - Redes</h5>
      </div>
      <div class="card fix">
         <ul class="list-group">
          <div class="accordion" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" 
                aria-expanded="false" aria-controls="collapseOne">Sistema Operativo III</button>
              </h2>
              <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <div id="radio1" class="accordion-item-body-content">
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="1" id="radio1" value="Lu 13:00 - 15:00">
                        <label class="form-check-label" for="radio1">Lu 08:00 - 11:00</label>
                      </div>
                      <div class="form-check form-check-inline">
                          <input class="form-check-input" type="radio" name="1" id="radio1" value="Lu 08:00 - 11:00">
                          <label class="form-check-label" for="radio1">Lu 13:00 - 15:00</label>
                        </div>
                        <div class="form-check form-check-inline">
                          <input class="form-check-input" type="radio" name="1" id="radio1" value="Lu 17:00 - 20:00">
                          <label class="form-check-label" for="radio1">Lu 17:00 - 20:00</label>
                        </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                 aria-expanded="false" aria-controls="collapseTwo">Fundamentos de Enrutamiento</button>
              </h2>
              <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <div id="radio2" class="accordion-item-body-content">
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="2" id="radio2" value="Jue 18:00 - 22:00">
                        <label class="form-check-label" for="radio2">Jue 08:00 - 12:00</label>
                      </div>
                      <div class="form-check form-check-inline">
                          <input class="form-check-input" type="radio" name="2" id="radio2" value="Jue 14:00 - 18:00">
                          <label class="form-check-label" for="radio2">Jue 14:00 - 18:00</label>
                        </div>
                        <div class="form-check form-check-inline">
                          <input class="form-check-input" type="radio" name="2" id="radio2" value="Jue 08:00 - 12:00">
                          <label class="form-check-label" for="radio2">Jue 18:00 - 22:00</label>
                        </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree"
                 aria-expanded="false" aria-controls="collapseThree">Laboratorio Fundamentos de Enrutamiento</button>
              </h2>
              <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <div id="radio3" class="accordion-item-body-content">
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="3" id="radio3" value="Mar 08:00 - 09:00">
                        <label class="form-check-label" for="radio3">Mar 08:00 - 09:00</label>
                      </div>
                      <div class="form-check form-check-inline">
                          <input class="form-check-input" type="radio" name="3" id="radio3" value="Mar 11:00 - 12:00">
                          <label class="form-check-label" for="radio3">Mar 11:00 - 12:00</label>
                        </div>
                        <div class="form-check form-check-inline">
                          <input class="form-check-input" type="radio" name="3" id="radio3" value="Mar 16:00 - 17:00">
                          <label class="form-check-label" for="radio3">Mar 16:00 - 17:00</label>
                        </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingFour">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" 
                aria-expanded="false" aria-controls="collapseFour">Tecnologías WAN</button>
              </h2>
              <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <div id="radio4" class="accordion-item-body-content">
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="4" id="radio4" value="Vie 8:00 - 12:00">
                        <label class="form-check-label" for="radio4">Vie 8:00 - 12:00</label>
                      </div>
                      <div class="form-check form-check-inline">
                          <input class="form-check-input" type="radio" name="4" id="radio4" value="Vie 14:00 - 18:00">
                          <label class="form-check-label" for="radio4">Vie 14:00 - 18:00</label>
                        </div>
                        <div class="form-check form-check-inline">
                          <input class="form-check-input" type="radio" name="4" id="radio4" value="Vie 16:00 - 20:00">
                          <label class="form-check-label" for="radio4">Vie 16:00 - 20:00</label>
                        </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingFour">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" 
                aria-expanded="false" aria-controls="collapseFive">Fundamentos de Seguridad</button>
              </h2>
              <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <div id="radio5" class="accordion-item-body-content">
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="5" id="radio5" value="Sab 08:00 - 12:00">
                        <label class="form-check-label" for="radio5">Sab 08:00 - 12:00</label>
                      </div>
                      <div class="form-check form-check-inline">
                          <input class="form-check-input" type="radio" name="5" id="radio5" value="Sab 12:00 - 16:00">
                          <label class="form-check-label" for="radio5">Sab 12:00 - 16:00</label>
                        </div>
                        <div class="form-check form-check-inline">
                          <input class="form-check-input" type="radio" name="5" id="radio5" value="Sab 14:00 - 18:00">
                          <label class="form-check-label" for="radio5">Sab 14:00 - 18:00</label>
                        </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
         </ul>
       </div>
       <div class="margen-bottom-20">
       <button id="btn-confirmation2" class="btn btn-primary float-end margen-izq-20">Siguiente</button>
   </div>
  </div>
</div>`;
  
      $("#content-container").html(formHtml);
    }

    function Software() {
      let formHtml = `
      <div class="col-md-4">
      <div class="card fix-2 bottom-accordion">
      <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="#btn-form" id="btn-form">Datos personales</a></li>
      <li class="breadcrumb-item active" aria-current="page">Selección de materias</li>
      </ol>
      </nav>
          <div class="card-body bg-primary text-white">
              <h5 class="card-title">Selección de materias - Software</h5>
          </div>
          <div class="card fix">
             <ul class="list-group">
              <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" 
                    aria-expanded="false" aria-controls="collapseOne">Programación III</button></h2>
                  <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      <div id="radio1" class="accordion-item-body-content">
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="1" id="radio1" value="Lu 14:00 - 18:00">
                            <label class="form-check-label" for="radio1">Lu 08:00 - 12:00</label>
                          </div>
                          <div class="form-check form-check-inline">
                              <input class="form-check-input" type="radio" name="1" id="radio1" value="Lu 08:00 - 12:00">
                              <label class="form-check-label" for="radio1">Lu 14:00 - 18:00</label>
                            </div>
                            <div class="form-check form-check-inline">
                              <input class="form-check-input" type="radio" name="1" id="radio1" value="Lu 18:00 - 22:00">
                              <label class="form-check-label" for="radio1">Lu 18:00 - 22:00</label>
                            </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                     aria-expanded="false" aria-controls="collapseTwo">Minería de Datos e Inteligencia de Negocios</button>
                  </h2>
                  <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      <div id="radio2" class="accordion-item-body-content">
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="2" id="radio2" value="Sab 08:00 - 12:00">
                            <label class="form-check-label" for="radio2">Sab 08:00 - 12:00</label>
                          </div>
                          <div class="form-check form-check-inline">
                              <input class="form-check-input" type="radio" name="2" id="radio2" value="Sab 14:00 - 18:00">
                              <label class="form-check-label" for="radio2">Sab 14:00 - 18:00</label>
                            </div>
                            <div class="form-check form-check-inline">
                              <input class="form-check-input" type="radio" name="2" id="radio2" value="Sab 16:00 - 20:00">
                              <label class="form-check-label" for="radio2">Sab 16:00 - 20:00</label>
                            </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree"
                     aria-expanded="false" aria-controls="collapseThree">Programación Web</button>
                  </h2>
                  <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      <div id="radio3" class="accordion-item-body-content">
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="3" id="radio3" value="Jue 08:00 - 12:00">
                            <label class="form-check-label" for="radio3">Jue 08:00 - 12:00</label>
                          </div>
                          <div class="form-check form-check-inline">
                              <input class="form-check-input" type="radio" name="3" id="radio3" value="Jue 18:00 - 20:00">
                              <label class="form-check-label" for="radio3">Jue 14:00 - 18:00</label>
                            </div>
                            <div class="form-check form-check-inline">
                              <input class="form-check-input" type="radio" name="3" id="radio3" value="Jue 16:00 - 20:00">
                              <label class="form-check-label" for="radio3">Jue 16:00 - 20:00</label>
                            </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingFour">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" 
                    aria-expanded="false" aria-controls="collapseFour">Auditoría Informática</button>
                  </h2>
                  <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      <div id="radio4" class="accordion-item-body-content">
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="4" id="radio4" value="Mar 8:00 - 12:00">
                            <label class="form-check-label" for="radio4">Mar 8:00 - 12:00</label>
                          </div>
                          <div class="form-check form-check-inline">
                              <input class="form-check-input" type="radio" name="4" id="radio4" value="Mar 14:00 - 18:00">
                              <label class="form-check-label" for="radio4">Mar 14:00 - 18:00</label>
                            </div>
                            <div class="form-check form-check-inline">
                              <input class="form-check-input" type="radio" name="4" id="radio4" value="Mar 18:00 - 22:00">
                              <label class="form-check-label" for="radio4">Mar 18:00 - 22:00</label>
                            </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingFour">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" 
                    aria-expanded="false" aria-controls="collapseFive">Programación Paralela</button>
                  </h2>
                  <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      <div id="radio5" class="accordion-item-body-content">
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="5" id="radio5" value="Mie 16:00 - 20:00">
                            <label class="form-check-label" for="radio5">Mie 08:00 - 12:00</label>
                          </div>
                          <div class="form-check form-check-inline">
                              <input class="form-check-input" type="radio" name="5" id="radio5" value="Mie 08:00 - 12:00">
                              <label class="form-check-label" for="radio5">Mie 14:00 - 18:00</label>
                            </div>
                            <div class="form-check form-check-inline">
                              <input class="form-check-input" type="radio" name="5" id="radio5" value="Mie 14:00 - 18:00">
                              <label class="form-check-label" for="radio5">Mie 16:00 - 20:00</label>
                            </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
             </ul>
           </div>
           <div class="margen-bottom-20">
            <button id="btn-confirmation3" class="btn btn-primary float-end margen-izq-20">Siguiente</button>
        </div>
      </div>
  </div>`;
  
      $("#content-container").html(formHtml);
    }

    function Confirmacion1() {

      Select();

      let formHtml = `
      <div class="col-md-4">
  <div class="card fix-2 bottom-accordion">
  <nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#btn-form" id="btn-form">Datos Personales</a></li>
    <li class="breadcrumb-item"><a href="#btn-multimedia" id="btn-multimedia">Selección de materias</a></li>
    <li class="breadcrumb-item active" aria-current="page">Confirmación</li>
  </ol>
  </nav>
    <div class="card-body bg-success text-white">
      <h4 class="card-title text-white">Confirmación</h4>
    </div>
      <div class="card-body">
          <ul class="list-group">
              <li class="list-group-item bg-primary text-white"><strong>Datos Personales</strong></li>
              <li class="list-group-item list-group-item-action"><strong>Nombre: </strong>${valueNombre}</li>
              <li class="list-group-item list-group-item-action"><strong>Provincia: </strong>${valueProvincia}</li>    
              <li class="list-group-item list-group-item-action"><strong>Ciudad: </strong>${valueCiudad}</li>
              <li class="list-group-item list-group-item-action"><strong>Sector: </strong>${valueSector}</li>
              <li class="list-group-item list-group-item-action"><strong>Calle: </strong>${valueCalle}</li> 
              <li class="list-group-item list-group-item-action"><strong>Carrera: </strong>${valueCarrera}</li>     
          </ul>
          <table class="table table-hover table-sm table-dark">
              <thead>
                <tr>
                  <th scope="col">Materias</th>
                  <th scope="col">Lu</th>
                  <th scope="col">Mar</th>
                  <th scope="col">Mie</th>
                  <th scope="col">Jue</th>
                  <th scope="col">Vie</th>
                  <th scope="col">Sab</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Ilustración Digital</th>
                  <td>${valueSelect1}</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">Animación 2D</th>
                  <td></td>
                  <td></td>
                  <td>${valueSelect2}</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">Laboratorio de Animación 2D</th>
                  <td></td>
                  <td>${valueSelect3}</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">Audio Digital</th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>${valueSelect4}</td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">3D Modelado y Renderizado</th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>${valueSelect5}</td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
            <div>
              <button class="btn btn-success float-end" id="btn-end">Finalizar</button>
            </div>
      </div>
  </div>
</div>`;
  
      $("#content-container").html(formHtml);
    }

    function Confirmacion2() {

      Select();

      let formHtml = `
      <div class="col-md-4">
  <div class="card fix-2 bottom-accordion">
  <nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#btn-form" id="btn-form">Datos Personales</a></li>
    <li class="breadcrumb-item"><a href="#btn-redes" id="btn-redes">Selección de materias</a></li>
    <li class="breadcrumb-item active" aria-current="page">Confirmación</li>
  </ol>
</nav>
    <div class="card-body bg-success text-white">
      <h4 class="card-title text-white">Confirmación</h4>
    </div>
      <div class="card-body">
          <ul class="list-group">
              <li class="list-group-item bg-primary text-white"><strong>Datos Personales</strong></li>
              <li class="list-group-item list-group-item-action"><strong>Nombre: </strong>${valueNombre}</li>
              <li class="list-group-item list-group-item-action"><strong>Provincia: </strong>${valueProvincia}</li>    
              <li class="list-group-item list-group-item-action"><strong>Ciudad: </strong>${valueCiudad}</li>
              <li class="list-group-item list-group-item-action"><strong>Sector: </strong>${valueSector}</li>
              <li class="list-group-item list-group-item-action"><strong>Calle: </strong>${valueCalle}</li> 
              <li class="list-group-item list-group-item-action"><strong>Carrera: </strong>${valueCarrera}</li>     
          </ul>
          <table class="table table-hover table-sm table-dark">
              <thead>
                <tr>
                  <th scope="col">Materias</th>
                  <th scope="col">Lu</th>
                  <th scope="col">Mar</th>
                  <th scope="col">Mie</th>
                  <th scope="col">Jue</th>
                  <th scope="col">Vie</th>
                  <th scope="col">Sab</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Sistema Operativo III</th>
                  <td>${valueSelect1}</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">Fundamentos de Enrutamiento</th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>${valueSelect2}</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">Laboratorio Fundamentos de Enrutamiento</th>
                  <td></td>
                  <td>${valueSelect3}</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">Tecnologías WAN</th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>${valueSelect4}</td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">Fundamentos de Seguridad</th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>${valueSelect5}</td>
                </tr>
              </tbody>
            </table>
            <div>
              <button class="btn btn-success float-end" id="btn-end">Finalizar</button>
            </div>
      </div>
  </div>
</div>`;
  
      $("#content-container").html(formHtml);
    }

    function Confirmacion3() {

      Select();

      let formHtml = `
      <div class="col-md-4">
  <div class="card fix-2 bottom-accordion">
  <nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#btn-form" id="btn-form">Datos Personales</a></li>
    <li class="breadcrumb-item"><a href="#btn-software" id="btn-software">Selección de materias</a></li>
    <li class="breadcrumb-item active" aria-current="page">Confirmación</li>
  </ol>
</nav>
    <div class="card-body bg-success text-white">
      <h4 class="card-title text-white">Confirmación</h4>
    </div>
      <div class="card-body">
          <ul class="list-group">
              <li class="list-group-item bg-primary text-white"><strong>Datos Personales</strong></li>
              <li class="list-group-item list-group-item-action"><strong>Nombre: </strong>${valueNombre}</li>
              <li class="list-group-item list-group-item-action"><strong>Provincia: </strong>${valueProvincia}</li>    
              <li class="list-group-item list-group-item-action"><strong>Ciudad: </strong>${valueCiudad}</li>
              <li class="list-group-item list-group-item-action"><strong>Sector: </strong>${valueSector}</li>
              <li class="list-group-item list-group-item-action"><strong>Calle: </strong>${valueCalle}</li> 
              <li class="list-group-item list-group-item-action"><strong>Carrera: </strong>${valueCarrera}</li>     
          </ul>
          <table class="table table-hover table-sm table-dark">
              <thead>
                <tr>
                  <th scope="col">Materias</th>
                  <th scope="col">Lu</th>
                  <th scope="col">Mar</th>
                  <th scope="col">Mie</th>
                  <th scope="col">Jue</th>
                  <th scope="col">Vie</th>
                  <th scope="col">Sab</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Programación III</th>
                  <td>${valueSelect1}</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">Minería de Datos e Inteligencia de Negocios</th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>${valueSelect2}</td>
                </tr>
                <tr>
                  <th scope="row">Programación Web</th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>${valueSelect3}</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">Auditoría Informática</th>
                  <td></td>
                  <td>${valueSelect4}</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">Programación Paralela</th>
                  <td></td>
                  <td></td>
                  <td>${valueSelect5}</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
            <div>
              <button class="btn btn-success float-end" id="btn-end">Finalizar</button>
            </div>
      </div>
  </div>
</div>`;
  
      $("#content-container").html(formHtml);
    }
});