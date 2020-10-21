# “ Parens Valid
# Create a function that, given an input string str, returns a boolean whether parentheses in str are valid. Valid sets of parentheses always open before they close, for example. For "Y(3(p)p(3)r)s", return true. Given "N(0(p)3", return false: not every parenthesis is closed. Given "N(0)t )0(k", return false, because the underlined ")" is premature: there is nothing open for it to close.”

# Excerpt From: Martin Puryear. “Algorithm Challenges: E-book for Dojo Students.” iBooks.
x="sadfasdf()("
def parensVAlid(stringInput):
    opencount=0
    closecount=0
    for i in range(0,len(stringInput)):
        if stringInput[i]=="(":
            opencount += 1
        elif stringInput[i] == ")":
            closecount += 1
    if opencount != closecount:
        return False
    if opencount < closecount:
        return False
    else:
        return True


print(parensVAlid(x))

# 1. open parenthesis must have a matching closed parenthesis (equal number of open and close)
# "()(())"

# 2. close parens come after open parens
# "()((())) (())"