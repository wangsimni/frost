module.exports = function(app) {
  return;
  app.get('/', function(req, res) {
    res.render('closed.jade');
  });
};