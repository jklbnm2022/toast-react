const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: `${process.env.REACT_APP_BACK_HOST}`,
      pathRewrite: {
        "^/api": "",
      },
      changeOrigin: true,
      secure: false,
    })
  );

  app.use(
    "/util",
    createProxyMiddleware({
      target: `${process.env.REACT_APP_UTIL_HOST}`,
      pathRewrite: {
        "^/util": "",
      },
      changeOrigin: true,
      secure: false,
    })
  );
};
