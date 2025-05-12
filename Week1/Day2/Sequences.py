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

i = 1
while i <= 10:
    print(i)
    i += 1

#Lesson exercise

#1
names = []
names.extend(["Sheldon", "Penny", "Leonard", "Howard"])
print(names)

#2
list1 = [5, 10, 15, 20, 25, 50, 20]
print("The list is: ", list1)
if 20 in list1:
    index_of_20 = list1.index(20)
    list1[index_of_20] = 200
print("The modified list is:", list1)

