jQuery(document).ready(function(){

	// toogle-mnu
	$(".toggle-mnu").click(function() {
	 	$(this).toggleClass("on");
	 	$(".top-mnu").slideToggle();
	 	$("body").toggleClass("ovh");
	 	return false;
	});
	$(".hidden-mnu li a").click(function(){
		$(".toggle-mnu").click();
	});
	// end toogle-mnu
	
}); // end ready	