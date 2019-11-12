function execute(command) {
  const exec = require('child_process').exec

  exec(command, (err, stdout, stderr) => {
    process.stdout.write(stdout)
  })
}


var path = "D:/2ndSem/CMPE281/TestRunnerTryTest/index.js"
execute('node '+path)
