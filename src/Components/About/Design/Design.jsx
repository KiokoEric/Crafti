import React from 'react';
import '../Design/Design.css'
import About1 from '../../../Images/about-1.jpg';
import About2 from '../../../Images/about-2.jpg';
import About3 from '../../../Images/about-3.jpg';

const Design = () => {
return (
    <div id='About' className='Background'>
        <article className='Design'>
            <section>
                <div>
                    <figure>
                        <img src={About1} alt="" className='About1' />
                    </figure>
                    <h2 className='Craft'>
                        Making handicrafts since 1992
                    </h2>
                    <figure>
                        <img src={About2} alt="" className='About2' />
                    </figure>
                </div>
            </section>
            <section>
                    <div>
                        <h2>
                            Innovative Design is Our Passion
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto sit ipsum rem, libero eaque in laboriosam consequuntur? Suscipit, ipsa fugiat.
                        </p>
                        <button>Read More <i class="fa-solid fa-arrow-right"></i></button>
                    </div>
                <figure>
                    <img src={About3} alt="" className='About3' />
                </figure>
            </section>
        </article>
    </div>
)
}

export default Design