# 1. Accessing the nested dictionary
sample_dict = { 
   "class":{ 
      "student":{ 
         "name":"Mike",
         "marks":{ 
            "physics":70,
            "history":80
         }
      }
   }
}

print(sample_dict["class"]["student"]["marks"]["history"])  # Output: 80

#2. Delete set of keys from Python Dictionary
sample_dict = {
  "name": "Kelly",
  "age":25,
  "salary": 8000,
  "city": "New york"

}
keys_to_remove = ["name", "salary"]

for key in keys_to_remove:
    sample_dict.pop(key, None)
    
print(sample_dict)  # Output: {'age': 25, 'city': 'New york'}
