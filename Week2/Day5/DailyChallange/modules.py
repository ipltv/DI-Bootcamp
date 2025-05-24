import requests
import time

urls = {
    "Google.com" : "https://www.google.com/",
    "Ynet.co.il" : "https://www.ynet.co.il/",
    "IMDb" : "https://www.imdb.com/",
    "New Zealand Government Site" : "https://www.govt.nz/"
}

headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
                  "AppleWebKit/537.36 (KHTML, like Gecko) "
                  "Chrome/114.0.0.0 Safari/537.36"
}

def get_load_time(url):
    try:
        start_time = time.time()
        response = requests.get(url, headers=headers)
        response.raise_for_status()  # Raise an error for bad responses
        _ = response.content  # Ensure full download
        finish_time = time.time()
        return round(finish_time - start_time, 3)
    except requests.exceptions.RequestException as e:
        return f"Error: {e}"

for url in urls:
    print(f"It takes {get_load_time(urls[url])} second(s) for loading {url}")

