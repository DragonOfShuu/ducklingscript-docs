---
title: ALT
sidebar_position: 1
description: The ALT command.
---

# ALT
`ALT` emulates an input as if the user had pressed Alt+`chrCode`.

Valid `chrCode`(s): `END`, `ESC`, `ESCAPE`, `SPACE`, `TAB`, any single character (`A`, `B`, `C`, etc...)

**Syntax:** `ALT <chrCode>`

Example
```
ALT
ALT A
ALT ESC
```

Action Log
```
Pressed Alt
Pressed Alt+A
Pressed Alt+Esc
```

:::tip
If you're trying to emulate any alt+num inputs or an alt code try looking at [ALTCHAR](./altchar) or [ALTCODE](./altcode)!
:::