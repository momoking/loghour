#! /usr/bin/env node

var conf = require('./package');
var moment = require('moment');
var fs = require('fs');
var colors = require('colors/safe');

fs.readFile(conf.logfile, 'utf-8', function(err, data) {
	var timeNow = moment();
	var timeNowFormatted = timeNow.format(conf.timeFormat);
	var duration;

	if (!err) {
		var lines = data.trim().split('\n');
		var lastLine = lines.splice(-1)[0];
		var previousEntryTime = moment(lastLine, conf.timeFormat);
		if (previousEntryTime && previousEntryTime.isValid()) {
			duration = moment.duration(previousEntryTime.diff(timeNow)).humanize(true);
		}
	}

	fs.appendFile(conf.logfile, timeNowFormatted + '\n', function(err) {
		if (err) {
			return console.log('error writting:', err);
		}
		console.log(colors.green('SAVED') + '\t' + timeNowFormatted);
		if (duration) {			
			console.log(colors.inverse('PREV\t' + previousEntryTime.format(conf.timeFormat) + ' (' + duration + ')'));
		}
		
	});

});