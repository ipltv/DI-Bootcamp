#Daily challenge: Old MacDonald’s Farm
print("---Daily challenge: Old MacDonald’s Farm---")

class Farm:
    '''Represent a farm and its animals'''
    def __init__(self, farm_name):
        '''Initialize farm with its name as a parameter'''
        self.name = farm_name
        self.animals = {}
        
    def add_animal(self, animal_type, count=1):
        '''Add animal and its quantity to the farm. If this type of animal has alredy existed on th farm increment its quantity'''
        if animal_type not in self.animals:
            self.animals[animal_type] = count
        else:
            self.animals[animal_type] = self.animals[animal_type] + count
    
    def get_info(self):
        '''Print information about the farm and animals'''
        result =""
        result +=f"---{self.name}'s farm---\n\n"
        for key in self.animals:
            result += f"{key:<10} : {self.animals[key]}\n"
        result += "\n    E-I-E-I-0!"
        return result
        
    def get_animal_types(self):
        '''Return sorted in alphabetic order list of the animals in the farm.'''
        return sorted(self.animals.keys())
    
    def get_short_info(self):
        '''Return string with short information about the farm.'''
        animal_list = [animal if self.animals[animal] == 1 else animal + "s" for animal in self.get_animal_types()]
        animal_st = ', '.join(animal_list)
        return f"{self.name} farm has {animal_st}."

# Test the code 
macdonald = Farm("McDonald")
macdonald.add_animal('cow', 5)
macdonald.add_animal('sheep')
macdonald.add_animal('sheep')
macdonald.add_animal('goat', 12)
print(macdonald.get_info())

print(macdonald.get_short_info())