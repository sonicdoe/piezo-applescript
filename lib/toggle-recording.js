/* eslint-env applescript */

module.exports = () => {
  const Piezo = Application('Piezo')
  const SystemEvents = Application('System Events')

  Piezo.activate()

  // Wait for Piezo to activate.
  delay(0.1)

  SystemEvents.keystroke('r', { using: 'command down' })
}
