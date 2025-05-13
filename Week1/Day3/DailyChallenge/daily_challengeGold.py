#Daily challenge GOLD: Caesar Cypher

while True:
    try:
        step = int(input("Enter the step for the Caesar Cypher: "))
        step = step % 26  # Normalize the step to be within the range of -25 to 25.
        mode = int(input("Enter 0 for encrypting or 1 for decrypting: "))
        if mode != 0 and mode != 1:
            raise ValueError("Invalid input. Enter 0 for encrypting or 1 for decrypting.")
        if mode == 1:
            step = -step  # If the user chooses to decrypt, negate the step value.
    except ValueError as e:
        print("Invalid input. Please enter a valid step. Original error:", e)
        continue
    else:
        break

cypher_text = ""  # Initialize an empty string to store the cypher text.

userInput = input("Enter a text: ")
for letter in userInput:
    if letter.isalpha():  # Check if the character is a letter.
        if letter.isupper():
            base = ord('A')
        else: 
            base = ord('a')
        cypher_text += chr((ord(letter) - base + step) % 26 + base)  # Encrypt or decrypt letters.
    else:  # If the character is not a letter, keep it unchanged.
        cypher_text += letter
print(cypher_text)  # Output: The encrypted or decrypted text based on the user's input.
#The end.   