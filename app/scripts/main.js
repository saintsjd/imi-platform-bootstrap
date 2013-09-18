'use strict';

$(function(){

	$('.filter-btn a').click(function(){
		
		var whichBtn = $(this).attr('id').split('-')[0];
		var alreadyActive = $(this).parent().hasClass('active');

		$('.filter-btn').removeClass('active');
		$('.filter').slideUp();

		if( !alreadyActive ){
			$('#' + whichBtn + '-filter-btn').parent().addClass('active');
			$('#' + whichBtn + '-filter').slideDown('slow');
		}

		return false;
	});

	$('.update-btn').click(function(){

		$('.filter-btn').removeClass('active');
		$('.filter').slideUp();
		return false;
	});

});