$(document).ready(function() {

	/**
	 * Add event button 
	 * 
	 */
	$(document).on("click", ".InputfieldEventsAdd", function(e) {
		var $row = $(this).parents(".InputfieldEvents").find("tr.EventTemplate");
		var id = $(this).attr('id');
		$(this).removeClass('ui-state-active'); 
		$row.parent('tbody').append($row.clone().hide().removeClass('EventTemplate').css('display', 'table-row').fadeIn()); 
		setTimeout("$('#" + id + "').removeClass('ui-state-active')", 500); 
		return false; 
	});

	/**
	 * Clone event link
	 * 
	 */
	$(document).on("click", ".InputfieldEvents .EventClone a", function(e) {
		var $row = $(this).closest('tr'); 
		var $table = $row.closest('table'); 
		$table.append($row.clone().hide().css('display', 'table-row').fadeIn()); 
		return false; 
	});

	/**
	 * Delete event link
	 * 
	 */
	$(document).on("click", ".InputfieldEvents .EventDelete a", function(e) {
		var $row = $(this).closest("tr.Event"); 
		if($row.length == 0) {
			// delete all
			$(this).closest("thead").next("tbody").find('.EventDelete').click();
			return false; 	
		}
		var $input = $(this).next('input'); 
		if($input.val() == 1) {
			$input.val(0); 
			$row.removeClass("EventTBD"); 
			$row.removeClass('ui-state-error'); 
		} else {
			$input.val(1); 
			$row.addClass("EventTBD"); 
			$row.addClass('ui-state-error');
		}
		return false; 
	}); 
}); 
