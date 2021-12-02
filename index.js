// const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest
// const xhr = new XMLHttpRequest()
// xhr.onreadystatechange = () => {
// 	if (xhr.readyState === 4) {
// 		xhr.status === 200 ? console.log(xhr.responseText) : console.error('error')
// 	}
// }
// xhr.open('GET', 'http://halcodes.ca')
// xhr.send()

const fs = require('fs')

fs.readFile('./file.json', (err, data) => {
	if (err) {
		// error handling
		console.log(err);
		return
	}

	// handle data normally if no errors
	console.log(JSON.parse(data).favGames);
})

let done = true

const isComplete = new Promise((resolve, reject) => {
	if (done) {
		const workDone = "The work has completed"
		resolve(workDone)
	}
	else {
		const why = "The work has not yet completed"
		reject(why)
	}
})

const checkCompleteness = () => {
	isComplete
		.then(ok => {
			console.log(ok);
		})
		.catch(err => {
			console.error(err);
		})
}

checkCompleteness()