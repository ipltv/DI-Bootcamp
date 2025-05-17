import datetime
import re
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