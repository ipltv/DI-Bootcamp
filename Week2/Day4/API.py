import requests

parameters = {"lat": 31.771959, "lon": 35.217018}
response = requests.get("https://api.chucknorris.io/jokes/random")
print(response.text)
