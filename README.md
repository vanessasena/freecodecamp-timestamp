# API Project: Timestamp Microservice for FreeCodeCamp

### User stories :

* I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016).
* If it does, it returns both the Unix timestamp and the natural language form of that date.
* If it does not contain a date or Unix timestamp, it returns null for those properties.

#### Example usage:
* https://timestamp-vst.herokuapp.com/2015-12-25
* https://timestamp-vst.herokuapp.com/1451001600

#### Example output:
* `{"unix": 1451001600, "natural": "December 25, 2015" }`
