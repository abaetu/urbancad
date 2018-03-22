
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , path = require('path')
  , fs = require('fs')

var ROOTPATH = __dirname + "/public/bootstrap";
var app = express();
app.use(express.compress());
app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/index', routes.index);
app.get('/contact', routes.contact);
app.get('/legislatie', routes.legislatie);
app.get('/servicii', routes.servicii);
app.get('/intrebari', routes.intrebari);
//app.get('*', function(req,res){res.send("Page not found", 404)});
app.get('/faststone/*', function(req, response){
    var filePath = path.join(ROOTPATH, req.path);
    console.info("Sending", filePath, path.resolve(filePath));
    fs.exists(filePath, function(exists){
      if (exists) {     
        // Content-type is very interesting part that guarantee that
        // Web browser will handle response in an appropriate manner.
        response.writeHead(200, {
          "Content-Type": "application/octet-stream"
        });
        fs.createReadStream(filePath).pipe(response);
      } else {
        response.writeHead(400, {"Content-Type": "text/plain"});
        response.end("ERROR File does not exist");
      }
    });
})


http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
