---
title: Debugging Commands
sidebar_position: 6
---

# Debugging Commands
## Commands
If you've gotten this far you're probably aware that DucklingScript increases the complexity of the language a decent bit. But not to worry, we've thought of this in advance and taught our ducks a whole nest's worth of new and exciting commands to help you understand what your code is doing!

### PRINT
First among this new knowledge is the `PRINT` command, this lets our ducks give you a peak into what's going on by outputting what you ask them to to the console like so:

DucklingScript
```
PRINT Hello Pond!
```

Console Output
```
--> Captured STD:OUT
example.txt - 1 > Hello Pond!
---
```

### NOTEXIST
Next up is the `NOTEXIST`/`NOT_EXIST` command, allowing you to raise an error if the given variable exists like so:

DucklingScript
```
VAR greeting "Hello Pond!"
NOTEXIST greeting
```

Console Output
```
---
In file 'X:\test.txt', on line 2
> NOTEXIST greeting
GeneralError: 'greeting' does exist.
---
```

### EXIST
In opposition to `NOTEXIST` there is also the `EXIST` command, letting you raise an error if the given variable doesn't exist like this:

DucklingScript
```
EXIST farewell
```
Console Output
```
---
In file 'X:\test.txt', on line 1
> EXIST farewell
GeneralError: 'farewell' does not exist.
---
```

### PASS
The last of the debug commands we have taught the ducks is `PASS`, this allows you to have an "empty" code block that does nothing without raising an error. If you've been quacking for a while now you may have noticed that it's also possible to do this with the `REM` command to leave a comment, but `PASS` is designed to be a cleaner implementation that lets you determine what hasn't been completed yet in a way more relative to DucklingScript.

DucklingScript
```
FUNC is_spring
    PASS
```