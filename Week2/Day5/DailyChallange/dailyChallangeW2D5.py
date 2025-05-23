# Exercise 1: Quizz
# Answer the following questions:

# Q: What is a class?
# A: A class is a blueprint for creating objects (instances) that defines their structure and behavior. 
# It can include fields (attributes), methods (functions), and properties.

# Q: What is an instance?
# A: An instance is a specific object created from a class. 
# It contains real data and can use the class's methods and properties.

# Q: What is encapsulation?
# A: Encapsulation is an OOP principle that restricts direct access to an object's internal state. Instead, it exposes functionality through methods and properties. 

# Q: What is abstraction?
# A: Abstraction is an OOP principle that involves hiding unnecessary implementation details and exposing 
# only the essential features of an object. It helps reduce complexity and improve focus.

# Q: What is inheritance?
# A: Inheritance is an OOP principle that allows a class (child or subclass) to inherit properties and methods 
# from another class (parent or superclass), enabling code reuse and hierarchical relationships.

# Q: What is multiple inheritance?
# A: Multiple inheritance is a feature in some programming languages where a class can inherit from more than one parent class. 
# This allows it to combine functionality from multiple sources.

# Q: What is polymorphism?
# A: Polymorphism is an OOP principle that allows objects of different classes to be treated as instances of the same parent class. 
# It enables a single interface to work with different underlying data types.

# Q: What is method resolution order or MRO?
# A: Method Resolution Order (MRO) is the order in which Python looks for a method or attribute in a class hierarchy. 
# It defines the sequence in which base classes are searched when executing a method.

#Exercise 2: Create a deck of cards class
from enum import Enum
import random

class Suits(Enum):
    """Enumeration of card suits."""
    HEARTS = 1
    DIAMONDS = 2
    CLUBS = 3
    SPADES = 4
    
class CardValue(Enum):
    """Enumeration of card values."""
    ACE = "A"
    TWO = "2"
    THREE = "3"
    FOUR = "4"
    FIVE = "5"
    SIX = "6"
    SEVEN = "7"
    EIGHT = "8"
    NINE = "9"
    TEN = "10"
    JACK = "J"
    QUEEN = "Q"
    KING = "K"

class Card():
    """Represents a single playing card with suit and value."""
    def __init__(self, suit, value):
        self.suit = suit
        self.value = value
        
    @property
    def suit(self):
        """Returns the suit of the card."""
        return self._suit
    
    @suit.setter
    def suit(self, value):
        """Validates and sets the suit of the card."""
        if not isinstance(value,Suits):
            raise ValueError("Value should be Suits instance.")
        else:
            self._suit = value
    
    @property
    def value(self):
        """Returns the face value of the card."""
        return self._value
    
    @value.setter
    def value(self, value):
        """Validates and sets the face value of the card."""
        if not isinstance(value, CardValue):
            raise ValueError("Invalid value.")
        else:
            self._value = value
            
    def __repr__(self) -> str:
        """Returns a string representation of the card (e.g., 'A of Hearts')."""
        return f"{self.value.value} of {self.suit.name.capitalize()}"
    
class Deck:
    """Represents a standard deck of 52 playing cards."""
    def __init__(self):
        """Initializes a new deck with 52 unique cards."""
        self._cards = []
        for suit in Suits:
            for value in CardValue:
                self._cards.append(Card(suit,value))
                
    @property
    def cards(self):
        """Returns a copy of the current cards in the deck (read-only)."""
        return self._cards.copy()
    
    def shuffle(self):
        """Shuffles the deck of cards."""
        if len(self._cards) != 52:
            raise ValueError("The deck must contain exactly 52 cards before shuffling.")
        else:
            random.shuffle(self._cards)
            
    def deal(self):
        """Deals (removes and returns) the top card from the deck."""
        return self._cards.pop()
    
def test_deck():
    print("Creating a new deck...")
    deck = Deck()
    
    print("\nDeck before shuffling:")
    print(deck.cards)

    print("\nShuffling the deck...")
    deck.shuffle()

    print("\nDeck after shuffling:")
    print(deck.cards)

    print("\nDealing 5 cards:")
    for _ in range(5):
        card = deck.deal()
        print(f"Dealt: {card}")

    print(f"\nCards left in deck: {len(deck.cards)}")

    print("\nDealing all remaining cards...")
    while True:
        try:
            card = deck.deal()
        except IndexError:
            print("All cards have been dealt.")
            break

    print(f"\nCards left in deck: {len(deck.cards)}")


if __name__ == "__main__":
    test_deck()
