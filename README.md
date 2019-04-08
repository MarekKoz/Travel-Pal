## Travel Pal 

### Overview

Do you love traveling to far away places, but find yourself too overwhelmed with the amount of planning it takes to make it a reality? Luckily, there is now Travel Pal to help you out!

Travel Pal is a web app that will allow users to keep track of their desired vacation spots, as well as keep track of how much financial preparation is needed for the endeavor. Users can register and login. Once they're logged in, they can create or view their saved destinations. For every destination that they have, they can keep track of how much money they saved up for the trip and what items they should bring with them. This web app is meant to be a simple and intuitive way to help plan anyone's vacation!

But the fun doesn't stop there! Every user is able to see posts from other users, creating a sense of community. Users can see the adventures of their fellow explorers for hours of fun!

### Data Model

The application will store Users, Destinations, Finances and Items to take on your adventures!

Users can have multiple destinations saved on their to-go places
Each destination can have a notes section and links to websites that relate to the destination (things to see and do). A google map will also be displayed showing the destination.

An Example User:

```
{
  username: "taveling_Marek",
  hash: // a password hash,
}
```

An Example Destination with Embedded Items and Links:

```
{
  user: // a reference to a User object
  name: "Italy",
  notes: {describe your adventure to others},

  links: { linkName: "www.travelItaly.com"}
}
```

### Link to Commented First Draft Schema

[Draft Schema](https://github.com/nyu-csci-ua-0480-001-003-fall-2018/MarekKoz-final-project/blob/master/db.js)

### Wireframes

/destinations

![Alt text](https://github.com/nyu-csci-ua-0480-001-003-fall-2018/MarekKoz-final-project/blob/master/documentation/pic1.jpg "Destinations")

/login

![Alt text](https://github.com/nyu-csci-ua-0480-001-003-fall-2018/MarekKoz-final-project/blob/master/documentation/pic2.jpg "Destinations")

/destinations/add

![Alt text](https://github.com/nyu-csci-ua-0480-001-003-fall-2018/MarekKoz-final-project/blob/master/documentation/pic3.jpg "Destinations")

/destinations/italy

![Alt text](https://github.com/nyu-csci-ua-0480-001-003-fall-2018/MarekKoz-final-project/blob/master/documentation/pic4.jpg "Destinations")

### Site map

![Alt text](https://github.com/nyu-csci-ua-0480-001-003-fall-2018/MarekKoz-final-project/blob/master/documentation/sitemap.jpg  "Site Map")

### User Stories or Use Cases

* as non-registered user, I can register a new account with the site
* as a user, I can log in to the site
* as a user, I can create a new destination
* as a user, I can view all of the destinations I've created in a single list
* as a user, I can add finances to my finances list
* as a user, I can add items to bring with me on my trip

### Research Topics

* (5 points) Integrate user authentication
I'm going to be using passport for user authentication
You can register on the site by providing a username and password.

* (6 points) Use the Google maps api to show a map of the location added
to the destination page. Add a map to the destinations added page, display map.

* 11 points total out of 8 required points

### Link to Initial Main Project File

[Main Project File](https://github.com/nyu-csci-ua-0480-001-003-fall-2018/MarekKoz-final-project/blob/master/app.js "App.js")

### Annotations / References Used

* passport.js authentication docs - http://www.passportjs.org/docs/
* google maps api - https://developers.google.com/maps/documentation/javascript/tutorial