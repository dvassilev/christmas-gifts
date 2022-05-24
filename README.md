# christmas-gifts
The app works on the principle of secret santa. There's a group of participants and each one enters the site so they get a random person, whom they should give their present. 

The app works that way:
1) First the names of the participants are inserted in a Firebase database with property true/false, indicating if they are taken(somebody's already giving them a gift)
3) Then the participant enters the index.html file and chooses their name, so that they don't give a gift to themselves 
4) The app gets random name from Firebase and checks if that person is free and if it is a different one from the one who's drawing at the moment
5) After it's authenticated, the name is shown on the screen so now the drawing participant has a person to give his/her present to
