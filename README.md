# MONSTER FINDER

MONSTER FINDER is an application for finding monsters to use in your 5th Edition roleplaying game. 
When you first enter the sight, every single monster in the 5e System Reference Document (SRD) will be displayed before you in alphabetical order. Select one of the monsters you would like, and the basic information about that monster will come up, along with a dynamically rendered resource link to the official page for that monster on Wizards of the Caost's website.

## PICTURES OF WEBSITE HERE

![alt text](https://github.com/rancor38/MONSTER FINDER/blob/main/readme-bio.png?raw=true)

## TECHNOLOGIES USED
The application is built in React, and uses HTML, CSS, JavaScript, the Open5e API, React Router, and might use Bootstrap in a future update.

INSTALLATION INSTRUCTIONS
All you need to work MONSTER FINDER is a modern web browser and you're good to go!

## MVP USER STORIES
- _As a user, I want to see a listing of all of the monsters in 5th edition, so I can decide which ones I want to use in my game._
- _As a user, I want to be able to click on a monster and see its stat block so I can use it in my game._
- _As a user, I want to be able to use this on a phone, tablet, or computer so that I can use the information at my table._

## WIREFRAMES
These were the concepts for the site I created in Google Slides.
![alt text](https://github.com/rancor38/MONSTER FINDER/blob/main/wireframe1.png?raw=true)
![alt text](https://github.com/rancor38/MONSTER FINDER/blob/main/wireframe2.png?raw=true)

## APPROACH TAKEN
I started off with a page for pseudocode and user-stories. I like to call this page sudowoodu (named after a very funny Pokemon) as this is a play-space to organize my thoughts. I also had 2 images still in the files of my wireframe. I built the wireframe in google slides, took a screenshot, and that was going to be my plan.

As my plans changed or I noticed things about the site that I didn't like, I would quickly jot these down in sudowoodo so I would know to come back to them later.

I wanted a website that looked clean, professional, and was easy to read and understand. So I played it pretty safe, as I recalled some example websites that I liked, but weren't particularly efficient at delivering information to their end-user. 

Then the code started. I needed to research how to make a carousel, and I realized that this was going to be a huge undertaking, so 2 tutorials later, I cobbled together enough code to make the thing spin. Originally it was going to navigate via buttons on the bottom of the page, but it was pointed out that these buttons were unintuitive for mobile users, since the carousel looked like it should "flip" as the user scrolls their finger or stylus to the right or the left. That sounded like a huge undertaking to learn, and I needed to get my MVP done without sidtracking down that particular rabbit hole.
So instead I did away with the bottom buttons, and went all in on the nav-bar.
I wanted to make sure that the nav-bar functioned on both mobile and web, and so I used CSS to style at the 800 pixel width mark for mobile.  I also wanted to make sure that no matter the type of screen being used that the content would display beautifully, so much of the CSS as possible uses flexbox and view-window technologies.

The last thing that I wanted to add was content, so once my "pages" on the carousel were up and running I placed content into the bio-page, the resume (which I needed to update dramatically) and the projects page. Adding the projects was the most difficult of these, and I'm still not sure I'm happy with the result. That page will need a face-lift, but it'll do for now.

With my content in place, I added the links to my linkedin and github on the navbar, and I still had to make a README and that's where I am now, moments before I host this website.

Edit// Revisiting this I had a lot of edits to make to the nav-bar for different sized screens, but I worked out many of the visual bugs I saw.

Edit// Added an overlay to the page in case I run out of time to include interacting requirements. I'll try to find something more fun to replace it with.

[CLICK THIS LINK TO VISIT THE LIVE SITE](https://zakariah.xyz/)

## THE FUTURE ON MONSTER FINDER

When I come back, I'll follow my own pipeline. I'll lay out my plans in sudowoodo, and go through my checklist of projects. First to be updated has to be the Projects Page. The other two are pretty basic, but they do their job. The projects page not only needs content, but a better way to display my work than a popup window.