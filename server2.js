var http = require('http');
var fs = require('fs')

// Its working for now	
// maybe try this one to handle all css and pngs:


var server = http.createServer(function (req, res) {   

	// console.log(req.url)

	if (req.url == '/index.html') { 
		res.writeHead(200, { 'Content-Type': 'text/html' }); 
		fs.readFile('./index.html', 'utf8', function (err, data)  {
			if (err) throw err;
			res.write(data);
			res.end();
		});
	}
	else if (req.url == "/style.css") {
		res.writeHead(200, { 'Content-Type': 'text/css' }); 
		fs.readFile('./style.css', 'utf8', function (err, data)  {
			if (err) throw err;
			res.write(data);
			res.end();
		});
	}
	else if (req.url == "/script.js") {
		res.writeHead(200, { 'Content-Type': 'text/javascript' }); 
		fs.readFile('./script.js', 'utf8', function (err, data)  {
			if (err) throw err;
			res.write(data);
			res.end();
		});
	}
});

server.listen(3000); //6 - listen for any incoming requests
console.log('Node.js web server at port 3000 is running..')