#Gregory Wolfe

#This is a python comment

#colon ':' begins a block(no braces)

#"preferred community style" is using _ over camel casing, however not a required convention
#alt-p, repeat last entry in IDLE. Inside bash, can up arrow as usual

#lists are more like traditional arrays

import random

#function definitions (uses 'def' keyword)

	#returns random word
def getWord():
	wordsList = ["pasta", "orange", "thunder", "snake","tuna", "canada", "beautiful"]
	word = wordsList[random.randint(0, len(wordsList)- 1)]
	return word

	#prints argument to user using for-in loop
def showWord(word):
	for character in word:
		print(character," ",end="") #end property changes default terminator from \n to null
	print("") # print new line after all characters in word

def getGuess():
	print("\nEnter a letter: ")
	return input()

def processLetter(letter, secretWord, blankWord):
	result = False

		#for letters in this range
	for i in range(0, len(secretWord)):
		if secretWord[i] == letter:
			result = True
			blankWord[i] = letter

	return result

def printStrikes(strikes):
	for i in range(0, strikes):
		print("X ", end="")
	print("") #print new line after iteration

def playWordGame():
	strikes = 0
	maxStrikes = 3
	playing = True

	word = getWord()
	blankWord = list("_" * len(word)) #converts string to list (almost like a C string, array)

	while playing:

		showWord(blankWord)

		letter = getGuess()

		found = processLetter(letter, word, blankWord)

		if not found:
			strikes+=1
			printStrikes(strikes)

		if strikes >= maxStrikes:
			playing = False

		if not "_" in blankWord:
			playing = False

	if strikes >= maxStrikes:
		print("Three strikes, you lose!\n")
	else:
		print("Winner!\n")

	print("The word was ", word)

print("Game started\n")

#invoke function (begins program execution)
playWordGame()

print("\nGame finished")