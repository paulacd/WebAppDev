//you always start a jquery file with this function
$(document).ready(function(){

	//accesss the element with the class btn success, 
	//and when I click that thing run the function

	//BASIC EVENT HANDLER
	$(".btn-success").on("mouseover", function(){

		// console.log("clicked on button")
		// $("#header").css({"font-size": "72px"})

		if ($("#header").hasClass("big")){
			$("#header").removeClass("big")

		} else {
			$("#header").addClass("big")

		}

	})

	$(".btn-primary").on("click", function(){

		// $("img").css({"width":"900px"})

		//first create the HTML element
		var img = $("<img/>")
		//then set the source for your attribute
		img.attr({"src": "http://i.giphy.com/hAuYWrVIyfK5G.gif"})
		//then append it to the paragraph
		$("p").append(img)

	})











})