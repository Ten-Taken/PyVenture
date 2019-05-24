age = 83
name = "Stan"
todayIsCold = True

print("My name is {} and I am {} years old".format(name,age))

if age > 18:
    print("You're older than 18")
else:
    print("You're younger than 18")

if todayIsCold:
    print("Today is cold!")

# Single comment

"""
Multiline comment - docstring
see
"""

def hello(thestring="Biff", theage=0):
    return "Hello {}! You are {} old.".format(thestring, theage)

hello()
sentence = hello(name, age)

print(sentence)


# List [array] ordered, indexed
dognames = ["Noelle", "Marcy", "Fido", "Sally", "Rufus", True, 400]
print(dognames)
dognames.insert(2, "Drogo")
print(dognames)
del(dognames[2])
print(dognames)
print(len(dognames))

# for loop
gotCharacters = ['Cersei', 'Theon', 'Arya', 'The Hound', 'Sir Jorah']

for character in gotCharacters:
    print(character)

for x in range(1, 5):
    print(x)

# while loop
time = 0

while time < 18:
    print(time)
    time += 1

# Dictionaries {key: value}, are unordered
dragons = {"Drogon": 2, "Meraxes": 107, "Rhaegar": 97}
print(dragons["Drogon"], " years old")

# Classes

class Lovers:

    # init is basically a class constructor. default values set here
    def __init__(self, age = 37, haircolor = "red"):
        self.age = age
        self.haircolor = haircolor

    myclassvariable = "public class variable"

    def flirt(self, name):
        print("{}: Hey cutie!".format(name))

"""
Objects pass themselves as the first parameter to a class method.
That is the reasoning for 'self'
"""
# Instantiating an object
newLove = Lovers(40, "blonde")
newLove.flirt("Tiffany")
# Instance variable
newLove.name = "Tiff"
print(newLove.name)

newLove.myclassvariable = "I've been mutated"

# Class variable accessible from class or object
print(Lovers.myclassvariable)
print(newLove.myclassvariable)

print(newLove.age, newLove.haircolor)

redheaddefault = Lovers()
print(redheaddefault.haircolor)
