module.exports = function MainHelper(request)
{
	var helper = this;

	this.talkToWrench = function(url, callback) {

		var options = {
		  url: 'http://localhost:3001' + url,
		  method: 'GET',
		  header: {
		  	'Content-Type': 'application/json'}
		};
		helper.sendRequest(options, function(err, body){
			callback(err, body);
		});
	};

	this.talkToSaw = function(url, callback) {

		var options = {
		  url: 'http://localhost:3002' + url,
		  method: 'GET',
		  header: {
		  	'Content-Type': 'application/json'}
		};
		helper.sendRequest(options, function(err, body){
			callback(err, body);
		});
	};

	this.talkToScrewdriver = function(url, callback) {

		var options = {
		  url: 'http://localhost:3003' + url,
		  method: 'GET',
		  header: {
		  	'Content-Type': 'application/json'}
		};
		helper.sendRequest(options, function(err, body){
			callback(err, body);
		});
	};

	this.sendRequest = function(options, callback) {
		
		request(options, function (err, response, body) {
			if (err) {
				callback(true, '{"error" : "' + response + '"}');
				return;
			}
			var json = JSON.parse(body);
			callback(false, {"result" : json.result});
			
		});
	};
};
