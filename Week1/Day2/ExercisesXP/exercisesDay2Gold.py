import random
#Exercise Exercise 1: Concatenate lists
print("--------------Exercise 1--------------")

#Write code that concatenates two lists together without using the + sign.
names = ["Alice", "Bob", "Charlie"]
surnames = ["Smith", "Johnson", "Williams"]

#Concatenate the two lists using a loop
for surname in surnames:
    names.append(surname)
print(names)

#Exercise 2: Range of numbers
print("--------------Exercise 2--------------")

#Create a loop that goes from 1500 to 2500 and prints all multiples of 5 and 7.

first_number = 1500

if first_number % 5 != 0 or first_number % 7 != 0:
    first_number = first_number + (35 - (first_number % 35))

for i in range(first_number, 2501, 35):
    print(i, end=" ")
print()

#Alternative solution using a loop
# for i in range(1500, 2501):
#     if i % 5 == 0 and i % 7 == 0:
#         print(i, end=" ")
# print()

#Exercise 3: Check the index
print("--------------Exercise 3--------------")

# Using this variable
# names = ['Samus', 'Cortana', 'V', 'Link', 'Mario', 'Cortana', 'Samus']
# Ask a user for their name, if their name is in the names list print out the index of the first occurence of the name.
# Example: if input is 'Cortana' we should be printing the index 1

names = ['Samus', 'Cortana', 'V', 'Link', 'Mario', 'Cortana', 'Samus']

user_name = input("Enter your name: ")
if user_name in names:
    index = names.index(user_name)
    print(f"Your name is at index {index}.")
else:
    print("Your name is not in the list. Go home!")
    
#Exercise 4: Greatest Number
print("--------------Exercise 4--------------")

#Ask the user for 3 numbers and print the greatest number.

for i in range(3):
    number = int(input(f"Enter number #{i}: "))
    if i == 0:
        greatest_number = number
    elif number > greatest_number:
        greatest_number = number
print(f"The greatest number is {greatest_number}.")

#Exercise 5: The Alphabet
print("--------------Exercise 5--------------")

# Create a string of all the letters in the alphabet
# Loop over each letter and print a message that contains the letter and whether its a vowel or a consonant.

alphabet = "abcdefghijklmnopqrstuvwxyz"
vowels = "aeiou"
for letter in alphabet:
    if letter in vowels:
        print(f"{letter} is a vowel.")
    else:
        print(f"{letter} is a consonant.")

#Exercise 6: Words and letters
print("--------------Exercise 6--------------")

# Ask a user for 7 words, store them in a list named words.
# Ask the user for a single character, store it in a variable called letter.
# Loop through the words list and print the index of the first appearence of the letter variable in each word of the list.
# If the letter doesn’t exist in one of the words, print a friendly message with the word and the letter.

print("Enter 7 words:")
words = [input(f"Word #{i+1}: ") for i in range(7)]
letter = input("Enter a letter for search: ")

for word in words:
    if letter in word:
        index = word.index(letter)
        print(f"The letter '{letter}' is at index {index} in the word '{word}'.")
    else:
        print(f"The letter '{letter}' is not found in the word '{word}' :).")

#Exercise 7: Min, Max, Sum
print("--------------Exercise 7--------------")

# Instructions
# Create a list of numbers from one to one million and then use min() and max() to make sure your list actually starts at one and ends at one million. Use the sum() function to see how quickly Python can add a million numbers.

million_numbers = list(range(1, 1000001))

print(f"Minimum number: {min(million_numbers)}")
print(f"Maximum number: {max(million_numbers)}")
print(f"Sum of numbers: {sum(million_numbers)}")

#Exercise 8 : List and Tuple
print("--------------Exercise 8--------------")

# Write a program which accepts a sequence of comma-separated numbers. Generate a list and a tuple which contain every number.
# Suppose the following input is supplied to the program: 34,67,55,33,12,98

list_input = input("Enter a sequence of comma-separated numbers: ")
numbers_list = list_input.split(",")
numbers_tuple = tuple(numbers_list)

print("List:", numbers_list)
print("Tuple:", numbers_tuple)

#Exercise 9 : Random number
print("--------------Exercise 9--------------")

# Ask the user to input a number from 1 to 9 (including).
# Get a random number between 1 and 9. Hint: random module.
# If the user guesses the correct number print a message that says Winner.
# If the user guesses the wrong number print a message that says better luck next time.
# Bonus: use a loop that allows the user to keep guessing until they want to quit.
# Bonus 2: on exiting the loop tally up and display total games won and lost.

won = 0
lost = 0
while True:
    try: 
        user_number = input("Enter a number from 1 to 9 (or quit to exit): ")
        if user_number == "quit":
            break
        user_number = int(user_number)
        if user_number < 1 or user_number > 9:
            print("Please enter a number from 1 to 9.")
            continue
    except ValueError:
        print("Invalid input. Please enter a number from 1 to 9 or 'quit' to exit.")
        continue      
    random_number = random.randint(1, 9)
    if user_number == random_number:
        print("Winner!")
        won += 1
    else:
        print(f"The correct number was {random_number}.")
        lost += 1
print(f"Total games won: {won}, Total games lost: {lost}")
#The End