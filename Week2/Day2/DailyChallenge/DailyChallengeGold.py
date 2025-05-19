#Daily challenge GOLD: DNA
print("Daily challenge GOLD: DNA")

class Gene:
    def __init__(self, value):
        if value not in (0, 1):
            raise ValueError("Gene value should be only 0 or 1")
        self.value = value
        
    def mutate(self):
        self.value = 1 - self.value