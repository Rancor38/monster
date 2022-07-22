import React from 'react';
import dragon from '../dragon.svg'

const monUrl = 'https://www.aidedd.org/dnd/images/'

const EmbededImage = ({monPicSelector}) => {
    return (
        <main>
        {/* An iage that on an error uses a default image */}
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