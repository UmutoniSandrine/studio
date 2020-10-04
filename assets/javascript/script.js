
$(document).ready(function(){
    $("#dev-image").click(function(){
        $("#dev-image").slideDown('1500').hide('1000');
        $("#dev").show('1500');
    });
    $("#dev").click(function(){
        $("#dev").slideUp('1500');
        $("dev-image").slideDown('1500');

    });
  
});

$(document).ready(function(){
    $("#des").click(function(){
      $("#des").slideDown('1500').hide('1000');
      $("#design").show('1500');
    });
    $("#design").click(function(){
      $("#design").slideUp('1500');
      $("#des").slideDown('1500');
    });
  });
  
  $(document).ready(function(){
    $("#pro-image").click(function(){
      $("#pro-image").slideDown('1500').hide('1000');
      $("#pro").show('1500');
    });
    $("#pro").click(function(){
      $("#pro").slideUp('1500');
      $("#pro-image").slideDown('1500');
    });
  });
  $(document).ready(function(){
    $("#work1").mouseover(function(){
      $("#overlay").show();
    }).mouseout(function(){
      $("#overlay").hide();
    });
  });
  $(document).ready(function(){
    $("#work2").mouseover(function(){
      $("#overlay2").show();
    }).mouseout(function(){
      $("#overlay2").hide();
    });
  });
  $(document).ready(function(){
    $("#work3").mouseover(function(){
      $("#overlay3").show();
    }).mouseout(function(){
      $("#overlay3").hide();
    });
  });
  $(document).ready(function(){
    $("#work4").mouseover(function(){
      $("#overlay4").show();
    }).mouseout(function(){
      $("#overlay4").hide();
    });
  });
  
  $(document).ready(function(){
    $("#work5").mouseover(function(){
      $("#overlay5").show();
    }).mouseout(function(){
      $("#overlay5").hide();
    });
    $("#work6").mouseover(function(){
      $("#overlay6").show();
    }).mouseout(function(){
      $("#overlay6").hide();
    });
    $("#work7").mouseover(function(){
      $("#overlay7").show();
    }).mouseout(function(){
      $("#overlay7").hide();
    });
    $("#work8").mouseover(function(){
      $("#overlay8").show();
    }).mouseout(function(){
      $("#overlay8").hide();
    });
  });
  
  $(document).ready(function(){
    $("form#form1").submit(function(event){
      
      var name = $("input#MERGE1").val();
      var email = $("input#MERGE0").val();
      var message = $("textarea#comment").val();
      if ($("input#MERGE1").val() && $("input#MERGE0").val()){
        alert (name + ", we have received your message. Thank you for reaching out to us.");
      }
      else {
        alert("Please enter your name and email!");
      }
      
    });
  
  });
  