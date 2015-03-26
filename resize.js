// Windows Resize
window.onload = function() {

	// Styling
	$('<style type="text/css">#resize {position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-family: Helvetica; font-size: 42px; opacity: 0; transition: all 0.2s cubic-bezier(0.4, 0.0, 0.2, 1);}</style>').appendTo($('head'));
	
	// Resize div
	$("body").append('<div id="resize"><span id="width"></span> <span id="times">&times;</span> <span id="height"></span></span></div>')
};

// Desired window dimensions
var desiredWidth = 1920;
var desiredHeight = 1080;


// Colors
var green = "#12A83A";
var grey = "#aaa"

var overlayFadeOut;

$(window).resize(function() {
	// Appear
	$("#resize").css('opacity', '1');

	// Disappear
	clearTimeout(overlayFadeOut);
	overlayFadeOut = setTimeout(function(){
		$("#resize").css('opacity', '0');
	}, 2000)

	// Change text
	$("#width").text($(this).width());
	$("#height").text($(this).height());

	// Variables for window dimensions
	var ww = $(window).width();
	var wh = $(window).height();


	// Boolean
	if (ww == desiredWidth) {
		$("#width").css('color', green);
	}

	if (ww != desiredWidth) {
		$("#width").css('color', grey);
	}

	if (wh == desiredHeight) {
		$("#height").css('color', green);
	}

	if (wh != desiredHeight) {
		$("#height").css('color', grey);
	}

	if (ww == desiredWidth && wh == desiredHeight) {
		$("#times").css('color', green);
	}

	if (ww != desiredWidth || wh != desiredHeight) {
		$("#times").css('color', grey);
	}
});