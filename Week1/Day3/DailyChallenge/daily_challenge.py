#Daily Challenge: Dictionaries

#Challenge 1: Letter Index Dictionary
print("--------------Challenge 1--------------")

#Create a dictionary that stores the indices (number of the position) of each letter in a word provided by the user(input()).
userInput = input("Enter a word: ")
letterIndices = {}
for i in range(len(userInput)): #Loop through the userInput string and get the index of each letter.
    letter = userInput[i] #Get the letter at index i and use it as a key in the result dictionary.
    if letter not in letterIndices: #If the letter is not in the result dictionary, create empty list to store indices.
        letterIndices[letter] = [] 
    letterIndices[letter].append(i) #Append the index to the list of indices for each letter.
print(letterIndices)

#Challenge 2: Affordable Items
print("--------------Challenge 2--------------")

#Create a program that prints a list of items that can be purchased with a given amount of money.
# You will be provided with a dictionary (items_purchase) where the keys are the item names and the values are their prices (as strings with a dollar sign).
# You will also be given a string (wallet) representing the amount of money you have.

# items_purchase = {"Water": "$1", "Bread": "$3", "TV": "$1,000", "Fertilizer": "$20"}
# wallet = "$300"

# items_purchase = {"Apple": "$4", "Honey": "$3", "Fan": "$14", "Bananas": "$4", "Pan": "$100", "Spoon": "$2"}
# wallet = "$100"

items_purchase = {"Phone": "$999", "Speakers": "$300", "Laptop": "$5,000", "PC": "$1200"}
wallet = "$1"

# Convert wallet to an integer by removing the dollar sign and commas
wallet = int(wallet.replace('$','').replace(',',''))  # Remove the dollar sign
items_purchase = {item : int(price.replace('$','').replace(',','')) for item, price in items_purchase.items()}

affordable_items = []
for item, price in items_purchase.items(): #loop through the dictionary. 
    if price <= wallet: #If price is less than or equal to wallet, append the item to the affordable_items list.
        affordable_items.append(item)

#Check if there is any affordable item. If there is, print the sorted list of affordable items. If not, print "Nothing".
if len(affordable_items) > 0:
    print(sorted(affordable_items))
else:
    print("Nothing")
    
#The end.