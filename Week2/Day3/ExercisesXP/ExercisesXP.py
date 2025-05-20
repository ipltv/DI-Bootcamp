#Exercise 1: Currencies
print("--------------Exercise 1--------------")

class Currency:
    def __init__(self, currency, amount):
        self.currency = currency
        self.amount = amount

    def __str__(self):
        return f"{str(self.amount)} {self.currency}s" if self.amount != 1 else f"{str(self.amount)} {self.currency}"
    
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

print(c1 + c3)
# TypeError: Cannot add between Currency type <dollar> and <shekel>


