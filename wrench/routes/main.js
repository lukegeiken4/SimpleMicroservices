module.exports = function(app, request, MainHelper){
	var Helper = new MainHelper();
	
	app.get('/crankRight', function (req, res) {
	  	res.send(JSON.stringify({result: "Crank wrench to the right. "}))
	});

	app.get('/crankLeft', function (req, res) {
	  	res.send(JSON.stringify({result: "Crank the wrench to the left. "}))
	});
};
