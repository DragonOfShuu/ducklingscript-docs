---
title: STRINGDELAY [FC]
description: The STRINGDELAY command.
---

# STRINGDELAY [[Flipper Command]](https://developer.flipper.net/flipperzero/doxygen/badusb_file_format.html#autotoc_md63)

`STRINGDELAY` adjusts the delay between each character in ONLY the next `STRING`/`STRINGLN` in milliseconds.

## Syntax

```
STRINGDELAY <number>
```

## Example

DucklingScript
```
STRINGDELAY 200
STRING HELLO
```
Action Log
```
H
*Waits 200ms*
E
*Waits 200ms*
L
*Waits 200ms*
L
*Waits 200ms*
O
*Waits 200ms*
```
