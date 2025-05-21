#Daily challenge : Text Analysis
import string
import re
import os

class Text:
    def __init__(self, text):
        """Initialize with a text string."""
        self.text = text

    @classmethod
    def from_file(cls, file_path):
        """Create Text instance by reading text from a file."""
        with open(file_path, "r", encoding="utf-8") as f:
            return cls(f.read())

    def word_frequency(self, word):
        """Return the number of times `word` appears in the text."""
        words = self.text.split()
        count = 0
        for item in words:
            if item == word: count += 1
        return count if count > 0 else None
    
    def most_common_word(self):
        """Return the word with the highest frequency in the text."""
        words = self.text.split()
        freq_dict = {}

        for word in words:
            freq_dict[word] = freq_dict.get(word, 0) + 1

        most_common = max(freq_dict, key=freq_dict.get)
        return most_common
     
    def unique_words(self):
        """Return a list of unique words in the text."""
        unique_w = set(self.text.split())
        return list(unique_w)

class TextModification(Text):
    def __init__(self, text):
        """Initialize TextModification inheriting from Text."""
        super().__init__(text)
        
    def remove_punctuation(self):
        """Return text with all punctuation characters removed."""
        punctuation = string.punctuation
        pattern = '[' + re.escape(punctuation) + ']'
        cleaned_text = re.sub(pattern, '', self.text)
        return cleaned_text
    
    def remove_stop_words(self):
        """Return text with common English stop words removed."""
        stop_words = {
            "a", "an", "the", "and", "or", "but", "if", "while", "is", "are",
            "was", "were", "in", "on", "at", "by", "for", "with", "about", "against",
            "between", "into", "through", "during", "before", "after", "above", "below",
            "to", "from", "up", "down", "out", "off", "over", "under", "again", "further",
            "then", "once", "here", "there", "when", "where", "why", "how", "all", "any",
            "both", "each", "few", "more", "most", "other", "some", "such", "no", "nor",
            "not", "only", "own", "same", "so", "than", "too", "very", "can", "will",
            "just", "don't", "should", "now"
        }
        
        words = self.text.split()
        filtered_words = [word for word in words if word.lower() not in stop_words]
        modified_text = " ".join(filtered_words)
        return modified_text
    
    def remove_special_characters(self):
        """Return text with special characters removed, keeping only letters, digits, and spaces."""
        return re.sub(r'[^a-zA-Z0-9\s]', "", self.text)
    
sample_text = "Hello, world! This is a test. This test is only a test."


dir_path = os.path.dirname(os.path.realpath(__file__))
text = Text(sample_text)

print("Original text:", text.text)
print("Frequency of 'test':", text.word_frequency("test")) 
print("Most common word:", text.most_common_word())   
print("Unique words:", text.unique_words())

with open("test_file.txt", "w", encoding="utf-8") as f:
    f.write(sample_text)

text_from_file = Text.from_file("test_file.txt")
print("Text from file:", text_from_file.text)

tm = TextModification(sample_text)

print("Without punctuation:", tm.remove_punctuation())
print("Without stop words:", tm.remove_stop_words())
print("Without special characters:", tm.remove_special_characters())
