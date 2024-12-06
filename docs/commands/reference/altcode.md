---
title: ALTCODE [FC]
description: The ALTCODE command.
---

# ALTCODE [[Flipper Command]](https://developer.flipper.net/flipperzero/doxygen/badusb_file_format.html#autotoc_md70)
On Windows and some Linux systems, you can print characters by holding `ALT` key and entering its code on Numpad. `ALTCODE` emulates that behavior for each character in the given string.

**Syntax:** `ALTCODE <string>`

Example
```
ALTCODE Hello
```
Output
```
Hello
```

:::tip
This is functionally the same as [ALTSTRING](./altstring).
:::
:::warning[Note For Flipper Compatibility:]
If you are not using a device that can parse flipper commands, then you cannot use them. Please make sure to disable flipper commands if this is the case through the config file.
:::