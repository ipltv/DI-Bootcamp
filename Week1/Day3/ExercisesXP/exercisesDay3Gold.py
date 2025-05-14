#Exercise 1: Birthday Look-up
print("--------------Exercise 1--------------")

birthdays = {
    "Alice": "1995/04/01",
    "Bob": "1996/04/01",
    "Charlie": "2000/07/05",
    "David": "2005/07/04",
    "Eve": "2001/07/04",
}

name = input("Enter a name: ")
if name in birthdays:
    print(f"{name}'s birthday is {birthdays[name]}")
else:
    print(f"{name} not ound in the list.")

#Exercise 2: Birthdays Advanced
print("--------------Exercise 2--------------")

print("We have these names in the list:")
for name in birthdays.keys():
    print(name)
print("Please enter a name from the list:")
name = input("Enter a name: ")
if name in birthdays:
    print(f"{name}'s birthday is {birthdays[name]}")
else:
    print(f"Sorry, we don’t have the birthday information for {name}.")
    
#Exercise 3: Add Your Own Birthday
print("--------------Exercise 3--------------")

userName = input("Please enter your name: ")
userBirthday = input("Please enter your birthday (YYYY/MM/DD): ")

birthdays[userName] = userBirthday

print("We have these names in the list:")
for name in birthdays.keys():
    print(name)
print("Please enter a name from the list:")
name = input("Enter a name: ")
if name in birthdays:
    print(f"{name}'s birthday is {birthdays[name]}")
else:
    print(f"Sorry, we don’t have the birthday information for {name}.")

#Exercise 4: Fruit Shop
print("--------------Exercise 4--------------")

items = {
    "banana": 4,
    "apple": 2,
    "orange": 1.5,
    "pear": 3
}

for item in items:
    print(f"{item}: ${items[item]}")

print("---Stock information---") 
items = {
    "banana": {"price": 4 , "stock":10},
    "apple": {"price": 2, "stock":5},
    "orange": {"price": 1.5 , "stock":24},
    "pear": {"price": 3 , "stock":1}
}

sum = 0
for item in items:
    print (f"{item}: ${items[item]['price']} Stock: {items[item]['stock']}")
    sum += items[item]['price'] * items[item]['stock']
print(f"Total: ${sum}")