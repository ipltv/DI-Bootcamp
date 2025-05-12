#Exercise 1
print("--------------Exercise 1--------------")
# Concatenate my_fav_numbers and friend_fav_numbers to create a new set called our_fav_numbers.
# Note: Sets are unordered collections, so ensure no duplicate numbers are added.

# Create a set called my_fav_numbers and populate it with your favorite numbers.
my_fav_numbers = {2, 3, 5, 7, 11, 13, 17, 19, 23}
print("My favorite numbers are:", my_fav_numbers)

# Add two new numbers to the set.
my_fav_numbers.add(29)
my_fav_numbers.add(31)
print("My favorite numbers after adding two new numbers are:", my_fav_numbers)

# Remove the last number you added to the set.
my_fav_numbers.remove(31)
print("My favorite numbers after removing the last number added are:", my_fav_numbers)

# Create another set called friend_fav_numbers and populate it with your friend’s favorite numbers.
friend_fav_numbers = {4, 6, 8, 10, 12, 14, 16, 18, 20}
print("Friend's favorite numbers are:", friend_fav_numbers)

our_fav_numbers = my_fav_numbers.union(friend_fav_numbers) #alternative: our_fav_numbers = my_fav_numbers | friend_fav_numbers

print("Our favorite numbers are:", our_fav_numbers)

#Exercise 2
print("--------------Exercise 2--------------")
# Given a tuple of integers, try to add more integers to the tuple.
# Hint: Tuples are immutable, meaning they cannot be changed after creation. Think about why you can’t add more integers to a tuple.

tumple_of_integers = (1, 2, 3, 4, 5)
print("Original tuple:", tumple_of_integers)
print("Original tuple ID:", id(tumple_of_integers))
new_tumple_of_integers = (6, 7, 8, 9, 10)
print("New tuple:", new_tumple_of_integers)

tumple_of_integers += new_tumple_of_integers # Note: This does not modify the original tuple, but creates a new one.
print("Original tuple varible after concatenating: " + str(tumple_of_integers))
print("Original tuple varible ID after concatenating: " + str(id(tumple_of_integers)))

#Exercise 3
print("--------------Exercise 3--------------")

# You have a list: basket = ["Banana", "Apples", "Oranges", "Blueberries"]
basket = ["Banana", "Apples", "Oranges", "Blueberries"]

# Remove "Banana" from the list.
basket.remove("Banana")
# Remove "Blueberries" from the list.
basket.remove("Blueberries")
# Add "Kiwi" to the end of the list.
basket.append("Kiwi")
# Add "Apples" to the beginning of the list.
basket.insert(0, "Apples")
# Count how many times "Apples" appear in the list.
apples_count = basket.count("Apples")
print("Number of Apples in the basket:", apples_count)
# Empty the list.
basket.clear()
# Print the final state of the list.
print("Final state of the list:", basket)

#Exercise 4
print("--------------Exercise 4--------------")

# Recap: What is a float? What’s the difference between a float and an integer?
# Create a list containing the following sequence of mixed floats and integers:
# 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5.
# Avoid hard-coding each number manually.
# Think: Can you generate this sequence using a loop or another method?

numbers_list = []
for i in range(3, 11):
    x = i / 2
    if x.is_integer():
        numbers_list.append(int(x))
    else:
        numbers_list.append(x)
print("My numbers list: ", numbers_list)

#Exercise 5
print("--------------Exercise 5--------------")

# Write a for loop to print all numbers from 1 to 20, inclusive.
for i in range(1, 21):
    print(i, end=" ")
print()
# Write another for loop that prints every number from 1 to 20 where the index is even.
for i in range(2, 21, 2):
    print(i, end=" ")
print()

#Exercise 6
print("--------------Exercise 6--------------")

# Write a while loop that keeps asking the user to enter their name.
while True:
    name = input("Enter your name: ")
    if name == "Ilya" or name == "ilya": 
        # Stop the loop if the user’s input is your name.
        print(f"Your name is {name}.")
        break
    else:
        print("Your name is not Ilya.")

#Exercise 7
print("--------------Exercise 7--------------")

# Ask the user to input their favorite fruits (they can input several fruits, separated by spaces).
# Store these fruits in a list.
fruits_list = list(input("Enter your favorite fruits separated by spaces: ").split())
print(fruits_list)

# Ask the user to input the name of any fruit.
user_fruit = input("Enter name of any frut:")

# If the fruit is in their list of favorite fruits, print:
# "You chose one of your favorite fruits! Enjoy!"
# If not, print:
# "You chose a new fruit. I hope you enjoy it!" 
if user_fruit in fruits_list:
    print("You chose one of your favorite fruits! Enjoy!")
else:
    print("You chose a new fruit. I hope you enjoy it!" )

#Exercise 8
print("--------------Exercise 8--------------")

# Write a loop that asks the user to enter pizza toppings one by one.
# Stop the loop when the user types 'quit'.
# For each topping entered, print:
# "Adding [topping] to your pizza."
topping = ""
toppings_list = []
base_price = 10
add_topping_price = 2.5

while True:
    topping = input("Enter pizza topping (for the stop enter quit): ")
    if topping != "quit":
        toppings_list.append(topping)
        print(f"Adding {topping} to your pizza.")
    else:
        break
    
# After exiting the loop, print all the toppings and the total cost of the pizza.
# The base price is $10, and each topping adds $2.50.
if len(toppings_list) > 0:
    print("You chose: ", toppings_list)
    print(f"The price is: {base_price + (len(toppings_list)-1)*add_topping_price}")
else:
    print("You didn't choose any toppings :(")

#Exercise 9
print("--------------Exercise 9--------------")

# Ask for the age of each person in a family who wants to buy a movie ticket.
# Calculate the total cost based on the following rules:
# Free for people under 3.
# $10 for people aged 3 to 12.
# $15 for anyone over 12.
# Print the total ticket cost.

babysTicketCost = 0
babysMaxAge = 3

kidsTicketCost = 10
kidsMaxAge = 12

fullTicketCost = 15

price = 0
input_age = 0
while True:
    input_age = input("Enter your age (enter quit for the stop): ")
    if input_age == "quit":
        break
    try:
        input_age = int(input_age)
        if input_age < 0:
            raise ValueError("Age cannot be negative.")
    except ValueError:
        print("You put something strange. Try it one more time.")
    else:
        if input_age < babysMaxAge:
            price += babysTicketCost
            print(f"This ticket costs: {babysTicketCost}. Go to the next.")
        elif input_age <= kidsMaxAge:
            price += kidsTicketCost
            print(f"This ticket costs: {kidsTicketCost}. Go to the next.")
        else:
            price += fullTicketCost
            print(f"This ticket costs: {fullTicketCost}. Go to the next.")

print("Your total price is $", price)

#Exercise 9 Bonus
print("--------------Exercise 9 Bonus--------------")

input_age = 0
input_name = ""
name_list = []
price = 0
fullTicketCost = 20
while True:
    input_name = input("Enter your name (enter quit for the stop): ")
    if input_name == "quit":
        break
    input_age = input("Enter your age (enter quit for the stop): ")
    if input_age == "quit":
        break
    try:
        input_age = int(input_age)
        if input_age < 0:
            raise ValueError("Age cannot be negative.")
        if input_name == "":
            raise ValueError("Name cannot be empty.")
    except ValueError:
        print("You put something strange. Try it one more time.")
    else:
        if 16 <= input_age <= 21:
            name_list.append(input_name)
            print(f"Your name is {input_name}. You are in the list.")
            price += fullTicketCost
            print(f"This ticket costs: {fullTicketCost}. Go to the next.")
        else:
            print(f"Your name is {input_name}. You are NOT allowed to see a restricted movie.")

print("The final list of attendees: ", name_list)
print("Total price is $", price)

#Exercise 10
print("--------------Exercise 10 Bonus--------------")

# Using the list:
# sandwich_orders = ["Tuna", "Pastrami", "Avocado", "Pastrami", "Egg", "Chicken", "Pastrami"]
# The deli has run out of “Pastrami”, so use a loop to remove all instances of “Pastrami” from the list.
# Prepare each sandwich, one by one, and move them to a list called finished_sandwiches.
# Print a message for each sandwich made, such as: "I made your Tuna sandwich."
# Print the final list of all finished sandwiches.

sandwich_orders = ["Tuna", "Pastrami", "Avocado", "Pastrami", "Egg", "Chicken", "Pastrami"]

for i in range(sandwich_orders.count("Pastrami")):
    sandwich_orders.remove("Pastrami")

finished_sandwiches = []
while len(sandwich_orders) > 0:
    current_sandwich = sandwich_orders.pop()
    finished_sandwiches.append(current_sandwich)
    print(f"I made your {current_sandwich} sandwich.")
    
print("The final list of all finished sandwiches", finished_sandwiches)

#The End