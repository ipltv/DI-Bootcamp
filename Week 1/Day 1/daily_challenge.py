import random #importing the random module

while True:
    user_input = input("Enter string exactly 10 characters long: ") #taking input from the user
    if len(user_input) == 10: #checking if the length of the string is 10
        print("Perfect string")
        break
    elif len(user_input) < 10:
        print("String not long enough.")
    elif len(user_input) > 10:
        print("String too long.")

print(user_input[0:1]) #printing the first character of the string
print(user_input[len(user_input)-1:]) #printing the last character of the string

result_string = ""
for i in range(len(user_input)): #iterating through the string
    result_string += user_input[i] #adding the character to the result string
    print(result_string) #printing the result string

charts = list(user_input) #converting the string to a list of characters
random.shuffle(charts) #shuffling the list of characters
print(''.join(charts)) #joining the list of characters to form a string