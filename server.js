var express = require('express'),
    path = require('path'),
    app = express();

const PORT = process.env.PORT || 3000;

app.use(function(req, res, next){
  if(req.headers['x-forwarded-proto'] === 'http'){
    next();
  } else {
    res.redirect('http://' + req.hostname + req.url);
  }
});

app.use(express.static(__dirname + '/public'));

app.get('*', function (req, res){
  response.sendFile(path.resolve(__dirname, 'public', 'index.html'));
})

app.listen(PORT, function(){
  console.log('Server working on port ' + PORT);
});
