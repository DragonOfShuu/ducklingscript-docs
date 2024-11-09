---
title: WHITESPACE
sidebar_position: 33
description: The WHITESPACE command.
---

# WHITESPACE
`WHITESPACE` adds `<int>`whitespaces that will appear in compiled form. The default value is `1` and may not exceed `100`.

**Syntax:** `WHITESPACE <optional int>`

Example
```
WHITESPACE
PRINT Hello World
WHITESPACE 5
PRINT Goodbye!
```

Output
```

Hello World





Goodbye!
```