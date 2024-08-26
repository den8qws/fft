const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

const target = 'crazygames.com'; // replace with the target server URL

app.use('/', createProxyMiddleware({
    target,
    changeOrigin: true,
    pathRewrite: {
        '^/': '/' // preserve the original request path
    },
    logLevel: 'debug' // enable detailed logging
}));

app.listen(3000, () => {
    console.log('Proxy server is listening on port 3000');
});