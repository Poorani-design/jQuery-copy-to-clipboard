$(document).ready(function(){


   $("#copy-btn").click(function(){
     $("#txtField").select();
     document.execCommand("copy");
   
   });

   $("#copy-btn").click(function()
   {
      $("#copied-btn").css({"color":"#000", "transition":"5s", "translate":"scale(1.5)","opacity":"1"});

      
   })
});   
        
