# Dog Breeds Project

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

This project was created as part of a technical assessment, and its goal is to display a list of dog breeds and their images, and track them on a map based on their breed. The project was built using React, and utilizes several APIs from https://dog.ceo to display dog images.

### Installation

To run this project, please follow the steps below:

Clone the repository to your local machine using the following command:

git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY

Navigate to the project directory and install the required dependencies using the following command:

`npm install`

Start the development server using the following command:

`npm start`

Open your web browser and navigate to http://localhost:3000 to view the project.

### Usage

The project consists of three main components:

## Home
displays a list of random dog images if no breeds are selected, or breed-based images if a breed is selected. Clicking on any image will open it in a modal that can be zoomed.

<img width="1440" alt="Screenshot 2023-05-09 at 4 33 22 PM" src="https://github.com/vishalpatil12014017/doggo-app/assets/87421912/64e121f6-fd34-4e92-9e3f-3dab4e5a7a6a">

<img width="1440" alt="Screenshot 2023-05-09 at 4 33 50 PM" src="https://i.ibb.co/ng02kp0/Screenshot-2023-05-09-at-4-36-45-PM.png">


<img width="1440" alt="Screenshot 2023-05-09 at 4 33 22 PM" src="https://i.ibb.co/K53gTwL/Screenshot-2023-05-09-at-4-33-31-PM.png">


<img width="1440" alt="Screenshot 2023-05-09 at 4 33 50 PM" src="https://github.com/vishalpatil12014017/doggo-app/assets/87421912/6256eb35-13ec-4350-bf10-2c0927dde068">

<img width="1440" alt="Screenshot 2023-05-09 at 4 33 22 PM" src="https://i.ibb.co/SyTSTtz/Screenshot-2023-05-09-at-4-34-56-PM.png">


## List 
lists all sub-breeds (if any exist) and links to view an image of each in a modal.

<img width="1440" alt="Screenshot 2023-05-09 at 4 33 50 PM" src="https://i.ibb.co/t2RCBqH/Screenshot-2023-05-09-at-4-36-20-PM.png">

<img width="1440" alt="Screenshot 2023-05-09 at 4 33 50 PM" src="https://i.ibb.co/jyjGfWH/Screenshot-2023-05-09-at-4-34-50-PM.png">

<img width="1440" alt="Screenshot 2023-05-09 at 4 33 50 PM" src="https://i.ibb.co/z5Qz2jW/Screenshot-2023-05-09-at-4-36-24-PM.png">


## Track 
creates a random coordinate array and plots the doggos based on their breed on Google Maps.

<img width="1440" alt="Screenshot 2023-05-09 at 4 33 50 PM" src="https://i.ibb.co/j68G5Ck/Screenshot-2023-05-09-at-4-36-14-PM.png">


<img width="1440" alt="Screenshot 2023-05-09 at 4 33 50 PM" src="https://i.ibb.co/tsn7rw5/Screenshot-2023-05-09-at-4-35-43-PM.png">














### APIs Used
The following APIs from https://dog.ceo were used in this project:

1. List of all Breeds: https://dog.ceo/api/breeds/list/all
2. Random Image of a Dog: https://dog.ceo/api/breeds/image/random
3. Get Multiple Images of one Breed: https://dog.ceo/api/breed/{breedName}/images
4. Get a List of all Sub-Breeds: https://dog.ceo/api/breed/{breedName}/list
5. Get one image of one breed: https://dog.ceo/api/breed/{breedName}/images/random

### Credits
This project was created by *Vishal Patil*.

### Contact
For any questions or feedback, please contact me at *patil120140@gmail.com*.

### Demo
https://doggo-app-deploy.vercel.app/
