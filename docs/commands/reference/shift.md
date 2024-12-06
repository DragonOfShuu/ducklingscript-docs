---
title: SHIFT
description: The SHIFT command.
---

`SHIFT` emulates an input as if the user had pressed Shift+`chrCode`.

Valid `chrCode`(s): `DELETE`, `HOME`, `INSERT`, `PAGEUP`, `PAGEDOWN`, `WINDOWS`, `GUI`, `UPARROW`, `DOWNARROW`, `LEFTARROW`, `RIGHTARROW`, `TAB`, any single character (`A`, `B`, `C`, etc...)

**Syntax:** `SHIFT <chrCode>`

Example
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