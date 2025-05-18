#Exercise 1: Cats
print("--------------Challenge 1--------------")

class Cat:
    def __init__(self, cat_name, cat_age):
        '''Initialize Cat object with name and age parametrs'''
        self.name = cat_name
        self.age = cat_age

# Step 1: Create cat objects
# cat1 = create the object
cat1 = Cat("Nils", 10)
cat2 = Cat("Vesta", 5)
cat3 = Cat("Simba", 100)

# Step 2: Create a function to find the oldest cat
def find_oldest_cat(cat1, cat2, cat3):
    '''Find the oldest cat of the three cats. If there is the same age return the first appearance'''
    # ... code to find and return the oldest cat ...
    return max(cat1,cat2,cat3, key=lambda cat: cat.age)

# Step 3: Print the oldest cat's details
oldest_cat = find_oldest_cat(cat1,cat2,cat3)
print(oldest_cat.name, oldest_cat.age)

#Exercise 2 : Dogs
print("--------------Challenge 2--------------")

class Dog:
    def __init__(self, name, height):
        self.name = name
        self.height = height
    
    def bark(self):
        print(f"{self.name} goes woof!")
        
    def jump(self):
        print(f"{self.name} jumps {self.height * 2}cm high!")
        
davids_dog = Dog("Pushok", 100)
sarahs_dog  = Dog("Bublik", 110)

print(f"David's dog name: {davids_dog.name} and height {davids_dog.height}")
davids_dog.bark()
davids_dog.jump()
print(f"Sarah's dog name: {sarahs_dog.name} and height {sarahs_dog.height}")
sarahs_dog.bark()
sarahs_dog.jump()

bigger_dog = None
if davids_dog.height > sarahs_dog.height: 
    bigger_dog = davids_dog
else:
    bigger_dog = sarahs_dog
    
print(f"The bigger dog is {bigger_dog.name}")

#Exercise 3 : Who’s the song producer?
print("--------------Challenge 3--------------")

class Song:
    '''Present song with lyrics'''
    def __init__(self, lyrics):
        '''Initialize song with lyrics as a parametr'''
        self.lyrics = lyrics
        
    def sing_me_a_song(self):
        '''Sing a song for you'''
        print(*self.lyrics, sep="\n")
        
stairway = Song(["There’s a lady who's sure", "all that glitters is gold", "and she’s buying a stairway to heaven"])
stairway.sing_me_a_song()

# Exercise 4 : Afternoon at the Zoo
print("--------------Challenge 4--------------")

#Step 1: Define the Zoo Class
class Zoo:
    '''Present a zoo with collection of the animals'''
    def __init__(self, zoo_name):
        '''Initialize the zoo with name'''
        self.name = zoo_name
        self.animals = []
        self.groups = {}
        
    def add_animal(self, new_animal):
        '''Add animal to the zoo list'''
        if new_animal not in self.animals: self.animals.append(new_animal)
    
    def get_animals(self):
        '''Print list of animals'''
        print(f"Here the list of animals in the Zoo {self.name}:")
        print(*self.animals, sep="\n")
        
    def sell_animal(self, animal_sold):
        '''Sell animal and remove it from the list'''
        if animal_sold in self.animals: self.animals.remove(animal_sold)
        
    def sort_animals(self):
        '''Sort animals list and form dictionary with group of the animals by the first letter'''
        self.animals.sort()
        self.groups = {}
        for animal in sorted(self.animals):
            key = animal[0].upper()
            if key in self.groups:
                self.groups[key].append(animal)
            else:
                self.groups[key] = [animal]

    def get_groups(self):
        '''Print groups of animals by their first letter'''
        for key in self.groups:
            print(f"{key}: {self.groups[key]}")
    
# Step 2: Create a Zoo instance
ramat_gan_safari = Zoo("Ramat Gan Safari")

# Step 3: Use the Zoo methods
ramat_gan_safari.add_animal("Giraffe")
ramat_gan_safari.add_animal("Bear")
ramat_gan_safari.add_animal("Baboon")
ramat_gan_safari.get_animals()
ramat_gan_safari.sell_animal("Bear")
ramat_gan_safari.add_animal("Gaboon viper")
ramat_gan_safari.get_animals()
ramat_gan_safari.sort_animals()
ramat_gan_safari.get_animals()
ramat_gan_safari.get_groups()
