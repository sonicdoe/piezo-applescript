# piezo-applescript

> Control [Piezo](https://rogueamoeba.com/piezo/) using AppleScript

## Installation

```console
$ npm install piezo-applescript
```

## Usage

```js
const piezo = require('piezo-applescript')

;(async () => {
  await piezo.toggleRecording()
})()
```

### API

#### piezo.toggleRecording()

Starts or stops recording. Returns a `Promise`.

## Caveats

To control Piezo, piezo-applescript simulates the Command-R keyboard shortcut since Piezo itself is not scriptable. Consequently, Piezo needs to be brought to the front every time you toggle recording. I’m hoping [Rogue Amoeba](https://rogueamoeba.com) will make Piezo scriptable in a future release.
