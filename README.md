# Quiz hub
![badge](https://img.shields.io/badge/MIT-License-blue.svg)

## Description

Quiz hub is a user login quiz website to allow people to share their knowledge of topics  with other people by putting them to the test. It could be used by an online trivia enthusiast to post quizzes and to take quizzes that others have posted so that they could test and compare their knowledge with other trivia enthusiasts.

## Table of Contents 

- [Installation](#installation)
- [Usage](#usage)
- [Technologies used](#technologies-used)
- [License](#license)
- [Deployed link](#deployed-link)
- [How to Contribute](#how-to-contribute)
- [Questions](#questions)

## Installation

This program can be run through a browser using the link to the the deployed application. Alternatively, to run this application locally you will need to:

- Clone this repository to receive all of the files
- Set up your environment variables in a .env file
  DB_NAME=quiz_db
  DB_USER=<mysql username>
  DB_PASSWORD=<mysql password>
- Run "npm install" in the command line of your terminal to set up all of the dependencies
- Initialize your database by running the "schema.sql" file inside "db" folder with MySQL
- Populate the existing database items by running "npm run db/seeds" in your terminal
- Run "npm start" to start the application's connection
- Go to the url of the application (http//:localhost:3001) to begin using it

## Usage

- Use the deployed URL to open the deployed application. If already signed in, you will be presented with a homepage which includes existing quizzes (maximum of 9 only will be displayed). 

![homepage](https://github.com/marycpriyanka/quiz-hub/blob/main/images/homepage.JPG)

- If not signed in, you will be redirected to login page. If you are already a registered user, you can login and will be navigated to the homepage. 

![login](https://github.com/marycpriyanka/quiz-hub/blob/main/images/login.JPG)

- If a new user, you could click to sign up and will be taken to signup page.

![signip](https://github.com/marycpriyanka/quiz-hub/blob/main/images/signup.JPG)

- To start on a quiz right away either choose on one of the quizzes displayed on the home page or navigate to "Categories" in navigation bar and choose a quiz from there after selecting a desired category.

![category](https://github.com/marycpriyanka/quiz-hub/blob/main/images/category.JPG)

![takeQuiz](https://github.com/marycpriyanka/quiz-hub/blob/main/images/takeQuiz.JPG)

- Complete the quiz and view your score. You will also be presented with the top 5 scores of that quiz.

![results](https://github.com/marycpriyanka/quiz-hub/blob/main/images/results.JPG)

- To create a quiz click on "Create" in the navigation bar. You will be taken to create quiz page. Select the category of the quiz and enter the name of the quiz.

![createQuiz](https://github.com/marycpriyanka/quiz-hub/blob/main/images/createQuiz.JPG)

Then you will be asked to enter the question and 4 choices(1 correct answer and 3 wrong answers). If you want to enter more questions, click on "Add another question". If you are done adding questions, click on Submit your quiz button. Your quiz will be added to database and you will be taken to the homepage.

![createQuestions](https://github.com/marycpriyanka/quiz-hub/blob/main/images/createQuestions.JPG)

- To view all your scores click on "Scores" in navigation bar.

![scores](https://github.com/marycpriyanka/quiz-hub/blob/main/images/myScores.JPG)

- To navigate back to the home page click on "Quiz Hub" title in header.
- Clicking "Logout" will log you out of the website.

##  Technologies used

Node.js, Express.js, npm packages - shuffle-array, bcrypt, connect-session-sequelize, dotenv, express-session, mysql2, sequelize, handlebars, CSS, JavaScript

## License

Quiz hub is available under the MIT License.

## Deployed link

https://quiz-hub-2022.herokuapp.com/

## How to Contribute

Contributions and ideas are welcome. Before submitting an issue, please take a moment to look over the contributing guidelines in https://www.contributor-covenant.org/ . Before submitting pull requests, ensure the following:

Fork the repo and create your branch from devlop. Test your code. 

## Questions

https://github.com/marycpriyanka

For any addditional questions, reach me at marycpriyanka@gmail.com.
