# Customer Feedback Survey

## Overview

This project is a customer feedback survey application designed to collect and manage customer feedback efficiently. It includes a welcome screen, a series of survey questions, and a thank-you screen. The application ensures a smooth user experience with features like navigation between questions, skipping questions, and saving responses.

## Tech Stack

### Frontend

- **React**: A JavaScript library for building user interfaces. Used to create a dynamic and responsive UI for the survey application.
- **CSS**: For styling the application. Includes custom CSS to ensure a visually appealing and user-friendly interface.
- **React Icons**: Provides icons for navigation and other UI elements.

### Backend

- **Local Storage**: Used for storing survey responses and session information. Ensures that user data is saved even if the page is refreshed or revisited later.

### Deployment

- **Vercel**: The application is deployed on Vercel, which provides a seamless platform for deploying frontend projects. The deployment URL is [https://feedback-survey-rust.vercel.app/](https://feedback-survey-rust.vercel.app/).

## Features

- **Welcome Screen**: Greets the user with a welcome message and a button to start the survey.
- **Survey Navigation**: Users can navigate through survey questions, go back to previous questions, and skip questions if needed.
- **Answer Storage**: Survey answers are saved in local storage with a unique session ID.
- **Completion and Thank You Screen**: After completing the survey, users receive a thank-you message and are redirected back to the welcome screen after 5 seconds.

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/feedback-survey.git
   cd feedback-survey
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Start the Development Server**:
   ```bash
   npm start
   ```
   This will start the React development server and open the application in your default browser.

## Usage

1. **Start Survey**: Click the "Start Survey" button on the welcome screen to begin the survey.
2. **Answer Questions**: Provide responses to the survey questions. You can navigate between questions, go back, or skip questions.
3. **Submit Survey**: After answering all questions, submit the survey to see the thank-you screen.

## Deployment

The application is deployed on Vercel. You can access the live version of the app [here](https://feedback-survey-rust.vercel.app/).

