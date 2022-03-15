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
