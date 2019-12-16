var qrImage= require('qr-image');
var fs = require('fs');
qrImage.image("http://www.nidejs.org", { type : 'png', size :20}).pipe(fs.createWriteStream("MyQRcode.png"));
