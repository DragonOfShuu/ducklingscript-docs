---
title: BREAKLOOP/BREAK_LOOP
sidebar_position: 6
description: The BREAKLOOP/BREAK_LOOP command.
---

# BREAKLOOP/BREAK_LOOP
`BREAKLOOP`/`BREAK_LOOP` allows you to *break* out of a loop. This is especially useful if under a certain circumstance you need to leave a loop early.

**Syntax:** `BREAKLOOP` or `BREAK_LOOP`

Example
```
REPEAT i,10
    $STRING "iteration "+i
    IF i==2
        BREAKLOOP
```
Output
```
STRING iteration 0
STRING iteration 1
STRING iteration 2
```

As you can see, we left the while loop early because `i` was equal to two.

:::tip
Confused? Check out our [flow control](/docs/crash-course/flow-control#breakloop) documentation!
:::