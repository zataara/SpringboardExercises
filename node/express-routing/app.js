const express = require('express')
const appFunctions = require('./appFunctions')

const app = express();


app.get('/mean', function(req,res) {
    const {nums} = req.query;
    let arr = nums.split(',').map(Number);
    r = appFunctions.mean(arr)
    return res.json({
        operation: "mean",
        value: r
    })
})

app.get('/median', function(req,res) {
    const {nums} = req.query;
    let arr = nums.split(',').map(Number);
    r = appFunctions.median(arr)
    return res.json({
        operation: "median",
        value: r
    })
})

app.get('/mode', function(req,res) {
    const {nums} = req.query;
    let arr = nums.split(',').map(Number);
    r = appFunctions.mode(arr)
    return res.json({
        operation: "mode",
        value: r
    })
})

app.get('/all', function(req,res) {
    const {nums} = req.query;
    let arr = nums.split(',').map(Number);
    r = appFunctions.mean(arr)
    s = appFunctions.median(arr)
    t = appFunctions.mode(arr)
    return res.json({
        operation: "all",
        mean: r,
        median: s,
        mode: t
    })
})



app.listen(3000, function() {
    console.log('Server live on port 3000');
})