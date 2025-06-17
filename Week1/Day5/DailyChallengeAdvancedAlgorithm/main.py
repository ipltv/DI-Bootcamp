import random

list_of_numbers = [random.randint(0, 10000) for _ in range(20000)]

target_number   = 3728

seen = set()
found_pairs = set()

for i in list_of_numbers:
    goal = target_number - i
    pair = tuple(sorted((i, goal)))
    if goal in seen and pair not in found_pairs:
        print(f"{pair[0]} and {pair[1]} sum to {target_number}")
        found_pairs.add(pair)
    seen.add(i)
