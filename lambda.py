
from unicodedata import name


people = [
    {"name":"Harry", "house":"Gryffindor"},
    {"name":"Cho", "house":"Ravenclaw"},
    {"name":"Draco", "house":"Slytherin"}
]

#the lambda function compares two dicts
people.sort(key=lambda person: person["name"])

print(people)