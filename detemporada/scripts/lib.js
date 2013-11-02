var _app = _app || {};
_app.filtros = true;

var getTemporada = function() {
	var hoy = new Date(),
		temporada = 'invierno';

	if (hoy.getMonth() > 5) {
		temporada = 'verano';
	}

	return temporada;
};

var ocultarFueraTemporada = function() {
	var temporada = getTemporada();

	$('.js-item').each(function(index, el) {
		if($(el).data('temporada') != temporada) {
			$(el).hide();
		}
	});
}

$(document).ready(function() {
	$('#remover-filtros-btn').click(function() {
		if (_app.filtros) {
			$('.js-item').show();
			_app.filtros = false;
			$('#temporada-estado-texto').text('Todas las temporadas');
		} else {
			ocultarFueraTemporada();
			_app.filtros = true;
			$('#temporada-estado-texto').text('Esta temporadas');
		}
	});
});
