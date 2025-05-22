#Mini-project : Anagram checker

from collections import Counter
from collections import defaultdict
import os

class AnagramChecker:
    def __init__(self, file_path):
        '''Initializes the AnagramChecker with a path to a word list file.'''
        if not os.path.isfile(file_path):
            raise FileNotFoundError(f"The file at {file_path} was not found.")
        try:
            with open(file_path, "r", encoding="utf-8") as file:
                self.word_list = set([word.strip() for word in file.read().split()])
                self.anagram_dict = defaultdict(list)
                for word in self.word_list:
                    key = ''.join(sorted(word))
                    self.anagram_dict[key].append(word)
        except Exception as e:
            print("An error has occured. Original message: ", e)
        
    def is_valid_word(self, word):
        '''Checks if the given word is a valid English word from the word list.'''
        if word.upper() in self.word_list:
            return True
        else: return False
        
    @staticmethod
    def is_anagram(word1, word2):
        '''Determines whether two words are anagrams of each other.'''
        counter_word1 = Counter(word1)
        counter_word2 = Counter(word2)
        
        if counter_word1 == counter_word2:
            return True
        else: return False
        
    def get_anagrams(self, word):
        '''Finds all valid anagrams of the given word from the word list.'''
        word = word.upper()
        key = ''.join(sorted(word.upper()))
        return [w for w in self.anagram_dict.get(key, []) if w != word.upper()]
    
    

