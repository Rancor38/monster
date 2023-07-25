# Monster Finder - An Application for Discovering Monsters in 5th Edition Roleplaying Games

**Description:**

Monster Finder is a professional-grade application designed to assist players in discovering monsters suitable for their 5th Edition roleplaying game. Upon accessing the site, users will find an extensive listing of all monsters available in the 5e System Reference Document (SRD), neatly organized in alphabetical order. With a simple click on the desired monster, users can access essential information, including its stat block, and conveniently follow a dynamically generated resource link leading to the official page for that monster on Wizards of the Coast's website.

![Monster Finder Website](https://github.com/Rancor38/monster/blob/main/Screenshot%202022-09-03%20at%201.06.18%20AM.png?raw=true)

**Technologies Used:**

Monster Finder has been crafted using React as the primary framework, and incorporates HTML, CSS, JavaScript, and the reliable [Open5e API](https://open5e.com/ "Open5e API") to provide accurate and up-to-date information. Additionally, the application utilizes React Router for seamless navigation, and there are future plans to potentially integrate Bootstrap in upcoming updates.

**Instructions:**

The installation process for Monster Finder is straightforward; all that's required is a modern web browser. Once you have a compatible browser, you can quickly access the application and begin exploring a vast array of monsters for your gaming needs.

**MVP User Stories:**

- As a user, I want to view a comprehensive list of monsters in 5th edition to make informed decisions for my game.
- As a user, I want the ability to click on a specific monster and access its stat block for easy integration into my game.
- As a user, I expect the application to be accessible on various devices (phones, tablets, computers) to have the information readily available at my table.

**Approach Taken:**

The development process of Monster Finder involved meticulous planning, starting with the creation of pseudocode and user stories. Additionally, wireframes were designed to guide the development of key components, namely About, Cards, Header, Stats, and Breakline. The incorporation of Breakline was essential, as it lays the groundwork for future subdivisions of the Stats component.

The coding phase commenced with a thorough understanding of API usage, with the chosen API proving relatively straightforward to navigate, despite a minor hiccup. An issue arose due to the API documentation inaccurately referencing the "slug" key instead of the correct "name" key for URLs, resulting in some URLs containing spaces. Through trial and error, the necessary adjustments were successfully implemented to overcome these challenges.

Furthermore, the implementation of Synchronous Fetch Requests posed another hurdle, requiring a delay to prevent a blank page upon loading the Stats component. As a result, the Stats page now includes a loading indicator (three dots) to provide a more user-friendly experience.

One notable change from the initial wireframes was the alteration of component hierarchy. State management was optimized by placing it within the Cards component, streamlining the transfer of state information between Cards and Stats. Header and About, being static components, were excluded from receiving unnecessary state data.

**The Future of Monster Finder:**

In the future, Monster Finder has ambitious plans for further enhancement. These improvements encompass breaking down the Stats component into more manageable sub-components, continuous code optimization, and comprehensive commenting for improved readability. Additionally, there are aspirations to leverage the API's full potential and display additional data once proficient in navigating the API effectively. Stay updated as the app evolves and transforms with new tweaks and functionalities.

For an immediate experience of Monster Finder, you can visit the live site by following this [LINK](https://monsterfinder5e.netlify.app/).
