---
title: REPEAT/FOR
sidebar_position: 24
description: The REPEAT/FOR command.
---

# REPEAT/FOR
`REPEAT`/`FOR` allows you to *repeat* a given block of code `<int>` times.

**Syntax:**
```
REPEAT <int>
    <codeBlock>
```

Example
```
REPEAT 3
    PRINT Hello World

FOR 3
    PRINT Goodbye!
```

Output
```
Hello World
Hello World
Hello World
Goodbye!
Goodbye!
Goodbye!
```

:::warning
Please note that there is a limit to for loops; for loops will eventually error if they run too many times. This can be avoided however by using inner for loops, but that is not recommended.
:::