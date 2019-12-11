var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  if (req.session.email) {
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
  else {
    const err = new Error("No User is logged");
    err.status = 404;
    res.status(err.status);
    return res.json({
      message: err.message,
      error: err
    });
  }
});

module.exports = router;