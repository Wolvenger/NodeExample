//file system async
//Se lee el primero, si sale bien se lee el segundo si sale bien se escribe el tercero

const {readFile,writeFile} = require('fs');

readFile('./content/first.txt','utf8',(err, result)=>{
	if(err){
		console.log(err)
		return
	}
	console.log(result)
	//no error lets proceed
	const first = result;
	readFile('./content/second.txt','utf8',(err, result)=>{
		if(err){
			console.log(err)
			return
		}
		const second = result;
		console.log('pos el seconde ess',second)
		writeFile('./content/result-aaasync.txt',
		`heres the result: ${first}, ${second}`
		,(err,result)=>{
			if(err){
				return
			}
			console.log(result)
		})
	})
})




/*const second = readFile('./content/second.txt','utf8')

console.log(first,second)

writeFile('./content/result-sync.txt',
	`heres the result: ${first}, ${second}`,
	{flag: 'a'}
	)*/