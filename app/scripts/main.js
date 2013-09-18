$(function(){

	$(".filter-btn a").click(function(e){
		
		var which_btn = $(this).attr("id").split("-")[0];
		var already_active = $(this).parent().hasClass("active");

		$(".filter-btn").removeClass("active");
		$(".filter").slideUp();

		if( !already_active ){
			$("#" + which_btn + "-filter-btn").parent().addClass("active");
			$("#" + which_btn + "-filter").slideDown("slow");
		}

		return false;
	});

	$(".update-btn").click(function(){

		$(".filter-btn").removeClass("active");
		$(".filter").slideUp();
		return false;
	});

});