import datetime
import re
import random
#Exercise 1: When will I retire ?
print("--------------Challenge 1--------------")

def get_age(year, month, day):
    '''Return age based on current date and inputed birthday'''
    today = datetime.date.today()
    current_year = today.year
    current_month = today.month
    current_day = today.day
    age = current_year - year
    if current_month < month or (current_month == month and current_day < day):
        age -= 1
    return age

def can_retire(gender, date_of_birth):
    '''Determine if a person is eligible for retirement based on gender and date of birth.'''
    age = get_age(*map(int, date_of_birth.split("/")))
    if gender == 'm' and age > 66 or gender == "f" and age > 61:
        return "Can retire"
    else:
        return "Cannot retire"
while True:
    try:
        gender = input("Please enter a gender (m / f): ").lower()
        if gender != "m" and gender != "f":
            raise ValueError("Incorrect gender input. Gender should be m or f only.")
        date_of_birth = input("Enter the date of birth (YYYY/MM/DD format): ")
        if not re.fullmatch(r"^\d{4}/(0[1-9]|1[0-2])/(0[1-9]|[12]\d|3[01])$", date_of_birth):
            raise ValueError("Incorrect date input. Right date format is YYYY/MM/DD.")
    except ValueError as e:
        print("An error accured. Please try again.\nOriginal error message: ", e)
    else:
        print(can_retire(gender,date_of_birth))
        break
    
#Exercise 2: Sum
print("--------------Challenge 2--------------")

def sum_X(x):
    '''Calculate the sum of x + xx + xxx + xxxx, where x is a digit.'''
    x_str = str(x)
    return (x + int(x_str*2) + int(x_str*3) + int(x_str*4))

print(sum_X(3))

#Exercise 3: Double Dice
print("--------------Challenge 3--------------")

def throw_dice():
    '''Simulate a dice throw.'''
    return random.randint(1,6)

def throw_until_doubles():
    '''Repeatedly throw two dice until both show the same number (a double).'''
    count = 0
    while True:
        d1 = throw_dice()
        d2 = throw_dice()   
        count += 1
        if d1 == d2:
            break
    return count


def main():
    '''Simulate 100 attempts to roll doubles and calculate total and average number of throws.'''
    result = []
    for i in range(100):
        result.append(throw_until_doubles())
    return result

double_throws = main()
double_throws_sum = sum(double_throws)
print(f"{double_throws_sum} throws it took to get 100 doubles.")
print(f"{double_throws_sum/len(double_throws):0,.2f} average throws to get double.")
