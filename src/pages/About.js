import React from 'react';
import BannerImage from '../assets/multiplePizzas.jpeg';
import '../styles/About.css';

function About() {
  return (
    <div className='about'>
        <div className='aboutTop' style={ {backgroundImage: `url(${BannerImage})`} }></div>
        <div className='aboutBottom'>
            <h1>ABOUT US</h1>
            <p>Lorem ipsum dolor sit amet. Et quisquam illo non voluptas praesentium ut labore
            ratione in aliquid blanditiis qui sequi aperiam et dolore repellendus. Et esse perspiciatis 
            sit autem iusto id veniam nulla. 
            Ea labore ipsa eos doloribus voluptas et quaerat nemo?
            Aut quid    em inventore in consequatur dolor aut velit tempora ut 
            tempora architecto et incidunt reprehenderit sit numquam repellat. Et laboriosam
            iste non iusto dolor et quisquam sapiente ex perspiciatis quae.

Et quibusdam enim rerum voluptas aut minima fugit. Et possimus omnis qui suscipit sequi non sapiente voluptates sed commodi nostrum et modi error! Non laboriosam architecto aut iure vero quo suscipit exercitationem in assumenda aliquid. Ut quasi soluta est quasi aspernatur et delectus dolor.</p>
        </div>
    </div>
  )
}

export default About