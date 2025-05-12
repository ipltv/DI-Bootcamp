#Challenge 1: Multiples of a Number
print("--------------Challenge 1--------------")

#Input block is covered by try/except to handle invalid inputs
while True:
    try:
        number = int(input("Enter a number:"))
        length = int(input("Enter a length:"))
        if length < 0:
            raise ValueError("Length must be greater than 0")
    except ValueError as e:
        print("Something went wrong. Please try again.\nOriginal error:", e)
    else:
        break

multiplesList = [i*number for i in range(1, length+1)]
print(multiplesList)

#Challenge 2: Remove Consecutive Duplicate Letters
print("--------------Challenge 2--------------")

userString = input("Enter a string with consecutive duplicate letters: ")
newString = userString[0]  # Pass the first character to result string.
for char in userString[1:]: # loop through the string starting from the second character
    # Compare the last character of the result string with the current character
    # If they are different, add the current character to the result string.
    if newString[-1] != char: 
        newString += char
print("String without consecutive duplicate letters:", newString)