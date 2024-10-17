---
title: Expression Evaluation
sidebar_position: 4
---

# Expression Evaluation
Our ducks can recognize mathematical, logical, and conditional expressions if you've programmed in another language before you will probably understand ***most*** of what this means.

## Standard Evaluations
### Data Types
A `string` is a type of data that contains one or multiple characters in a sequence which, as with other languages, our ducks most commonly recognize wrapped in quotation marks.
```
"Hello World"
```

A `number` is the same to our ducks as it is to you, that being a type of data that can contain most numbers.
```
100
```

A `boolean` is to our ducks similar in nature to a light switch in that it contains a `TRUE` or `FALSE`. Do not our ducks only seem to understand these words when they are in all caps.
```
TRUE
FALSE
```

### Mathematics
While doing the math the ducks of DucklingScript use the rules of PEMDAS including the typical behaviors of the rule evaluating left to right but prioritizing multiplication and division above addition and subtraction and treating multiplication, division, floor division, and modulus, all with the same priority.

Here are some notes from our swimming scientist about all the operators the ducks in DucklingScript are trained to recognize:

Exponents
```
10^2
```
Result is 100

Addition/subtraction
```
5+5
5-5
```
Result is 10, and 0

Multiplication/Division
```
5*5
5/5
```
Result is 25, and 1

Floor Division
```
3//2
```
Result is 1 (the decimal is essentially truncated, meaning removed)

Modulus
```
5%2
```
Result is 1 (when dividing 5 by 2, there is a remainder of 1)

Along with typical expressions, our ducks can also add strings together both with themselves and other data types, we refer to this as "concatenation" which you can see below:
```
"Mother duck layed " + 5 + " eggs."
```
Result is `Mother duck layed 5 eggs.`.

### Conditionals
When looking at conditions our ducks always return either `TRUE` or `FALSE` (like a boolean). Any conditions are considered after any mathematical statements are completed, or "evaluated" if you prefer, and all have the same priority, with our ducks reading them left to right as usual.


Equal to
```
10==10
5==2
```
Results are `TRUE`, and `FALSE`.

Not equal to
```
10!=10
5!=2
```
Results are `FALSE`, and `TRUE`.

Greater than
```
5>2
10>10
```
Results are `TRUE`, and `FALSE`.

Lesser than
```
5<2
10<10
```
Both result in `FALSE`.

Greater than or equal to
```
5>=2
10>=10
```
Both result in `TRUE`.

Lesser than or equal to
```
5<=2
10<=10
```
Results are `FALSE`, and `TRUE`.

Not
```
!(FALSE)
!(5!=2)
!TRUE
```
The results are `TRUE`, `FALSE`, and an <font color="red">**error**</font>.

:::warning
Our ducks are generally confused about the `NOT` operator, so you'll need to use parenthesis for them to understand it correctly like so: `!(FALSE)`.
:::