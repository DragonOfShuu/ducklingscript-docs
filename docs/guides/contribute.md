---
title: Contributing
sidebar_position: 7
---

# Contributing
If you'd like to contribute our ducks will need you to be using Python version 3.11 or higher, if you don't already have this and end up with multiple Python versions installed our experimenting eggheads recommend putting the Python version at the end of any command involving `python` or `pip` to avoid mixing Python versions like so:

```
python3.11 --version
pip3.11 --version
```
## Steps to Contribution
### Installing Poetry
Along with Python 3.11+, you will need to install [poetry](https://python-poetry.org/docs/) which you can install either following their documentation or the steps given below. Along with this, the white-coat water-borns recommend using `pipx` the documentation for which is available [here](https://pipx.pypa.io/stable/installation/).,  though `poetry` offers a variety of options.

Our ducks cooked up the following steps to install `pipx` and `poetry` on Windows, but the `pipx` authors have let us know they suggest using `brew` to install `pipx` when using MacOS.
```
python3.11 -m pip install pipx
python3.11 -m pipx ensurepath
```

Restart your terminal, then run:
```
pipx install poetry
poetry --version
```
Poetry should now work as a command.

### With Poetry Installed
Once you have `poetry` installed you should also install the necessary dependencies and open the environment for your project. This can be done by running these commands:
```
poetry install --with dev
poetry shell
```

Assuming everything has gone correctly you can now call upon our ducks in the CLI using the `duckling` command like below!
```
duckling --version
```

### Contribution Requirements
Assuming you've met all the prior requirements and want to make a pull request, make sure that you polish your project within the environment provided by poetry using the by running the provided `polish` command. This can be done like so:

```
poetry run poe polish
```

Make sure that ruff accepts your changes too!

Along with this our ducks would like you to ensure that you pass all relevant tests which you can check by running this command:
```
poetry run pytest
```

:::tip[Pull Request Note]
Once you've throughly read through the above sections you can have the trainers look over what you've made by adding "I've read the Contribution Requirements" in your pull request.
:::

## Helpful Dev Commands

DucklingScript has many commands that can be ran to assist with development of the project, using the `poe` (Poe the Poet) plugin with Poetry. You can use it like so:

```
poetry run poe [command]
```

Let's go over some of the commands available.

### polish

`polish` use the black formatter to clean your code, and uses the ruff checker to lint the project.

```
poetry run poe polish
```

### gen_test

`gen_test` is used to create a directory called `custom_test_scripts`, and create a `.dkls` you can edit and run using a separate command. This is great for testing the language.

```
poetry run poe gen_test
```

### test

`test` runs the tests in `custom_test_scripts`. `test` supports an integer argument for the test you want to run (default = 1). Make sure any extra files you create in this directory follow the rule `custom[number].dkls`.

```
poetry run poe test [test_index]
```

### encode

`encode` encodes given numbers into Base64 VLQ. Base64 VLQ is used by DucklingScript when encoding source maps.

```
poetry run poe encode [numbers, separated by commas]
```

#### Example

```
poetry run poe encode 12,14,5,3
```

Output:
```
-> YcKG
```

### decode

`decode` decodes a given string from Base64 VLQ to a string. Base64 VLQ is used by DucklingScript when encoding source maps.

```
poetry run poe decode [string]
```

#### Example
```
poetry run poe decode YcKG
```

Output:
```
-> (12, 14, 5, 3)
```
