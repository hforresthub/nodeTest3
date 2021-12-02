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
	console.log(JSON.parse(data));
})