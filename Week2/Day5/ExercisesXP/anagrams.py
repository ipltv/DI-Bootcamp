#Mini-project : Anagram checker
from anagram_checker import AnagramChecker
import os
import re
import string

dir_path = os.path.dirname(os.path.realpath(__file__))
file_path = dir_path + r"\sowpods.txt"

alphabetic_characters = string.ascii_letters
while True:
    user_input = input("Please input one word to get possible anagrams or input \"exit\" to quit: ").strip()
    if user_input == "exit":
        break
    if len(user_input.split()) != 1 or not re.fullmatch(f"^[{alphabetic_characters}]+$",user_input):
        print("Invalid input. Please input one word contains only letter.")
        continue
    try:
        anagramChecker = AnagramChecker(file_path)
    except FileNotFoundError:
        print(f"Error: File not found at path {file_path}")
        break
    except Exception as e:
        print(f"Unexpected error while loading word list: {e}")
        break
    if not anagramChecker.is_valid_word(user_input):
        print("This is not a valid English word.")
        continue
    result = anagramChecker.get_anagrams(user_input)
    print(f"YOUR WORD: {user_input.capitalize()}. This is a valid English word.")
    if result:
        print(f"Here are your anagrams ({len(result)} found):")
        print("-" * 40)
        for idx, anagram in enumerate(result, start=1):
            print(f"{idx}. {anagram}")
    else:
        print("No anagrams found.")
    