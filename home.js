const http = require('http')

const server = http.createServer((req,res)=>{
	if(req.url === '/'){
		res.end('Welcome to home page')
	}
	if(req.url === '/about'){
		res.end('this is about page')
	}
	res.end(`404 Page not found`)

})

server.listen(5000)