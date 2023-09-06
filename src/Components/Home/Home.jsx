import React from 'react';
import '../Home/Home.css';
import Home01 from '../../Images/hero-banner-1.jpg';
import Home02 from '../../Images/hero-banner-2.jpg';

const Home = () => {
return (
    <article id='Home' className='Home'>
        <section>
            <h1>We make top quality <span>handmade products</span></h1>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti dicta, nostrum numquam perferendis.
            </p>
            <button>View Collection <i class="fa-solid fa-arrow-right"></i></button>
        </section>
        <section> 
            <figure>
                <img src={Home01} alt="" className='Home01' />
            </figure>
            <figure>
                <img src={Home02}  alt="" className='Home02' />
            </figure>
        </section>
    </article>
)
}

export default Home