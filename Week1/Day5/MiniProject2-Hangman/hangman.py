import random
import os

hangman_template = [
    "┌─────────┐",
    "│         │",
    "│         [1]",
    "│	 [3][2][4]",
    "│        [5][6]",
    "│"
]
hangman_replace_dictionary = {
    "[1]" : "O",
    "[2]" : "│",
    "[3]" : "/",
    "[4]" : "\\",
    "[5]" : "/¯",
    "[6]" : "\\"
}

wordslist = ['correction', 'childish', 'beach', 'python', 'assertive', 'interference', 'complete', 'share', 'credit card', 'rush', 'south']

def displayGame(attempt):
    os.system('cls' if os.name == 'nt' else 'clear')
    
    print("----------------Hangman----------------")
    
    for row in hangman_template:
        row_copy = row
        for filler in hangman_replace_dictionary:
            if filler in row_copy:
                if int(filler[1]) <= attempt:
                    row_copy = row_copy.replace(filler, hangman_replace_dictionary[filler])
                else: 
                    row_copy = row_copy.replace(filler, " ")
        print(row_copy)
        
def getLetter():
    length = 0
    while length != 1:
        user_input = input("Please, input your letter (only one symbol): ").strip().lower()
        length = len(user_input)
    return user_input

def showWord(attempt, encrypted_word):
    print("It's you turn #", attempt)
    print("Your word: ", encrypted_word)
    

def checkUserGuess(word, encrypted_word, letter):
    return "".join([
    letter if word[i] == letter else encrypted_word[i]
    for i in range(len(word))
])

word = random.choice(wordslist)
encrypted_word = '*' * len(word)
attempt = 0

while True:
    displayGame(attempt)
    showWord(attempt, encrypted_word)
    user_letter = getLetter()
    if encrypted_word != checkUserGuess(word, encrypted_word, user_letter):
        encrypted_word = checkUserGuess(word, encrypted_word, user_letter)
    else:
        attempt += 1
    if encrypted_word == word:
        print("Congratulations! You guessed the word:", word)
        break
    if attempt > len(hangman_replace_dictionary):
        displayGame(attempt)
        print("You're lose. Try again.")
        print("The correct word was:", word)
        break