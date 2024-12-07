---
title: DEFAULTSTRINGDELAY [FC]
description: The DEFAULTSTRINGDELAY command.
---

# DEFAULTSTRINGDELAY [[Flipper Command]](https://developer.flipper.net/flipperzero/doxygen/badusb_file_format.html#autotoc_md63)

`DEFAULTSTRINGDELAY` adjusts the delay between each character in milliseconds for all `STRINGLN` and `STRING` that comes after.

**Syntax:**
```
DEFAULTSTRINGDELAY <number>
```

**System Var:**
```
$DEFAULT_STRING_DELAY
```

**Example:**

DucklingScript
```
REM All STRINGs after will be slow (1000ms)
DEFAULTSTRINGDELAY 1000
STRING SLOW
STRING SLOW

REM All STRINGs after will be fast (20ms)
DEFAULTSTRINGDELAY 20
STRING FAST
STRING FAST
```
