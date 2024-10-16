---
title: WHILE
sidebar_position: 32
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# WHILE
`WHILE` creates a loop that continue to repeat whilst the given `<condition>` is `TRUE`.

**Syntax:**
```
WHILE <condition>
    <codeblock>
```

### Examples
<Tabs>
 <TabItem value="example1" label="Example 1" default>
    DucklingScript
    ```
    VAR a 10
    WHILE a!=15
        VAR a a+1
        $STRING a
    ```

    Compiled
    ```
    STRING 11
    STRING 12
    STRING 13
    STRING 14
    STRING 15
    ```
 </TabItem>

 <TabItem value="example2" label="Example 2">
    DucklingScript
    ```
    VAR a ""
    WHILE a!="eee":
        VAR a a+"e"
        $STRING a
    ```

    Compiled
    ```
    STRING e
    STRING ee
    STRING eee
    ```
 </TabItem>
</Tabs>

:::warning
Please note that there is a limit to while loops; while loops will eventually error if they run too many times.
:::