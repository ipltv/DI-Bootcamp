import string
import random
from datetime import datetime
from faker import Faker

# Exercise 1: Currencies
print("--------------Exercise 1--------------")

class Currency:
    '''Present currency with name and amount'''
    def __init__(self, currency, amount):
        self.currency = currency
        if amount < 0:
            raise ValueError("Currency amount cannot be negative")
        self.amount = amount

    def __str__(self):
        return f"{self.amount} {self.currency}" + ("s" if self.amount != 1 else "")
    
    def __int__(self):
        return self.amount
    
    def __repr__(self):
        return f"{str(self.amount)} {self.currency}s" if self.amount != 1 else f"{str(self.amount)} {self.currency}"
    
    def __add__(self, other):
        if isinstance(other, Currency):
            if self.currency == other.currency:
                return Currency(self.currency, self.amount + other.amount)
            else: raise TypeError("Cannot add different currencies")
        elif isinstance(other, (int, float)):
            return Currency(self.currency, self.amount + other)
        
    def __iadd__(self, other):
        result = self + other
        self.amount = result.amount
        return self
    
c1 = Currency('dollar', 5)
c2 = Currency('dollar', 10)
c3 = Currency('shekel', 1)
c4 = Currency('shekel', 10)

#the comment is the expected output
print(str(c1))
# '5 dollars'

print(int(c1))
# 5

print(repr(c1))
# '5 dollars'

print(int(c1 + 5))
# 10

print(int(c1 + c2))
# 15

print(c1) 
# 5 dollars

c1 += 5
print(c1)
# 10 dollars

c1 += c2
print(c1)
# 20 dollars

# print(c1 + c3)
# TypeError: Cannot add between Currency type <dollar> and <shekel>


#Exercise 3: String module
print("--------------Exercise 3--------------")

all_letters = string.ascii_letters
len_all_letters = len(all_letters)
result = ''.join(random.choice(all_letters) for _ in range(5))
print(result)

#Exercise 4: Current Date
print("--------------Exercise 4--------------")

def print_current_date():
    print(datetime.today())
    
print_current_date()


#Exercise 5: Amount of time left until January 1st
print("--------------Exercise 5--------------")

current_date = datetime.today()
first_jan_next_year = datetime(current_date.year+1,1,1,0,0,0)

print(f"Time left until January 1st: {first_jan_next_year - current_date}")


#Exercise 6: Birthday and minutes
print("--------------Exercise 6--------------")
user_birthday = datetime.strptime(input("Please enter your birthday (DD/MM/YYYY): "),"%d/%m/%Y")
print(f"You live here: {(current_date - user_birthday).total_seconds() / 60} minutes")

#Exercise 7: Faker Module
print("--------------Exercise 7--------------")

def gen_users(number_of_users):
    users = []
    for _ in range(number_of_users):
        user = {"name": fake.name(),"address":fake.address(), "language_code":fake.language_code()}
        users.append(user)
    return users

fake = Faker()
users = gen_users(5)

print(*users, sep="\n")