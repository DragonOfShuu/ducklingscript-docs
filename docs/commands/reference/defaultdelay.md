---
title: DEFAULTDELAY/DEFAULT_DELAY
description: The DEFAULTDELAY/DEFAULT_DELAY command.
---

# DEFAULTDELAY/DEFAULT_DELAY
`DEFAULTDELAY`/`DEFAULT_DELAY` is used to define the delay between each command in milliseconds.
[default value is 0]

## Syntax
```
<DEFAULTDELAY|DEFAULT_DELAY> <optional int>
```

**System Var:**
```
$DEFAULT_DELAY
```

## Example


DucklingScript:
```
DEFAULTDELAY 300
```

Action Log:
```
Set time between commands to 300 milliseconds (5 seconds).
```