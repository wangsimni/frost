module.exports = function (app) {
  app.get('/partials/:name', function (req, res) {
    var name = req.params.name;
    res.render('partials/' + name + '.jade');
  });
};