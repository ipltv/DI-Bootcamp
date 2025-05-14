x = int(input('Enter the Number:')) 

#write down your logic here 
divisors = {1}
for i in range(2, int(x**0.5)+1):
    if x % i == 0:
        divisors.add(i)
        divisors.add(x // i)
sum = sum(divisors)
if sum == x:
    print(True)
else:
    print(False)
    
print(divisors)