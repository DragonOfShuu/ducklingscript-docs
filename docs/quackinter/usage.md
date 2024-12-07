---
title: Usage
sidebar_position: 3
---

Quackinter can either be used in the command line, or directly within Python; as long as the package is installed that is.

## In the Command Line

As long as the DucklingScript CLI is installed, Quackinter is built right in. Simply use `duckling interpret [OPTIONS]`; more info found [here](/docs/guides/command-line-interface#interpret).

## In Python

The main object in Python is the `Interpreter`. You can also use `Config`, which gives you control over the configuration options of the interpreter.

```python
from quackinter import Interpreter, Config


config = Config(
    delay = 1000, # Time to wait in ms before interpretting the code
    interval = 0, # the override for time between lines in ms
    char_interval = 80, # The override for time between characters in ms
    output = lambda output,line: print(f"{line.line_num}> {output}"), # The function ran by Quackinter to print to the screen
)

interpreter = Interpreter(
    extended_commands = [], # Additional commands the interpreter should add
    include_builtins = True, # If we should include the commands built into the interpreter
    config = config # The configuration to use
)

return_data = interpreter.interpret_text("""
STRINGLN hello world
""")

if return_data.error:
    print("There was an error while running the code.")
```

The code above shows how you would use the interpreter in its simplicity. Most other kinds of documentation can be found within class docs.
