import React from 'react';
import '../Handicrafts/Handicrafts.css';
import Collection1 from '../../../Images/collection-1.jpg';
import Collection2 from '../../../Images/collection-2.jpg';
import Collection3 from '../../../Images/collection-3.jpg';

const Handicrafts = () => {
return (
    <article className='Collection'>
        <section>
            <h2>Unique Handicrafts Collection</h2>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio deserunt labore molestiae.
            </p>
        </section>
        <section>
            <figure>
                <img src={Collection1} alt="" className='Collection1' />
                <figcaption>
                    <h3>Pottery & Ceramics</h3>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, minima?
                    </p>
                    <button>View Gallery <i class="fa-solid fa-arrow-right"></i></button>
                </figcaption>
            </figure>
            <figure>
                <img src={Collection2} alt="" className='Collection2' />
                <figcaption>
                    <h3>Leather Craft</h3>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, minima?
                    </p>
                    <button>View Gallery <i class="fa-solid fa-arrow-right"></i></button>
                </figcaption>
            </figure>
            <figure>
                <img src={Collection3} alt=""className='Collection3'  />
                <figcaption>
                    <h3>Home Decoration</h3>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, minima?
                    </p>
                    <button>View Gallery <i class="fa-solid fa-arrow-right"></i></button>
                </figcaption>
            </figure>
        </section>
    </article>
)
}

export default Handicrafts