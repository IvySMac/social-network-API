# Social Network API

## Description 

There are many different methods to keep data within a database. Before, we were using MySQL but this time we are diving into the world of NoSQL. 
In this activity, I'll be using Mongoose and MongoDB to store and retrieve data to be used as a mock-social media website. This gives a lot more insight on what is happening behind the curtains of your favorite social media site. 

## Usage

To use this app, you will first need to seed the files. Do this by typing in `npm run seed` in your terminal 

Now that your files are seeded, run the app by typing in `npm run dev`

Once its up and running, you will open either Insomnia or ThunderClient to test both Thoughts/Comments and User routes. 

See it in action <a href="https://drive.google.com/file/d/1IF4K2XkmohtfVJqDrR37CC2XR5Ts5Y7s/view">here</a>!

## User Story

```
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

## Acceptance Criteria

```
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```

## Credits

Boiler plate code provided by an activity in the KU Bootcamp course. This is done strictly for educational purposes. 