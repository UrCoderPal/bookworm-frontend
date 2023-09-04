import React from 'react';

import './Home.css';
import Header from '../Navbars/Header'


import { CarouselFadeExample } from './CarouselFadeExample';


function Home() {
    return (
<>
<Header/>
        <div className='container'>
            <CarouselFadeExample></CarouselFadeExample>
        </div>
        </>
    );
}

export default Home;