var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  if (req.session) {
    // delete session object
    req.session.destroy((err) => {
      if (err) {
        return res.json({
          message: err.message,
          error: err
        });
      } else {
        res.status(200);
        return res.json({ message: "Logout successful" });
      }
    });
  }
});

module.exports = router;