# Frontend Mentor - REST Countries API with color theme switcher solution

This is a solution to the [REST Countries API with color theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [AI Collaboration](#ai-Collaboration)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode _(optional)_

### Links

- Solution URL: [click here for GitHub repository](https://github.com/takahashiyb/rest-countries-api-with-color-theme-switching)
- Live Site URL: [click here for Live Site](https://takahashiyb.github.io/rest-countries-api-with-color-theme-switching)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Vue Framework
- Vue-Router
- Pinia State Manager
- Typescript

### What I learned

This is my first work exclusively with Typescript. There were a lot of moments where I thought that the checking was overkill but realized that maybe being too lenient is the reason why I get problems in the past. Now I look at them as a good thing and the reason why I did not get issues with typing throughout. I also learned that it is better to just have a getter rather than doing the logic in the component. So, I would want to think of this as an option moving forward.

I had issues with routing and the differences between the filepath during development mode and when it is deployed, but using

```JS
'${import.meta.env.BASE_URL}' saved the day.
```

### Continued development

Overall, this was a fairly difficult project for me. One that challenged how I write code with the data in mind, route a page with guards to return to homepage and, manipulating data to only get the information that is necessary. I will be researching on Vue and building on a good workflow when deploying my work to GitHub pages as I had a hard time with filepaths and just in general a checklist of sorts to do before deploying my work.

### AI Collaboration

I do not have a coding agent.
Copilot

I use copilot to ask about some parts unfamiliar to me, or check for error codes that pop up.

## Author

- Frontend Mentor - [@takahashiyb](https://www.frontendmentor.io/profile/takahashiyb)
