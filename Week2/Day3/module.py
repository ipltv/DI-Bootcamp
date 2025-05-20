from collections import namedtuple
Student = namedtuple('Student', 'fname, lname, age')  
s1 = Student('Peter', 'James', '13')  
print(s1.fname) 

class Circle:
    color = "red"

    def __init__(self, diameter):
        self.diameter = diameter

    def grow(self, factor=2):
        self.diameter = self.diameter * factor

    def get_color(self):
       return Circle.color

circle1 = Circle(2)
print(circle1.color)
print(Circle.color)
print(circle1.get_color())
circle1.grow(3)
print(circle1.diameter)

class MyClass(object):
    count = 0

    def __init__(self, val):
        self.val = val
        MyClass.count += 1

    def set_val(self, newval):
        self.val = newval

    def get_val(self):
        return self.val

    @classmethod
    def get_count(cls):
        return cls.count

object_1 = MyClass(10)
print("\nValue of object : %s" % object_1.get_val())
print(MyClass.get_count())

object_2 = MyClass(20)
print("\nValue of object : %s" % object_2.get_val())
print(MyClass.get_count())


from datetime import datetime, date

class Person:

    def __init__(self, name, last_name, birth_date):
        self.name = name
        self.last_name = last_name
        # self.birth_date = self.parse_birthdate(birth_date)

    @classmethod
    def from_age(cls, name, last_name, age):
        current_year = datetime.today().year
        birth_year = current_year - age
        birth_date = f'{birth_year}-1-1'
        return cls(name, last_name, birth_date)

    @staticmethod
    def parse_birthdate(date_string):
        return datetime.strptime(date_string, '%Y-%m-%d').date()
    
    @staticmethod
    def uppuercase_name(person):
        person.name = person.name.capitalize()
        person.last_name = person.last_name.capitalize()
    
    @property
    def age(self):
        today = date.today()
        age = today.year - self.birth_date.year
        return age
    
    def __str__(self):
        return f"{self.name} {self.last_name}"


p1 = Person('Alice', 'Wonder', '1990-02-05')
print(type(p1.birth_date))
print(p1.age) #because I have @property method, the age can be accessed as an atribute

p2 = Person.from_age('Bob', 'Smith', 30)
print(p2.birth_date)

print(datetime.today().year)

#create a static method that format the name and last name 
# in case the first letter is not upper case
#usage example: 
p3 = Person('juliana', 'schmidt', 35)
Person.uppuercase_name(p3)
print(p3)
#the static method will change it to capital case.
