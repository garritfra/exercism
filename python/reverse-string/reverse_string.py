def reverse(string):
    reversedString = ""

    iteration = 0

    for char in string:
        reversedString[len(string) - iteration] += string[len(string) - char.index]
        iteration += 1
    return reversedString
