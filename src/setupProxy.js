const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/members', {
      target: 'http://13.124.56.189:8080',
      changeOrigin: true,
    }),
  );
};
