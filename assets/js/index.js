window.onload = function() {


$("#contactame").on("click", function() {        
        $("#exampleModal").modal('show');        
      })
      $("#contactnav").on("click", function() {        
        $("#exampleModal").modal('show');        
      })

      $("#enviarcontacto").on("click", function() {
        alert("Mensaje enviado... \n Pronto te contactaremos.")
        $("#exampleModal").modal('hide');
        
      })

      $("#sobremi").on("click", function() {        
        $("#myinformation").modal('show');        
      })
    
};
