## Travel Pal 

### Overview

Do you love traveling to far away places, but find yourself too overwhelmed with the amount of planning it takes to make it a reality? Luckily, there is now Travel Pal to help you out!

Travel Pal is a web app that will allow users to keep track of their desired vacation spots, as well as keep track of how much money they need and how much preparation is needed for the endeavor. Users can register and login. Once they're logged in, they can create or view their saved destinations. For every destination that they have, they can keep track of what items they should bring with them. This web app is meant to be a simple and intuitive way to help plan anyone's vacation!

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

### Link to Commented Schema

[Draft Schema](https://github.com/MarekKoz/Travel-Pal/blob/master/db.js)

### Wireframes

My original rough blueprints for how I envisioned the web app to look.

/destinations

![Alt text](https://github.com/MarekKoz/Travel-Pal/blob/master/documentation/pic1.jpg "Destinations")

/login

![Alt text](https://github.com/MarekKoz/Travel-Pal/blob/master/documentation/pic2.jpg "Destinations")

/destinations/add

![Alt text](https://github.com/MarekKoz/Travel-Pal/blob/master/documentation/pic3.jpg "Destinations")

/destinations/italy

![Alt text](https://github.com/MarekKoz/Travel-Pal/blob/master/documentation/pic4.jpg "Destinations")

### Site map

Basic sketch of how each page on the site relates to one another.

![Alt text](https://github.com/MarekKoz/Travel-Pal/blob/master/documentation/sitemap.jpg  "Site Map")

### User Stories or Use Cases

* as non-registered user, I can register a new account with the site
* as a user, I can log in to the site
* as a user, I can create a new destination
* as a user, I can view all of the destinations I've created in a single list
* as a user, I can add finances to my finances list
* as a user, I can add items to bring with me on my trip
* as a user, I can view other people's posts

### Annotations / References Used

* passport.js authentication docs - http://www.passportjs.org/docs/
* google maps api - https://developers.google.com/maps/documentation/javascript/tutorial