#Exercise 1
print(f"{"Hello world\n"*4}{"I love python\n"*4}")
#Exercise 2
while True:
    try:
        user_input = int(input("Enter a number of month:")) #taking input from the user
    except ValueError: print("You put something strange") #if the input is not an integer, continue to the next iteration
    else:
        if user_input >= 3 and user_input <= 5:
            print("Spring")
            break
        elif user_input >= 6 and user_input <= 8:
            print("Summer")
            break
        elif user_input >= 9 and user_input <= 11:
            print("Autumn")
            break
        elif user_input == 12 or user_input <= 2:
            print("Winter")
            break
