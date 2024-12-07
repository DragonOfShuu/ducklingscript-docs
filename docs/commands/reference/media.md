---
title: MEDIA [FC]
description: The MEDIA command.
---

# STRINGDELAY [[Flipper Command]](https://developer.flipper.net/flipperzero/doxygen/badusb_file_format.html#autotoc_md63)

`MEDIA` presses specific keys related to media, such as `PLAY`, `STOP`, `NEXT_TRACK`, or even `BRIGHT_UP`

**Syntax:**
```
MEDIA <key>
```

**Accepted Keys:**
Command|Quackinter Support
| ------ | ------ |
| POWER | ✔️ |
REBOOT | ✔️
SLEEP | ✔️
LOGOFF | ➖ Unsupported on Unix
VOLUME_UP | ✔️
VOLUME_DOWN | ✔️
BRIGHT_UP | ✔️
BRIGHT_DOWN | ✔️
HOME | ✔️
BACK | ✔️
FORWARD | ✔️
REFRESH | ➖ Substitution for Ctrl+R
SNAPSHOT | ✔️
PLAY | ✔️
PAUSE | ✔️
PLAY_PAUSE | ➖ Pauses the media (takes no action if already paused) then plays.
NEXT_TRACK | ✔️
PREV_TRACK | ✔️
STOP | ✔️
MUTE | ✔️
FN | ✔️
EJECT | ❌
EXIT | ❌
