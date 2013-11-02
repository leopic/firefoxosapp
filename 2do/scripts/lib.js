var _app = _app || {};

var getTemporada = function() {
	var hoy = new Date(),
		temporada = 'invierno';

	if (hoy.getMoth() > 5) {
		temporada = 'verano';
	}

	return temporada;
};

/*$(document).on('#page', 'pageinit', function() {

	//if (getTemporada() == 'verano') {
		$('.js-item').each(function(index, el) {
			if($(el).data('temporada') != getTemporada()) {
				$(el).hide();
			}
		});
	//}

});
*/

$(document).delegate("#page","pageinit",function(){
	alert('listo');
});