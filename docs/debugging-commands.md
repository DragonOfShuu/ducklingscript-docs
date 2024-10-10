---
title: Debugging Commands
sidebar_position: 10
---

# Debugging Commands
Because DucklingScript ramps up the complexity of your programs, discovering exactly what is happening might become difficult. This is why DucklingScript adds more commands for debugging!

First is `PRINT`, which allows you to send text to the console when you ocmpile your injection.

DucklingScript
```
PRINT Hello World!
```
Console Output
```
--> Captured STD:OUT
example.txt - 1 > Hello World!
---
```

The next one is `NOTEXIST`/`NOT_EXIST`, which allows you to raise an error if the given variable exists.

DucklingScript
```
VAR a "hello world"
NOTEXIST a
```
Console Output
```
---
In file 'X:\test.txt', on line 2
> NOTEXIST a
GeneralError: 'a' does exist.
---
```

The next up is the opposite of `NOTEXIST`, which is `EXIST`. This raises an error if the given variable doesn't exist.

DucklingScript
```
EXIST a
```
Console Output
```
---
In file 'X:\test.txt', on line 1
> EXIST a
GeneralError: 'a' does not exist.
---
```

Finally, we have `PASS`, which allows you to fill in the block space for a block command without actually doing anything. Although a comment works too, `PASS` is cleaner, and allows you to find what hasn't been completed yet in a language specific way.

DucklingScript
```
FUNC a
    PASS
```