(function ($) {
 "use strict";
		var $table = $('#tableUtilisateur');
		$('#toolbar').find('select').change(function () {
			$table.bootstrapTable('destroy').bootstrapTable({
				exportDataType: $(this).val(),
				autoWidth: false
			});
			
		});
	
})(jQuery); 