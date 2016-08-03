module.exports = function (app) {
    
    // Web Appication
    app.get('*', function (req, res) {
        res.sendFile(__dirname + '/client/index.html');
    });
};