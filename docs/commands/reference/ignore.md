---
title: IGNORE
description: The IGNORE command.
---

# IGNORE
Ignore the given block of code. The code given is placed directly
into the output file with no checks.

:::danger
Please note that this is dangerous, and only recommended if you know what you are doing, or need forward compatibility.
:::

## Syntax

```
IGNORE
    <codeBlock>
```

## Example
```
IGNORE
    print("Hey wait, this isn't DucklingScript!?")
```

Compiled
```
print("Hey wait, this isn't DucklingScript!?")
```
