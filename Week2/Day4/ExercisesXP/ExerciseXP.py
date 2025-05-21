import os
import random
import json

def get_words_from_file(file_path):
    """
    Reads a file and gets a list of words.
    Removes punctuation from the words.
    """
    with open(file_path, "r", encoding="utf-8") as f:
        lines = [word.strip(",.!?") for word in f.read().split() if word.strip(",.!?")]
    return lines

def get_random_sentence(file_path, length):
    """
    Makes a random sentence with words from the file.
    The sentence has the number of words you asked for.
    """
    words = get_words_from_file(file_path)
    return " ".join(random.choice(words) for _ in range(length)).lower()
        
def main(file_path):
    """
    Asks the user how long the sentence should be.
    Shows a random sentence with that many words.
    """
    #Exercise 1: Random Sentence Generator
    print("--------------Exercise 1--------------")
    while True:
        print("The program returns a random sentence based on length you input.")
        try:
            length = int(input("Please enter length of the sentence: "))
            if not 2 <= length <= 20:
                print("Invalid input. You have to input positive number between 2 and 20.")
            else:
                print(get_random_sentence(file_path, length))
                break
        except ValueError as e:
            print("Invalid input. Original error message: ", e)


if __name__ == "__main__":
    dir_path = os.path.dirname(os.path.realpath(__file__))
    file_path = f"{dir_path}/words.txt"
    if not os.path.isfile(file_path):
        print(f"File '{file_path}' not found. Please make sure it exists.")
    else:
        main(file_path)
    
    #Exercise 2: Working with JSON
    print("--------------Exercise 2--------------")
    sampleJson = """{ 
    "company":{ 
        "employee":{ 
            "name":"emma",
            "payable":{ 
                "salary":7000,
                "bonus":800
            }
        }
    }
    }"""
    
    data = json.loads(sampleJson)
    print(data["company"]["employee"]["payable"]["salary"])
    data["company"]["employee"]["birth_date"] = "1999-01-01"
    with open(f"{dir_path}/data.json", "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2)
    print("Modified JSON has been saved to data.json.")