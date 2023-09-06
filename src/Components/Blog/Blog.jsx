import React from 'react';
import '../Blog/Blog.css';
import Blog1 from '../../Images/blog-1.jpg';
import Blog2 from '../../Images/blog-2.jpg';
import Blog3 from '../../Images/blog-3.jpg';
import Blog4 from '../../Images/blog-4.jpg';

const Blog = () => {
return (
    <article id='Blog' className='Blog'>
        <section>
            <h2>
                Blog & News 
            </h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At, iusto.
            </p>
        </section>
        <section>
            <div className='row'>
                <figure>
                    <img src={Blog1} alt="" />
                    <figcaption>
                        <h3>
                            The detail process of decorating the clay vase at pottery studio
                        </h3>
                        <div>
                            <p>
                                <i class="fa-solid fa-user"></i> admin
                            </p>
                            <p>
                                <i class="fa-regular fa-calendar"></i> October 12, 2022
                            </p>
                            <p>
                                <i class="fa-regular fa-folder-open"></i> Tips & Trick
                            </p>
                        </div>
                    </figcaption>
                </figure>
                <figure>
                    <img src={Blog2} alt="" />
                    <figcaption>
                        <h3>
                            Skills and techniques to make a genuine leather wallet
                        </h3>
                        <div>
                            <p>
                                <i class="fa-solid fa-user"></i> admin
                            </p>
                            <p>
                                <i class="fa-regular fa-calendar"></i> October 12, 2022
                            </p>
                            <p>
                                <i class="fa-regular fa-folder-open"></i> Tips & Trick
                            </p>
                        </div>
                    </figcaption>
                </figure>
            </div>
            <div className='row'>
            <figure>
                    <img src={Blog3} alt="" />
                    <figcaption>
                        <h3>
                            5 latest and trending handmade crafts for adults and kids
                        </h3>
                        <div>
                            <p>
                                <i class="fa-solid fa-user"></i> admin
                            </p>
                            <p>
                                <i class="fa-regular fa-calendar"></i> October 12, 2022
                            </p>
                            <p>
                                <i class="fa-regular fa-folder-open"></i> Tips & Trick
                            </p>
                        </div>
                    </figcaption>
                </figure>
                <figure>
                    <img src={Blog4} alt="" />
                    <figcaption>
                        <h3>
                            Homemade business that now makes hundreds of millions
                        </h3>
                        <div>
                            <p>
                                <i class="fa-solid fa-user"></i> admin
                            </p>
                            <p>
                                <i class="fa-regular fa-calendar"></i> October 12, 2022
                            </p>
                            <p>
                                <i class="fa-regular fa-folder-open"></i> Tips & Trick
                            </p>
                        </div>
                    </figcaption>
                </figure>
            </div>
            <button>Read More <i class="fa-solid fa-arrow-right"></i></button>
        </section>
    </article>
)
}

export default Blog