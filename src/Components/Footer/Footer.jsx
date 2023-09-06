import React from 'react';
import '../Footer/Footer.css'

const Footer = () => {
return (
    <div id='Contact' className='Background'> 
        <article className='Footer'>
            <section>
                <h3>Crafti</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores eaque minus explicabo quam facere sunt mollitia architecto sapiente ipsam iure.
                </p>
                <ul>
                    <li>
                        <i class="fa-brands fa-facebook"></i>
                    </li>
                    <li>
                        <i class="fa-brands fa-twitter"></i>
                    </li>
                    <li>
                        <i class="fa-brands fa-instagram"></i>
                    </li>
                    <li>
                        <i class="fa-brands fa-youtube"></i>
                    </li>
                </ul>
            </section>
            <section>
                <h4>Explore Us</h4>
                <ul>
                    <li>About Us</li>
                    <li>Collection</li>
                    <li>Features</li>
                    <li>Blog & News</li>
                </ul>
            </section> 
            <section>
                <h4>Support</h4>
                <ul>
                    <li>Account</li>
                    <li>Feedback</li>
                    <li>Support Center</li>
                    <li>Our Stores</li>
                </ul>
            </section>
            <section>
                <h4>Support</h4>
                <p>
                    Question or feedback? We'd love to hear from you
                </p>
                <button>Contact Us <i class="fa-solid fa-arrow-right"></i></button>
            </section>
        </article>
    </div>
)
}

export default Footer