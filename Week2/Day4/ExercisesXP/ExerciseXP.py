import os
import random

#Exercise 1: Random Sentence Generator
print("--------------Exercise 1--------------")

def get_words_from_file(file_path):
    with open(file_path, "r", encoding="utf-8") as f:
        lines = list(map(lambda w: w.strip(",.!?"), f.read().split(" ")))
    return lines

def get_random_sentence(file_path, length):
    words = get_words_from_file(file_path)
    sentence = ""
    for _ in range(length):
        sentence += words[random.randint(0, len(words) - 1)] + " "
    return sentence
        

dir_path = os.path.dirname(os.path.realpath(__file__))
file_path = f"{dir_path}/text.txt"

while True:
    print("The program returns a random sentence based on length you input.")
    try:
        length = int(input("Please enter length of the sentence: "))
        if length <= 0:
            print("Invalid input. You have to input positive number.")
        else:
            print(get_random_sentence(file_path, length))
            break
    except ValueError as e:
        print("Invalid input. Original error message: ", e)