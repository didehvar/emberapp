/*jshint node:true*/
module.exports = function(app) {
  var express = require('express');
  var usersRouter = express.Router();

  usersRouter.get('/', function(req, res) {
    res.send({
      'users': [
        {
          id: 1,
          email: 'bob@bob.com',
          password: 'hiddenpassword'
        },
        {
          id: 2,
          email: 'fred@franki.es',
          password: '123456'
        }
      ]
    });
  });

  app.use('/api/users', usersRouter);
};
