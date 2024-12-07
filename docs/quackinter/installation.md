---
title: Installation
sidebar_position: 2
---

# Installation for Command Line Use

The installation process is the exact same as DucklingScript, and Quackinter is built into and uses DucklingScript. Installation instructions are [here](/docs/guides/installation).

# Installation for Python Integration

To use Quackinter in one of your projects, simply install the package from pip:

```shell
pip install quackinter
```

You've now installed quackinter, so all you need to do is import it an use it in your projects:

```python
from quackinter import Interpreter

interpreter = Interpreter()
return_data = interpreter.interpret_text("STRINGLN Hello World")
```
