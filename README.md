# Coding exercise for Frontend using React

This is a React application created using Vite/Node.js and Mantine.dev libraries. The application features:
- Displaying sports, tournaments and matches data from external RestAPI endpoints
- The sports are displayed in the sidebar
- The matches are displayed in a table
- The tournaments are displayed as selectable items above the table of matches
- Unit tests are included for the services

The application provides filtering options:
- Filter the matches by home and away team using the search bar
- Filter the tournaments / matches using the sidebar sport selection
- Filter the matches using the tournament selection

Multi-selection filtering is possible.

## Run the application
Prerequisites - Node.js (https://nodejs.org/en/download)

Clone the project: 
```
git clone https://github.com/TamaraJolevska/coding-exercise-fe.git
```
Install the dependency:
```
npm install
```
Run the application:
```
npm run dev
```

## Open the application in the browser
http://localhost:3000/

## Test the unit tests in the test folder
There are provided three tests for each service: MatchService.test.js, SportService.test.js and TournamentService.test.js