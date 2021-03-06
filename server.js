var http = require("http"),
    url = require("url"),
    fs = require("fs")
    port = process.argv[2] || 8888;

http.createServer(function(request, response) {

  var uri = url.parse(request.url).pathname;
  var body = [];
request.on('data', function(chunk) {
  body.push(chunk);
}).on('end', function() {
  body = Buffer.concat(body).toString();

  try {
  console.log( 'try' );
  console.log( body );
  var bodyJson = JSON.parse( body );
  console.log( 'body' );
  console.log( bodyJson );
  var filePath = bodyJson.path;
  var content = bodyJson.content;
} catch( err ) {
  response.writeHead(500,
       {
           "Content-Type": "application/json",
           "Access-Control-Allow-Origin" : "*"
       });
  response.write(  JSON.stringify({
            "sucess": false,
            "msg": "Unsupproted json format",
          }) );
  response.end();
  return 0;
}
console.log( filePath );
  fs.writeFile( filePath, JSON.stringify( content, null, 4 ), function(err) {
    if(err) {
        response.writeHead(500, {"Content-Type": "application/json", "Access-Control-Allow-Origin" : "*"});
        response.write(  JSON.stringify({
                  "sucess": false,
                  "msg": "cannot save a file",
                }) );
        return console.log(err);
    }
    response.writeHead(200, {"Content-Type": "application/json", "Access-Control-Allow-Origin" : "*"});
    response.write(  JSON.stringify({
              "sucess": true,
              "msg": "file saved",
            }) );
    response.end();
    console.log("The file was saved!");
});
});

  return;
}).listen(parseInt(port, 10));

console.log("Static file server running at\n  => http://localhost:" + port + "/\nCTRL + C to shutdown");
