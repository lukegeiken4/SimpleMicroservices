module.exports = function(app, request, MainHelper){
	var Helper = new MainHelper();
	
	app.get('/turnRight', function (req, res) {
	  	res.send(JSON.stringify({result: "Turn screwdriver right. "}));
	});

	app.get('/turnLeft', function (req, res) {
	  	res.send(JSON.stringify({result: "Turn screwdriver left. "}));
	});
};
