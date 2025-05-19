import math
#Daily Challenge : Pagination
print("---Daily Challenge : Pagination---")

class Pagination():
    '''Represents pagination with items divided by the page size'''
    def __init__(self, items=None, page_size = 10):
        '''Initialize Pagination with list of items and page size'''
        if items == None:
            self.items = []
        else:
            self.items = items
        self.page_size = page_size
        self.current_idx = 0
        self.number_pages = math.ceil(len(self.items) / self.page_size)
    
    def get_visible_items(self):
        '''Return the list of items on the current page'''
        return self.items[self.current_idx*self.page_size:self.current_idx*self.page_size+self.page_size ]
        
    def go_to_page(self, page_num):
        '''Move the page pointer to the page passed as a parameter (1-based)'''
        page_num -= 1
        if page_num < 0 or page_num >= self.number_pages:
            raise ValueError(f"Required page number is out of range. Please use number between 1 and {self.number_pages}")
        self.current_idx = page_num
        
    def first_page(self):
        '''Move page pointer on the first page'''
        self.go_to_page(1)
        return self
    
    def last_page(self):
        '''Move page pointer on the last page'''
        self.go_to_page(self.number_pages)
        return self
        
    def next_page(self):
        '''Move page pointer on the next page wether it's not already the last page'''
        if self.current_idx != self.number_pages - 1:
            self.go_to_page(self.current_idx + 2)
        return self
    
    def previous_page(self):
        '''Move the page pointer to the previous page, if it's not already the first'''
        if self.current_idx > 0:
            self.go_to_page(self.current_idx)
        return self
    
    def __str__(self):
        '''Return a string with items on the current page divided by new line'''
        return "\n".join(self.get_visible_items())
        
alphabetList = list("abcdefghijklmnopqrstuvwxyz")
p = Pagination(alphabetList, 4)

print(p.get_visible_items())
# ['a', 'b', 'c', 'd']

p.next_page()
print(p.get_visible_items())
# ['e', 'f', 'g', 'h']

p.last_page()
print(p.get_visible_items())
# ['y', 'z']

p.go_to_page(7)
print(p.current_idx + 1)
# Output: 7

p.go_to_page(0)
# Raises ValueError