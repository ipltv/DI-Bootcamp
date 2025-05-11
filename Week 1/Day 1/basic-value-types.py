#BASIC VALUE TYPES

#STRINGS is a sequence of characters that represents text.
"Hello World!" #string

#STRING METHODS
print("hello world!".capitalize())
print("hello world!".upper())
print("HELLOW WORLD!".lower())

print("Goodnight Moon".replace("Moon", "Honey")) #replace method replaces a substring with another substring

# 3 strings: SEQUENCE  of chars: IT ALLOWS US TO USE INDEXES (POSITIONS) TO ACCESS CHARACTERS

greetings = "Hello Python"
print(greetings[6:])

#Exercise 1
print("-------------------Exercise 1-------------------")

description = "strings are..."
print(description.upper()) #upper method converts all characters to uppercase
print(description.replace("are", "is")) #replace method replaces a substring with another substring 
print(description[0:6]) #slicing the string to get the first 6 characters

#Exercise 2
print("-------------------Exercise 2-------------------")

my_age = 29
print(my_age + 123879)  #adding an integer to another integer

print(10/2) #dividing an integer by another integer
print(11//2) #integer floor division
print(11%2) #modulus operator returns the remainder of the division
print(11**2) #exponentiation operator raises the first operand to the power of the second operand
print(11**0.5) #square root of 11

#Exercise 3
print("-------------------Exercise 3-------------------")

bank_balance = '33000'
phone_number = 532287514

print('33000:' + str(type(bank_balance))) #checking the type of the variable bank_balance
print('532287514' + str(type(phone_number))) #checking the type of the variable phone_number

print('33000:' + str(type(str(bank_balance)))) #checking the type of the variable bank_balance after converting it to string
print('532287514' + str(type(int(phone_number)))) #checking the type of the variable phone_number after converting it to integer

#Exercise 4
print("-------------------Exercise 4-------------------")

first_name = "Ilya"
last_name = "Platovich"

print(first_name + " " + last_name) #concatenating two strings with a space in between

#Exercise 5
print("-------------------Exercise 5-------------------")

x = 5
y = 10
z = 0
word1 = "hello"
word2 = "world"

print(bool(x<y and y > z)) #checking if x is less than y and y is greater than z
print(bool(word1 != word2)) #checking if word1 is not equal to word2
print(bool(z)) #checking if z is not equal to 0
print(bool(word1)) #checking if x is not equal to 0

