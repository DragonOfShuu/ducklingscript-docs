---
title: NOTEXIST/NOT_EXIST
description: The NOTEXIST/NOT_EXIST command.
---

# NOTEXIST/NOT_EXIST
`NOTEXIST`/`NOT_EXIST` raises an error if the given variable does exist.

## Syntax
```
<NOTEXIST|NOT_EXIST> <var>
```

## Example
```
NOTEXIST a
```

Output
```
GeneralError: 'a' does exist.
```