$(document).ready(function () {
	// Ensure the nav content is loaded before attaching event listeners
	$("#nav").load("pages/nav.html", function () {
		// console.log("Nav content loaded.");

		// Use event delegation to handle clicks on dynamically loaded links
		$("#navGroup").on("click", "a", function (e) {
			e.preventDefault(); // Prevent default link behavior
			const targetPage = $(this).attr("href"); // Get the href attribute
			// console.log("Navigating to:", targetPage);

			// Load the target page into the main content area
			$("#main").load(targetPage, function () {
				// console.log("Page loaded:", targetPage);
			});
			$("body").addClass("preview");
			$("nav").addClass("collapse");
			$(this).siblings().removeClass("active");
			// $(this).siblings().css("grid-template-rows", "4rem");
			$(this).addClass("active");
		});
	});

	$("#nav").on("click", "#closeNav", function (e) {
		e.preventDefault(); // Prevent default link behavior
		$("body").removeClass("preview");
		$("nav").removeClass("collapse");
		const targetPage = $(this).attr("href"); // Get the href attribute
		// console.log("Navigating to:", targetPage);

		// Load the target page into the main content area
		$("#main").load(targetPage, function () {
			// console.log("Page loaded:", targetPage);
		});
		$(".pageLink").removeClass("active");
	});
});
