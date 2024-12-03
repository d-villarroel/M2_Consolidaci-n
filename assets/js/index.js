window.onload = function() {


$("#contactame").on("click", function() {        
        $("#exampleModal").modal('show');        
      })
      $("#contactnav").on("click", function() {        
        $("#exampleModal").modal('show');        
      })

      $("#enviarcontacto").on("click", function() {
        
        let nombre = document.getElementById('nombre').value
        let telefono = document.getElementById('telefono').value
        let correo = document.getElementById('correo').value
        let mensaje = document.getElementById('mensaje').value
        
        if(!nombre && !telefono && !correo && !mensaje){
          alert("ingrese datos")
        }else{
          $("#exampleModal").modal('hide');
          alert("Proto de contactaremos")
        }
        
      })

      $("#sobremi").on("click", function() {        
        $("#myinformation").modal('show');        
      })
    
};
