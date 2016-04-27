module.exports = function(app, request, MainHelper){
	var Helper = new MainHelper(request);

	app.post('/buildBirdhouse', function (req, res) {
		var post_data = req.body;
		// {screws: #, wood: oak, bolts, #}
		var num_screws = post_data.screws;
		var num_bolts = post_data.bolts;
		var wood = post_data.wood;
		var saw_url = '/saw' + wood;
		var count_bolts = 0;
		var count_screws = 0;
		var results = "";

		Helper.talkToSaw(saw_url, function(wood_err, wood_data) {
	  		results += wood_data.result;

	  		for(var i = 0; i < num_bolts; i++)
	  		{
			  	Helper.talkToWrench('/crankRight', function(wrench_err, wrench_data) {
			  		results += wrench_data.result;
			  		count_bolts++;
			  		if(count_bolts >= num_bolts)
			  		{
				  		for(var i = 0; i < num_screws; i++)
				  		{
				  			Helper.talkToScrewdriver('/turnRight', function(screw_err, screw_data) {
								results += screw_data.result;
								count_screws++;
					  			if(count_screws >= num_screws) {
					  				res.json({result: results});
					  			}
							});
				  		}
				  	}
				});
			}
		});
		
	});

	app.post('/fixPictureFrame', function (req, res) {
		
		var post_data = req.body;
		
		var num_screws = post_data.screws;
		var count_screws = 0;
		var results = "";
		
	  	for(var i = 0; i < num_screws; i++)
  		{
  			
  			Helper.talkToScrewdriver('/turnRight', function(screw_err, screw_data) {
				results += screw_data.result;
				count_screws++;
	  			if(count_screws >= num_screws) {
	  				
	  				res.json({result: results});
	  			}
			});
  		}
	});

	app.post('/fixPluming', function (req, res) {
		var post_data = req.body;
		// {screws: #, bolts, #}
		var num_bolts = post_data.bolts;
		var num_screws = post_data.screws;
		var count_bolts = 0;
		var count_screws = 0;
		var results = "";

		for(var i = 0; i < num_bolts; i++)
  		{
		  	Helper.talkToWrench('/crankRight', function(wrench_err, wrench_data) {
		  		results += wrench_data.result;
		  		count_bolts++;
		  		if(count_bolts >= num_bolts)
		  		{
		  			for(var i = 0; i < num_screws; i++)
			  		{
			  			Helper.talkToScrewdriver('/turnRight', function(screw_err, screw_data) {
							results += screw_data.result;
							count_screws++;
				  			if(count_screws >= num_screws) {
				  				res.json({result: results});
				  			}
						});
			  		}
		  		}
			});
	  	}
	});
};
