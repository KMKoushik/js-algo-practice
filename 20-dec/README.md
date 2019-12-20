
Instructions

Substitution Cipher

output: String encoded such that: A-Z and a-z are replaced with the corresponding letter, of the same case, shifted 4 or 6 letters to the right. 'A' is shifted 4, 'B' is shifted 6, 'C' is shifted 4, 'D' is shifted 6, etc... The same rule applies for the lower case letters.

    If a letter is shifted past Z or z then it wraps
    back around to A or a and continues the remaining
    number of shifted positions.

    All other characters are left unchanged.

For Example: A -> E (shifted right 4 letters) B -> H (shifted right 6 letters) Y -> C (shifted right 4 letters) Z -> F (shifted right 6 letters) a -> e (shifted right 4 letters) b -> h (shifted right 6 letters) y -> c (shifted right 4 letters) z -> z (shifted right 6 letters) . -> . " " -> " " (space) \n -> \n (newline)
