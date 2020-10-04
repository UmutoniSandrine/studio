
$(document).ready(function () {
  $("#des").click(function () {
      $(this).hide();
      $("#design").show();
  });
});
$(document).ready(function () {
  $("#design").click(function () {
      $(this).hide();
      $("#des").show();
  });
});

$(document).ready(function () {
  $("#dev-image").click(function () {
      $(this).hide();
      $("#dev").show();
  });
});
$(document).ready(function () {
  $("#dev").click(function () {
      $(this).hide();
      $("#dev-image").show();
  });
});

$(document).ready(function () {
  $("#pro-image").click(function () {
      $(this).hide();
      $("#pro").show();
  });
});
$(document).ready(function () {
  $("#pro").click(function () {
      $(this).hide();
      $("#pro-image").show();
  });
});

$(document).ready(function () {
  $("#work1").mouseover(function () {
      $("#overlay1").show();
  }).mouseout(function () {
      $("#overlay1").hide();
  });
});

$(document).ready(function () {
  $("#work2").mouseover(function () {
      $("#overlay2").show();
  }).mouseout(function () {
      $("#overlay2").hide();

  });

});
$(document).ready(function () {
  $("#work3").mouseover(function () {
      $("#overlay3").show();
  }).mouseout(function () {
      $("#overlay3").hide();

  });

});

$(document).ready(function () {
  $("#work4").mouseover(function () {
      $("#overlay4").show();
  }).mouseout(function () {
      $("#overlay4").hide();

  });

});

$(document).ready(function () {
  $("#work5").mouseover(function () {
      $("#overlay5").show();
  }).mouseout(function () {
      $("#overlay5").hide();

  });

});
$(document).ready(function () {
  $("#work6").mouseover(function () {
      $("#overlay6").show();
  }).mouseout(function () {
      $("#overlay6").hide();

  });

});

$(document).ready(function () {
  $("#work7").mouseover(function () {
      $("#overlay7").show();
  }).mouseout(function () {
      $("#overlay7").hide();

  });
});

$(document).ready(function () {
  $("#work8").mouseover(function () {
      $("#overlay8").show();
  }).mouseout(function () {
      $("#overlay8").hide();

  });

});
$(document).ready(function () {
  $("form#form1").submit(function (event) {

      var name = $("input#MERGE1").val();
      var email = $("input#MERGE0").val();
      var message = $("textarea#comment").val();
      if ($("input#MERGE1").val() && $("input#MERGE0").val()) {
          alert(name + ", Thanks for Registering.");
      }
      else {
          alert("Name and Email Please!!!!!!!!!!!!!!!!!!!!");
      }

  });

});