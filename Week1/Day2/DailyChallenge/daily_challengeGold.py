# Ask the user for their birthdate (specify the format, for example: DD/MM/YYYY).
# Display a little cake as seen below:
#        ___iiiii___
#       |:H:a:p:p:y:|
#     __|___________|__
#    |^^^^^^^^^^^^^^^^^|
#    |:B:i:r:t:h:d:a:y:|
#    |                 |
#    ~~~~~~~~~~~~~~~~~~~
# The number of candles on the cake should be the last number of the users age, if they are 53, then add 3 candles.

# Bonus : If they were born on a leap year, display two cakes !

def print_cake(age):
    space = '       _'
    left_padding = ((10 - age % 10)//2)
    right_padding = 10 - age % 10 - left_padding
    candles =  '_' * left_padding + 'i' * (age % 10) + '_' * right_padding
    print(f"{space}{candles}")
    print('''      |:H:a:p:p:y:|\n    __|___________|__\n   |^^^^^^^^^^^^^^^^^|\n   |:B:i:r:t:h:d:a:y:|\n   |                 |\n   ~~~~~~~~~~~~~~~~~~~''')

date = input("Enter your birthdate (DD/MM/YYYY): ")
day, month, year = date.split('/')
year = int(year)
age = 2025 - year
print(f"Your age is: {age}")
print_cake(age)


# Bonus

if (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0):
    print_cake(age)