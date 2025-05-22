import random


class Game:
    """A class to represent the Rock-Paper-Scissors game logic."""
    ROCK = "rock"
    PAPER = "paper"
    SCISSORS = "scissors"
    GAME_ITEM_STATE_OPTIONS = [ROCK, PAPER, SCISSORS]
    USER_ITEM_DICT = {1: ROCK, 2: PAPER, 3: SCISSORS}
    RULES = {
        ROCK : SCISSORS,
        SCISSORS : PAPER,
        PAPER : ROCK
    }
    def __init__(self):
        self._computer_item = None
        self._user_item = None
    
    @property
    def computer_item(self):
        """Gets the computer's selected item."""
        return self._computer_item
    
    @computer_item.setter
    def computer_item(self, value):
        """Sets the computer's item after validating the input.

        Args:
            value (str): The item to be set ('rock', 'paper', or 'scissors').

        Raises:
            ValueError: If the value is not one of the valid options.
        """
        if value.lower() not in self.GAME_ITEM_STATE_OPTIONS:
            raise ValueError(f"Invalid value. Item state could be only: {self.ROCK}, {self.PAPER}, {self.SCISSORS}")
        else:
            self._computer_item = value
            
    @property
    def user_item(self):
        """Gets the user's selected item.

        Returns:
            str: The user's choice ('rock', 'paper', or 'scissors').
        """
        return self._user_item
    
    @user_item.setter
    def user_item(self, value):
        """Sets the user's item after validating the input.

        Args:
            value (str): The item to be set ('rock', 'paper', or 'scissors').

        Raises:
            ValueError: If the value is not one of the valid options.
        """
        if value.lower() not in self.GAME_ITEM_STATE_OPTIONS:
            raise ValueError(f"Invalid value. Item state could be only: {self.ROCK}, {self.PAPER}, {self.SCISSORS}")
        else:
            self._user_item= value
        
    def get_user_item(self):
        """Prompts the user to select an item and validates the input.

        Returns:
            str: The user's valid choice.
        """
        while True:
            user_input = input(f"Please make your choice  and press enter:\n 1 - {self.ROCK};\n 2 - {self.PAPER};\n 3 - {self.SCISSORS};\nYour input: ")
            try:
                user_input = int(user_input)
                if not 1 <= user_input <= 3:
                    raise ValueError("Input should be between 1 and 3")                
            except ValueError as e:
                print("Invalid input. Please try again. You should input one digit between 1 and 3. Original message: ", e)
            else:
                self.user_item = self.USER_ITEM_DICT[user_input]
                print(f"User choice : {self.user_item}")
                return self.user_item 

    def get_computer_item(self):
        """Randomly selects an item for the computer.

        Returns:
            str: The computer's choice.
        """
        self.computer_item = random.choice(self.GAME_ITEM_STATE_OPTIONS)
        print(f"Computer choice : {self.computer_item}")
        return self.computer_item

    def get_game_result(self, user_item, computer_item):
        """Determines the result of the game.

        Args:
            user_item (str): The user's selected item.
            computer_item (str): The computer's selected item.

        Returns:
            str: The result of the game: 'win', 'loss', or 'draw'.
        """
        if user_item == computer_item:
            return "draw"
        elif self.RULES[user_item] == computer_item:
            return "win"
        else:
            return "loss"
        
    def play(self):
        """Plays a single round of the game.

        Returns:
            str: The result of the round ('win', 'loss', or 'draw').
        """
        user_choice  = self.get_user_item()
        computer_choice  = self.get_computer_item()
        return self.get_game_result(user_choice , computer_choice )