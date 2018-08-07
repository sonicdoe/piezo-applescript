const runJxa = require('run-jxa')
const toggleRecording = require('./lib/toggle-recording')

exports.toggleRecording = () => runJxa(toggleRecording)
