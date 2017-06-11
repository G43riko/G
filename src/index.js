//var  express = require("express");
import express from 'express';
//var app = express();
const app = express();

app.use(express.static("static"));
app.listen(3000, () => {
	console.log("jupiiii");
})
