---
title: Why DucklingScript
sidebar_position: 1
---

# Why DucklingScript?

There are many key points to using DucklingScript. Here are some of those now.

## Type Safety
Because DucklingScript has to go through a compilation process, it means DucklingScript can validate your script will work on your hardware. It will tell you that there is an error, and it will tell you exactly where. For example, CTRL requires one character. DucklingScript will validate that this is true.

## Flow Control
Rubber Ducky Scripting Language 1.0 and even the Flipper's implementation don't add any kind of flow control. Such as if statements, while and for loops, etc. DucklingScript gives you those capabilities, and more!

## Syntactical Speed
Normal Rubber Ducky Scripting 1.0 doesn't give much room for speed, and oftentimes leads you to repeating yourself in code. Not only does DucklingScript add commands to improve this, it also makes small syntactical changes. Such as:

Rubber Ducky 1.0
```
STRINGLN Hello,
STRINGLN world,
STRINGLN it is I!
```
DucklingScript
```
STRINGLN 
    Hello,
    world,
    it is I!
```