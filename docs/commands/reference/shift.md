---
title: SHIFT
description: The SHIFT command.
---

`SHIFT` emulates an input as if the user had pressed Shift+`char`.

Valid `char`(s): `DELETE`, `HOME`, `INSERT`, `PAGEUP`, `PAGEDOWN`, `WINDOWS`, `GUI`, `UPARROW`, `DOWNARROW`, `LEFTARROW`, `RIGHTARROW`, `TAB`, any single character (`A`, `B`, `C`, etc...)

## Syntax
```
SHIFT <char>
```

## Example
```
SHIFT
SHIFT A
SHIFT ESC
```

Action Log
```
Pressed Shift
Pressed Shift+A
Pressed Shift+Esc
```