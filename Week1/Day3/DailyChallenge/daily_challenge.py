#Exercise 1: Converting Lists into Dictionaries
print("--------------Exercise 1--------------")

# You are given two lists. 
# Convert them into a dictionary where the first list contains the keys and the second list contains the corresponding values.
keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]

min_list_length = min(len(keys), len(values))
result_dict = {keys[i]: values[i] for i in range(min_list_length)}
print(result_dict)  # Output: {'Ten': 10, 'Twenty': 20, 'Thirty': 30}

#Exercise 2: Cinemax #2
print("--------------Exercise 2--------------")

# Write a program that calculates the total cost of movie tickets for a family based on their ages.

# Family members’ ages are stored in a dictionary.
# The ticket pricing rules are as follows:
# Under 3 years old: Free
# 3 to 12 years old: $10
# Over 12 years old: $15
# Loop through the family dictionary to calculate the total cost.
# Print the ticket price for each family member.
# Print the total cost at the end.
# Allow the user to input family members’ names and ages, then calculate the total ticket cost.

# family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}
family = {}

#Input section
while True:
    try:
        family_member_name = input("Enter family member name (or 'done' to finish): ").replace(" ", "")
        if family_member_name.lower() == 'done':
            break
        family_member_age = int(input(f"Enter {family_member_name}'s age: "))
        if family_member_age < 0:
            exception = ValueError("Age cannot be negative.")
            raise exception
        family[family_member_name] = family_member_age
    except ValueError as e:
        print("Invalid input. Please enter a valid age. Original error:", e)
        continue
    else:
        family[family_member_name] = family_member_age

#Calculation section
total_cost = 0
for name, age in family.items():
    currentMemberCost = 0
    if age < 3:
        currentMemberCost = 0
    elif 3 <= age <= 12:
        currentMemberCost = 10
    else:
        currentMemberCost = 15
    print(f"{name} is {age} years old and the ticket cost is ${currentMemberCost}")
    total_cost += currentMemberCost

print(f"Total cost of movie tickets: ${total_cost}")  # Output: Total cost of movie tickets: $50

#Exercise 3: Zara
print("--------------Exercise 3--------------")

#Create and manipulate a dictionary that contains information about the Zara brand.
# Create a dictionary called brand with the provided data.
# Modify and access the dictionary as follows:
# Change the value of number_stores to 2.
# Print a sentence describing Zara’s clients using the type_of_clothes key.
# Add a new key country_creation with the value Spain.
# Check if international_competitors exists and, if so, add “Desigual” to the list.
# Delete the creation_date key.
# Print the last item in international_competitors.
# Print the major colors in the US.
# Print the number of keys in the dictionary.
# Print all keys of the dictionary.
# Bonus. Create another dictionary called more_on_zara with creation_date and number_stores. Merge this dictionary with the original brand dictionary and print the result.

brand = {
    "name": "Zara",
    "creation_date": 1975,
    "creator_name": "Amancio Ortega Gaona",
    "type_of_clothes": ["men", 'women', 'children', 'home'],
    "international_competitors": ['Gap', 'H&M', 'Benetton'],
    "number_stores": 7000,
    "major_color": {
        'France': 'blue', 
        'Spain': 'red', 
        'US': ['pink', 'green']
    }
}

brand["number_stores"] = 2
print(f"Zara's clients are using {brand['type_of_clothes']} type of clothes.")
brand["country_creation"] = "Spain"
print("Added creation country to the dictionary: ", brand["country_creation"])
if "international_competitors" in brand:
    brand["international_competitors"].append("Desigual")
    print("Added Desigual to international competitors: ", brand["international_competitors"])
brand.pop("creation_date", None)
print("Deleted creation date from the dictionary.")
print("Last item in international competitors: ", brand["international_competitors"][-1])
print("Major colors in the US: ", brand["major_color"]["US"])
print("Number of keys in the dictionary: ", len(brand))
print("All keys in the dictionary: ", brand.keys())

#Bonus: Merge the two dictionaries
more_on_zara = {
    "creation_date": 1976,
    "number_stores": 7001
}
print("More on Zara: ", more_on_zara)

brand.update(more_on_zara)
print("Merged dictionary: ", brand)

#Exercise 4: Disney Characters
print("--------------Exercise 4--------------")
#You are given a list of Disney characters. Create three dictionaries based on different patterns as shown below:

users = ["Mickey", "Minnie", "Donald", "Ariel", "Pluto"]

#Create a dictionary that maps characters to their indices:
user_dict = {user: index for index, user in enumerate(users)}
print("Dictionary mapping characters to their indices: ", user_dict)

#Create a dictionary that maps indices to characters:
indicas_dict = {index: user for index, user in enumerate(users)}
print("Dictionary mapping indices to characters: ", indicas_dict)

#Create a dictionary where characters are sorted alphabetically and mapped to their indices:
alphabetical_dict = {user: index for index, user in enumerate(sorted(users))}
print("Dictionary mapping characters to their indices in alphabetical order: ", alphabetical_dict)
