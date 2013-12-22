module.exports = function(app){
	app.get('/result', function(req, res) {
		res.render('result.jade');
	});
};