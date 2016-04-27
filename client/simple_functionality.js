$( document ).ready(function() {
	$( "#build_birdhouse" ).click(function() {
	  	var wood = $('#birdhouse_wood').val();
	  	var screws = $('#birdhouse_screws').val();
	  	var bolts = $('#birdhouse_bolts').val();
	  	var json_data = {"screws": screws, "wood": wood, "bolts": bolts};

	  	$.ajax({
		  type: "POST",
		  url: "http://localhost:3000/buildBirdhouse",
		  dataType: 'json',
		  data: json_data,
		  success: function(data, textStatus, jqXHR){
		  	$("#data_results").text(data);
		  },
		  error: function(XMLHttpRequest, textStatus, errorThrown) {
		  	$("#data_results").text("error");	
		  }
		});

	});

	$( "#fix_pictureframe" ).click(function() {
	  	var num_screws = $('#pictureframe_screws').val();
	  	var json_data = {screws: num_screws};
	  	console.log(json_data);
	  	$.ajax({
		  type: "POST",
		  url: "http://localhost:3000/fixPictureFrame",
		  dataType: 'json',
		  data: json_data,
		  success: function(data, textStatus, jqXHR){
		  	console.log(data);
		  	$("#data_results").text(data);
		  },
		  error: function(XMLHttpRequest, textStatus, errorThrown) {
		  	console.log("error");
		  	$("#data_results").text("error");	
		  }
		});

	});

	$( "#fix_plumming" ).click(function() {
	  	var screws = $('#birdhouse_screws').val();
	  	var bolts = $('#birdhouse_bolts').val();
	  	var json_data = {"screws": screws, "bolts": bolts};
	  	$.ajax({
		  type: "POST",
		  url: "http://localhost:3000/fixPluming",
		  dataType: 'json',
		  data: json_data,
		  success: function(data, textStatus, jqXHR){
		  	$("#data_results").text(data);
		  },
		  error: function(XMLHttpRequest, textStatus, errorThrown) {
		  	$("#data_results").text("error");	
		  }
		});

	});
});