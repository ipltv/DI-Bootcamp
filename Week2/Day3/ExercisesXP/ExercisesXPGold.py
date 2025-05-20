import datetime
import holidays
import re
import string
import random

# Exercise 1: Currencies
print("--------------Exercise 1--------------")

def next_holiday():
    today = datetime.date.today()
    il_holidays = holidays.IL(years=today.year)

    nearest_holiday = None
    min_days_diff = float('inf')

    for date, name in il_holidays.items():
        if date >= today:
            days_diff = (date - today).days
            if days_diff < min_days_diff:
                min_days_diff = days_diff
                nearest_holiday = (date, name)

    if nearest_holiday:
        date, name = nearest_holiday
        return f"Next holidya is: {name} ({date}) in {min_days_diff} days"
    else:
        return "Didn't find holidays in this year."
    
print(next_holiday())

#Exercise 2 : How Old Are You On Jupiter?
print("--------------Exercise 2--------------")

def how_old_on_planet(age, planet):
    planets = {
        "Mercury": 0.2408467,
        "Venus": 0.61519726,
        "Mars": 1.8808158,
        "Jupiter" : 11.862615,
        "Saturn": 29.447498,
        "Uranus": 84.016846,
        "Neptune": 164.79132,
    }
    
    planet = planet.capitalize()
    if planet not in planets:
        raise ValueError(f"Unknown planet: {planet}")

    earth_age = age / 31557600
    return round(earth_age / planets[planet], 2)

age = 29 * 31557600
planet = "Saturn"

print(how_old_on_planet(age,planet))

#Exercise 3 : Regular Expression #1
print("--------------Exercise 3--------------")

def return_numbers(string):
    return "".join(re.findall(r"\d",string))

print(return_numbers('k5k3q2g5z6x9bn'))

#Exercise 3 : Regular Expression #1
print("--------------Exercise 4--------------")

def is_name(string):
    return bool(re.fullmatch(r"^[A-Z][a-z]+ [A-Z][a-z]+$", string))
    
name = input("Enter your full name: ")
if is_name(name):
    print("Valid name.")
else:
    print("Invalid name.")
    
def is_valid_password(password):
    pattern = """^
                    (?=.*\d)
                    (?=.*[a-z])
                    (?=.*[A-Z])
                    (?=.*[!@#$%^&*_+=-])
                    [A-Za-z\d!@#$%^&*_+=-]{6,30}
                    $
               """
    return bool(re.fullmatch(pattern, password, re.VERBOSE))

def generate_password(length):
    if not 6 <= length <= 30:
        raise ValueError("Password length must be between 6 and 30")

    digits = random.choice(string.digits)
    lowers = random.choice(string.ascii_lowercase)
    uppers = random.choice(string.ascii_uppercase)
    specials = random.choice('!@#$%^&*_+=-')

    all_chars = string.ascii_letters + string.digits + '!@#$%^&*_+=-'
    remaining_length = length - 4
    remaining_chars = [random.choice(all_chars) for _ in range(remaining_length)]

    password_list = [digits, lowers, uppers, specials] + remaining_chars
    random.shuffle(password_list)

    return ''.join(password_list)

def ask_password_length():
    while True:
        length_str = input("Enter the desired password length (between 6 and 30 characters): ")
        if length_str.isdigit():
            length = int(length_str)
            if 6 <= length <= 30:
                return length
            else:
                print("Error: Number must be between 6 and 30.")
        else:
            print("Error: Please enter a valid number.")
            
def main():
    length = ask_password_length()
    password = generate_password(length)
    if is_valid_password(password):
        print(f"Your generated password is: {password}")
        print("Please keep this password in a safe place!")
    else:
        print("An error occurred while generating the password. Please try again.")
        
main()
        
# for i in range(100):
    # length = random.randint(6, 30)
    # pwd = generate_password(length)
    # valid = is_valid_password(pwd)
    # correct_length = len(pwd) == length

    # print(f"Test {i+1:03}: Length={length}, Password={pwd}, Valid={valid}, Length OK={correct_length}")