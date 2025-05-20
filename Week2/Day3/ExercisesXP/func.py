#Exercise 2: Import

def sum_two_number(number1, number2):
    if not isinstance(number1, (int, float)) and not isinstance(number2, (int, float)):
        raise ValueError("Value should be a number")
    else:
        return number1 + number2

