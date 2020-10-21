# “Acronyms
# Create a function that, given a string, returns the string’s acronym (first letters only, capitalized). Given " there's no free lunch  -  gotta pay yer way. ", return "TNFL-GPYW". Given "Live from New York, it's Saturday Night!", return "LFNYISN”

# Excerpt From: Martin Puryear. “Algorithm Challenges: E-book for Dojo Students.” iBooks.

def acryonyms(string):
    newstring = ""
    if string[0] != "":
        newstring += string[0]
    for i in range(len(string)):
        if string[i] == "" and string[i = 1] != " ":
            newstring += string[i+1]
    return newstring.upper()


print(acronym("united states of america"))



# day 5 algos
# “Coin Change with Object
# As before, given a number of U.S. cents, return the optimal configuration of coins, in an object.”

# Excerpt From: Martin Puryear. “Algorithm Challenges: E-book for Dojo Students.” iBooks.

def coinchange(amount):
    output = {"pennies":0, "nickels":0, "dimes":0, "quarter":0}
    if amount > 0:
        while amount >= 25:
            amount -= 25
            output['quarter']+=1
        while amount >= 10:
            amount -=10
            output['dime']+=1
        while amount >= 5:
            amount -= 5
            output['nickels']+=1
        while amount >= 1:
            amount -= 1
            output['nickels']+=1
        return output

print(coinchange(336))

def coinChange(coininput):
    output = {}
    q= int(coininput/25)
    output['quarter': q]
    coinsRemaining = coininput - (25*q)
    d= int(coininput/10)
    output['dimes': d]
    coinsRemaining = coininput - (10*d)
    n= int(coininput/5)
    output['nickels': n]
    coinsRemaining = coininput - (5*n)
    p= int(coininput/1)
    output['pennies': p]
    coinsRemaining = coininput - (1*p)
    return output

print(coinchange(99))