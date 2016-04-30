# loghour
A simple NodeJS CLI to keep track of times in a punch card fashion.


### Install

```
sudo npm install -g
```

### Usage

To punch a time, simply execute command `loghour`, this will append a timestamp to a log file of your choice (configurable in `package.json`).



### Example

```
$ loghour
2016-05-01 16:10 -> saved
```

```
$ loghour
2016-05-01 16:40 -> saved
30 minutes ago since last entry
```
