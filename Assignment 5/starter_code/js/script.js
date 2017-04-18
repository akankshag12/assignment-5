$(document).ready(function(){

	//USER INPUTS VALUE 

	//WHEN USER CLICKS "UPDATE" BUTTON, RUN FUNCTION TO CHANGE BACKGROUND

$("#submit-btn").click(changeBackground);
function changeBackground(){
	
	//PREVENT DEAFULT BUTTON ACTION
	event.preventDefault();

	//GRAB USER INPUT VALUE
	var city = $("#city-type").val(); 

	//LOG USER INPUT VALUE
	console.log("City: ", city);

	// BASED ON INPUT, CHANGE BACKGROUND 
	if(city="New York" || "new york" || "NYC"){
		$("body").attr("class", "nyc");
		console.log("NY")
	}

	// else if(city="Los Angeles" || "LAX"){
	// 	$("body").attr("class", "LAX")
	// }

	// else if(city="Austin" || "ATX"){
	// 	$("body").attr("class", "austin")
	// };

	// else (city="Sydney" || "SYD"){
	// 	$("body").attr("class", "sydney")
	// }
	// else if(city="San Francisco" || "SF" || "Bay Area"){
	// 	$("body").attr("class", "sf")
	// }
	}
})





