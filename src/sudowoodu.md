This is a file for pseudocode among other things.

Add a SearchForm and to Add into Header component (,to render on App component).

Get img for lycanthropes, swarms, monstrosities, plants, constructs, fiends

Fix the Ogre Zombie Bug

Thinking in React. Create a component for each section of the Statblock, and then render those sub-pieces to the statblock to dry up the code. 
This will also allow you to conditionally render the objects that are there.

The URL of the SeearchForm, needs to go to the App component as a property that we add to the URL that returns results to the Cards component.
Maybe, the first step is to place the current URL for the cards component into a variable, and that variable is passed into the cards component to dry them up and remove repeated code.
Then I need to make the cards able to take a URL that is input as the end of the Search URL within the search box.
The following is a Search URL I can use as my example, it wil retrun a search fo 'fire' within the SRD.
https://api.open5e.com/search/?document_slug=wotc-srd&text=fire

https://www.dndbeyond.com/avatars/thumbnails/0/11/1000/1000/636238825975375671.jpeg
https://www.dndbeyond.com/attachments/2/656/humanoid.jpg

Pulled image of monsters from https://www.aidedd.org/dnd-filters/monsters.php