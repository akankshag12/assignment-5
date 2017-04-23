//USER SELECTS A CITY FROM AN ARRAY OF OPTIONS 
var cities = ["NYC", "SF", "LA", "ATX", "SYD"];

//THE DROPDOWN IS POPULATED USING THE ARRAY OF OPTIONS
var index;
for (index = 0; index < cities.length; index = index+1){
	$("select").append("<option>"+cities[index]+"</option>")
};

//GRAB THE USER'S SELECTION AS A VALUE 
$("select").val();

//SELECTING AN OPTION WILL CHANGE THE BACKGROUND 
//INSTEAD OF USING IF/ELSE IF/ELSE STATEMENTS, I CHANGED STYLE.CSS CLASSES TO MATCH THE DROPDOWN VALUES
$("select").change(function(){
	$("body").attr("class", $(this).val());
	})
