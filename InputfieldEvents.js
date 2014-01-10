$(document).ready(function() {

	$(document).on("click", ".InputfieldEventsAdd", function(e) {
		$(this).removeClass('ui-state-active'); 
		var $row = $(this).parents(".InputfieldEvents").find("tr.EventTemplate"); 
		$row.parent('tbody').append($row.clone().hide().removeClass('EventTemplate').css('display', 'table-row').fadeIn()); 
		var id = $(this).attr('id'); 
		setTimeout("$('#" + id + "').removeClass('ui-state-active')", 500); 
		return false; 
	});	

	$(document).on("click", ".InputfieldEvents a.EventClone", function(e) {
		var $row = $(this).parents("tr.Event"); 
		var $table = $(this).parents("table.InputfieldEvents"); 
		$table.append($row.clone().hide().css('display', 'table-row').fadeIn()); 
		return false; 
	}); 

	$(document).on("click", ".InputfieldEvents a.EventDel", function(e) {
		var $row = $(this).parents("tr.Event"); 
		if($row.size() == 0) {
			// delete all
			$(this).parents("thead").next("tbody").find('.EventDel').click();
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

	$(document).on("focus", ".InputfieldEvents .datepicker", function() {
		$(this).datepicker({
			dateFormat: 'yy-mm-dd'
		}); 
	}); 

}); 
