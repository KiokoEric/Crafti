import React from 'react';
import '../Gallery/Gallery.css';
import Gallery1 from '../../../Images/gallery-1.jpg';
import Gallery2 from '../../../Images/gallery-2.jpg'
import Gallery3 from '../../../Images/gallery-3.jpg'
import Gallery4 from '../../../Images/gallery-4.jpg'


const Gallery = () => {
return (
    <article className='Gallery'>
        <figure>
            <img src={Gallery1} alt="" />
            <figcaption>
                <h3 className='Top'>
                    Vases & Plant Pots
                </h3>
                <p className='Bottom'>
                    View Gallery <i class="fa-solid fa-arrow-right"></i> 
                </p>
            </figcaption>
        </figure>
        <figure>
            <img src={Gallery2} alt="" />
            <figcaption>
                <h3 className='Top'>
                    Clay Craft
                </h3>
                <p className='Bottom'>
                    View Gallery <i class="fa-solid fa-arrow-right"></i> 
                </p>
            </figcaption>
        </figure>
        <figure>
            <img src={Gallery3} alt="" />
            <figcaption>
                <h3 className='Top'>
                    Sculpturing
                </h3>
                <p className='Bottom'>
                    View Gallery <i class="fa-solid fa-arrow-right"></i> 
                </p>
            </figcaption>
        </figure>
        <figure>
            <img src={Gallery4} alt="" />
            <figcaption>
                <h3 className='Top'>
                    Accessories
                </h3>
                <p className='Bottom'>
                    View Gallery <i class="fa-solid fa-arrow-right"></i> 
                </p>
            </figcaption>
        </figure>
    </article>
)
}

export default Gallery