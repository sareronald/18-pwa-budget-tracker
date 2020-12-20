# 18-pwa-budget-tracker
A Budget Tracker application that provides online/offline access and functionality for the user when they wish to add expenses, deposits and track their budget.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Table of Contents
* [Project Overview](#Project-Overview)
* [User Story](#User-Story)
* [Link to the App](#Link-to-the-App)
* [About this project](#About-this-project)
* [Installation](#Installation)
* [Usage](#Usage)
* [Screenshots](#Screenshots)
* [License](#License)
* [Contributing](#Contributing)
* [Issues](#Issues)
* [Authors](#Authors)
<br>

## Project Overview
A user will be able to add expenses and deposits to their budget with or without a connection. When entering transactions offline, they should populate the total when brought back online.
<br>

## User Story
AS an avid traveller
I WANT to be able to track my withdrawls and deposits with or without a data/internet connection
SO THAT my account balance is accurate when I am travelling
<br>

## Link to the App
Please visit the <a href="https://github.com/sareronald/18-pwa-budget-tracker.git">GitHub repository</a> for a copy of the code for this project and application.<br>
Please visit the <a href="">Budget Tracker</a> application, hosted on Heroku.
<br>

## About this project
### **How the app works**
This project uses front and backend design to create a Budget Tracker. This PWA ensures that the user can use the app and enter transactions offline, and then when brought back online, any information that was cached will be populated and updated.

Offline Functionality:

  * Enter deposits offline

  * Enter expenses offline

When brought back online:

  * Offline entries should be added to tracker.
  
  ### **Service Workers explained**
  <a href= "https://www.netlify.com/blog/2017/10/31/service-workers-explained/">Service workers</a> are proxies that sit between the web page and the network, providing cached versions of the site when no network connectivity is available.
  ![service-worker-diagram](https://user-images.githubusercontent.com/67722377/102701192-864c0500-42a8-11eb-94c8-5f7db32c5881.png)
  <br>
  
  ### **How the app was built** 
  * Service Worker was used to make the app function offline
  * Webpack and manifest.json were used to bundle files for compression
  * MongoDB and Mongoose Schema were used to create, edit and get data from the backend
  

### **Business Context** 
Giving users a fast and easy way to track their money is important, but allowing them to access that information anytime is even more important. Having offline functionality is paramount to our applications success.
<br>

### **Tools**
* [Visual Studio Code](https://code.visualstudio.com/) - The editor of choice
* [GitHub](https://github.com/) to share the code
* [Heroku](https://www.heroku.com/) to host the site

* **Backend Technology:**
  * [MongoDB](https://www.npmjs.com/package/mysql)
  * [Mongoose](https://mongoosejs.com/docs/index.html)
  * [Express](https://www.npmjs.com/package/express)
  * [Nodejs](https://nodejs.org/en/)
  * [Nodemon](https://www.npmjs.com/package/nodemon)

* **Frontend Technology:**
  * HTML
  * CSS
  * Javascript
  * [Bootstrap](https://getbootstrap.com/)
<br>

## Installation
This app requires the installment of the following to work:
* Mongodb
* Nodejs

To install this Budget Tracker:
1. Clone this GitHub repository to your local machine
```
git@github.com:sareronald/18-pwa-budget-tracker.git
```
1. Open a terminal window and navigate to the local directory. Run 
```
npm install
```
1. Create a new mongodb database called "budget".
1. If running locally update the MONGODB_URI with your connection string in a .env file in the root directory of the application. Add the following entry:
```MONGODB_URI=connectionstring```, replacing _connectionstring_ with the string for your database.

## Usage
#### **Instructions**
1. Run ```npm start``` to start the application
1. Open a web browser and navigate to https://localhost:3000
1. Start entering your transactions - by entering a name, and transaction amount before clicking "+Add Funds" or "-Subtract Funds" depending on the nature of your trnsaction

## Screenshots
#### **Walkthrough of application**
![budget-tracker-walkthrough](https://user-images.githubusercontent.com/67722377/102702516-af27c680-42b7-11eb-954a-6bb42e3c973f.gif)
<br>

#### **Offline Screenshot of application**
![budget-tracker-offline-screenshots](https://user-images.githubusercontent.com/67722377/102702401-5c99da80-42b6-11eb-872d-27d3bd709b0a.png)
<br>

#### **Online/Refresh Screenshot of application**
![budget-tracker-online-screenshot](https://user-images.githubusercontent.com/67722377/102702421-818e4d80-42b6-11eb-9ac9-3b471a28eb92.png)
<br> 

## Licence
This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
<br>

## Contributing
Any contributions are appreciated. Be sure to review the contributing guidelines and code of conduct. By participating, you are expected to uphold this code. Use your best judgement and feel free to propose changes to this document in a pull request. Should you have any questions, feel free to contact me directly using the email below.
<br>

## Issues
If you find an issue while using the app or have a request, [log the issue](https://github.com/sareronald/18-pwa-budget-tracker/issues) or request here. These will be addressed in a future code update.
<br>
<hr>

## Authors
- **SARAH RONALD** <br>
  Contact information:
  sareronald@hotmail.com <br>
  GitHub link:
  [sareronald](https://github.com/sareronald)
