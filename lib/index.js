"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//var app = express();
var app = (0, _express2.default)(); //var  express = require("express");


app.use(_express2.default.static("static"));
app.listen(3000, function () {
	console.log("jupiiii");
});