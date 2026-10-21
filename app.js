const http = require('http');
const PORT = process.env.PORT || 3001;
const VERSION = '1.0';

function greet(name) {
  return `Hello ${name}, welcome to the Jenkins CI/CD pipeline demo!`;
}

function add(a, b) {
  return a + b;
}

if (require.main === module) {
  http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`<html><head><title>Exp3 Pipeline App</title></head>
<body style="font-family:sans-serif;margin:40px">
<h1>CI/CD Pipeline Demo App (v${VERSION})</h1>
<p>${greet('Chaitanya Dhamdhere')}</p>
<p>Built, tested and deployed by Jenkins (Build &rarr; Test &rarr; Deploy).</p>
<p>Deployed at: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST</p>
</body></html>`);
  }).listen(PORT, () => console.log(`App running on http://localhost:${PORT}`));
}

module.exports = { greet, add, VERSION };
