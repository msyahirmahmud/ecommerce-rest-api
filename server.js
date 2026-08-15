const http = require('http');
const ECommerceService = require('./app');

const service = new ECommerceService();
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');

  if (req.url === '/api/products' && req.method === 'GET') {
    res.writeHead(200);
    res.end(JSON.stringify({ success: true, data: service.getProducts() }));
  } else if (req.url === '/api/health' && req.method === 'GET') {
    res.writeHead(200);
    res.end(JSON.stringify({ status: 'OK', timestamp: new Date().toISOString() }));
  } else {
    res.writeHead(404);
    res.end(JSON.stringify({ error: 'Endpoint not found' }));
  }
});

if (require.main === module) {
  server.listen(PORT, () => console.log(`E-Commerce API running on port ${PORT}`));
}

module.exports = server;
