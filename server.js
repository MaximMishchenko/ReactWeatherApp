var express = require('express'),
    path = require('path'),
    app = express();

app.use(express.static(__dirname + '/public'));

app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, 'public', 'index.html'));
})

app.listen(3000, function(){
  console.log('Server working...');
});
