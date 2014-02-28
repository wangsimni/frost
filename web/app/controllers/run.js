
module.exports = function(app) {
  app.get('/run', function(req, res) {

    var priceLow = req.query.priceLow;
    var priceLuxury = req.query.priceLuxury;
    
    var storeQuery = 'SELECT * FROM store ';
    if (priceLow) {
      storeQuery += 'WHERE store.price < 10000 ';
    } else if (priceLuxury) {
      storeQuery += 'WHERE store.price >= 10000 ';
    }
    storeQuery += 'ORDER BY RAND() LIMIT 1 ';

    var reviewQuery =
      'SELECT * FROM review INNER JOIN reviewer ON review.reviewerId = reviewer.reviewerId WHERE review.storeId = ?';

    app.getConnection(function(err, conn) {
      conn.query(storeQuery, function(err, storeRows) {
        var store = storeRows[0];
        conn.query(reviewQuery, [store.storeId], function(err, reviews) {
          res.json({ store: store, reviews: reviews });
        });
      });
      conn.release();
    });
  });
};
