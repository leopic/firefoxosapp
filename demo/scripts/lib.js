$(document).delegate("#welcome","pageinit",function(){
   $("#btnGo").on("vclick",function(){
   	    localStorage["Name"] = $("#txtName").val();
        callPage("Permission.html","slide");
   });
});

$(document).delegate("#permission","pageinit",function(){
   var instruccion = "Hola " + localStorage["Name"] + " por favor dale permiso a esta app para localizarte";
   $("#inst").html(instruccion);	
   $("#auth").on("vclick",function(){
       findMe();
   });
});

function callPage(path,transitionType){
    $.mobile.changePage(path,{transition: transitionType, reloadPage: true});
}

function findMe(){
	var geo = navigator.geolocation;
	if(geo){
		navigator.geolocation.getCurrentPosition(showCurrentLocation,errorHandler,{enableHighAccuracy:true});
	
	}else{
        alert("No geolocation support");
	}
}

function showCurrentLocation(pos){
	var map = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);

    var options = {
             zoom : 15,
             center : map,
             mapTypeId : google.maps.MapTypeId.ROADMAP
    };


    var $content = $("#map-page div:jqmData(role=content)");
    $content.height(screen.height - 50);
    var m = new google.maps.Map ($content[0], options);
    $.mobile.changePage ($("#map-page"));

     /*new google.maps.Marker ({ map : map,
         animation : google.maps.Animation.DROP,
         position : latlng
     }); */
}


function errorHandler(error){
   alert("Se ha detectado un error: " + error.message);
}
