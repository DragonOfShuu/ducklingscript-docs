---
title: Multi-File Projects
sidebar_position: 7
---

# Multi-File Projects
DuckingScript supports multi-file projects using the `START`, `STARTENV`, `STARTCODE` commands.

All `START` commands start with the same general syntax, and they allow you to compile the code from another file into the output file. For this to work however, make sure to use the `.txt` extension on all files.

To start another file, simply use the `START` command, and for the argument put the file name. As long as both files are in the same folder, this will work flawlessly.

File Structure
```
Project
|-main.txt
|-startme.txt
```

DucklingScript - startme.txt
```
STRING "startme" says hello!
```
DucklingScript - main.txt
```
START startme
STRING ran startme file.
```
Compiled
```
STRING "startme" says hello!
STRING ran startme file.
```

This is great and all, but would if you want to access a file that is inside a folder? Or maybe the file is one level up. In this case comes the dot operator. To go inside a folder, give the name of the folder, then put a dot after. After that dot put the name of the file.

Similarly, if you want to go a level up, put a dot at the very beginning of the argument.

File Structure
```
Project
|-above.txt
|-middle
  |-main.txt
  |-below
    |-below.txt
```
DucklingScript - above.txt
```
STRING Hello from above!
```
DucklingScript - below.txt
```
STRING Hello from below!
```
DucklingScript - main.txt
```
REM Using the dot operator at the beginning, we can go up a folder
REM Using the dot operator in the middle allows use to go into a folder
START
    .above
    below.below
```
Compiled
```
STRING Hello from above!
STRING Hello from below!
```