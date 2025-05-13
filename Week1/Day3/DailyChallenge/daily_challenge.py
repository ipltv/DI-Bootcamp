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

