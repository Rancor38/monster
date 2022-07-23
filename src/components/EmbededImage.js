import React from 'react';
import dragon from '../dragon.svg'

// A short tag to not repeat url source of images.
const monUrl = 'https://www.aidedd.org/dnd/images/'

// An array of dragon names so that I can check against these so the dragon's pictures don't break, since they are different img tags than other monsters.
// Each dragonslug must be a .jpg for this to work.
const blackDragonSlugs = ['adult-black-dragon.jpg', 'ancient-black-dragon.jpg', 'black-dragon-wyrmling.jpg', 'young-black-dragon.jpg']
const blueDragonSlugs = ['adult-blue-dragon.jpg', 'ancient-blue-dragon.jpg', 'blue-dragon-wyrmling.jpg', 'young-blue-dragon.jpg']
const brassDragonSlugs = ['adult-brass-dragon.jpg', 'ancient-brass-dragon.jpg', 'brass-dragon-wyrmling.jpg', 'young-brass-dragon.jpg']
const bronzeDragonSlugs = ['adult-bronze-dragon.jpg', 'ancient-bronze-dragon.jpg', 'bronze-dragon-wyrmling.jpg', 'young-bronze-dragon.jpg']
const copperDragonSlugs = ['adult-copper-dragon.jpg', 'ancient-copper-dragon.jpg', 'copper-dragon-wyrmling.jpg', 'young-copper-dragon.jpg']
const goldDragonSlugs = ['adult-gold-dragon.jpg', 'ancient-gold-dragon.jpg', 'gold-dragon-wyrmling.jpg', 'young-gold-dragon.jpg']
const greenDragonSlugs = ['adult-green-dragon.jpg', 'ancient-green-dragon.jpg', 'green-dragon-wyrmling.jpg', 'young-green-dragon.jpg']
const redDragonSlugs = ['adult-red-dragon.jpg', 'ancient-red-dragon.jpg', 'red-dragon-wyrmling.jpg', 'young-red-dragon.jpg']
const silverDragonSlugs = ['adult-silver-dragon.jpg', 'ancient-silver-dragon.jpg', 'silver-dragon-wyrmling.jpg', 'young-silver-dragon.jpg']
const whiteDragonSlugs = ['adult-white-dragon.jpg', 'ancient-white-dragon.jpg', 'white-dragon-wyrmling.jpg', 'young-white-dragon.jpg']
// The function to check if the creature is a dragon.
const EmbededImage = ({monPicSelector}) => {
// if black dragon
    if(blackDragonSlugs.includes(monPicSelector)===true) {
        return (
           <main>
            <img src={(monUrl + 'black-dragon.jpg')} alt='monster' className='embeded-image'/>
           </main> 
        )
}
// if blue dragon
    if(blueDragonSlugs.includes(monPicSelector)===true) {
        return (
        <main>
            <img src={(monUrl + 'blue-dragon.jpg')} alt='monster' className='embeded-image'/>
        </main> 
        )
}
// if brass dragon
    if(brassDragonSlugs.includes(monPicSelector)===true) {
        return (
        <main>
            <img src={(monUrl + 'brass-dragon.jpg')} alt='monster' className='embeded-image'/>
        </main> 
        )
    }
    // if bronze dragon
    if(bronzeDragonSlugs.includes(monPicSelector)===true) {
        return (
        <main>
            <img src={(monUrl + 'bronze-dragon.jpg')} alt='monster' className='embeded-image'/>
        </main> 
        )
    }
    // if copper dragon
    if(copperDragonSlugs.includes(monPicSelector)===true) {
        return (
        <main>
            <img src={(monUrl + 'copper-dragon.jpg')} alt='monster' className='embeded-image'/>
        </main> 
        )
    }
    // if gold dragon
    if(goldDragonSlugs.includes(monPicSelector)===true) {
        return (
        <main>
            <img src={(monUrl + 'gold-dragon.jpg')} alt='monster' className='embeded-image'/>
        </main> 
        )
    }
    // if gold dragon
    if(greenDragonSlugs.includes(monPicSelector)===true) {
        return (
        <main>
            <img src={(monUrl + 'green-dragon.jpg')} alt='monster' className='embeded-image'/>
        </main> 
        )
    }
    // if red dragon
    if(redDragonSlugs.includes(monPicSelector)===true) {
        return (
        <main>
            <img src={(monUrl + 'red-dragon.jpg')} alt='monster' className='embeded-image'/>
        </main> 
        )
    }
    // if silver dragon
    if(silverDragonSlugs.includes(monPicSelector)===true) {
        return (
        <main>
            <img src={(monUrl + 'silver-dragon.jpg')} alt='monster' className='embeded-image'/>
        </main> 
        )
    }
    // if white dragon
    if(whiteDragonSlugs.includes(monPicSelector)===true) {
        return (
        <main>
            <img src={(monUrl + 'white-dragon.jpg')} alt='monster' className='embeded-image'/>
        </main> 
        )
    }
// else when not a dragon images are the function below
    return (
        <main>
        {/* An image that on an error uses a default image */}
            <img src={(monUrl + monPicSelector)} alt='monster' className='embeded-image' onError={({ currentTarget }) =>{
                // To stop it from looping, null
                currentTarget.onerror = null;
                // Target of image.
                currentTarget.src=dragon;
            }}/>
        </main>
    );
};

export default EmbededImage;