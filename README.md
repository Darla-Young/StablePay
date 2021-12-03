# StablePay

// website goes here after launch

// example login details go here

## Table of contents

- [Overview](#overview)
  - [The App](#the-app)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [Authors](#authors)
- [Fast Instructions for running this project](#fast-instructions-for-running-this-project)
- [General Instructions for React Apps](#general-instructions-for-react-apps)
  - [`npm start`](#npm-start)
  - [`npm test`](#npm-test)
  - [`npm run build`](#npm-run-build)
  - [`npm run eject`](#npm-run-eject)
- [The process](#the-process)
  - [Built with](#built-with)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Acknowledgments](#acknowledgments)

## Overview

// why did i make this app?

### The App

// what does this app do?

### Screenshot

![](/*insert local link, without ''*/)

### Links

- Flow Chart: https://www.figma.com/
- Live Site URL: 
- Any external code that was used: 
- Login Endpoint: 
// any other useful links

## Author

- Darla Young (https://github.com/Darla-Young)

## Fast Instructions for running this project

- You need React and Node.js on your local environment.
- clone project
- in terminal `npm install`
- then `npm start`
- find all necesssary imports at the top of each file. Be sure you load...
  - npm i yup
  - npm i styled-components
  - npm i axios
  - npm i react-router-dom
  - npm i @mui/material

## General Instructions for React Apps

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## The process

- Brainstormed features and style
- Created outline of features and necessary components
- Created and organized file structure based on outline
- Currently in coding stage

### Built with

- Semantic HTML5 markup
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Mui](https://mui.com/) - React component library
- [Styled Components](https://styled-components.com/) - For styled components

### Continued development

General public:
- Contact the developer
- Learn about the app (FAQ's)
- Create an account with login credentials and a custom profile
- Query for a forgotten password

Dealer Accounts:
- Update profile information to include:
    - Employer
    - Position
    - W-4 information
    - Paycheck withholdings
    - Bill due dates & amounts
- Search casinos by location to find:
    - Average rates of pay for selected position
    - Pay structure
    - Job openings
    - Average cost of living for that location
- View Calendar for:
    - Pay dates:
        - All paydates display estimated amounts until confirmed
        - User may confirm by entering paystub information:
            - Withholdings
            - Gross Pay
            - Tip outs
        - Suggest amount to save & what for - based on estimated bills vs estimated pay
    - Bill due dates:
        - All bills display estimated amounts until confirmed
        - User may confirm by entering actual bill amount
    - Averages and totals (initiated with search):
        - By bill/paycheck
        - By day/month/year/lifetime
        - By position
        - By casino
        - By location

Employer Accounts:
- Create job listings
- Update pay structure


### Useful resources

- [Figma](https://www.figma.com) - This is where we began our design, creating a flow chart to visualize every component we would need.
- VSCode live share (VSC extension) - This extension allowed our team to code together and see each other's changes in real time. Very useful!
- [MUI](https://www.mui.com) - Great for pre-made styling, React component library.
- [Undraw](https://undraw.co/) - "Open-source illustrations for any idea you can imagine and create"

## Acknowledgments