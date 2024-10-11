---
title: MODIFIER KEYS [FC]
sidebar_position: 19
---

# MODIFIER KEYS [[Flipper Command]](https://developer.flipper.net/flipperzero/doxygen/badusb_file_format.html#autotoc_md63)
Emulates an input as if the user had pressed the `<modiferKey>`+`<chrCode>`.

Valid `modiferKey`(s): `CTRL-ALT`, `CTRL-SHIFT`, `ALT-SHIFT`, `ALT-GUI`, `GUI-SHIFT`

For valid `chrCode`(s) go [here](https://developer.flipper.net/flipperzero/doxygen/badusb_file_format.html#autotoc_md61).

**Syntax:** `<modiferKey> <chrCode>`

Example
```
CTRL-ALT
CTRL-SHIFT A
ALT-SHIFT ESC
```

Action Log
```
Pressed CTRL+ALT
Pressed CTRL+SHIFT+A
Pressed ALT+SHIFT+ESC
```
:::warning[Note For Flipper Compatibility:]
If you are not using a device that can parse flipper commands, then you cannot use them. Please make sure to disable flipper commands if this is the case through the config file.
:::