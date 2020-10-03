
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