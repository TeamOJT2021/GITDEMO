// vue.config.js
module.exports = {
  // proxy all webpack dev-server requests starting with /api
  // to our Spring Boot backend (localhost:8080) using http-proxy-middleware
  // see https://cli.vuejs.org/config/#devserver-proxy

  devServer: {
    port: 8082,
    proxy: {
      "/api": {
        target: "http://localhost:8080", //  configuration needs to correspond to the Spring Boot thisbackends' application.properties server.port
        ws: true,
        changeOrigin: true,
      },
    },
  },
};
