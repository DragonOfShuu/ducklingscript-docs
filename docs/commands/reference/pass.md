---
title: PASS
description: The PASS command.
---

# PASS
`PASS` acts as a placeholder for future code; recommended for functions that you have not written out yet.

## Syntax
```
pass
```

## Example
```
FUNC myFunc
    PASS

RUN myFun
STRING Hello
```
Output
```
Hello
```
Notice that despite running a function with nothing other than `PASS` there were no errors and the code continued execution.

:::tip
For more information on functions check out the [`FUNC/FUNCTION`](./func) documentation!
:::