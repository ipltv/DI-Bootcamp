#Daily challenge: Challenges
#Challenge 1: Sorting
print("--------------Challenge 1--------------")

user_input = input("Enter string with elements separeted by commas: ")
word_list = user_input.strip().split(',')
word_list.sort()
print(f"Your sorted list: {','.join(word_list)}")

#Challenge 2: Longest Word
print("--------------Challenge 2--------------")

def longest_word(text):
    words_list = text.strip().split()
    return max(words_list, key=len) 

print(longest_word("A thing of beauty is a joy forever."))