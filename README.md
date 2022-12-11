# MONSTER FINDER

MONSTER FINDER is an application for finding monsters to use in your 5th Edition roleplaying game. 
When you first enter the site, every single monster in the 5e System Reference Document (SRD) will be displayed before you in alphabetical order. Select one of the monsters you would like, and the basic information about that monster will come up, along with a dynamically rendered resource link to the official page for that monster on Wizards of the Caost's website.

## PICTURES OF WEBSITE HERE

![alt text](https://github.com/Rancor38/monster/blob/main/Screenshot%202022-09-03%20at%201.06.18%20AM.png?raw=true)
![alt text](https://github.com/Rancor38/monster/blob/main/Screenshot%202022-09-03%20at%201.09.36%20AM.png?raw=true)

## TECHNOLOGIES USED
The application is built in React, and uses HTML, CSS, JavaScript, the [Open5e API](https://open5e.com/ "Open5e API"), React Router, and might use Bootstrap in a future update.

INSTALLATION INSTRUCTIONS
All you need to work MONSTER FINDER is a modern web browser and you're good to go!

## MVP USER STORIES
- _As a user, I want to see a listing of all of the monsters in 5th edition, so I can decide which ones I want to use in my game._
- _As a user, I want to be able to click on a monster and see its stat block so I can use it in my game._
- _As a user, I want to be able to use this on a phone, tablet, or computer so that I can use the information at my table._

## APPROACH TAKEN
I started off with a page for pseudocode and user-stories. I usually place these into the application, but here I put a lot of it into my project proposal, and used wireframes as a guide for components.
The gist of the app is 5 componants that plug into the App component: About, Cards, Header, Stats, and Breakline. Breakline was the last of these components to implement, and it is the begining of a course to break down the Stats component into more sub-components down the line.

Then the code started. I needed to refresh myself on API's. The API I picked turned out to be fairly easy to navigate, with one minor hickup, since the docs describe the url as using the slug key, when in fact it uses the name key. This means that some urls have spaces which I had to learn by trial and error, playing around with "what might have happened" with error messages only telling my "x is undefined".

Another thing that tripped me up was the Synchronous Fetch Request, it meant that for the Stats component I had to add some kind of delay to make sure the page didn't turn blank due to failing to load the page on load. This is why the Stats page has a 3 dots file to display when it's loading.

One key change between the wireframes and the final product is the component hierarchy. I actually placed my State into Cards and not the App, and connected each component to app via Cards. I found this was a better way to get the state passed between Cards and Stats, rather than needing to pass it between Cards, Stats, and App. Also Header and About are static components and didn't need state so I chose to  not pass to them what they don't need.

Once navigating the API fetch request was complete, actually placing Links, React-Router, State, all took a very long day of refreshing, but I did learn a lot aong the way.

[CLICK THIS LINK TO VISIT THE LIVE SITE](https://monsterfinder5e.netlify.app/)

## THE FUTURE ON MONSTER FINDER

When I come back, I plan to break the Stats component down further, continue to dry-up my code, and add more coments. There's some data that I didn't get to put on the page because I have to learn more about navigating the API, but that's a stretch goal as I return an tweak the app.
