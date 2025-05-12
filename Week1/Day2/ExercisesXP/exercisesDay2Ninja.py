import random
#Exercise 1: Formula
print("--------------Exercise 1--------------")
# Write a program that calculates and prints a value according to this given formula:
# Q = Square root of [(2 * C * D)/H]
# Following are the fixed values of C and H:
# C is 50.
# H is 30.
# Ask the user for a comma-separated string of numbers, use each number from the user as D in the formula and return all the results
# For example, if the user inputs: 100,150,180
# The output should be:
# 18,22,24

C = 50
H = 30
D = [int(i) for i in input("Enter comma-separated numbers: ").split(",")]

for i in D:
    print(2*C*i/H, end=",")
print()

#Exercise 2 : List of integers
print("--------------Exercise 2--------------")
# Store the list of numbers in a variable.
# Print the following information:
# a. The list of numbers – printed in a single line
# b. The list of numbers – sorted in descending order (largest to smallest)
# c. The sum of all the numbers
# A list containing the first and the last numbers.
# A list of all the numbers greater than 50.
# A list of all the numbers smaller than 10.
# A list of all the numbers squared – eg. for [1, 2, 3] you would print “1 4 9”.
# The numbers without any duplicates – also print how many numbers are in the new list.
# The average of all the numbers.
# The largest number.
# 10.The smallest number.
# 11.Bonus: Find the sum, average, largest and smallest number without using built in functions.
# 12.Bonus: Instead of using pre-defined lists of numbers, ask the user for 10 numbers between -100 and 100. Ask the user for an integer between -100 and 100 – repeat this question 10 times. Each number should be added into a variable that you created earlier.
# 13.Bonus: Instead of asking the user for 10 integers, generate 10 random integers yourself. Make sure that these random integers are between -100 and 100.
# 14.Bonus: Instead of always generating 10 integers, let the amount of integers also be random! Generate a random positive integer no smaller than 50.
# 15.Bonus: Will the code work when the number of random numbers is not equal to 10?

number_of_integers = random.randint(1, 50)
print("Number of integers:", number_of_integers)
integers = []
for i in range(number_of_integers):
    integers.append(random.randint(-100, 100))

print("List of numbers:", *integers, sep=" ")
print("Sorted list of numbers:", *sorted(integers, reverse=True), sep=" ")
print("Sum of all numbers:", sum(integers))
print("First and last numbers:", [integers[0], integers[-1]])
print("Numbers greater than 50:", [i for i in integers if i > 50], sep=" ")
print("Numbers smaller than 10:", [i for i in integers if i < 10], sep=" ")
print("Numbers squared:", [i**2 for i in integers], sep=" ")
without_duplicates = list(set(integers))
print("Numbers without duplicates:", without_duplicates, "Count:", len(without_duplicates))
print("Average of all numbers:", sum(integers)/len(integers))
print("Largest number:", max(integers))
print("Smallest number:", min(integers))
# Bonus: Find the sum, average, largest and smallest number without using built in functions.
sum = integers[0]
min = integers[0]
max = integers[0]

for i in integers:
    sum += i
    if i < min:
        min = i
    if i > max:
        max = i
print("Sum:", sum, "Average:", sum/len(integers), "Largest:", max, "Smallest:", min)

#Exercise 3: Working on a paragraph
print("--------------Exercise 3--------------")

# Find an interesting paragraph of text online. (Please keep it appropriate to the social context of our class.)
# Paste it to your code, and store it in a variable.
# Let’s analyze the paragraph. Print out a nicely formatted message saying:
# How many characters it contains (this one is easy…).
# How many sentences it contains.
# How many words it contains.
# How many unique words it contains.
# Bonus: How many non-whitespace characters it contains.
# Bonus: The average amount of words per sentence in the paragraph.
# Bonus: the amount of non-unique words in the paragraph.

paragraph = '''Cats are curious, graceful creatures known for their independence and charm. 
            They love to nap in warm spots and often show affection in quiet, subtle ways. With their playful nature and gentle purring, they bring comfort and joy to many homes. 
            Whether chasing shadows or lounging in a sunbeam, cats know how to live well.'''
            
print("Number of characters:", len(paragraph)) 
print("Number of sentences:", paragraph.count(".") + paragraph.count("?") + paragraph.count("!"))
print("Number of words:", len(paragraph.split()))
print("Number of unique words:", len(set(paragraph.split())))
print("Number of non-whitespace characters:", len(paragraph.replace(" ", "").replace("\n", "")))
print("Average amount of words per sentence:", len(paragraph.split()) / (paragraph.count(".") + paragraph.count("?") + paragraph.count("!")))
print("Number of non-unique words:", len(paragraph.split()) - len(set(paragraph.split())))

#Exercise 4 : Frequency Of The Words
print("--------------Exercise 4--------------")

# Write a program that prints the frequency of the words from the input.
# The input consists of a string of words separated by spaces. The output should be a dictionary where the keys are the words and the values are the frequency of each word in the input.
# For example, if the input is "hello world hello", the output should be {"hello": 2, "world": 1}.
#
# The program should be case-insensitive, so "Hello" and "hello" should be counted as the same word.
text = input("Enter a string of words: ").lower()
words = text.split()
word_count = {}

for word in words:
    if word in word_count:
        word_count[word] += 1
    else:
        word_count[word] = 1
print("Word frequency:", word_count)