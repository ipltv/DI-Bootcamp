#Exercise 1 : Cars
print("--------------Exercise 1--------------")

carsString = "Volkswagen, Toyota, Ford Motor, Honda, Chevrolet"

carList = carsString.split(', ')

print(f"We have {len(carList)} manufactures in the list:")

carList.sort(reverse=True)
whioutICount = 0
oCount = 0
for car in carList:
    print(car)
    if 'i' not in car:
        whioutICount += 1
    if 'o' in car:
        oCount += 1
print(f"Count manufacture names withot I-letter: {whioutICount}")
print(f"Count manufacture names with O-letter: {oCount}")


print("-------Bonus--------")

newCarList = ["Honda","Volkswagen", "Toyota", "Ford Motor", "Honda", "Chevrolet", "Toyota"]
newCarList = list(set(newCarList))    
print(*newCarList, sep=", ")

print("----REVERSE NAMES----")
print(*[car[::-1] for car in newCarList], sep=", ")
