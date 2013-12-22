module.exports = function(app) {
  app.get('/', function(req, res) {
    res.redirect('/home');
  });
  app.get('/home', function(req, res) {
    res.render('home.jade');
  });
};
