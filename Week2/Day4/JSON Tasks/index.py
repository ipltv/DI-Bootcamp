import json
import os

dir_path = os.path.dirname(os.path.realpath(__file__))

json_file = dir_path + r'\file.json'
with open(json_file, 'r') as file_obj:
    family = json.load(file_obj)
    
print(f"{family["firstName"]} {family["lastName"]} Age: {family["age"]}")
for index, child in enumerate(family["children"]):
    print(f"Child {index+1}: Name - {child["firstName"]} Age - {child["age"]}")
    
for child in family["children"]:
    child["favorite_color"] = "red"
    
with open(json_file, 'w') as file_obj:
    json.dump(family, file_obj, indent=2, sort_keys=True)

print(family)