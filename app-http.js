const http = require('http');

const server = http.createServer((req, res) => {
	res.writeHead(200, { 'Content-type': 'text/plain' });
	res.end('Hello,World! This is a new Nodejs project!!');
});

const port = 3000;
server.listen(port, () => {
	console.log(`Server is running at http://localhost:${port}`);
});
