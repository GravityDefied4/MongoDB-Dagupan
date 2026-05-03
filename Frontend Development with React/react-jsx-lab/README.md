# React JSX Lab

## Overview
This lab activity focused on creating React components using JSX. The objective was to understand the basics of React functional components, JSX syntax, rendering components to the DOM, and working with dynamic data and lists.

Throughout the activity, I created multiple React components and practiced rendering elements dynamically using JavaScript expressions and the `map()` function. I also learned how Babel transpiles JSX into regular JavaScript.

## Features Implemented
- Basic React functional component
- Rendering components using ReactDOM
- JSX syntax and expressions
- Dynamic data rendering
- List rendering using `map()`
- Separate reusable `Item` component
- Babel configuration for JSX transpilation

## Files Included
- `package.json`
- `.babelrc`
- `public/index.html`
- `src/index.js`
- `src/App.js`
- `src/Item.js`

## Challenges Encountered
One of the main challenges I encountered was getting the React component to display correctly in the browser. Initially, the page appeared blank because the browser could not properly load the transpiled JavaScript files using the basic Babel setup. I resolved this by using `live-server` and adjusting the project setup to properly render the React components.

I also had to carefully check JSX syntax, especially when rendering lists and passing props between components.

## What I Learned
From this activity, I learned:
- How React components are structured
- How JSX works inside React
- How to render dynamic content
- The importance of keys when rendering lists
- How reusable components improve code organization
- The role of Babel in converting JSX into browser-compatible JavaScript

## Conclusion
This lab helped me better understand the fundamentals of React and JSX. It also gave me experience troubleshooting common setup and rendering issues in React projects.