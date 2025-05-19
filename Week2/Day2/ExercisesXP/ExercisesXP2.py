import random
from ExercisesXP import Dog
#Exercise 3: Dogs Domesticated
print("--------------Exercise 3--------------")

class PetDog(Dog):
    def __init__(self, name, age, weight):
        '''Initialize a PetDog, which is a subclass of Dog.'''
        super().__init__(name, age, weight)
        self.trained = False
        
    def train(self):
        """Make the dog trained"""
        print(self.bark())
        self.trained = True
        
    def play(self, *args):
        '''Play with dogs. Pass dogs as a parameter.'''
        print(f"{",".join([str(item) for item in args])} all play together")
        
    def do_a_trick(self):
        '''Perform a random trick if the dog is trained.'''
        if self.trained: 
            tricks = ["does a barrel roll", "stands on his back legs", "shakes your hand", "plays dead"]
            trick_number = random.randint(0,len(tricks)-1)
            print(f"{self.name} {tricks[trick_number]}")
        else:
            print(f"{self.name} isn't trained yet.")

pushistik = PetDog("Pushistik",1,15)
oreo = PetDog("Oreo", 5, 20)
cinamon_roll = PetDog("Cinamon", 10, 25)

pushistik.play(pushistik, oreo, cinamon_roll)
pushistik.train()
print(pushistik.do_a_trick())


#Exercise 4: Family and Person Classes
print("--------------Exercise 4--------------")

class Person():
    '''Represent a person with a first name, age, and optional last name.'''
    def __init__(self, first_name, age):
        self.first_name = first_name
        self.last_name = ""
        self.age = age
        
    def is_18(self):
        '''Check whether the person is 18 or older.'''
        if self.age >= 18:
            return True
        else: return False

class Family():
    '''Present family with family members and last name'''
    def __init__(self, last_name):
        self.last_name = last_name
        self.members = []
        
    def born(self, first_name, age):
        '''Add new member to the family'''
        newborn = Person(first_name, age)
        newborn.last_name = self.last_name
        self.members.append(newborn)
        print(f"{newborn.first_name} {newborn.last_name} born")
        
    def check_majority(self, first_name):
        '''Check whether a specified family member is of legal age (18+).'''
        for person in self.members:
            if person.first_name == first_name:
                if person.is_18():     
                    print("You are over 18, your parents Jane and John accept that you will go out with your friends")
                else:
                    print("Sorry, you are not allowed to go out with your friends.")
                
    def family_presentation(self):
        '''Print family member in the list.'''
        print(f"{self.last_name} Family".center(30))
        for person in self.members:
            print(f"First Name: {person.first_name:<10} Age: {person.age:<10}")

lin = Family("Lin")

lin.born("Nils", 10)
lin.born("Vesta", 1)
lin.born("Kate", 50)

lin.check_majority("Kate")
lin.family_presentation()