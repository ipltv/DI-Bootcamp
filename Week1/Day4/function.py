def greetings(language, userName):
    '''This function prints "Hello" in some languages.'''
    result = ""
    if language == "EN":
        print(f"Hello, {userName}!")
    elif language == "SP":
        print(f"¡Hola, {userName}!")
    elif language == "FR":
        print(f"Bonjour, {userName}!")
    elif language == "HE":
        print(f"שלום, {userName}!")
    elif language == "RU":
        print(f"Привет, {userName}!")
    else:
        print("Language not supported!")
greetings("HE", "David")

def country_info(country="Naboo"):
    if country == "Naboo":
        print(f"The capital of {country} is Theed.")
    elif country == "Italy":
        print(f"The capital of {country} is Rome.")
    elif country == "France":
        print(f"The capital of {country} is Paris.")
    elif country == "Israel":
        print(f"The capital of {country} is Jerusalem.")
    elif country == "Russia":
        print(f"The capital of {country} is Moscow.")
        
country_info("Italy")
country_info()