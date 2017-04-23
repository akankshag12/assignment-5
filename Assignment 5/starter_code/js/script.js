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
	if(city == "New York" || city == "new york" || city == "NYC"){
		$("body").attr("class", "nyc");
		console.log("NY")
	}

	else if(city == "Los Angeles" || city == "LAX"){
		$("body").attr("class", "la")
	}

	else if(city == "Austin" || city == "ATX"){
		$("body").attr("class", "austin")
	}

	else if(city == "Sydney" || city == "SYD"){
		$("body").attr("class", "sydney")
	}

	else if(city == "San Francisco" || city == "SF" || city == "Bay Area"){
		$("body").attr("class", "sf")
	}

	else{
		alert("We don't have this city yet!")
	}
	}
})





