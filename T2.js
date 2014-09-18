var client = require('redis').createClient();
var lock = require('redis-lock')(client);

lock('delete_group', 10000, function(done){
  console.log("Into the T2...");
  for(var i = 0; i < 10; i++) {
    console.log("continue running T2...", i);
  }
  done();
});
