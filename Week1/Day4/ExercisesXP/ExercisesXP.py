#Exercises XP Functions
import random #import random module

#Exercise 1: What Are You Learning?
print("--------------Challenge 1--------------")

def display_message():
    '''Print simple message'''
    print("I am learning about functions in Python.")
    
display_message()

#Exercise 2: What’s Your Favorite Book?
print("--------------Challenge 2--------------")
def favorite_book(title):
    '''Print simple message with argument'''
    print(f"One of my favorite books is {title}")
    
favorite_book("Alice in Wonderland")

#Exercise 3: Some Geography
print("--------------Challenge 3--------------")

def describe_city(city, country="Unknown"):
    '''Print where city is located based on input agruments'''
    print(f"{city} is in {country}")

describe_city("Reykjavik", "Iceland")
describe_city("Paris")

#Exercise 4: Random
print("--------------Challenge 4--------------")

def gueesTheNumber(value):
    '''Generate random value between 1 and 100. Compare with input parametr and print a message if values the same.'''
    if not (1 <= value < 100):
        raise ValueError("Value must be between 1 and 100")
    randomNumber = random.randint(1, 100)
    if random.randint(1, 100) == value:
        print("Success!")
    else:
        print(f"Fail! Your number: {50}, Random number: {randomNumber}")
    
while True:
    try:
        userNumber = int(input("Please enter your number, and I will say if you guessed my number: "))
        gueesTheNumber(userNumber)
    except ValueError as e:
        print("The error has occured. Please try again. Original error message: ", e)
        continue
    else:
        break

#Exercise 5: Let’s Create Some Personalized Shirts!
print("--------------Challenge 5--------------")

def make_shirt(size="large", text="I love Python"):
    '''Print size and text on the shirt based on input paramentrs'''
    print(f"The size of the shirt is {size.lower()} and the text is {text}.")
    
make_shirt()
make_shirt("medium")
make_shirt("extra large", "NILS")
#(Bonus): Keyword Arguments
make_shirt(size="small", text="Hello!")

#Exercise 6: Magicians…
print("--------------Challenge 6--------------")

magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']

def show_magicians(magicianNames):
    '''Print magican names. Each name in new line.'''
    print(*magicianNames, sep="\n")
    
def make_great(magicianNames):
    '''Add "the Great" at the beggining of the magican names'''
    for i in range(0, len(magicianNames)):
        magicianNames[i] = f"the Great {magicianNames[i]}"

#Call the functions for process magican names
make_great(magician_names)
show_magicians(magician_names)

#Exercise 7: Temperature Advice
print("--------------Challenge 7--------------")

#Generate random temperature value depens on month number. There is a validation of input data (should be [1;12])
def get_random_temp(month=1):
    '''Function return temperature specific for each season based on value of month argument'''
    if not (1 <= month <=12):
            raise ValueError("Month number must be between 1 and 12.")
    if 3 <= month <= 5:
        return round(random.uniform(15,25), 1)
    elif 6 <= month <= 8:
        return round(random.uniform(20,40), 1)
    elif 9 <= month <= 11:
        return round(random.uniform(10,20), 1)
    else:
        return round(random.uniform(-10,10), 1)

def main(month=1):
    '''Output on the screen specific message depending on temperature value'''
    temperature = get_random_temp(month)
    print(f"The temperature right now is {temperature} degrees Celsius.")
    if temperature < 10:
        print("Brrr, that’s freezing! Wear some extra layers today.")
    elif temperature < 16:
        print("Quite chilly! Don’t forget your coat.")
    elif temperature <= 23:
        print("Nice weather.")
    elif temperature < 32:
        print("A bit warm, stay hydrated.")
    else:
        print("It’s really hot! Stay cool.")

#Reques number of the month from user and call main function to get wheather advise.
#try-except block prevent incorrect imput from the user
while True:
    try:
        month = int(input("Enter number of month between 1 and 12: "))
        main(month)
    except ValueError as e:
        print("The error occured. Please try again. Original message: ", e)
    else:
        break

