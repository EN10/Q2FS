require('http').createServer(function (req, res) {
	var txt = require('url').parse(req.url,true).query.q;
	require('fs').appendFileSync('test.txt', txt + "\n");
    res.end(txt);
}).listen(process.env.PORT, process.env.IP);