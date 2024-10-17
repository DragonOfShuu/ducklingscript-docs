---
title: Multi-File Projects
sidebar_position: 7
---

# Multi-File Projects
But wait, there's more! That's right, thanks to the innovative ideas of our lab-endowed lake dwellers DucklingScript can also support Multi-File projects through the use of the `START`, `STARTENV`, and `STARTCODE` commands.

Each of these commands is recognized by the ducks in the same general way but individually allows you to compile different things from one file into the output file after compilation. Do note though, that the ducky doctors will need you to use the `.txt` extension on all script files for this to work correctly.

To have the ducks `START` another file in yours, use the `START <filename>` syntax, and as long as both files are in the same folder this should work with no issues.

## Structure Types
### Single-Folder Structure
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

### Multi-Folder Structure
Now we know many of you are probably asking "What if I want the ducks to work with multiple folders?". And we thought the same thing, which is why we also added compatibility for the dot operator. Using this you can navigate your file structure with the "dot after syntax" letting you reference files inside lower directories like this: `subfolder.lower_script_file` and the "dot before syntax" letting you step up along the structure like this: `.upper_script_file`. You can find a more in-context example of this below:

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
STRING Hello from the sky above!
```

DucklingScript - below.txt
```
STRING Hello from the pond below!
```

DucklingScript - main.txt
```
REM Using the dot operator at the beginning, we can go up a folder.
REM Using the dot operator in the middle allows use to go down a folder.
START
    .above
    below.below
```

Compiled
```
STRING Hello from the sky above!
STRING Hello from the pond below!
```