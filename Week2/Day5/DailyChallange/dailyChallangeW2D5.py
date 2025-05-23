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
