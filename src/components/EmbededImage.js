import React from 'react';
// import placeholders for missing images
import beast from '../images/beast.svg'
import humanoid from '../images/human.svg'
import commoner from '../images/commoner.svg'
import lycanthrope from '../images/lycanthrope.svg'
import swarm from '../images/swarm.svg'
import plants from '../images/plant.svg'
import construct from '../images/construct.svg'
import fiend from '../images/feind.svg'
import succubus from '../images/succubus.svg'
// import arrays of variables
import { humanoidSlugs, commonerSlug } from '../monster-arrays/HumanoidArray';
import {blackDragonSlugs, blueDragonSlugs, brassDragonSlugs, bronzeDragonSlugs, copperDragonSlugs, goldDragonSlugs, greenDragonSlugs, redDragonSlugs, silverDragonSlugs, whiteDragonSlugs} from '../monster-arrays/DragonArray';
import { lycanthropeSlug } from '../monster-arrays/LycanthropeArray';
import { swarmsSlug } from '../monster-arrays/SwarmsArray';
import { plantsSlug } from '../monster-arrays/PlantsArray';
import { constructSlug } from '../monster-arrays/ConstructArray';
import { fiendSlug, succubusSlug } from '../monster-arrays/FiendArray';

// A short tag to not repeat url source of images.
const monUrl = 'https://www.aidedd.org/dnd/images/'

//DragonArray used to live here, now is a separate component

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
    // if a humanoid
    if(humanoidSlugs.includes(monPicSelector)===true) {
        return (
        <main>
            <img src={humanoid} alt='monster' className='embeded-image'/>
        </main> 
        )
    }
    // if a commoner
    if(commonerSlug.includes(monPicSelector)===true) {
        return (
        <main>
            <img src={commoner} alt='monster' className='embeded-image'/>
        </main> 
        )
    }
    // if lycanthrope
    if(lycanthropeSlug.includes(monPicSelector)===true) {
        return (
        <main>
            <img src={lycanthrope} alt='monster' className='embeded-image'/>
        </main> 
        )
    }
    if(swarmsSlug.includes(monPicSelector)===true) {
        return (
        <main>
            <img src={swarm} alt='monster' className='embeded-image'/>
        </main> 
        )
    }
    if(plantsSlug.includes(monPicSelector)===true) {
        return (
        <main>
            <img src={plants} alt='monster' className='embeded-image'/>
        </main> 
        )
    }
    if(constructSlug.includes(monPicSelector)===true) {
        return (
        <main>
            <img src={construct} alt='monster' className='embeded-image'/>
        </main> 
        )
    }
    if(fiendSlug.includes(monPicSelector)===true) {
        return (
        <main>
            <img src={fiend} alt='monster' className='embeded-image'/>
        </main> 
        )
    }
    if(succubusSlug.includes(monPicSelector)===true) {
        return (
        <main>
            <img src={succubus} alt='monster' className='embeded-image'/>
        </main> 
        )
    }
// else when not a dragon images are the function below
    return (
        <main>
        {/* An image from image-source that on an error uses a default beast-image */}
            <img src={(monUrl + monPicSelector)} alt='monster' className='embeded-image' onError={({ currentTarget }) =>{
                // To stop it from looping, null
                currentTarget.onerror = null;
                // Target of image, becomes beast if no other source
                currentTarget.src=beast;
            }}/>
        </main>
    );
};

export default EmbededImage;