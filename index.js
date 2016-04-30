#! /usr/bin/env node

var conf = require('./package');
var moment = require('moment');
var fs = require('fs');

fs.readFile(conf.logfile, 'utf-8', function(err, data) {
	var timeNow = moment();
	var timeNowFormatted = timeNow.format(conf.timeFormat);
	var feedback;

	if (!err) {
		var lines = data.trim().split('\n');
		var lastLine = lines.splice(-1)[0];		
		var lastEntryTime = moment(lastLine, conf.timeFormat);
		if (lastEntryTime && lastEntryTime.isValid()) {
			feedback = moment.duration(lastEntryTime.diff(timeNow)).humanize(true) + ' since last entry';	
		}		
	}

	fs.appendFile(conf.logfile, timeNowFormatted + '\n', function(err) {
		if (err) {
			return console.log('error writting:', err);
		}
		console.log(timeNowFormatted, '-> saved');
		if (feedback) {
			console.log(feedback);
		}
	});

});