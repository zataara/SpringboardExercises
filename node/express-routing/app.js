const express = require('express')
const {mean, median, mode} = require('./appFunctions');
const { ExpressError } = require('./expressError');

const app = express();


app.get('/mean', function(req,res) {
    if(!req.query.nums) {
        throw new ExpressError('You must pass a query parameter with a comma-separated list of numbers', 400)
    }
    const {arr} = req.query.nums.split(',').map(Number);
    r = mean(arr)
    return res.json({
        operation: "mean",
        value: r
    })
})

app.get('/median', function(req,res) {
    if(!req.query.nums) {
        throw new ExpressError('You must pass a query parameter with a comma-separated list of numbers', 400)
    }
    const {arr} = req.query.nums.split(',').map(Number);
    r = median(arr)
    return res.json({
        operation: "median",
        value: r
    })
})

app.get('/mode', function(req,res) {
    if(!req.query.nums) {
        throw new ExpressError('You must pass a query parameter with a comma-separated list of numbers', 400)
    }
    const {arr} = req.query.nums.split(',').map(Number);
    r = mode(arr)
    return res.json({
        operation: "mode",
        value: r
    })
})

app.get('/all', function(req,res) {
    if(!req.query.nums) {
        throw new ExpressError('You must pass a query parameter with a comma-separated list of numbers', 400)
    }
    const {arr} = req.query.nums.split(',').map(Number);
    r = mean(arr)
    s = median(arr)
    t = mode(arr)
    return res.json({
        operation: "all",
        mean: r,
        median: s,
        mode: t
    })
})

app.use(function(req, res, next) {
    const err = new ExpressError("Not Found", 404)
    // pass the error to the next piece of middleware
    return next(err);
});

app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    return res.jsos({
        error: err,
        message: err.message
    });
});


app.listen(3000, function() {
    console.log('Server live on port 3000');
});