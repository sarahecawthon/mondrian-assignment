window.addEventListener("load", function(){

//set current color 
current_color = "white"

//choose color 
	var choose_color = document.getElementById("color_palette").children
		for (var i=0;i < choose_color.length; i++){
			choose_color[i].addEventListener("click", function(){
			current_color=event.target.id
		});
	};

//place color
	var row = document.getElementsByClassName("row")
		for (var i=0;i < row.length; i++){
			row[i].addEventListener("click", function(){
			event.target.style.backgroundColor = current_color
		});
	};

//save painting

// function addSave(){
// 	document.getElementById("save_button").addEventListener("click", savePainting);
// }



var getString = function() {
	var rowvalues = "";
	for (var i = 0; i < 16; i++) {
		if (row[i].style.backgroundColor == "red"){
			rowvalues += "r";
		} else if (row[i].style.backgroundColor == "blue"){
			rowvalues += "b";
		
		} else if (row[i].style.backgroundColor == "yellow"){
			rowvalues += "y";
		
		} else if (row[i].style.backgroundColor == "white"){
			rowvalues += "w";
		} else {
		 rowvalues += "w";
		}
	}

	return rowvalues;

}

	


var save = document.getElementById("save_button"); 

	save.addEventListener("click", function (event){
		var a = getString();
		event.preventDefault();
	
		var query = "?painting=" + a

		var httpRequest = new XMLHttpRequest();

		httpRequest.open("GET", "/store_painting"+query);

		httpRequest.send();

		httpRequest.addEventListener("load", function(){
			alert:("Saved")
		});
	});

});
