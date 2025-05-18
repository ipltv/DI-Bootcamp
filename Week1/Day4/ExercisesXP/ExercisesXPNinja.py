#Exercise 1 : What’s your name ?
print("--------------Exercise 1--------------")

def get_full_name(first_name, last_name, middle_name=""):
    if middle_name:
        return f"{first_name} {middle_name} {last_name}"
    else:
        return f"{first_name} {last_name}"

print(get_full_name(first_name="john", middle_name="hooker", last_name="lee"))
print(get_full_name(first_name="bruce", last_name="lee"))

#Exercise 2 : From English to Morse
print("--------------Exercise 2--------------")

morse_code_dict = {
    'A': '.-',     'B': '-...',   'C': '-.-.', 
    'D': '-..',    'E': '.',      'F': '..-.',
    'G': '--.',    'H': '....',   'I': '..',
    'J': '.---',   'K': '-.-',    'L': '.-..',
    'M': '--',     'N': '-.',     'O': '---',
    'P': '.--.',   'Q': '--.-',   'R': '.-.',
    'S': '...',    'T': '-',      'U': '..-',
    'V': '...-',   'W': '.--',    'X': '-..-',
    'Y': '-.--',   'Z': '--..',
    
    '0': '-----',  '1': '.----',  '2': '..---',
    '3': '...--',  '4': '....-',  '5': '.....',
    '6': '-....',  '7': '--...',  '8': '---..',
    '9': '----.',
}

reverse_morse_dict = {value: key for key, value in morse_code_dict.items()}

def text_encoder(text):
    result = ""
    words = text.upper().split(" ")
    for word in words:
        for letter in word:
            result += morse_code_dict[letter] + " "
        result += "/"
    return result

def text_decoder(text):
    result = ""
    words = text.split("/")
    for word in words:
        for letter in word.split():
            result += reverse_morse_dict[letter]
        result += " "
    return result
    

text = "Nils Brsikovich the best"
encode_text = text_encoder(text)
print(encode_text)

decode_text = text_decoder(encode_text)
print(decode_text)

#Exercise 3 : Box of stars
print("--------------Exercise 3--------------")

def box_printer(*args):
    max_len = max(len(word) for word in args)
    print("*" * (max_len + 4))
    for word in args:
        print(f"* {word.ljust(max_len)} *")
    print("*" * (max_len + 4))
    
box_printer("Hello", "World", "in", "reallylongword", "a", "frame")

#Exercise 4 : What is the purpose of this code?

def insertion_sort(alist):
   for index in range(1,len(alist)):

     currentvalue = alist[index]
     position = index

     while position>0 and alist[position-1]>currentvalue:
         alist[position]=alist[position-1]
         position = position-1

     alist[position]=currentvalue

alist = [54,26,93,17,77,31,44,55,20]
insertion_sort(alist)
print(alist)

# The purpose of this code is sort array of digits throug insertion algorithm.