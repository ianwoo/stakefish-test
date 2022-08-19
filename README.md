# This is Ian Woo's (0xAngel) test submission for Stakefish

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# The Task:

Using the Coingecko public API (https://www.coingecko.com/en/api), build an application that will serve as a directory of cryptocurrency exchanges. The main page should be a list with the first ten exchanges with some high-level information (name, country, URL, logo, trust rank).

When the user clicks on an exchange, show its details on a separate page. Included in those details should be the name, country, trust rank, logo, year of establishment, social media links, description, and a back-to-main-page button.

# Notes:

The only 3rd party dependency library is ky, simply to avoid the annoying fetch boilerplate (and react router I guess, but does that really count?)

Testing for responsive design was done with Chrome developer tools, checking the look of the page on the list of default viewports (iPhone SE, iPhone XR, etc...)

## Script:

### `npm start`
