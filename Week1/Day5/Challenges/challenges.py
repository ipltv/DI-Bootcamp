import math

# Exercise 1

print("------------Exercise 1------------")

def insertItemByIndex(array, item, index):
    return array[:index] + [item] + array[index:]

my_list = [1, 2, 3, 4]
new_list = insertItemByIndex(my_list, 99, 2)
print(new_list) #[1, 2, 99, 3, 4]

# Exercise 2

print("------------Exercise 2------------")

def countSpaces(string):
    return sum(1 for char in string if char.isspace())

text = "This is a sample string with spaces."
print(countSpaces(text))  # Output: 6

# Exercise 3

print("------------Exercise 3------------")

def lowerAndUpperCount(string):
    lower_count = upper_count = 0
    for char in string:
        if char.islower():
            lower_count += 1
        elif char.isupper():
            upper_count += 1
    return f"String Info:\nUpper symbol count: {upper_count}\nLower symbol count: {lower_count}"

text = "Hello World!"
print(lowerAndUpperCount(text))


# Exercise 4

print("------------Exercise 4------------")

def arraySum(array):
    total = 0
    for x in array:
        if isinstance(x, (int, float)):
            total += x
        else:
            raise TypeError(f"Invalid item in array: {x} (type {type(x).__name__})")
    return total

print(arraySum([1, 2, 3.5])) # 6.5
try:
    print(arraySum([1, 'a', 2])) #TypeError
except Exception as e:
    print(e)

# Exercise 5

print("------------Exercise 5------------")

def arrayMax(array):
    if not array:
        raise ValueError("Array cannot be empty")

    if not isinstance(array[0], (int, float)):
        raise TypeError(f"Invalid item in array: {array[0]} (type {type(array[0]).__name__})")
    
    max_value = array[0]

    for x in array[1:]:
        if not isinstance(x, (int, float)):
            raise TypeError(f"Invalid item in array: {x} (type {type(x).__name__})")
        if x > max_value:
            max_value = x
    return max_value


print(arrayMax([4, 17, -2, 88, 9])) #88
try:
    print(arrayMax([4, "oops", 10]))#TypeError
except Exception as e:
    print(e)

# Exercise 6

print("------------Exercise 6------------")

def factorial(num):
    if not isinstance(num, int) or num < 0:
        raise TypeError(f"Invalid input: {num} (type {type(num).__name__}). Factorial is only defined for non-negative integers.")
    if num == 0:
        return 1
    else:
        return num * factorial(num-1)

print(factorial(5))   #120
print(factorial(0))   #1
try:
    print(factorial(-3))  #TypeError
except Exception as e:
    print(e)


# Exercise 7

print("------------Exercise 7------------")


def list_count(array, element):
    count = 0
    for x in array:
        if x == element:
            count += 1
    return count

print(list_count(['a','a','t','o'],'a')) # 2

# Exercise 8

print("------------Exercise 8------------")


def norm(array):
    return math.sqrt(sum(x**2 for x in array))

print(norm([3, 4]))  #5.0

# Exercise 9

print("------------Exercise 9------------")


def is_mono(array):
    asc_flag = desc_flag = True
    for index, x in enumerate(array[1:], start=1):
        if not isinstance(x, (int, float)):
            raise TypeError(f"Invalid item in array: {x} (type {type(x).__name__})")
        
        if x < array[index-1]:
            asc_flag = False
        if x > array[index-1]:
            desc_flag = False
        if not asc_flag and not desc_flag:
            return False
    return True

print(is_mono([7,6,5,5,2,0]))
print(is_mono([2,3,3,3]))
print(is_mono([1,2,0,4]))

# Exercise 10

print("------------Exercise 10------------")


def longest_word(array):
    if not array:
        raise ValueError("Array cannot be empty")
            
    longest_word = array[0]
    for word in array[1:]:
        if len(word) > len(longest_word):
            longest_word = word
    return longest_word

print(longest_word(["cat", "elephant", "dog"])) #elephant
print(longest_word(["hi", "hello", "hey"])) #hello

# Exercise 11

print("------------Exercise 11------------")

def number_string_sort(array):
    numbers = []
    strings = []
    
    for x in array:
        if type(x) is int:
            numbers.append(x)
        if isinstance(x, str):
            strings.append(x)
    
    return numbers, strings 

print("Input: [1, 'a', 2, 'b', 3]")
print("Output:", number_string_sort([1, 'a', 2, 'b', 3]))
print("Expected: ([1, 2, 3], ['a', 'b'])\n")

# Exercise 12
print("------------Exercise 12------------")

def is_palindrome(string_value):
    i = 0
    j = len(string_value) - 1
    flag = True
    while (i < j and flag):
        if string_value[i] != string_value[j]:
            flag = False
        i += 1
        j -= 1
    return flag

print(is_palindrome("radar"))
print(is_palindrome("John"))

# Exercise 13
print("------------Exercise 13------------")

def sum_over_k(sentence,k):
    words = sentence.split()
    count = 0
    for word in words:
        if len(word) > k:
            count += 1
    return count

sentence = 'Do or do not there is no try'
k=2
print(sum_over_k(sentence,k)) #3

# Exercise 14
print("------------Exercise 14------------")

def dict_avg(dictionary):
    total = 0
    for x in dictionary.values():
        total += x
    return total / len(dictionary)

print(dict_avg({'a': 1,'b':2,'c':8,'d': 1}))

# Exercise 15
print("------------Exercise 15------------")

def common_div(num1, num2):
    gcd = math.gcd(num1, num2)
    result = set()
    for i in range(1, int(gcd**0.5) + 1):
        if gcd % i == 0:
            result.add(i)
            result.add(gcd // i)
    return sorted(result)

print(common_div(10,20))

# Exercise 16
print("------------Exercise 16------------")

def is_prime(n):
    if n <= 1:
        return False
    if n == 2:
        return True
    if n % 2 == 0:
        return False
    for i in range(3, int(n**0.5) + 1, 2):
        if n % i == 0:
            return False
    return True

print(is_prime(11)) #True
print(is_prime(6)) #False

# Exercise 17
print("------------Exercise 17------------")

def weird_print(array):
    result = []
    for index, element in enumerate(array):
        if index % 2 == 0 and element % 2 == 0:
            result.append(element)
    print(result)

weird_print([1,2,2,3,4,5]) #[2, 4]

# Exercise 18
print("------------Exercise 18------------")

def type_count(**kwargs):
    dictionary = {}
    for key, value in kwargs.items():
        value_type = type(value).__name__
        if value_type not in dictionary:
            dictionary[value_type] = 1
        else: 
            dictionary[value_type] += 1
    return ", ".join(f"{t}: {count}" for t, count in dictionary.items())

print(type_count(a=1,b='string',c=1.0,d=True,e=False)) #int: 1, str: 1, float: 1, bool: 2

# Exercise 19
print("------------Exercise 19------------")

def mimic_split(string, separator=" "):
    strings = []
    current_word = ""
    for char in string:
        if char == separator and current_word:
            strings.append(current_word)
            current_word = ""
        else:
            current_word += char
    if current_word:
        strings.append(current_word)
    return strings

test_string = "hello world test"
result = mimic_split(test_string)
print(result)  #['hello', 'world', 'test']

# Exercise 20

print("------------Exercise 20------------")

def convert_to_password(string):
    return '*' * len(string)

print(convert_to_password("secret"))