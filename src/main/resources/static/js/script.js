$(function() {
    // ACTIVATION DU DATEPICKER 
    $('#dateRdv').datepicker({
        clearBtn: true,
        format: 'dd/mm/yyyy',
        daysOfWeekDisabled: "0,6",
        daysOfWeekHighlighted: "1,2,3,4,5",
        language: 'fr',
        autoclose: true,
        startDate: new Date()
    });
    $('#dateCni').datepicker({
        clearBtn: true,
        format: 'dd/mm/yyyy',
        language: 'fr',
        autoclose: true
    });
});

(function($) {
    $.fn.datepicker.dates['fr'] = {
        days: ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"],
        daysShort: ["Dim.", "Lun.", "Mar.", "Mer.", "Jeu.", "Ven.", "Sam."],
        daysMin: ["D", "L", "Ma", "Me", "J", "V", "S"],
        months: ["janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
        monthsShort: ["Janv.", "Févr.", "Mars", "Avril", "Mai", "Juin", "Juil.", "Août", "Sept.", "Oct.", "Nov.", "Déc."],
        today: "Aujourd'hui",
        monthsTitle: "Mois",
        clear: "Effacer",
        weekStart: 1,
        format: "dd/mm/yyyy"
    };
}(jQuery));

$("#dateRdv").on("change", function() {
    var date = $(this).val();
    var directionId = $("#directions").val();
    var s = '<option value="">Selectionner la tranche ...</option>';
    if (directionId > 0) {
        $.ajax({
            url: 'listeTranche',
            data: { "directionId": directionId, "date": date },
            success: function(result) {
                var result = JSON.parse(result);
                for (var i = 0; i < result.length; i++) {
                    s += '<option value="' + result[i][0] + '">' + result[i][1] +'  -  '+ result[i][2] +'</option>';
                }
                $('#tranches').html(s);
            }
        });
    }
});

$("#villes").change(function() {
      var villeId = $(this).val();
      var s = '<option value=' + 1 + '>Selectionner la commune</option>';
      if (villeId > 1) {
      	$.ajax({
        url : 'listeCommune',
        data : { "villeId" : villeId },
        success : function(result) {
        	var result = JSON.parse(result);
        	for (var i = 0; i < result.length; i++) {
        	  s += '<option value="' + result[i][0] + '">'+ result[i][1]+ '</option>';
        	}
        	$('#communes').html(s);
        }
      });
     }
     //reset data
    $('#communes').html(s);
 });