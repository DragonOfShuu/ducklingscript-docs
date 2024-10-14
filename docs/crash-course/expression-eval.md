---
title: Expression Evaluation
sidebar_position: 4
---

# Expression Evaluation
DucklingScript allows mathematical/logical/conditional expressions. Assuming you already have a basic understanding of 'normal' programming, you should understand ***most*** of this already.

## Data Types
A string is a data type containing characters. It must be wrapped in quotation marks.
```
"Hello World"
```
A number is a data type containing, well, a number.
```
100
```

A boolean is either a `TRUE` or `FALSE` value. When using these keywords in DucklingScript, make sure to keep them as all caps.
```
TRUE
FALSE
```

## Mathematics
DucklingScript will follow the rules of PEMDAS (please note that addition/subtraction, and multiplication/division are evaluated left to right. However, multiplation/division is evaluated before addition/subtraction).

Please note floor division and modulus share the same precedence as multiplication/division.

Here are all of the operators that DucklingScript accepts:

Exponents:
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

Multiplication/division
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

As well as these, `string`(s) can also be concatinated, that is added together, and can even be concatinated with other data types:
```
"Hello, I like the number "+5
```
Result is `Hello, I like the number 5`.

## Conditionals
Conditional operators produce a true/false statement (a boolean). Conditionals are evaluated after all mathematical statements, and all Conditionals have the same precedence, meaning they are evaluated left to right.

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
Unlike other programming languages, in DucklingScript the `NOT` operator requires parenthesis.
:::