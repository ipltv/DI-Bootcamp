import random
#Exercise 1: Pets
print("--------------Exercise 1--------------")

class Pets():
    """Represent a collection of pet animals, with a walk method."""
    def __init__(self, animals):
        '''Initialize pets class with collection of animals'''
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())

class Cat():
    """Represent a generic cat with a name and age."""
    is_lazy = True

    def __init__(self, name, age):
        """Initialize Cat object with name and age as parametrs"""
        self.name = name
        self.age = age

    def walk(self):
        
        return f'{self.name} is just walking around'

class Bengal(Cat):
    '''Present Bengal breed specific cat'''
    def sing(self, sounds):
        return f'{sounds}'

class Chartreux(Cat):
    '''Present Chartreux breed specific cat'''
    def sing(self, sounds):
        return f'{sounds}'
    
class Siamese(Cat):
    '''Present class Siamese breed specific cat'''
    def __init__(self, name, age, breed="siamese"):
        super().__init__(name, age)
        self.breed = breed
        
    def sing(self, sounds):
        return f'{sounds}'
        
all_cats = [Bengal("Bengalchik", 10), Chartreux("Pushok", 5), Siamese("Bublik", 6)]

sara_pets = Pets(all_cats)
sara_pets.walk()

#Exercise 2: Dogs
print("--------------Exercise 2--------------")

class Dog:
    '''Represent a dog with name, age, and weight.'''
    def __init__(self, name, age, weight):
        '''Initialize Dog with name, age and weight.'''
        self.name = name
        if age == 0: raise ValueError("Age cannot be zero")
        self.age = age
        self.weight = weight
    
    def bark(self):
        '''Makes the dog barks'''
        return f"{self.name} is barking"
    
    def run_speed(self):
        '''Return run speed of the dog.'''
        return self.weight / self.age * 10
    
    def fight(self, other_dog):
        '''Compare self and another dog and return the winner of the fight.'''
        self_power = self.run_speed() * self.weight
        other_dog_power = other_dog.run_speed() * other_dog.weight
        if self_power > other_dog_power:
            return f"{self.name} won"
        elif self_power < other_dog_power:
            return f"{other_dog.name} won"
        else:
            return f"It's a tie. {self.name} and {other_dog.name} have the same power."
        
belka = Dog("Belka", 10, 50)
strelka = Dog("Strelka", 15, 60)
zhuchka = Dog("Zhuchka", 5, 70)

print(belka.bark())
print(strelka.run_speed())
print(zhuchka.fight(belka))

