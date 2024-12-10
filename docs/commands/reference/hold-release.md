---
title: HOLD/RELEASE [FC]
description: The HOLD/RELEASE commands.
---

# HOLD/RELEASE [[Flipper Command]](https://developer.flipper.net/flipperzero/doxygen/badusb_file_format.html#autotoc_md63)

`HOLD`/`RELEASE` holds and releases a key respectively. 

## Syntax

```
HOLD <"special key"|char>
RELEASE <"special key"|char>
```

**System Var:**
```
$HELD_KEY
```
:::note
`$HELD_KEY` is the most recent key that was held (or empty if the most recent was released), not the full list of all keys. The DucklingScript evaluator does not handle lists quite yet.
:::

## Example

DucklingScript
```
HOLD a
RELEASE a
```
