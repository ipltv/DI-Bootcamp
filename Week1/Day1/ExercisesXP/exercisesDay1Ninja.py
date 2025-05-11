#Exercise 3
x = (1 == True)
y = (1 == False)
a = True + 4
b = False + 10

print("x is", x)
print("y is", y)
print("a:", a)
print("b:", b)

#Exercise 4
my_text = """Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
           sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
           Ut enim ad minim veniam, quis nostrud exercitation ullamco 
           laboris nisi ut aliquip ex ea commodo consequat. 
           Duis aute irure dolor in reprehenderit in voluptate velit 
           esse cillum dolore eu fugiat nulla pariatur. 
           Excepteur sint occaecat cupidatat non proident, 
           sunt in culpa qui officia deserunt mollit anim id est laborum."""
print(len(my_text)) #printing the length of the string

#Exercise 5
max_length = 0 #initializing the max_length variable to 0
while True:
    user_input = input("The longest sentence they can without the character “A”: ") #taking input from the user
    if user_input == "exit":
        print("The longest sentence is:", max_length)
        break
    elif user_input.count("A") == 0:
        if len(user_input) > max_length:
            max_length = len(user_input)
            print("Congrats! The new longest sentence is:", max_length)
    else:
        print("The sentence contains the character 'A'. Please try again.")
