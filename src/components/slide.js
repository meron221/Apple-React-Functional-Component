import $ from "jquery";

$(window).on("resize", function (event) {
	window.location.reload();
});

$(document).on("click", ".footer-links-wrapper h3", function () {
	if ($(window).width() <= 768) {
		$(this).next("ul").slideToggle();
		$(this).toggleClass("expanded");
	} else {
		$(this).next("ul").show();
	}
});

// if ($(window).width() <= 768) {
// 	$(".footer-links-wrapper ").addClass("someClass");
// } else {
// 	$(".footer-links-wrapper ").removeClass("someClass");
// }
// $(window).on("resize", function (event) {
// 	if ($(window).width() <= 768) {
// 		$(".footer-links-wrapper ").addClass("someClass");
// 	} else {
// 		$(".footer-links-wrapper ").removeClass("someClass");
// 		$(".footer-links-wrapper ul").show();
// 	}
// });

// // Footer collapse functionality
// $(document).on("click", ".someClass h3", function () {
// 	$(this).next("ul").slideToggle();
// 	$(this).toggleClass("expanded");
// });
