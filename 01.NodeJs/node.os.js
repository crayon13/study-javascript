var os = require('os');

console.log('os.hostname() : ' + os.hostname());
console.log('os.type() : ' + os.type());
console.log('os.platform() : ' + os.platform());
console.log('os.arch() : ' + os.arch());
console.log('os.release() : ' + os.release());
console.log('os.uptime() : ' + os.uptime());
console.log('os.loadavg() : ' + os.loadavg());
console.log('os.totalmem() : ' + os.totalmem());
console.log('os.freemem() : ' + os.freemem());
console.log(os.cpus());
console.log(os.getNetworkInterfaces());