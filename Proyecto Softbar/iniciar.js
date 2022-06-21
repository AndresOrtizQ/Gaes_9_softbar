var attempt = 3;

function iniciara (){
    var correo = document.getElementById("correo").value;
    var contraseña =document.getElementById("contraseña").value;
    var rol = document.getElementById("rol").value;

    if(correo=="")
    alert("Por favor, ingresa un correo");
    
    if(contraseña=="")
    alert("Por favor, ingresa contraseña");

    if(rol=="0")
        alert("Por favor, ingresa un rol");

        if ( correo == "andresfel2108@gmail.com" && contraseña == "andres21" && rol == "1"){
          window.location = "vistaCliente.html?correo=andresfel2108@gmail.com";
          window.alert ("INGRESO EXITOSO")
            return false;
        }


        if ( correo == "andres@gmail.com" && contraseña == "felipe21" && rol == "2"){
          window.alert ("INGRESO EXITOSO")
          window.location = "Dashboard.html?correo=andres@gmail.com";
          return false;
        
      }
      if ( correo == "felipeortiz@gmail.com" && contraseña == "andres22" && rol == "3"){
        window.location = "Dashboard.html?correo=felipeortiz@gmail.com"
        window.alert ("INGRESO EXITOSO")
        return false;
      
    }
          else(
            window.alert("INGRESE DATOS REGISTRADOS")
          );
            
            // deshabilita cuando cumpla tres intentos es decir llegue a cero opciones
            if( attempt == 0){
            document.getElementById("correo").disabled = true;
            document.getElementById("contraseña").disabled = true;
            document.getElementById("rol").disabled = true;
            document.getElementById("ingresar").disabled = true;
            return false;
            }

            attempt--; // decrementa el contador.
            alert("Lo siento le quedan " + attempt + " intentos;");
            // deshabilita cuando cumpla tres intentos es decir llegue a cero opciones
            if (attempt == 0) {
              document.getElementById("email").disabled = true;
              document.getElementById("password").disabled = true;
              document.getElementById("submit").disabled = true;
            }
          }
            
            
