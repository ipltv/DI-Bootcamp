#Exercise 1
print("--------------Exercise 1--------------")

a_tuple = (10, 20, 30, 40)
a = a_tuple[0]
b = a_tuple[1]
c = a_tuple[2]
d = a_tuple[3]

print(a) # should print 10
print(b) # should print 20
print(c) # should print 30
print(d) # should print 40

#Exercise 2
print("--------------Exercise 2--------------")

while True:
    try:
        a = int(input("Enter a difgit: "))
    except ValueError:
        print("Please enter valid integers.")
    else:
        for i in range(1, 11):
            print(f"{a} x {i} = {a * i}")
        break

#Exercise 3
print("--------------Exercise 3--------------")

    