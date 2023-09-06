import React from 'react';
import { useState } from "react"
import '../Header/Header.css'

const Header = () => {

    const [ExtendNavbar,setExtendNavbar ] = useState(false)

return (
    <header> 
        <article>
            <section>
                <h3>Crafti</h3>
            </section>
            <section>
                <nav>
                    <ul id='Navigation' className={ExtendNavbar ? "CloseNavigation" : "OpenNavigation" } onClick={() => setExtendNavbar(false)}  >
                        <li>
                            <a href='#Home'>Home</a>
                        </li>
                        <li>
                            <a href='#About'>About</a>
                        </li>
                        <li>
                            <a href='#Blog'>Blog</a>
                        </li>
                        <li>
                            <a href='#Contact'>Contact Us</a>
                        </li>
                    </ul>
                </nav>
            </section>
            <section>
                <figure onClick={()=> {setExtendNavbar((curr) => !curr)}} >
                    {ExtendNavbar ? <i  id="Bars" class="fa-solid fa-bars"></i> : <i id='Bars' class="fa-solid fa-xmark"></i>}
                </figure>
            </section>
        </article>
    </header>
)
}

export default Header