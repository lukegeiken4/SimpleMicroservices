module.exports = function(app, request, MainHelper){
	var Helper = new MainHelper();
	
	app.get('/sawPlywood', function (req, res) {
	  	res.send(JSON.stringify({result: "You saw a piece of plywood in half. "}));
	});

	app.get('/sawOak', function (req, res) {
	  	res.send(JSON.stringify({result: "You saw a piece of oak in half. "}));
	});

	app.get('/sawBirch', function (req, res) {
	  	res.send(JSON.stringify({result: "You saw a piece of birch in half. "}));
	});

};
