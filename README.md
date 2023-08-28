# Frontend Mentor - Multi-step form solution

This is a solution to the [Multi-step form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/multistep-form-YVAnSdqQBJ). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- Complete each step of the sequence
- Go back to a previous step to update their selections
- See a summary of their selections on the final step and confirm their order
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- Receive form validation messages if:
  - A field has been missed
  - The email address is not formatted correctly
  - A step is submitted, but no selection has been made

### Screenshot

![mobile](./src/images/Screenshot-Mobile.png)
![desktop](./src/images/Screenshot-desktop.png)

### Links

- Solution URL: [GitHub Page](https://github.com/MCDoodle1/multi-step-form)
- Live Site URL: [Space Tourism Site](https://mcdoodle1.github.io/multi-step-form/)

## My process

I started by examining the App's lay-out and defined the different React components and pages. Then coded the CSS page-by-page (mobile first).

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Styled Components](https://styled-components.com/) - For styles


### What I learned

I extended my knowledge of React and CSS. Navigation in combination with data validation was new to me. I used inline styling in JSX and noticed the consequences for specificity. For deploying of the React app to GitHub pages, I followed instructions from "react-gh-pages". I changed the router from BrowserRouter to Hashrouter, so the app can be viewed on GitHub pages. After this, several images stopped rendering, which I solved by adding 'process.env.PUBLIC_URL' to the img src.


### Continued development

I will continue to broaden my knowledge of HTML, CSS and React.


### Useful resources

- [React GH-Pages](https://github.com/gitname/react-gh-pages) - Manuel to deploy React to GitHub pages
- [StackOverflow](https://stackoverflow.com/) 
- [ChatGPT](https://chat.openai.com/) 


## Author

- Website - [Marco Clarijs](https://github.com/MCDoodle1)
- Frontend Mentor - [@MCDoodle1](https://www.frontendmentor.io/profile/MCDoodle1)

