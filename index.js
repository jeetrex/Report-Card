const excelToJson = require('convert-excel-to-json');

const result = excelToJson({
	sourceFile: './data/Class 5 - Examination Results.xlsx',
	header: {
		rows: 2,
	},
});

students = result.Class;

console.log(students);

// load the things we needZ`
var express = require('express');
var app = express();
app.use(express.static(__dirname + '/public'));

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
app.get('/', function (req, res) {
	res.render('pages/class1_5_tw', { students: students });
});

app.listen(8080);
console.log('8080 is the magic port');
