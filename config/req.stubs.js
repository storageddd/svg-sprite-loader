module.exports = (app) => {
  app.post('/api/post-success', (req, res) => { console.log(req.body); return res.sendStatus(200)});
  app.post('/api/post-error', (req, res) => res.sendStatus(400));

  app.get('/api/documents', (req, res) => {
    let data = require('../stubs/documens');
    return res.send(data);
  });

  app.get('/api/news', (req, res) => {
    let data = require('../stubs/news');
    return res.send(data);
  });
  app.get('/api/license', (req, res) => {
    let data = require('../stubs/license');
    return res.send(data);
  });

  app.get('/api/teams', (req, res) => {
    let data = require('../stubs/teams/index');
    return res.send(data);
  });

  app.get('/api/teams/view/a', (req, res) => {
    let data = require('../stubs/teams/view');
    return res.send(data);
  });

  app.get('/api/teams/view/b', (req, res) => {
    let data = require('../stubs/teams/view');
    return res.send(data);
  });

  app.get('/api/teams/pagi/a', (req, res) => {
    let data = require('../stubs/teams/pagi');
    return res.send(data);
  });

  app.get('/api/teams/pagi/b', (req, res) => {
    let data = require('../stubs/teams/pagi');
    return res.send(data);
  });

  app.get('/api/partners', (req, res) => {
    let data = require('../stubs/partners/index');
    return res.send(data);
  });

  app.get('/api/partners/pagi', (req, res) => {
    let data = require('../stubs/partners/pagi');
    return res.send(data);
  });

  app.get('/api/partners/view', (req, res) => {
    let data = require('../stubs/partners/view');
    return res.send(data);
  });

  app.get('/api/partners/new', (req, res) => {
    let data = require('../stubs/partners/new');
    return res.send(data);
  });

  app.get('/api/account/balance', (req, res) => {
    let data = require('../stubs/account/balance');
    return res.send(data);
  });

  app.get('/api/account/index', (req, res) => {
    let data = require('../stubs/account/index');
    return res.send(data);
  });

  app.get('/api/account/payment', (req, res) => {
    let data = require('../stubs/account/payment');
    return res.send(data);
  });

  app.get('/api/auth/welcome', (req, res) => {
    let data = require('../stubs/auth/welcome');
    return res.send(data);
  });

  app.get('/api/global', (req, res) => {
    let data = require('../stubs/global');
    return res.send(data);
  });

};