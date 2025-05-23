# rock-paper-scissors.py
from game import Game
import os

def get_user_menu_choice():
    """Displays the main menu and gets the user's choice.

    Returns:
        int: The user's selected menu option (1, 2, or 3).
    """
    while True:
        user_input = input(f"Please make your choice and press enter:\n 1 - Play a new game;\n 2 - Show scores;\n 3 - Quit;\nYour input: ")
        try:
            user_input = int(user_input)
            if not 1 <= user_input <= 3:
                raise ValueError("Input should be between 1 and 3")                
        except ValueError as e:
            print("Invalid input. Please try again. You should input one digit between 1 and 3. Original message: ", e)
        else:
            print(f"User choice: {user_input}")
            return user_input
        
def print_results(results):
    """Prints the current game scores.

    Args:
        results (dict): Dictionary containing 'win', 'loss', and 'draw' counts.
    """
    print(f"{'-' * 20} Results {'-' * 20}")
    print(f"Wins: {results['win']}, Losses: {results['loss']}, Draws: {results['draw']}")
    print(f"{'-' * 49}")
    
def one_turn_print(result):
    '''Print game result for one turn'''
    if result == 'win': print("You win")
    if result == 'loss': print("You lose")
    if result == 'draw': print("It's draw!")

def main():
    """Runs the main loop of the Rock-Paper-Scissors game."""
    results = {"win": 0, "loss": 0, "draw": 0}
    while True:
        user_choice = get_user_menu_choice()
        if user_choice == 1:
            game = Game()
            print(f"{'-' * 20} Rock Paper Scissors {'-' * 20}")
            game_result = game.play()
            results[game_result] += 1
            one_turn_print(game_result)
        if user_choice == 2: print_results(results)
        if user_choice == 3: 
            print_results(results)
            print("Thanks for playing! Goodbye!")
            break

if __name__ == "__main__":
    main()