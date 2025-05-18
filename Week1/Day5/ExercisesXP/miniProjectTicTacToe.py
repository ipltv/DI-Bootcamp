import os
PLACEHOLDER = ' '
X_SIGN = 'X'
O_SIGN = 'O'


def display_board(board):
    os.system("cls")
    print("----------------Tic Tac Toe----------------") 

    print("    1   2   3")
    print("  ┌───┬───┬───┐")
    for i, row in enumerate(board):
        row_str = f"{i+1} │ " + " │ ".join(row) + " │"
        print(row_str)
        if i < 2:
            print("  ├───┼───┼───┤")
        else:
            print("  └───┴───┴───┘")

def player_input(board, player):
    while True:
        try:
            print(f"It's your turn Player {player}!")
            row = int(input("Enter row number (between 1 and 3): ").strip())
            if not 1 <= row <= 3:
                raise ValueError("Row number should be between 1 and 3.")
            column = int(input("Enter column number (between 1 and 3): ").strip())
            if not 1 <= column <= 3:
                raise ValueError("Column number should be between 1 and 3.")
            #convert user input to matrix indexes
            row -= 1
            column -= 1
            #checking if is already there a value in the cell
            if board[row][column] != PLACEHOLDER: 
                raise ValueError("This cell is already occupied. Try again.")
            board[row][column] = player
        except ValueError as e:
            print("The error has occured. Please try againt. Original error message: ", e)
        else:
            return (row, column)

def check_line(cell1, cell2, cell3, player):
    return cell1 == player and cell2 == player and cell3 == player

def check_win(board, player):
    # Cheking horizontal
    if check_line(board[0][0], board[0][1], board[0][2], player): return True
    if check_line(board[1][0], board[1][1], board[1][2], player): return True
    if check_line(board[2][0], board[2][1], board[2][2], player): return True

    # Cheking vertical
    if check_line(board[0][0], board[1][0], board[2][0], player): return True
    if check_line(board[0][1], board[1][1], board[2][1], player): return True
    if check_line(board[0][2], board[1][2], board[2][2], player): return True

    # Cheking main and secondary diagonals
    if check_line(board[0][0], board[1][1], board[2][2], player): return True
    if check_line(board[0][2], board[1][1], board[2][0], player): return True
    return False
    
def check_tie(board):
    #cheking that there is no freespace on the board
    for i in range(len(board)):
        for j in range(len(board[0])):
            if board[i][j] == PLACEHOLDER:
                return False
    return True

def play():
    board = [list(PLACEHOLDER * 3) for _ in range(3)] #generate clear game board
    display_board(board) #dispay clear board
    
    current_player = O_SIGN #initialize with O. For the first step it will be changed to X-player.
    is_tie = False 
    has_winner = False
    #main loop of the game
    while not has_winner and not is_tie:
        current_player = X_SIGN if current_player == O_SIGN else O_SIGN #choosing current player
        display_board(board)
        player_input(board, current_player)
        is_tie = check_tie(board)
        has_winner = check_win(board, current_player)
    
    #dispay final state of the board
    display_board(board)
    #Check drawn / print message to the winner
    if has_winner:
        print(f"\U0001F389 Congratulation! Player {current_player} win! \U0001F389")
    else:
        print("DRAW!")

#call the game function 
play()