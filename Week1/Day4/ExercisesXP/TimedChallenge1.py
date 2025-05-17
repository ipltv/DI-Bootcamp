#Timed Challenge #1
print("--------------Timed Challenge #1--------------")

def string_count(org_string, searched_char):
    count = 0
    for char in org_string:
        if char == searched_char:
            count += 1
    return count


string = input("String: ")
char = input("Character: ")
print(string_count(string, char))