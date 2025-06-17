import math

# Exercise 1
print("------------Exercise 1------------")
def build_piramid(lvl_count):
    max_length = (lvl_count - 1) * 2 + 1
    for i in range(lvl_count):
        symbols = "*" * (i*2+1)
        padding = " " * ((max_length - len(symbols)) // 2)
        print(padding + symbols + padding)
        
build_piramid(3)

def build_piramid_on_side(lvl_count, side="right", reverse=False):
    if side not in ("right", "left"):
        print("Invalid side parameter")
        return

    levels = range(lvl_count, 0, -1) if reverse else range(1, lvl_count + 1)

    for i in levels:
        symbols = '*' * i
        padding = ' ' * (lvl_count - i)
        if side == "right":
            print(padding + symbols)
        else:
            print(symbols + padding)

build_piramid_on_side(5, "right")

build_piramid_on_side(5, "left")
build_piramid_on_side(5, "right", reverse=True)

# Exercise 2
print("------------Exercise 2------------")

# selection sort
my_list = [2, 24, 12, 354, 233]
for i in range(len(my_list) - 1):
    minimum = i
    for j in range( i + 1, len(my_list)):
        if(my_list[j] < my_list[minimum]):
            minimum = j
    if(minimum != i):
        my_list[i], my_list[minimum] = my_list[minimum], my_list[i]
print(my_list)