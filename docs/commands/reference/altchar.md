---
title: ALTCHAR [FC]
description: The ALTCHAR command.
---

# ALTCHAR [[Flipper Command]](https://developer.flipper.net/flipperzero/doxygen/badusb_file_format.html#autotoc_md70)
On Windows and some Linux systems, you can print characters by holding `ALT` key and entering its code on Numpad. `ALTCHAR` emulates that behavior.

**Syntax:** `ALTCHAR <chrCode>`

Example
```
ALTCHAR 0200
```
Output
```
È
```

:::tip
Want to use the alt codes of multiple characters in a string? Try [ALTCODE](./altcode).
:::
:::warning[Note For Flipper Compatibility:]
If you are not using a device that can parse flipper commands, then you cannot use them. Please make sure to disable flipper commands if this is the case through the config file.
:::