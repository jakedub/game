initial


Have Completed:
1. Step One - all
2. Step Two - 3. 
3. Step Three - 1.

Steps:

Step One - Set Up
1. Install Packages
2. Correctly label in the index file.
3. Set up HTML document/mustache
4. Add in a render page
5. Add in a local host server

Step Two - Functionality
1. Compete against a computer.
2. New user gets a random word assigned to them from: /usr/share/dict/words
3. Need the app to pull words from: /usr/share/dict/words -- should be able to use app.use(express.static(./usr/share/dict/words))
4. Page needs to show the number of words using an underline.
5. Store the word being guessed in session.
6. Ask the user for one word at a time using a form. This needs validated to ensure one word sent. Can be uppercase or lowercase. Should see the schema for the validation. If more than one letter return an error.
7. Store guesses in session and an alert if correct.
8. Display partially guessed word on the screen.
9. Max the guesses at 8. If then statements on inputs that led to incorrect guesses.
10. Same letter sent then prompt that it's been guessed and try again.
11. Run out of guesses then game ends, display the word.
12. If all guesses successful then display congrats.
13. Game ends regardless ask to play again. If Yes then redirect. If No then alert "I will destroy you"

Step Three - Design
1. Attach CSS page.
2. Have header far left
3. Have guesses far right
4. 50px (?) completion in the center
5. Input at 100 px (?) width
6. Submit button with text of "Make a Guess"
7. Letters guessed below the Input


Instructions: You will implement the game Mystery Word as a web application. In your game, you will be playing against the computer.

When a user that is not in a current game arrives at your root page, your app must select a word at random from the list of words in the file /usr/share/dict/words. This file exists on your computer already. You will have to read it with Node. The following line will read it and split it into words:

Store the word the user is trying to guess in a session.

On the page, show the number of letters in the word like so:

_ _ _ _ _ _ _

Ask the user to supply one guess (i.e. letter) at a time, using a form. This form should be validated to make sure only 1 letter is sent. This letter can be upper or lower case and it should not matter. If a user enters more than one letter, tell them the input is invalid and let them try again.

Let the user know if their guess appears in the computer's word. You will have to store the user's guesses in the session.

Display the partially guessed word, as well as letters that have not been guessed. For example, if the word is BOMBARD and the letters guessed are a, b, and d, the screen should display:

B _ _ B A _ D

A user is allowed 8 guesses. Remind the user of how many guesses they have left after each round. The guesses they have left will be determined by what you have in the session.

A user loses a guess only when they guess incorrectly. If they guess a letter that is in the computer's word, they do not lose a guess.

If the user guesses the same letter twice, do not take away a guess. Instead, display a message letting them know they've already guessed that letter and ask them to try again.

The game should end when the user constructs the full word or runs out of guesses. If the player runs out of guesses, reveal the word to the user when the game ends.

When a game ends, ask the user if they want to play again. The game begins again if they reply positively.
