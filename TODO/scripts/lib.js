$(document).delegate("#list","pageinit",function(){
    $("#btnTask").on("vclick",function(){
          var task = $("#txtTask").val();
          $("#tasks").append('<li class = "item" data-icon = "minus"><a>'+task+'</a></li>').listview('refresh');
    });

    $('#tasks').on('click', 'li', function () {
       $(this).hide();
});
});


