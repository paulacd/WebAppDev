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


		$("ul li").each(function(){
			$(this).css({"color": "red", "font-weight":"bold", "font-size":"30px"})
		})

	})

	$(".btn-primary").on("click", function(){

		// $("img").css({"width":"900px"})

		//first create the HTML element
		var img = $("<img/>")
		//then set the source for your attribute
		img.attr({"src": "http://i.giphy.com/hAuYWrVIyfK5G.gif"})
		//then append it to the paragraph
		$("p").append(img)


		$("#header").animate({
			//take the left attribute and increase it by 200
			"left":"+=200",
			"opacity":"0.5",
			"font-size":"30px"
		}, 1000); 
		//the # is the period of time that it should take 
		//to do the changes you've outlined above - in MILLISECONDS

		//create a paragraph
		var p = $("<p>Welcome</p>")
		//add a class to it
		p.addClass("red")
		//then append it at the end of the element with the dummy text class to it
		$(".dummy-text").append(p);


	})











})