// Description:
//   None
//
// Dependencies:
//   None
//
// Configuration:
//   FILE_BRAIN_PATH
//
// Commands:
//   None
//
// Author:
//   dustyburwell

var fs   = require('fs');
var path = require('path');

module.exports = function(robot) {
  var brainPath = process.env.FILE_BRAIN_PATH || './braindata'
  brainPath = brainPath + 'brain-dump.json'

  try {
    var data = fs.readFileSync(brainPath, 'utf-8');

    if (data) {
      robot.brain.mergeData(JSON.parse(data))
    }
  } catch (error) {
    console.log('Unable to read file', error)
  }
      

  robot.brain.on('save', function (data) {
    fs.writeFileSync(brainPath, JSON.stringify(data), 'utf-8')
  });
}
