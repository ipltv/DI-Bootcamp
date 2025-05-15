def tasks_manager(*tasks):
    if tasks:
        for task in tasks:
            print(f"Today I need to do: {task}")

tasks_manager("task 1", "taskt 2")

def party_planner(*args, **kwargs):
    if args:
        print('You need to buy: ')
        for arg in args:
            print(arg)
    else:
        print('there is no food to buy' )

    if kwargs:
        print('Party details: ')

        for key, value in kwargs.items():
            print(f' {key} : \n {value}')
            
party_planner("Apples", "Oranges", "Beer", date="01/01/2026")
party_planner("Apples", "Oranges", "Beer")
party_planner(date="01/01/2026")

x = 5

y = x

x = 10

print(y)