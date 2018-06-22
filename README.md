# Project 4 - Full Stack Django App

## Proposal

### Introduction

**LOL K**

LOL K (League of Legends Knockoff) is just a fun silly game that is based off of the classic, "Rock, Paper, Scissors". Users will be able to create their own account, pick a "Champion" from the **League of Legends** API, and then go up against a computer generated "Champion". This app will document all wins, draws, and losses per the user's profile.

### Technologies

  * Python, Django, Postgres
  * JQuery
  * Use lectures, Googles, and Docs to research and build this project

### MVP

  * Users must be CRUD
  * Pull and display "Champions" from their free API

### Goals

  * Users can select "Champions" to play against computer
  * History of matches (2nd related table?)
  * Users can message each other or comment on each other's matches(3rd related table?)
  * Display matches on home.html and profile.html

### Stretch Goals

  * Users can search "Champions" by name to go up against computer generated ones
  * Aesthetically appealing page

### Timeline
  * **Monday** - Files organized, tables setup, start working on pulling from API
  * **Tuesday** - Finish API, MVP done, start working on games
  * **Wednesday** - Finish game, display matches, make everything pretty
  * **Thursday** - Make everything pretty, CSS/Bootstrap?, Update Readme

### Wireframes

![Wireframe](wireframe/profile.png)
![Wireframe](wireframe/champions.png)

### Crow's foot diagram

![Diagram](wireframe/diagram.png)

### Struggles

  * Showing the top rankings and the rank of each user was a feature that I really wanted to have, and that proved to be difficult. I was able to use a lot of googling to help me get it to print the way I wanted it to show.
  * I felt like I did a lot of front end DOM manipulation and not enough back end requests. It was difficult to keep everything in the backend.
  * I had a number of situations where I would repeat use a variable name. I think it's because I don't notice I'm declaring the variable as we're no longer using 'var, let, const'

### App

https://protected-oasis-22456.herokuapp.com/

![Homepage](screenshots/homepage.png)
![Champions](screenshots/champion.png)
![Battle Ground](screenshots/battle.png)
![Profile](screenshots/profile.png)
![Battle](screenshots/showbattle.png)

### Future Goals

* I would like to be able to take more stats into consideration when calculating the wins/losses.
* It would have been great to be able to add a place where the users could socialize. Perhaps a forum, chat, or message box.
* I think I would have also liked to make a mobile version of this. This type of game is probably more appealing to people that are on their phones, and not sitting at their computer.
