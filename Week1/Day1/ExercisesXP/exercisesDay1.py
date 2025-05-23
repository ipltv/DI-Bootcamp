#Exercise 1
print("Hello world\n"*4)
#Exercise 2
print(99**3*8)
#Exercise 3
print(">>> 5 < 3: True")
print(">>> 3 == 3: True")
print(">>> 3 == '3': False")
print(">>> '3' > 3: TypeError")
print(">>> 'Hello' == 'hello': False")
#Exercise 4
computer_brand = "Lenovo"
print(f"I have a {computer_brand} computer")
#Exercise 5
name = "Ilya"
age = 29
shoe_size = 42
info = f"My name is {name}, I'm {age} years old and my shoe size is {shoe_size}"
print(info)
#Exercise 6
a = 5
b = 1
if a > b:
    print("Hello World")
#Exercise 7
while True:
    user_input = input("Enter a number:") #taking input from the user
    try:
        user_input = int(user_input) #converting the input to an integer
    except ValueError: continue #if the input is not an integer, continue to the next iteration
    else:
        if user_input%2 == 0:
            print("Even")
            break
        else:
            print("Odd")
            break
#Exercise 8
user_input = input("Enter your name:") #taking input name from the user
if user_input == "Ilya":
    print("Nice to meet you, Ilya")
else:
    print(f"Hello {user_input}, you are not Ilya")
#Exercise 9
while True:
    user_input = input("Enter your height:") #taking input height from the user
    try:
        user_input = int(user_input) #converting the input to an integer
    except ValueError: print("You put something strange") #if the input is not an integer, continue to the next iteration
    else:
        if user_input > 145:
            print("You are tall enough to ride.")
            break
        else:
            print("You need to grow some more to ride.")
            break
#The End