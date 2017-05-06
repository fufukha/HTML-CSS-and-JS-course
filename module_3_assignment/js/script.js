$(function () {
	$("#navbar-toggle").blur(function (event) {
		var screenWidth = window.innerWidth; 
		if (screenWidth < 768) {
			$("#collapsable-nav").collapse('hide');
		}
	});

	//Fix for FireFox & Safari bc tge click event doesn't 
	// retain the focus on the clicked button.
	$("#navbarToggle").click(function (event) {
    $(event.target).focus();
  })
});