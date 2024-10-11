---
title: Contributing
sidebar_position: 12
---

# Contributing
Python versin must be 3.11 or higher. From then on, I recommend putting the python version at the end of any command involving `python` or `pip`, like so:
```
python3.11 --version
pip3.11 --version
```
By doing this, you avoid mixing python versions.

## Installing Poetry
Then, you will need to install [poetry](https://python-poetry.org/docs/). You can either use the docs given, or you can follow the steps below.

I recommend using pipx, however poetry offers many options. Find the pipx documentation [here](https://pipx.pypa.io/stable/installation/).

These steps should work on Windows. **However, pipx recommends using** `brew` **to install pipx on MacOS.**
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

## With Poetry Installed
With poetry installed, inside of the directory of the project, run these commands:
```
poetry install
poetry shell
```
This will install the necessary dependencies, and take you into the virtual environment for the project.

Now, while in the virtual environment, you can run the `duckling` command!
```
duckling --version
```

## Contribution Requirements
Before making a pull request, please format your project using the black command (while in the virtual environment provided by poetry of course):

Run this at the root of the project dir:
```
black .
```
As well as this, make sure all tests succeed:
```
pytest
```

:::tip[Pull Request Note]
If you've read through this section throughly, write "I've read the Contribution Requirements" in your pull request.
:::