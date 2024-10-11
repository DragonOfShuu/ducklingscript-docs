---
title: CONTINUELOOP/CONTINUE_LOOP
sidebar_position: 7
---

# CONTINUELOOP/CONTINUE_LOOP
`CONTINUELOOP`/`CONTINUE_LOOP` allows you to *continue* out of a loop. This is especially useful if under a certain circumstance you need to leave a loop early.

**Syntax:** `CONTINUELOOP` or `CONTINUE_LOOP`

Example
```
REPEAT i,5
    IF i==3
        CONTINUELOOP
    $STRING "I like the number "+i+"!" 
```
Output
```
STRING I like the number 0!
STRING I like the number 1!
STRING I like the number 2!
STRING I like the number 4!
```
As you can see, the number 3 is missing from the compiled, because `CONTINUE` continued the loop, ignoring the resulting code after it.

:::tip
Confused? Check out our [flow control](/docs/flow-control#continueloop) documentation!
:::