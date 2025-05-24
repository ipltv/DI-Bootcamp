from pyowm import OWM
import os
import requests
from datetime import datetime

#get current dir and read API key 
dir_path = os.path.dirname(os.path.realpath(__file__))
with open(fr"{dir_path}/OpenWeatherMapAPI.txt", "r", encoding="utf-8") as file:
    api_key = file.read().strip()

#Initialize OpenWeatherMap instance
owm = OWM(api_key)
mgr = owm.weather_manager()

#request city and country from user
city = input("Input city name: ").strip()
country = input("Input two-letter country code (example, IL, US, RU): ").upper().strip()

#Get city data by REST API (PyOWN methods are deprecated)
try:
    response = requests.get(f"http://api.openweathermap.org/data/2.5/weather?q={city},{country}&appid={api_key}&units=metric&lang=ru")
    if response.status_code != 200:
        print(f"Error fetching data: {response.status_code} - {response.text}")
        exit()
    data = response.json()
    city_id = data["id"]
    country_code = data["sys"]["country"]
    lon = data["coord"]["lon"]
    lat = data["coord"]["lat"]
except Exception as e:
    print("An error accured. Origina message: ", e)

#get observation and weather data
observation = mgr.weather_at_id(city_id)
weather = observation.weather

#print base weather data
temperature = weather.temperature('celsius')
print(f"Temperature {city},{country}: {temperature['temp']}°C")

print("Status:", weather.detailed_status)
print("Clouds:", weather.clouds, "%")
print("Wind speed:", weather.wind()['speed'], "m/s")
print("Today's sunrise time:", datetime.fromtimestamp(weather.sunrise_time()).strftime('%H:%M:%S'))
print("Today's sunset time:", datetime.fromtimestamp(weather.sunset_time()).strftime('%H:%M:%S'))

#get forecast for every 3h next five days
forecast = mgr.forecast_at_id(city_id, "3h").forecast
for w in forecast.weathers[:5]:
    time = datetime.fromtimestamp(w.reference_time()).strftime('%H:%M:%S')
    status = w.detailed_status
    temp = round(w.temperature('celsius')['temp'])
    print(f"{time} | {status} | {temp}°C")

#get and print pollution data
air_mgr = owm.airpollution_manager()

air_quality = air_mgr.air_quality_at_coords(lat, lon)

print(f"AQI (Air Quality Index): {air_quality.aqi}/5 (1 - good, 5 - very poor)")
print("PM2.5:", air_quality.pm2_5)
print("PM10:", air_quality.pm10)
print("O3 (ozone):", air_quality.o3)
print("NO2:", air_quality.no2)