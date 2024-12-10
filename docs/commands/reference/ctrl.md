---
title: CTRL
description: The CTRL command.
---

# CTRL
`CTRL` emulates an input as if the user had pressed Ctrl+`char`.

Valid `char`(s): `BREAK`, `PAUSE`, `ESCAPE`, `ESC`, any single character (`a`, `b`, `c`, etc...)

## Syntax
```
CTRL <char>
```

## Example


DucklingScript
```
CTRL
CTRL a
CTRL ESC
```

Action Log
```
Pressed Ctrl
Pressed Ctrl+a
Pressed Ctrl+Esc
```