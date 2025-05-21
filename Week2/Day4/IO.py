# Read the file line by line
# Read only the 5th line of the file
# Read only the 5 first characters of the file
# Read all the file and return it as a list of strings. Then split each word
# Find out how many occurences of the names "Darth", "Luke" and "Lea" are in the file
# Append your first name at the end of the file
# Append "SkyWalker" next to each first name "Luke"

from collections import Counter
import json
import os

dir_path = os.path.dirname(os.path.realpath(__file__))

with open(f"{dir_path}/nameslist.txt", "r+", encoding="utf-8") as f:
    for i, line in enumerate(f):
        print(f"This is line number {i}: {line}", )
        
with open(f"{dir_path}/nameslist.txt", "r+", encoding="utf-8") as f:
    for i, line in enumerate(f):
        if i == 4:
            print(f"This is fifth line: {line}", )
            break
        
with open(f"{dir_path}/nameslist.txt", "r+", encoding="utf-8") as f:
    print(f"First five characters: {f.read(5)}")
    
with open(f"{dir_path}/nameslist.txt", "r+", encoding="utf-8") as f:
    strings = list(map(str.strip, f.readlines()))
freq_dict = Counter(strings)
print(f"Occurences of the names:\n Darth : {freq_dict["Darth"]};\n Luke : {freq_dict["Luke"]};\n Lea : {freq_dict["Lea"]}")

with open(f"{dir_path}/nameslist.txt", "a+", encoding="utf-8") as f:
    f.write("\n")
    f.write("Ilya")
    
updated_list = [line + " SkyWalker" if line == "Luke" else line for line in strings]
print(updated_list)
with open(f"{dir_path}/nameslist.txt", "w") as f:
    f.write("\n".join(updated_list))
