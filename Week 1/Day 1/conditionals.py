#Exercise 1
print("-------------------Exercise 1-------------------")

user_name = input("Enter your name: ") #taking input from the user
if len(user_name) < 5: #checking if the length of the string is less than 5
    print("You have a short name :)") #if the condition is true, print this message

#Exercise 2
print("-------------------Exercise 2-------------------")

while True:
    user_input = int(input("Enter a number between 1 and 100: ")) #taking input from the user
    if user_input > 0 and user_input < 101: #checking if the number is between 1 and 100
        if user_input%3 == 0 and user_input%5 == 0: #checking if the number is divisible by both 3 and 5
            print("FizzBuzz") #if the condition is true, print this message
            break
        elif user_input%3 == 0: #checking if the number is divisible by 3
            print("Fizz") #if the condition is true, print this message
            break
        elif user_input%5 == 0:
            print("Buzz") #if the number is divisible by 5, print this message
            break
