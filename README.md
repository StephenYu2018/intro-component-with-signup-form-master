# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

### Screenshot

![](./screenshot.png)

### Links

- [Solution]()
- [Live Website]()

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Vanilla JavaScript
- [TailwindCSS](https://tailwindcss.com/) - CSS Utility Framework

### What I learned

I learned how to perform client-side validation in vanilla JavaScript. Client-side validation is the checking of user input done on the client side before it is sent to the server. While server-side validation is done on the server, client-side validation has the benefit of responding more quickly if the user input is invalid. However, it's no replacement for server-side validation as malicious users can easily bypass client-side validation. Given these circumstances, client-side validation is great for checking if data is properly formatted. If it is, the input data is sent to the server, otherwise we handle the formatting errors by quickly showing messages stating what's wrong with the user input.

I also learned about being able to apply styles to `focus` state & specific aspects of form elements such as `placeholder`. 

### Continued development

After rereading Mozilla's article on Client-side validation, I want to try re-implementing the client-side validation using as much HTML & CSS as possible. There's probably much more that HTML & CSS can do than I think, and by doing this, I will better know the limitations and capabilities of both declarative languages.

I also want to learn how to make more fluid layouts, taking advantage of `min()`, `max()` & `clamp()`. I think using vanilla CSS will help me more with this process as frameworks like TailwindCSS tend to restrict or abstract away said details. I'll try to get a little practice in on an older project that focuses on responsive design before redoing this one. 

### Useful resources

- [Client-side form validation](https://www.developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation) - This helped me understand the difference between client-side validation and server-side validation.

## Author

- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/stephenyu2018)

