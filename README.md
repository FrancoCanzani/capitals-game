# Countries Game

Countries Game is a web application built using Next.js that tests your knowledge of world capitals. It provides an interactive quiz where you can guess the capital of a random country. The game features a leaderboard to track your progress.

## Table of Contents

- Installation
- Usage
- Components
- Dependencies
- License

## Installation

To run the Countries Game locally, follow these steps:

1. Clone the repository to your local machine:

git clone https://github.com/your-username/countries-game.git

2. Navigate to the project directory:

cd countries-game

3. Install the project dependencies:

npm install

4. Start the development server:

npm run dev

5. Open your browser and access the app at [http://localhost:3000](http://localhost:3000).

## Usage

Countries Game presents you with a quiz to guess the capital of a random country. Here's how the game works:

- When you load the game, a random country is selected for you to guess its capital.

- You can type your answer in the provided input field and submit it.

- Your current streak count is displayed at the top, and you can track your progress.

- As your streak count increases, you'll advance to higher difficulty levels based on country population.

- The game continues until you decide to exit or make a wrong guess.

## Components

The Countries Game consists of several key components:

### Home Component

The Home component is the main entry point of the game. It fetches a list of countries with their information, including name, capital, population, and more. A random country is selected as the initial question for the game.

### ClientProvider Component

The ClientProvider component manages the game's state, including the streak count. It displays the game's header and passes the selected country to the CountryInformation and AnswerInput components.

### CountryInformation Component

The CountryInformation component displays detailed information about the selected country, including its name, official name, continent, currency, language, and population. It also shows the country's flag.

### Leaderboard Component

The Leaderboard component displays a leaderboard of top players who have achieved the highest streak counts in the game. It retrieves data from a Firestore database and presents it in a table format.

## Dependencies

The Countries Game relies on several dependencies to function correctly. Here are the key dependencies used in this project:

- Next.js: A popular React framework for building web applications.

- Firebase: Firebase is used for data storage and real-time synchronization for the leaderboard.

- Tailwind CSS: A utility-first CSS framework used for styling the user interface.

- React: The JavaScript library for building user interfaces.

- lucide-react: A library of simply beautiful icons for your web projects.

## License

This project is licensed under the MIT License. Feel free to use, modify, and distribute it as needed.

Enjoy playing the Countries Game and testing your knowledge of world capitals!
