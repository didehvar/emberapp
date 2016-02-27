/*jshint node:true*/
module.exports = function(app) {
  var express = require('express');
  var tokenRouter = express.Router();

  tokenRouter.post('/', function(req, res) {
    if (req.body.grant_type !== 'password') {
      return res.status(400).json({ error: 'unsupported_grant_type' });
    }

    if (req.body.username !== 'username' && req.body.password !== 'password') {
      return res.status(400).json({ error: 'invalid_grant' });
    }

    return res.status(200).send({ access_token: 'secret token' });
  });

  app.use('/api/token', tokenRouter);
};
