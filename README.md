# plugin-audio
An audio plugin for systemjs loader

# Installation

`jspm install audio`

# Usage

Async
```
System.import('./beep.mp3!audio').then(function(beep) {
  beep.play();
});
```

Or Sync
```
import beep from './beep.mp3!audio';

beep.play();

```
