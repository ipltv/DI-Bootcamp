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
print("Final state of the basket:", basket)




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
        

#The End