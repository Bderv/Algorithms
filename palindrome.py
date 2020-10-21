# “String: Is Palindrome
# Create a function that returns a boolean whether the string is a strict palindrome. For "a x a" or "racecar", return true. Do not ignore spaces, punctuation and capitalization: if given "Dud" or "oho!", return false.”Bonus challenge: Can you ignore punctuation and spaces?

def umbrella(input):
    count = 0
    for i in range(len(input)):
        if input[i]== input(len(input)-1-i):
            count += 1
        if count != len(input):
            return "False"
        if count == len(input):
            return "True"
x = umbrella("racecar")
print(x)