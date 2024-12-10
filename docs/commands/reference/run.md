---
title: RUN
description: The RUN command.
---

# RUN
`RUN` executes the given `FUNCTION`.

## Syntax
```
RUN <functionName>
```

## Example
```
FUNC hello
    PRINT Hello World

FUNC goodbye
    PRINT Goodbye!

RUN hello
```

Compiled
```
PRINT Hello World
```
Notice that the compiled code does not include the code for `FUNC goodbye` because we never `RUN` it.
