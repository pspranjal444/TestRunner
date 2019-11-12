var fs = require('fs')


exports.store = function(fileName, testName, testResult) {
    // console.log('IN DB ', ans);
    var d = new Date();
    var n = d.getTime();
    var res = 'FALSE';
    if(testResult){
        res = 'TRUE';
    }
    var content = '\nTEST: '+testName+'   '+res+'  '+n;
    console.log(fileName);
    fs.appendFile('log_files/'+fileName, content, function (err) {
        if (err) throw err;
        console.log('Saved!');
        return;
    });
}

