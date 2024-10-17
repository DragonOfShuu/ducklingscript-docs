---
title: Introduction
sidebar_position: 1
---

# DucklingScript: "Crash Course"

While it's not strictly necessary, understanding the eggs we came from will make it easier to learn about the feathers we have. So we highly recommend checking out the documentation for [Rubber Ducky Scripting Language 1.0](https://web.archive.org/web/20220816200129/http://github.com/hak5darren/USB-Rubber-Ducky/wiki/Duckyscript) and [Flipper Zero's BadUsb ducky extension](https://docs.flipper.net/bad-usb).

## Introduction
### Project Creation
To get a start on a new nest, better known as a **project**, you can run the `new` command with a name for the project and a directory if you'd like one:
```
duckling new example-proj
```

:::info
While you can collect sticks with the above command if you'd like; a project isn't strictly necessary to use DucklingScript and you're welcome to just make a `.txt` file and compile it if you'd prefer.
:::

If you opt to indeed pick up twigs and create a project you'll find a `config.yaml` and a `main.txt` in the project folder. Whenever this project is run any settings in the global config will be overridden by the new `config.yaml` in the project folder.

While you're sitting in your project's pile you can compile it at any time with this command:
```
duckling compile main.txt
```

Keep in mind any file in the root directory of the project will use the `config.yaml` of that project by default.

In case you've made it this far and it's not yet obvious, our quill-bearing quackers within DucklingScript use the `.txt` file extension. This is an **important** inkling to scratch down as it will be relevant to importing external files later.