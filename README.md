# Random Password Generator

## Overview

The goal of this project (referred to from here as RPG) was to build a random password generator using Javascript. The HTML and CSS had been pre-built, so all I needed to do was build the logic.

The generator creates the password once the user clicks on the "Generate Password" button and answers a prompt about how long they want their password to be (it must be at least 8 and no more than 128 characters) and then confirms which types of characters they want to include. Once the password is generated, it is supplied in the text box so that the user can copy it and use immediately.

The error handling is built to check that the length conditions have been applied and that at least one type of characters has been selected to include in the password. If either of these issues crop up, the browser page reloads and the user must generate the password again.

## Screenshot of the RPG

![A screenshot of the deployed application](/assets/images/screenshot-deployed.png)

## Link to the RPG

[Deployed Application](https://ccroberts1.github.io/random-password-gen/)
