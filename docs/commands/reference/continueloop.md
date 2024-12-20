---
title: CONTINUELOOP/CONTINUE_LOOP
description: The CONTINUELOOP/CONTINUE_LOOP command.
---

# CONTINUELOOP/CONTINUE_LOOP
`CONTINUELOOP`/`CONTINUE_LOOP`/`CONTINUE` allows you to *continue* out of a loop. This is especially useful if under a certain circumstance you need to leave a loop early.

## Syntax
```
<CONTINUELOOP|CONTINUE_LOOP|CONTINUE>
```

## Example
```
REPEAT i,5
    IF i==3
        CONTINUE
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
Confused? Check out our [flow control](/docs/guides/crash-course/flow-control#continueloop) documentation!
:::