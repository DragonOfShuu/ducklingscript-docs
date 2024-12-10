---
title: ALT
description: The ALT command.
---

# ALT
`ALT` emulates an input as if the user had pressed Alt+`char`.

Valid `char`(s): `END`, `ESC`, `ESCAPE`, `SPACE`, `TAB`, any single character (`a`, `b`, `c`, etc...)

## Syntax
```
ALT <char>
```

## Example
```
ALT
ALT a
ALT ESC
```

Action Log
```
Pressed Alt
Pressed Alt+a
Pressed Alt+Esc
```

:::tip
If you're trying to emulate any alt+num inputs or an alt code try looking at [ALTCHAR](./altchar) or [ALTCODE](./altcode)!
:::