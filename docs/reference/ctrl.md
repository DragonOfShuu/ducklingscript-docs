---
title: CTRL
sidebar_position: 8
description: The CTRL command.
---

# CTRL
`CTRL` emulates an input as if the user had pressed Ctrl+`chrCode`.

Valid `chrCode`(s): `BREAK`, `PAUSE`, `ESCAPE`, `ESC`, any single character (`A`, `B`, `C`, etc...)

**Syntax:** `CTRL <chrCode>`

Example
```
CTRL
CTRL A
CTRL ESC
```

Action Log
```
Pressed Ctrl
Pressed Ctrl+A
Pressed Ctrl+Esc
```