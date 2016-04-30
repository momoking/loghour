# loghour
A simple NodeJS CLI to keep track of times in a punch card fashion.


### Install

```
sudo npm install -g
```

### Usage

To punch a time, simply run `loghour`, this appends a timestamp to a log file of your choice (Change the filepath in `package.json` before running the command).


### Example

```
$ loghour 
SAVED	2016-04-30 18:16
```

```
$ loghour 
SAVED	2016-04-30 18:47
PREV	2016-04-30 18:16 (31 minutes ago)
```


### Roadmap

- Reporting
- Write to Google Spreadsheet
