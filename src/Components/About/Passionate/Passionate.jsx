import React from 'react';
import '../Passionate/Passionate.css';
import Feature from '../../../Images/feature-banner.jpg';
import Play from '../../../Images/play.svg'
import Feature1 from '../../../Images/feature-icon-1.svg';
import Feature2 from '../../../Images/feature-icon-2.svg';
import Feature3 from '../../../Images/feature-icon-3.svg';

const Passionate = () => {
return (
    <article className='Passionate'>
        <section>
            <figure>
                <img src={Feature} alt="" className='Feature' />
            </figure>
            <figure>
                <img src={Play} alt="" className='Play' />
            </figure>
        </section>
        <section className='Background'>
            <h2>Passionate About Elegance and Beauty Design</h2>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum obcaecati eius, cum eveniet minus cupiditate.
            </p>
            <div>
                <figure>
                    <img src={Feature1} alt="" className='Feature1' />
                    <figcaption>
                        <h4>100% Guarantee</h4>
                        <p>
                            Lorem ipsum dolor sit amet.
                        </p>
                    </figcaption>
                </figure>
                <figure>
                    <img src={Feature2} alt="" className='Feature1' />
                    <figcaption>
                        <h4>Professional Staffs</h4>
                        <p>
                            Lorem ipsum dolor sit amet.
                        </p>
                    </figcaption>
                </figure>
                <figure>
                    <img src={Feature3} alt="" className='Feature1' />
                    <figcaption>
                        <h4>Affordable Price</h4>
                        <p>
                            Lorem ipsum dolor sit amet.
                        </p>
                    </figcaption>
                </figure>
            </div>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum animi aperiam molestiae magni fugit cupiditate.
            </p>
        </section>
    </article>
)
}

export default Passionate