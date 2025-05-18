#Exercise 1 : What’s your name ?
print("--------------Exercise 1--------------")

def get_full_name(first_name, last_name, middle_name=""):
    if middle_name:
        return f"{first_name} {middle_name} {last_name}"
    else:
        return f"{first_name} {last_name}"

get_full_name(first_name="john", middle_name="hooker", last_name="lee")
get_full_name(first_name="bruce", last_name="lee")

#Exercise 2 : From English to Morse
print("--------------Exercise 2--------------")

