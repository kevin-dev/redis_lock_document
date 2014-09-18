var client = require('redis').createClient();
var lock = require('redis-lock')(client);
var delay_func = function() {
  console.log("you are in the delay function...of T1");
}

lock('delete_group', function(done) {
  console.log("Into the T1...");
  for (var i = 0; i < 10; i++)
    for (var j = 0; j < 10; j++)
      for (var k = 0; k < 10; k++) {
        console.log("............", k+j*10+i*100);
      }
  delay_func();
  done();
});
