import React from 'react';
import '../Quote/Quote.css';
import QuoteMarks from '../../../Images/quote.svg'

const Quote = () => {
return (
    <article className='Quote'>
        <div>
            <figure>
                <img src={QuoteMarks} alt="" className='Quotemark' />
            </figure>
            <h3>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus unde magni numquam similique, sit velit vitae porro quas eaque ipsum.
            </h3>
            <h5>
                Edward Fransisco
            </h5>
            <p>
                Crafti, Founder
            </p>
        </div>
    </article>
)
}

export default Quote